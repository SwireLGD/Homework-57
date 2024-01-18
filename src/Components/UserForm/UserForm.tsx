import React, { useState, ChangeEvent, FormEvent } from 'react'
import { User, UserMutation } from '../../types'

interface Props {
    onSubmit: (user: User) => void
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
    const [user, setUser] = useState<UserMutation>({
        name: '',
        email: '',
        active: false,
        role: '',
    })

    const changeUser = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ): void => {
        const value =
            e.target.type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : e.target.value

        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: value,
        }))
    }

    const OnFormSubmit = (e: FormEvent): void => {
        e.preventDefault()
        onSubmit({
            id: Math.random().toString(),
            ...user,
        })
    }

    return (
        <form onSubmit={OnFormSubmit}>
            <h2 className="mb-5">Add new user</h2>
            <div className="form-group w-50">
                <label htmlFor="name" className="fw-bold">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={changeUser}
                />
            </div>
            <div className="form-group w-50">
                <label htmlFor="email" className="fw-bold">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={user.email}
                    onChange={changeUser}
                />
            </div>
            <div className="form-group mt-3 ">
                <label htmlFor="active" className="fw-bold">
                    Activity
                </label>
                <input
                    type="checkbox"
                    name="active"
                    id="active"
                    className="form-check-input ms-3"
                    checked={user.active}
                    onChange={changeUser}
                />
            </div>
            <div className="form-group mt-3 fw-bold">
                <label htmlFor="role">Role</label>
                <select
                    name="role"
                    id="role"
                    className="ms-2"
                    value={user.role}
                    onChange={changeUser}
                >
                    <option value="user">user</option>
                    <option value="editor">editor</option>
                    <option value="admin">admin</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
                Add
            </button>
        </form>
    )
}

export default UserForm
