import React from "react";
import PropTypes from "prop-types";

const Comment = ({ name, body, email }) => {
    return (
        <div className="bg-light card-body  mb-3">
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-start ">
                        <div className="flex-grow-1 flex-shrink-1">
                            <div className="mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-1 ">
                                        {email}
                                    </h6>
                                </div>
                                <h6 className="small mb-0">{name}</h6>
                                <p className="small mb-0">{body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Comment.propTypes = {
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string
};

export default Comment;
