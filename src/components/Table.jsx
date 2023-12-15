import { useState, useEffect } from 'react';
import axios from 'axios';

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

const Table = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get('/api/favlinks') // Assuming your GET route is defined in /api/favlinks in db.js
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  };

  const TableBody = (props) => {
  const rows = props.linkData.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>
        <a href={row.URL}>{row.URL}</a>
      </td>
      <td>
        <button onClick={() => props.removeLink(index)}>Delete</button>
      </td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
  };
  const handleRemove = (index) => {
    // Call the parent component's removeLink function with the index
    props.removeLink(index);
  };

  return (
    <table>
      <TableHeader />
      <TableBody linkData={props.data} removeLink={handleRemove} />
    </table>
  );
};
export default Table;
