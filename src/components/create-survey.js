import React, { useState } from "react";
import MultiSelect from "./multi-select";
import SingleSelect from "./single-select";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function CreateSurvey() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("Select Question Type");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{dropdownText}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() => setDropdownText("Multi Select Question")}
          >
            Multi Select Question
          </DropdownItem>
          <DropdownItem
            onClick={() => setDropdownText("Single Select Question")}
          >
            Single Select Question
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {dropdownText === "Multi Select Question" ? <MultiSelect /> : null}
      {dropdownText === "Single Select Question" ? <SingleSelect /> : null}
    </>
  );
}

export default CreateSurvey;
