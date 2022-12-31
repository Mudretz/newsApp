import React from "react";
import { useSelector } from "react-redux";
import { getUserbyId } from "../../store/users";
import PropTypes from "prop-types";

const User = ({ userId }) => {
    const user = useSelector(getUserbyId(userId));
    return (
        <>
            {user ? <p className="text-end">Автор: {user.name}</p> : <p>Loading</p>}
        </>
    );
};

User.propTypes = {
    userId: PropTypes.number
};

export default User;
