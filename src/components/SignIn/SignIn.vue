<script setup>
import SignInItems from '../SignIn/SignInItems.vue'
import SignInLogo from '../SignIn/SignInLogo.vue'
import axios from '../../axios-auth.js';
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <h2>SignIn</h2>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input id="inputUsername" v-model="username" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="inputPassword" />
            </div>
            <button type='button' @click="login" class="btn btn-primary">Login</button><br>
            <a href="/forgotpassword">No account, register</a>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem('jwt', res.data.jwt);
          localStorage.setItem('username', res.data.username);

          console.log(res.data.jwt);

          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.jwt;

          this.$router.push('/');
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  height: 50%;
  width: 50%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
