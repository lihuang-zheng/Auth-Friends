import React, { useState } from "react";

// import axios with auth
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const EditFriend = props => {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [email, setEmail] = useState(props.email);
  const [id, setId] = useState(props.id);

  console.log(name, age, email, id);

  // handle name changes
  const handleName = e => {
    setName(e.target.value);
  };
  // handle age changes
  const handleAge = e => {
    setAge(Number(e.target.value));
  };
  // handle email changes
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .put("/api/friends/${id}", {
        name: name,
        age: age,
        email: email
      })
      .then(props.update(), props.cancelEdit())
      .catch(err => console.log(err));
  };

  return (
    <div className="edit-friend">
      <h3 className="edit-title">Edit Friend's Info</h3>

      <form onSubmit={handleSubmit} className="edit-container">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          className="edit-input"
        />

        <input
          type="text"
          name="age"
          value={age}
          onChange={handleAge}
          className="edit-input"
        />

        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmail}
          className="edit-input"
        />

        <button className="edit-button">Submit</button>
      </form>
    </div>
  );
};

export default EditFriend;
