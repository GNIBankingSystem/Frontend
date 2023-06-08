import { ref, computed } from 'vue'
import axios from '../axios-auth'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    username: '',
    token: '',
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
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
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;

          localStorage.setItem('jwt', res.data.token);
          localStorage.setItem('username', res.data.username);
        })
        .catch((error) => console.log(error));
    },
    autoLogin() {
      const token = localStorage.getItem('jwt');
      const username = localStorage.getItem('username');
      if (token && username) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + token;
        this.token = token;
        this.username = username;
        console.log(token, username)
      }
    },
  },
})
