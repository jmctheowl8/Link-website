import { useState } from "react";
import axios from 'axios';
//error due to not useing prop types
function Form({ selectedFavlink, onSubmit }) {
  const [name, setName] = useState(selectedFavlink ? selectedFavlink.name : '');
  const [URL, setURL] = useState(selectedFavlink ? selectedFavlink.url : '');


  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleURLChange = (event) => {
    setURL(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newFavlink = { name, url: URL };

    if (selectedFavlink) {
      // If selectedFavlink exists, it's an update (PUT) operation
      axios
        .put(`/api/favlinks/${selectedFavlink.id}`, newFavlink)
        .then((response) => {
          console.log('Favlink updated:', response.data);
          // Optionally, clear the input fields or perform other actions
          setName('');
          setURL('');
          // Trigger a callback to notify the parent component about the update
          onSubmit();
        })
        .catch((error) => {
          console.error('Error updating favlink:', error.message);
        });
    } else {
      // If selectedFavlink does not exist, it's a create (POST) operation
      axios
        .post('/api/favlinks', newFavlink)
        .then((response) => {
          console.log('Favlink created:', response.data);
          // Optionally, clear the input fields or perform other actions
          setName('');
          setURL('');
          // Trigger a callback to notify the parent component about the creation
          onSubmit();
        })
        .catch((error) => {
          console.error('Error creating favlink:', error.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
