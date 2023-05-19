<script setup>
import SignInItems from '../SignIn/SignInItems.vue'
import SignInLogo from '../SignIn/SignInLogo.vue'
</script>

<template>
  <header>
    <img alt="GNI logo" class="logo" src="../../assets/GNILogo.svg" />

    <div class="wrapper">
      <SignInLogo msg="GNI" />
    </div>
  </header>

  <div>
  <SignInItems>
    <h1>Sign in</h1>
  </SignInItems>

  <SignInItems>
    <template #heading>Email</template>
    <input type="email" />
  </SignInItems>

  <SignInItems>
    <template #heading>Password</template>
    <input type="password" />

  </SignInItems>

  <SignInItems>
    <router-link to="/" class="btn btn-primary" active-class="active">Login</router-link>
  </SignInItems>

  <SignInItems>
    <a href="/resetpassword">Forgot password?</a><br>
    No account <a href="/signup">Sign up</a>
  </SignInItems>
  </div>
</template>

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
