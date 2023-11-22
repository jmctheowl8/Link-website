import Table from './Table'
import Form from './Form'

import { useState } from 'react'

function LinkContainer() {
  const [favLinks, setFavelinks] = useState([]);

  const handleRemove = (index) => {
    // Create a new array using spread operator or slice to avoid mutating the state directly
    const newArray = [...favLinks];
    // Use splice to remove the item at the specified index
    newArray.splice(index, 1);
    // Update the state with the new array
    setFavelinks(newArray);
  };

  const handleSubmit = (favLink) => {
    // Create a new array using spread operator to avoid mutating the state directly
    setFavelinks([...favLinks, favLink]);
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
