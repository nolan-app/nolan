import React, { useState, FormEvent } from "react";
import { createGlobalStyle } from "styled-components";
import { Form, Input } from "antd";
import { FormComponentProps } from "antd/es/form";
import { isMobile } from "react-device-detect";

interface SearchFormProps extends FormComponentProps {
    showTitle: string;
}

const FormStyle = createGlobalStyle`
    .search {
        padding: 15px !important;
    }

    .ant-input {
        border: none !important;
        font-size: 20px !important;
    }
    
    .ant-input:focus {
        box-shadow: none !important;
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
                        style={{ textAlign: "right" }}
                        size="large"
                        placeholder={
                            !isMobile
                                ? "Search for movies and TV shows"
                                : "Search"
                        }
                    />
                </Form.Item>
            </Form>
        </>
    );
}

const SearchBar = Form.create({ name: "search_form" })(SearchBarForm);
export default SearchBar;
