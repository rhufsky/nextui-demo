"use client";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import React, { useState } from "react";

const TextareaDemoForm: React.FC = () => {
  const [input, setInput] = useState("Input");
  const [inputNextUI, setInputNextUI] = useState("Input NextUI");
  const [textArea, setTextarea] = useState("Textarea");
  const [textAreaNextUI, setTextareaNextUI] = useState("Textarea NextUI");

  const formAction = (formData: FormData) => {
    const enteredInput = formData.get("input") as string;
    const enteredInputNextUI = formData.get("inputNextUI") as string;
    const enteredTextarea = formData.get("textArea") as string;
    const enteredTextareaNextUI = formData.get("textAreaNextUI") as string;

    setInput(enteredInput);
    setInputNextUI(enteredInputNextUI);
    setTextarea(enteredTextarea);
    setTextareaNextUI(enteredTextareaNextUI);
  };

  return (
    <form className="border rounded-xl shadow p-4" action={formAction}>
      <h1 className="text-2xl font-bold mb-2">Text Area Demo Form</h1>
      <div className="flex flex-col gap-2">
        <input
          className="border p-2 text-sm"
          type="text"
          name="input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Input
          type="text"
          name="inputNextUI"
          value={inputNextUI}
          onChange={(event) => setInputNextUI(event.target.value)}
        />
        <textarea
          className="border p-2 text-sm"
          name="textArea"
          value={textArea}
          onChange={(event) => setTextarea(event.target.value)}
        />
        <Textarea
          name="textAreaNextUI"
          value={textAreaNextUI}
          onChange={(event) => setTextareaNextUI(event.target.value)}
        ></Textarea>
        <Button type="submit" className="w-20" color="primary">
          Submit
        </Button>
        <div className="text-sm border rounded-xl p-3">
          <div>Input:{input}</div>
          <div>InputNextUI:{inputNextUI}</div>
          <div> TextArea: {textArea}</div>
          <div>
            Textarea NextUI:
            {textAreaNextUI}
          </div>
        </div>
      </div>
    </form>
  );
};

export default TextareaDemoForm;
