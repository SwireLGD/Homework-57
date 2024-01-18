import Appbar from "./Components/Appbar/Appbar";
import React from "react";
import UserForm from "./Components/UserForm/UserForm";
import Users from "./Components/Users/Users";

function App() : JSX.Element {
  return (
    <React.Fragment>
      <header>
        <Appbar />
      </header>
      <main className="container-fluid">
        <div className="mt-2 row">
          <div className="col-6">
            <UserForm />
          </div>
          <div className="col-6">
            <Users />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;