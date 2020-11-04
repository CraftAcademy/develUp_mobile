import { registerRootComponent } from "expo";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://my-json-server.typicode.com/craftacademy/fake_api/";
console.log(process.env.NODE_ENV)
registerRootComponent(App);
