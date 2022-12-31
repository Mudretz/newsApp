import React from "react";
import { useParams } from "react-router-dom";
import NewsPage from "./page/newsPage";
import PostsListPage from "./page/postsListPage";

const Main = () => {
    const params = useParams();
    const { postId } = params;
    return (
        <>
            {postId ? (
                <NewsPage id={postId}/>
            ) : (
                <PostsListPage />
            )}
        </>
    );
};

export default Main;
