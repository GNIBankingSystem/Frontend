import axios from "axios";
const instance = axios.create(
    {
        basURL: "http://localhost:8080/"
    }
);

export default instance;