<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <h1>Sign in</h1>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Email</template>
    <input type="email" />
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Password</template>
    <input type="password" />

  </WelcomeItem>

  <WelcomeItem>
    <button class="btn btn-primary">Sign in</button>
  </WelcomeItem>

  <WelcomeItem>
    <a href="/">Forgot password?</a><br>
    No account <a href="/">Sign up</a>
  </WelcomeItem>
</template>
