import React from "react";

const UserItem: React.FC = () => {
    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card-body">
                        <h5 className="card-title">UserName</h5>
                        <p className="card-text small">UserEmail</p>
                        <p className="card-text small">ActiveOrNot</p>
                        <p className="card-text small">UserRole</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default UserItem;