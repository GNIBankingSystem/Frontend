<template>
  <main id="transaction-page">
    <h1>Transfers</h1>
    <div class="col-12">
      <SearchIbanByName></SearchIbanByName>
      <ShowAccounts v-if="firstName && lastName"></ShowAccounts>
      <NewTransaction></NewTransaction>
    </div>
  </main>
</template>
<script>
import { useAccountStore } from "../../stores/store.js";
import SearchIbanByName from "./SearchIbanByName.vue";
import ShowAccounts from "./ShowAccounts.vue";
import NewTransaction from "../Dashboard/NewTransaction.vue";
export default {
  data() {
    return {};
  },
  components: {
    SearchIbanByName,
    ShowAccounts,
    NewTransaction,
  },
  computed: {
    firstName() {
      const store = useAccountStore();
      return store.firstName;
    },
    lastName() {
      const store = useAccountStore();
      return store.lastName;
    },
  },
};
</script>

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
