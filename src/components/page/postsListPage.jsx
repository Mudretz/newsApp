import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../common/pagination";
import { getPost } from "../../store/posts";
import { postsListRender } from "../../store/renderList";
import User from "../common/user";
import { paginate } from "../../utils/paginate";

const PostsListPage = () => {
    const posts = useSelector(getPost());
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const pageSize = 10;
    const count = posts.length;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const postsCrop = paginate(posts, currentPage, pageSize);
    const handleClick = () => {
        dispatch(postsListRender());
    };
    return (
        <div className="container">
            <div className="d-flex justify-content-between mb-2">
                <h1>Новости</h1>
                <button className="btn btn-primary" onClick={handleClick}>
                    Обновить новости
                </button>
            </div>
            {posts.length > 0 ? (
                <>
                    <div className="row gy-5">
                        {postsCrop.map((post) => (
                        <Link key={post.id} className="col-6 text-decoration-none text-reset" to={`/posts/${post.id}`}>
                            <div className="p-4 border bg-light">
                                <p>{post.title}</p>
                                <User userId={post.userId}/>
                            </div>
                        </Link>
                        ))}
                    </div>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                    <h1>...Loaging</h1>
                )}
        </div>
    );
};

export default PostsListPage;
