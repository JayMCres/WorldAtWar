import React from "react";
import { Input } from "semantic-ui-react";

const Search = props => (
  <Input
    focus
    onChange={props.handleChange}
    type="text"
    value={props.inputValue}
    name="input"
    placeholder="Search..."
  />
);

export default Search;
