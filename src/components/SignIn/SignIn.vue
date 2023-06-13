<script setup>
import SignInItems from "../SignIn/SignInItems.vue";
import SignInLogo from "../SignIn/SignInLogo.vue";
import { useCounterStore } from "../../stores/counter.js";
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <h2>Sign In</h2>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input
                id="inputUsername"
                v-model="loginUsername"
                type="text"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="inputPassword"
              />
            </div>
            <button type="button" @click="login" class="btn btn-primary">
              Login</button
            ><br />
            <a href="/signup">No account, register</a>
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
      loginUsername: "",
      password: "",
    };
  },
  methods: {
    login() {
      const store = useCounterStore();
      store.login(this.loginUsername, this.password);
      this.$router.push("/");
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
