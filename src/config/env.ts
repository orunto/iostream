// Read environment varibales
// const env = process.env;
const env = {
    NEXT_PUBLIC_NOBOX_API_URL: "https://api.nobox.cloud",
    NEXT_PUBLIC_PROJECT: "iostream",
    NEXT_PUBLIC_NOBOX_AUTH_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NTBhZTZjZWMxNjk1MmMyOTU0NWZiZjYiLCJlbWFpbCI6InByZWNpb3Vzb2x1c29sYTE2QGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNTE1MjExODE_dj00IiwiZmlyc3ROYW1lIjoiUHJlY2lvdXMgT2x1c29sYSIsImxhc3ROYW1lIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTIwVDEyOjM0OjIyLjg3NloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA5LTIwVDEyOjM0OjIyLjg3NloifSwiaWF0IjoxNjk2NTM1NTU5LCJleHAiOjE2OTY2NjUxNTl9.OmFezJqa5Hk5SC995xfIs2X-Ov7QuxorbAQR9U5DjEs"
}

const apiUrl = env.NEXT_PUBLIC_NOBOX_API_URL || "https://api.nobox.cloud";
const project = env.NEXT_PUBLIC_PROJECT || "iostream"
const authToken = env.NEXT_PUBLIC_NOBOX_AUTH_TOKEN;

if (!authToken) console.log("Authentication Token is required in .env file");


export {
    apiUrl,
    project,
    authToken
}