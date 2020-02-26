import React from "react";

// import axios with auth
import { axiosWithAuth } from "../Utils/axiosWithAuth";

// import add friend and edit friend components
import AddFriend from "./AddFriend";
import EditFriend from "./EditFriend";

class Friends extends React.Component {
  state = {
    friends: [],
    name: "",
    age: "",
    email: "",
    id: "",
    edit: false,
    count: 1
  };

  componentDidMount() {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      axiosWithAuth()
        .get("/api/friends")
        .then(res => {
          console.log(res.data);
          this.setState({
            friends: res.data
          });
        })
        .catch(err => console.log(err));
    }
  }

  // update friends with counts
  updateFriends = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  // remove friend by id
  removeFriend = id => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then(this.updateFriends())
      .catch(err => console.log(err));
  };

  // edit friend with edit to true
  editFriend = (name, age, email, id) => {
    this.setState({ name: name });
    this.setState({ age: age });
    this.setState({ email: email });
    this.setState({ id: id });
    this.setState({ edit: true });
  };

  // cancel edit by change the state to false
  cancelEdit = () => {
    this.setState({ edit: false });
  };

  // render friends with features from above
  render() {
    return (
      <div>
        <h1 className="friend-title">My Friends</h1>

        <div className="friends">
          {this.state.friends.map(friend => (
            <div key={friend.id} className="friend">
              <div className="friend-info">
                <p className="info">
                  {friend.name} (age: {friend.age})
                </p>
                <button
                  onClick={() => this.removeFriend(friend.id)}
                  className="deleteButton"
                >
                  X
                </button>
              </div>

              <div className="friend-info">
                <p className="info">{friend.email}</p>

                <button
                  onClick={() =>
                    this.editFriend(
                      friend.name,
                      friend.age,
                      friend.email,
                      friend.id
                    )
                  }
                  className="edit-button"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {this.state.edit === true ? (
          <EditFriend
            name={this.state.name}
            age={this.state.age}
            email={this.state.email}
            id={this.state.id}
            update={this.updateFriends}
            cancelEdit={this.cancelEdit}
          />
        ) : (
          <AddFriend update={this.updateFriends} />
        )}
      </div>
    );
  }
}

export default Friends;
