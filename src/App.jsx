function App() {

  const cities =["Taytay", "Taguig", "Angono", "Manila"];
  const newCities = cities.filter((city) => city !== "Manila");

  const person = [
    {
      id:0,
      name: "Mark",
      age: 24,
    },
    {
      id:1,
      name: "Daves",
      age: 23,
    },
    {
      id:2,
      name: "Glens",
      age: 22,
    },
    {
      id:3,
      name: "Jays",
      age: 21,
    },
  ];


  return (
    <div>

      <h1>City List</h1>
      <ul className="list-group">
        {newCities.map((city, index) => (
          <li className="list-group-item" key={index}>
            {city}
            </li>
        ))}
      </ul>
      
      <hr />

      <h1>Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {person.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}
export default App;
