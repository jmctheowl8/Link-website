import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [URL, setURL] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleURLChange = (event) => {
    setURL(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // <-- Fix the typo here
        console.log(name, URL);
        props.submitNewLink({ name, URL });
      }}
    >
      <label htmlFor="linkName">Link Name:</label>
      <input type="text" id="linkName" name="linkName" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="URL">Link URL:</label>
      <input type="text" id="linkURL" name="linkURL" onChange={handleURLChange} />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
