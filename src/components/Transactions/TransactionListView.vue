<script>
import TransacionList from "./TransactionList.vue";
export default {
  components: {
    TransacionList,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<template>
  <main id="transaction-page">
    <div class="col-12">
      <button @click="goBack">Go Back</button>
      <TransacionList></TransacionList>
    </div>
  </main>
</template>

<style lang="scss">
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
