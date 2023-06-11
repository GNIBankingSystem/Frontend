<template>
  <main>
    <h1>Transaction management</h1>
    <div class="card">
      <div class="card-header">
        <h2>Search Transactions &#128269;</h2>
      </div>
      <div class="card-body">
        <SearchAccount></SearchAccount>
      </div>
    </div>
    <div class="card mt-5" v-if="accountInfo">
      <div class="card-header">
        <h2>Transactions on searched account</h2>
      </div>
      <div class="card-body">
        <List></List>
      </div>
    </div>
  </main>
</template>

<script>
import SearchAccount from "./SearchAccount.vue";
import List from "./CrudListTransaction.vue";
import { useAccountStore } from "../../stores/store.js";
export default {
  data() {
    return {};
  },
  components: {
    SearchAccount,
    List,
  },
  computed: {
    accountInfo() {
      const store = useAccountStore();
      return store.accountInfo;
    },
  },
};
</script>

<style lang="scss" scoped></style>
