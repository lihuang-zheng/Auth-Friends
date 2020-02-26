import React, { useState } from "react";

// import axios with auth
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const AddFriend = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

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

  // handle submit to add friend
  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/friends/", {
        name: name,
        age: age,
        email: email
      })
      .then(props.update())
      .catch(err => console.log(err));

    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <div className="add-friend">
      <h3 className="title">Add Friend</h3>

      <form onSubmit={handleSubmit} className="add-container">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          placeholder="Name"
          className="add-input"
        />
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleAge}
          placeholder="Age"
          className="add-input"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="Email"
          className="add-input"
        />
        <button className="add-button">Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;
