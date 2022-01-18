import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router";
import storage from "../firebaseconfig";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import CircularProgress from "@mui/material/CircularProgress";
import {
  addMovie,
  updateMovie,
  addUser,
  updateUser,
  addList,
  updateList,
} from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100%;
`;
const FormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  > div {
    margin: 30px;
  }
`;

const Label = styled.div`
  font-size: 17px;
`;
const TextInput = (props) => (
  <div>
    <Label>{props.text}</Label>
    <input
      onChange={props.onChange}
      type={props.type}
      name={props.name}
      placeholder={props.text}
      value={props.value}
    />
  </div>
);

const SelectInput = (props) => (
  <div>
    <Label>{props.text}</Label>
    <select
      onChange={props.onChange}
      name={props.name}
      value={typeof props.value === "undefined" ? "" : props.value}
    >
      <option value="" disabled>
        {"Choice"}
      </option>
      {props.options.map((option, i) => {
        return (
          <option key={i} value={option.value}>
            {option.title}
          </option>
        );
      })}
    </select>
  </div>
);

const MultipleSelectInput = (props) => (
  <div>
    <Label>{props.text}</Label>
    <select
      multiple
      name={props.name}
      onChange={props.onChange}
      style={{ height: "280px" }}
    >
      {props.options.map((option, i) => (
        <option key={i} value={option._id}>
          {option.title}
        </option>
      ))}
    </select>
  </div>
);

const ImageInput = (props) => (
  <div>
    <Label>{props.text}</Label>
    <div>
      {typeof props.value !== "undefined" && <a href={props.value}>see File</a>}
    </div>
    <input
      onChange={props.onChange}
      type="file"
      accept="image/png, image/gif, image/jpeg"
      name={props.name}
    />
  </div>
);

const VideoInput = (props) => (
  <div>
    <Label>{props.text}</Label>
    <div>
      {typeof props.value !== "undefined" && <a href={props.value}>see File</a>}
    </div>
    <input
      onChange={props.onChange}
      type="file"
      accept="video/mp4,video/x-m4v,video/mkv*,video/*"
      name={props.name}
    />
  </div>
);

const ButtonContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

function Form() {
  const location = useLocation();
  const { formInput, formType, historyData, tableDataName } = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputFileNumber = formInput.filter(
    (e) => e.type === "Image" || e.type === "Video"
  ).length;
  const [files, setFiles] = useState([]);
  const [fileUploadCompleted, setFileUploadCompleted] = useState(0);
  const [loading, setLoading] = useState(false);

  const historyDataInArray = Object.keys(historyData);

  const initialFormData = {};
  historyDataInArray.forEach((e) => {
    e !== "id" &&
      (initialFormData[e] =
        historyDataInArray.length === 0 ? "" : historyData[e]);
  });

  const [formData, setFormData] = useState(initialFormData);

  const deleteFileFirebase = (desertRef) => {
    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        console.log("file deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const upload = () => {
    if (
      files.length !== inputFileNumber &&
      formData.length !== formInput.length
    ) {
      alert("fill all inputs");
    } else {
      setFileUploadCompleted(0);
      files.forEach((file) => {
        const ext = file.fileData.name.split(".").at(-1);
        const filename = `${file.label}_${Date.now()}`;
        const storageRef = ref(storage, `${filename}.${ext}`);
        if (formType === "update") {
          const desertRef = ref(storage, `${formData[`${file.label}`]}`);
          deleteFileFirebase(desertRef);
        }
        const uploadTask = uploadBytesResumable(storageRef, file.fileData);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + Math.round(progress) + "% done");
            setLoading(true);
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setLoading(false);
              setFileUploadCompleted((prev) => prev + 1);
              const newFormData = formData;
              newFormData[`${file.label}`] = downloadURL;
              setFormData({ ...formData, ...newFormData });
              console.log("File available at", downloadURL);
            });
          }
        );
      });
    }
  };

  const onSubmit = async () => {
    switch (tableDataName) {
      case "movies":
        formType === "create"
          ? addMovie(formData, dispatch)
          : updateMovie(historyData._id, formData, dispatch);
        break;

      case "users":
        formType === "create"
          ? addUser(formData, dispatch)
          : updateUser(historyData._id, formData, dispatch);
        break;

      case "lists":
        formType === "create"
          ? addList(formData, dispatch)
          : updateList(historyData._id, formData, dispatch);
        break;

      default:
        return;
    }
    window.location.replace(`/${tableDataName}`);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeMultiple = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onFileChange = (e) => {
    const file = e.target.files;
    if (FileReader && file && file.length) {
      const previewURL = URL.createObjectURL(file[0]);
      if (files.some((el) => el.label === e.target.name)) {
        let item = files.find((el) => el.label === e.target.name);
        item.fileData = file[0];
      } else {
        setFiles([
          ...files,
          {
            label: e.target.name,
            url: previewURL,
            fileData: file[0],
          },
        ]);
      }
    }
  };

  const RenderForm = (f, i) => {
    console.log("Asdad");
    console.log(formData[f.name]);
    if (f.type === "select") {
      return (
        <div key={i}>
          <SelectInput
            onChange={(e) => {
              onChange(e);
            }}
            text={f.text}
            name={f.name}
            options={f.options}
            value={formData[f.name]}
          />
        </div>
      );
    } else if (f.type === "MultipleSelect") {
      return (
        <div key={i}>
          <MultipleSelectInput
            onChange={(e) => {
              onChangeMultiple(e);
            }}
            text={f.text}
            name={f.name}
            options={f.options}
            value={formData[f.name]}
          />
        </div>
      );
    } else if (f.type === "Image") {
      return (
        <div key={i}>
          <ImageInput
            onChange={(e) => {
              onFileChange(e);
            }}
            text={f.text}
            name={f.name}
            value={formData[f.name]}
          />
        </div>
      );
    } else if (f.type === "Video") {
      return (
        <div key={i}>
          <VideoInput
            onChange={(e) => {
              onFileChange(e);
            }}
            text={f.text}
            name={f.name}
            value={formData[f.name]}
          />
        </div>
      );
    } else {
      return (
        <div key={i}>
          <TextInput
            onChange={(e) => {
              onChange(e);
            }}
            text={f.text}
            type={f.type}
            name={f.name}
            value={formData[f.name]}
          />
        </div>
      );
    }
  };

  useEffect(() => {
    // if (historyData) {
    //   setFormData(historyData);
    // }
    // fileUploadCompleted === 5 && onSubmit();
  }, []);

  return (
    <Container>
      <FormContainer>{formInput.map((f, i) => RenderForm(f, i))}</FormContainer>
      <ButtonContainer>
        <Button
          onClick={() => navigate(-1)}
          setting={{
            width: "100px",
            padding: "10px",
            fontSize: "17px",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            fileUploadCompleted === inputFileNumber ? onSubmit() : upload();
          }}
          setting={{
            width: "100px",
            padding: "10px",
            fontSize: "17px",
          }}
        >
          {fileUploadCompleted === inputFileNumber ? "Submit" : "Upload"}
        </Button>
      </ButtonContainer>
      {loading && (
        <>
          <h1>Please wait Uploading Data . . .</h1>
          <CircularProgress />
        </>
      )}
    </Container>
  );
}

export default Form;
