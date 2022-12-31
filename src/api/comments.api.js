const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

export const getComments = async () => {
    try {
        const response = await fetch(COMMENTS_URL);
        const comments = await response.json();
        return comments;
    } catch (error) {
        console.log("error", error);
    }
};
