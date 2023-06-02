<script setup>
import BalanceCard from '../Dashboard/BalanceCard.vue'
</script>

<template>
	<main id="Home-page">
		<h1>Welcome [User]</h1>
		<b-container fluid="sm">
			<b-row>
				<b-col>
					<BalanceCard></BalanceCard>
				</b-col>
				<b-col>
					<BalanceCard></BalanceCard>
				</b-col>
			</b-row>
		</b-container>
	</main>
</template>

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