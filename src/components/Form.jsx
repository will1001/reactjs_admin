import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { changeMenu } from "../redux/ThemeRedux";
import Topbar from "./Topbar";

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
    <select onChange={props.onChange} name={props.name} value={props.value}>
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

const ImageInput = (props) => (
  <div>
    <Label>{props.text}</Label>
    <input
      onChange={props.onChange}
      type="file"
      accept="image/png, image/gif, image/jpeg"
      name={props.name}
      value={props.value}
    />
  </div>
);

const VideoInput = (props) => (
  <div>
    <Label>{props.text}</Label>
    <input
      onChange={props.onChange}
      type="file"
      accept="video/mp4,video/x-m4v,video/*"
      name={props.name}
      value={props.value}
    />
  </div>
);

const ButtonContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

function Form() {
  const dispatch = useDispatch();
  const { data, form } = useSelector((state) => state.form);
  const [file, setFile] = useState([]);

  const initialFormData = {};
  Object.keys(data).forEach((e) => {
    e === "id" ? (initialFormData[e] = data[e]) : (initialFormData[e] = "");
  });

  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = () => {
    console.log(formData);
    console.log(file);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    let files = e.target.files;

    if (FileReader && files && files.length) {
      const previewURL = URL.createObjectURL(files[0]);
      setFile([
        ...file,
        {
          name: e.target.name,
          url: previewURL,
          fileData: files[0],
        },
      ]);
    }
  };

  const RenderForm = (f, i) => {
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
    } else if (f.type === "Image") {
      return (
        <div key={i}>
          <ImageInput
            onChange={(e) => {
              onFileChange(e);
            }}
            text={f.text}
            name={f.name}
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
    if (data) {
      setFormData(data);
    }
  }, [data]);

  return (
    <Container>
      <Topbar />
      <FormContainer>{form.map((f, i) => RenderForm(f, i))}</FormContainer>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(changeMenu("dashboard"))}
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
            onSubmit();
          }}
          setting={{
            width: "100px",
            padding: "10px",
            fontSize: "17px",
          }}
        >
          Submit
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Form;
