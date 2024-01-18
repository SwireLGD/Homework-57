import React from "react";
import "./UserItem";
import UserItem from "./UserItem";

const Users: React.FC = () => {
    return (
        <>
            <h2 className="mb-5">Users</h2>
            <UserItem />
            <UserItem />
            <UserItem />
        </>
    );
;}

export default Users;