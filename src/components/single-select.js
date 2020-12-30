import { useState } from "react";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

function SingleSelect() {
  const [options, setOptions] = useState(["", ""]);
  const [question, setQuestion] = useState("");

  const setOptionInArray = (value, optionIdx) => {
    options[optionIdx] = value;
    setOptions([...options]);
  };

  const isQuestionAddPublishDisabled = () =>
    question.trim() === "" ||
    options.find((opt) => opt.trim() === "") !== undefined;

  return (
    <div className="question-container">
      <InputGroup className="input-grp">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Your Question"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
        />
      </InputGroup>
      <p className="options-text">Options</p>
      <InputGroup className="input-grp">
        <Input
          placeholder="Option 1"
          value={options[0]}
          onChange={(e) => setOptionInArray(e.target.value, 0)}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="input-grp">
        <Input
          placeholder="Option 2"
          value={options[1]}
          onChange={(e) => setOptionInArray(e.target.value, 1)}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <div className="question-buttons">
        <Button
          className="survey-main-btn"
          disabled={isQuestionAddPublishDisabled()}
        >
          Add Question
        </Button>
        <Button
          className="survey-main-btn"
          disabled={isQuestionAddPublishDisabled()}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}

export default SingleSelect;
