import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsList } from "../../store/posts";
import { loadUsersList } from "../../store/users";
import { loadCommentsList } from "../../store/comments";
import { getStatusCommentsRender, getStatusPostsRender } from "../../store/renderList";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const commentsStatusRender = useSelector(getStatusCommentsRender());
    const postsStatusRender = useSelector(getStatusPostsRender());

    useEffect(() => {
        dispatch(loadUsersList());
    }, []);

    useEffect(() => {
        dispatch(loadCommentsList());
    }, [commentsStatusRender]);

    useEffect(() => {
        dispatch(loadPostsList());
    }, [postsStatusRender]);

    setInterval(() => {
        dispatch(loadPostsList());
    }, 60000);
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default AppLoader;
