import React from 'react';
import {MyButtonComponent, CardTest} from './components/MyButtonComponent';

function App() {

  const cities =["Taytay", "Taguig", "Angono", "Manila"];
  const newCities = cities.filter((city) => city !== "Manila");

  const person = [
    // {
    //   id:0,
    //   name: "Mark",
    //   age: 24,
    // },
    // {
    //   id:1,
    //   name: "Daves",
    //   age: 23,
    // },
    // {
    //   id:2,
    //   name: "Glenski",
    //   age: 22,
    // },
    // {
    //   id:3,
    //   name: "Jays",
    //   age: 21,
    // },
  ];



  return (
    <div>

      <h1>City List</h1>
      <br />
      <ul className="list-group">
        {newCities.map((city, index) => (
          <li className="list-group-item" key={index}>
            {city}
            </li>
        ))}
      </ul>
      <br />
      <br />
      <hr />

      <h1>Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Stats</th>
          </tr>
        </thead>
        <tbody>
          {person.length !== 0 ?
          (person.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.age > 22 ? "old" : "young"}</td>
            </tr>
          )))
          :
          (<tr>
             <td colSpan="4">No data available</td>
          </tr>)}
          

        </tbody>
      </table>

      <br />
      <MyButtonComponent />
      <br />

      <CardTest />
      <br />
    </div>
  )
}
export default App;
