import React from "react";

const UserForm: React.FC = () => {
    return (
        <form>
            <h2 className="mb-5">Add new user</h2>
            <div className="form-group w-50">
                <label htmlFor="name" className="fw-bold">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                />
            </div>
            <div className="form-group w-50">
                <label htmlFor="email" className="fw-bold">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                />
            </div>
            <div className="form-group mt-3 ">
                <label htmlFor="active" className="fw-bold">Active</label>
                <input
                    type="checkbox"
                    name="active"
                    id="active"
                    className="form-check-input ms-3"
                />
            </div>
            <div className="form-group mt-3 fw-bold">
                <label htmlFor="role">Role</label>
                <select name="role" id="role" className="ms-2">
                    <option value="user">user</option>
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Add</button>
        </form>
    );
};

export default UserForm;