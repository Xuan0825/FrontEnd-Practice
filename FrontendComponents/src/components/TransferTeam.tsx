import { useState } from "react";

const items = [
  { id: 1, name: "Tom", team: null },
  { id: 2, name: "Jack", team: null },
  { id: 3, name: "Mick", team: null },
  { id: 4, name: "Alice", team: null },
  { id: 5, name: "Joe", team: null },
];

export default function TransferTeam() {
  const [data, setData] = useState(items);
  const [teamSelected, setTeamSelected] = useState("");
  const handleSelectPlayer = (id) => {
    if (teamSelected !== "") {
      const newItems = data.map((item) => {
        if (item.id === id) {
          const newItem = { ...item };
          newItem.team = teamSelected;
          return newItem;
        } else {
          return item;
        }
      });
      setData(newItems);
    }
  };
  const handleReset = () => {
    setData(items);
  };
  return (
    <div>
      <div>
        <h3>Select the following player to the team</h3>

        {data.map((item) => {
          const { id, name, team } = item;
          if (team === null) {
            return (
              <div key={id} onClick={() => handleSelectPlayer(id)}>
                <p>{name}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div>
        <span>Select : </span>
        <select onChange={(e) => setTeamSelected(e.target.value)}>
          <option defaultValue={""} hidden>
            Select teams
          </option>
          <option value={"Team 1"}>Select Team 1</option>
          <option value={"Team 2"}>Select Team 2</option>
        </select>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <h1>Teams</h1>
        <div>
          <h4>Team 1</h4>
          {data
            .filter((item) => item.team === "Team 1")
            .map((item) => {
              const { id, name } = item;
              return (
                <div key={id}>
                  <p>{name}</p>
                </div>
              );
            })}
        </div>
        <div>
          <h4>Team 2</h4>
          {data
            .filter((item) => item.team === "Team 2")
            .map((item) => {
              const { id, name } = item;
              return (
                <div key={id}>
                  <p>{name}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
