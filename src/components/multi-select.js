import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { useState } from "react";

function MultiSelect() {
  const [options, setOptions] = useState([""]);
  const addOption = () => {
    if (options.length < 4) {
      setOptions([...options, ""]);
    }
  };
  const removeOption = (optionIdx) => {
    if (options.length > 1) {
      options.splice(optionIdx, 1);
      setOptions([...options]);
    }
  };
  return (
    <div className="question-container">
      <InputGroup className="input-grp">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Your Question" />
      </InputGroup>
      <p className="options-text">Options</p>
      {options.map((option, optionIdx) => (
        <InputGroup className="input-grp">
          <Input placeholder={`Option ${optionIdx + 1}`} value={option} />
          <InputGroupAddon addonType="append">
            <Button onClick={addOption} disabled={options.length === 4}>
              +
            </Button>
            <Button
              onClick={() => removeOption(optionIdx)}
              disabled={options.length === 1}
            >
              -
            </Button>
          </InputGroupAddon>
        </InputGroup>
      ))}

      {options.length === 4 ? (
        <div className="question-buttons">
          <Button className="survey-main-btn">Add Question</Button>
          <Button className="survey-main-btn">Publish</Button>
        </div>
      ) : null}
    </div>
  );
}

export default MultiSelect;
