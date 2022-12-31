import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getCommentListById } from "../../store/comments";
import Comment from "./comment";
import { commentsListRender } from "../../store/renderList";

const Comments = ({ postId }) => {
    const dispatch = useDispatch();
    const commentsListById = useSelector(getCommentListById(postId));
    const handleClick = () => {
        dispatch(commentsListRender());
    };
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                    <h4>Комментарии</h4>
                    <button className="btn btn-primary" onClick={handleClick}>
                            Обновить комментарии
                    </button>
                </div>
                {commentsListById.map((comment) => (
                    <Comment key={comment.id} {...comment} />
                ))}
            </div>
        </div>
    );
};

Comments.propTypes = {
    postId: PropTypes.number
};

export default Comments;
