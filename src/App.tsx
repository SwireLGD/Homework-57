import Appbar from "./Components/Appbar/Appbar";
import React, { useState } from "react";
import UserForm from "./Components/UserForm/UserForm";
import Users from "./Components/Users/Users";
import { User } from "./types";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User): void => {
    setUsers(prevState => [...prevState, user]);
  };

  return (
    <React.Fragment>
      <header>
        <Appbar />
      </header>
      <main className="container-fluid">
        <div className="mt-2 row">
          <div className="col-6">
            <UserForm onSubmit={addUser} />
          </div>
          <div className="col-6">
            <Users users={users} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;