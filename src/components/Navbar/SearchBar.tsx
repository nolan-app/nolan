import React, { useState, FormEvent } from "react";
import { createGlobalStyle } from "styled-components";
import { Form, Input } from "antd";
import { FormComponentProps } from "antd/es/form";

interface SearchFormProps extends FormComponentProps {
  searchValue: string;
}

const FormStyle = createGlobalStyle`
  .search {
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  .ant-input {
    border: none;
    font-size: 20px;
    border-radius: 5px;
    background-color: rgba(196, 196, 196, 0.12);
  }
    
  .ant-input:focus {
    box-shadow: none;
  }

  .search-form-item{
    margin-top: -10px;
  }
    
`;

function SearchBarForm(props: SearchFormProps) {
  const [input, setInput] = useState("");

  function handleInput(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setInput(value);
    console.log(input);
  }

  return (
    <>
      <FormStyle />
      <Form className="search">
        <Form.Item className="search-form-item">
          <Input
            onChange={event => handleInput(event)}
            style={{ textAlign: "center" }}
            size="large"
            placeholder={"Search for movies and TV shows"}
          />
        </Form.Item>
      </Form>
    </>
  );
}

const SearchBar = Form.create({ name: "search_form" })(SearchBarForm);
export default SearchBar;
