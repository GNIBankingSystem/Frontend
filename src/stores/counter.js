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
      })
      .catch((error) => console.log(error));
      },
  },
})
