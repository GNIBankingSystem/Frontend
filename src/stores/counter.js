import { ref, computed } from "vue";
import axios from "../axios-auth";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    username: "",
    token: "",
    id: "",
    role: "",
  }),
  getters: {},
  actions: {
    increment() {
      this.count++;
    },
    login(username, password) {
      axios
        .post("login", {
          username: username,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          this.username = res.data.username;
          this.token = res.data.token;
          this.id = res.data.id;
          this.role = res.data.role;
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.token;

          localStorage.setItem("jwt", res.data.token);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("id", res.data.id);
        })
        .catch((error) => console.log(error));
    },
    autoLogin() {
      const token = localStorage.getItem("jwt");
      const username = localStorage.getItem("username");
      if (token && username) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        this.token = token;
        this.username = username;
      }
    },
  },
});
