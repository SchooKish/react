import { TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { BASE } from "../base";

export default function Input({ onAddMessage }) {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddMessage(value, BASE.ME);

      setValue("");
    },
    [onAddMessage, value]
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        autoFocus
        className="input"
        value={value}
        onChange={handleChange}
      />
      <input className="button" type="submit" />
    </form>
  );
}
