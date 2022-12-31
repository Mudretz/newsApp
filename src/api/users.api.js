const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
    try {
        const response = await fetch(USERS_URL);
        const users = await response.json();
        return users;
    } catch (error) {
        console.log("error", error);
    }
};
