import { useState } from 'react';
import Table from './Table'
import Form from './Form'
import axios from 'axios';
//test
function LinkContainer() {
  const [favLinks,  setFavLinks] = useState([]);

  const handleRemove = (id) => {
    // Remove link locally
    const updatedFavLinks = favLinks.filter((link) => link.id !== id);
    setFavLinks(updatedFavLinks);

    // Remove link on the server
    axios
      .delete(`/api/favlinks/${id}`) // Assuming your DELETE route is defined in /api/favlinks/:id in db.js
      .then(() => {
        console.log('Favlink deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting favlink:', error.message);
        // If the delete request fails, you might want to revert the local state change
        // or handle it in a way that makes sense for your application
      });
  };

  const handleSubmit = (favLink) => {
    // Create a new array using spread operator to avoid mutating the state directly
    setFavLinks([...favLinks, favLink]);
  };

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table! </p>
      <Table data={favLinks} removeLink={handleRemove} />
      <h1>Add New</h1>
      <Form submitNewLink={handleSubmit} />
    </div>
  );
}

export default LinkContainer;
