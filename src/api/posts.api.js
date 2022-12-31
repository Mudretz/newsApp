const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
    try {
        const response = await fetch(POSTS_URL);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log("error", error);
    }
};
