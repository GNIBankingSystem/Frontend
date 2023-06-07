import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from '../axios-auth'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    username: '',
    token: ''
  }),
  getters: {
    loggedIn: (state) => state.username !== '',
    getToken: (state) => state.token,
    getUsername: (state) => state.username,
  },
  setters: {
    setUsername: (state, username) => (state.username = username),
    setToken: (state, token) => (state.token = token),
  },
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        axios
          .post('login', {
            username: username,
            password: password,
          })
          .then((res) => {
            console.log(res.data);
            this.username = res.data.username;
            this.token = res.data.token;
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
