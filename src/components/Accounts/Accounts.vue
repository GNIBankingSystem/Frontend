<script setup>
import AccountSymmary from '../Accounts/AccountSummary.vue'
import AccountList from '../Accounts/AccountList.vue'
</script>

<template>
	<main id="account-page">
		<h1>Accounts</h1>
		<div class="col-12">
			<AccountSymmary></AccountSymmary>
		</div>
        <div id="accountList" class="col-12">
            <AccountList></AccountList>
        </div>
		
	</main>
</template>

<style lang="scss" scoped>
@media (min-width: 1264px) {
	.col-12 {
		-webkit-box-flex: 0;
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;

        margin-bottom: 2rem;
	}
}
</style>