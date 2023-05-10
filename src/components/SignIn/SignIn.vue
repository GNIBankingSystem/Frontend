<script setup>
import SignInItems from './SignInItems.vue'
</script>

<template>
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
    <router-link to="/" class="btn btn-primary" active-class="active">Teacher Login</router-link>
  </SignInItems>

  <SignInItems>
    <a href="/">Forgot password?</a><br>
    No account <a href="/">Sign up</a>
  </SignInItems>
</template>
