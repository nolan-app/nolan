import React, { useState, FormEvent } from "react";
import { createGlobalStyle } from "styled-components";
import { Form, Input } from "antd";
import { FormComponentProps } from "antd/es/form";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useAsyncAbortable } from "react-async-hook";
import useConstant from "use-constant";
import { Colors } from "../../styles";

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

  .is-validating.has-feedback .ant-form-item-children-icon {
    color: ${Colors.primary};
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

  function fetchAPI() {
    console.log("done typing");
  }

  const debouncedFetch: any = useConstant(() =>
    AwesomeDebouncePromise(fetchAPI, 700)
  );

  const search = useAsyncAbortable(
    async (abortSignal, text) => {
      if (text.length === 0) {
        return [];
      } else {
        return debouncedFetch(text, abortSignal);
      }
    },
    [input]
  );

  async function handleInput(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setInput(value);
  }

  return (
    <>
      <FormStyle />
      <Form className="search" onSubmit={e => e.preventDefault()}>
        <Form.Item
          hasFeedback={search.loading}
          className="search-form-item"
          validateStatus="validating"
        >
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
