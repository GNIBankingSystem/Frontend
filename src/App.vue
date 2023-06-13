<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import Navbar from "./components/Navigation/NavigationBar.vue";
import { useCounterStore } from "./stores/counter.js";

const route = useRoute();
const showNavbar = computed(() => route.path !== "/login");
</script>

<script>
export default {
  components: {
    Navbar,
  },
  setup() {
    const counterStore = useCounterStore();
    return {
      counterStore,
    };
  },
};
</script>

<template>
  <div class="app">
    <!-- Sidebar -->
    <Navbar v-if="showNavbar" />

    <!-- Content -->
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --vt-c-puprle: #483763;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #f2f2f2;

  --vt-c-text-light-1: rgba(255, 255, 255, 0.66);

  --primary: #ffffff;
  --primary-alt: #ffffff;
  --grey: #ffffff;
  --dark: #3c2e59;
  --dark-alt: #2c294a;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    color: white;
    flex: 1 1 0;
    padding: 2rem;
    background-color: #483763;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>

<style lang="scss">
:root {
  --vt-c-puprle: #483763;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #f2f2f2;

  --vt-c-text-light-1: rgba(255, 255, 255, 0.66);

  --primary: #ffffff;
  --primary-alt: #ffffff;
  --grey: #ffffff;
  --dark: #3c2e59;
  --dark-alt: #2c294a;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    color: white;
    flex: 1 1 0;
    padding: 2rem;
    background-color: #483763;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
