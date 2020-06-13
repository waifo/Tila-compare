import React from "react";
import styled from "styled-components";

import { Colors } from "./Colors";

const DropdownCoantainer = styled.div`
  align-self: center;
  padding: 5px 10px;
`;

const Select = styled.select`
  padding: 5px 10px;
  max-width: 250px;
  border: none;
  border-bottom: 2px solid ${Colors.GREY};
  opacity: 0.6;
  &:focus {
    border: none;
    border-bottom: 2px solid ${Colors.GREY};
    outline: none;
  }
`;

const Option = styled.option`
  padding: 5px;
  border: none;
`;

export const Dropdown = ({ children, options, selectProduct }) => {
  return (
    <DropdownCoantainer>
      {children}
      <Select onChange={selectProduct}>
        {Object.keys(options).map((key, ind) => (
          <Option data-id={key} key={ind}>
            {options[key].title}
          </Option>
        ))}
      </Select>
    </DropdownCoantainer>
  );
};
