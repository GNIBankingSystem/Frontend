<script setup>
import BalanceCard from '../Dashboard/BalanceCard.vue'
import RecentTransaction from '../Dashboard/RecentTransactions.vue'
import Transaction from '../Dashboard/NewTransaction.vue'
</script>

<template>
	<main id="Home-page">
		<h1>Welcome {{ this.store.username }}</h1>
		<div class="col-lg-6 col-12">
			<BalanceCard></BalanceCard>
		</div>
		<div class="col-lg-6 col-12">
			<RecentTransaction></RecentTransaction>
		</div>
		<div class="col-lg-6 col-12">
			<Transaction></Transaction>
		</div>
	</main>
</template>

<script>
import { useCounterStore } from '@/stores/counter'
export default {
	name: 'Home',
	setup() {
		const store = useCounterStore()
		return { store }
	},
}
</script>

<style lang="scss" scoped>
@media (min-width: 1264px) {
	.col-12 {
		-webkit-box-flex: 0;
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}

	.col-lg-6 {
		padding: 12px;
	}
}
</style>