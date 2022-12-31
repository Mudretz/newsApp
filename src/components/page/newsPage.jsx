import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getPostById } from "../../store/posts";
import { useHistory } from "react-router-dom";
import User from "../common/user";
import Comments from "../common/comments";

const NewsPage = ({ id }) => {
    const postId = Number(id);
    const history = useHistory();
    const post = useSelector(getPostById(postId));
    const handleClick = () => {
        history.push("/");
    };
    return (
        <div className="container mt-5">
            {post ? (
                <>
                    <button className="btn btn-primary" onClick={handleClick}>
                        Назад
                    </button>
                    <div className="row">
                        <div className="col-md-6 offset-md-3 shadow p-4">
                            <h1>Страница новости</h1>
                            <hr />
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                            <User userId={post.userId}/>
                            <hr />
                            <Comments postId={post.id}/>
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={handleClick}
                                type="button"
                            >
                                Назад
                            </button>
                        </div>
                    </div>
                    </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

NewsPage.propTypes = {
    id: PropTypes.string
};

export default NewsPage;
