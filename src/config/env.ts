// Read environment varibales

const env = process.env;

const apiUrl = env.NOBOX_API_URL || "https://api.nobox.cloud";
const project = env.PROJECT || "iostream"
const authToken = env.NOBOX_AUTH_TOKEN;

if (!authToken) console.log("Authentication Token is required in .env file");


export {
    apiUrl,
    project,
    authToken
}