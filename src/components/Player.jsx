import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editButtonHandler() {
    setIsEditing((prevState) => !prevState);

    if (isEditing) {
      onChangeName(symbol, name);
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        placeholder="Enter Name"
        required
        value={name}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editButtonHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
