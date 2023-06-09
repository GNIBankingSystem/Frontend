<script setup>
import Navbar from './components/Navigation/NavigationBar.vue'
import { useCounterStore } from './stores/counter.js'
</script>

<script>
export default {
	components: {
		Navbar
	},
	setup() {
		const counterStore = useCounterStore()
		return {
			counterStore
		}
	},
	mounted() {
		this.$router.push('/login');
	}
	
}
</script>

<template>
	<div class="app">
		<!-- Sidebar -->
		<Navbar />

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

	--primary: #FFFFFF;
	--primary-alt: #FFFFFF;
	--grey: #FFFFFF;
	--dark: #3C2E59;
	--dark-alt: #2C294A;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
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
