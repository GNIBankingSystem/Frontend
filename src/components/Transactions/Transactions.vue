<script setup>
import TransactionList from "../Transactions/TransactionList.vue";
import TransactionFilter from "./TransactionFilter.vue";
</script>

<template>
  <main id="transaction-page">
    <h1>Transactions</h1>
    <div class="col-12">
      <TransactionFilter></TransactionFilter>
      <TransactionList></TransactionList>
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
