<template>
  <div class="card">
    <div class="card-header">
      <h1>Accounts</h1>
      <div class="logo"></div>
    </div>
    <div class="card-body">
      <Table class="table table">
        <thead>
          <tr>
            <th scope="col">IBAN</th>
            <th scope="col">Type</th>
            <th scope="col">Balance</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(account, index) in accounts" :key="account.id">
            <td>{{ account.id }}</td>
            <td>{{ account.type }}</td>
            <td>{{ formatCurrency(account.balance) }}</td>
            <td>
              <button
                class="btn btn-primary"
                @click="navigateToTransactions(account.id)"
              >
                View Transactions
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      <p v-if="loading">Loading...</p>
      <p v-else-if="error">An error occurred: {{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth.js";
import { useCounterStore } from "../../stores/counter.js";
export default {
  data() {
    return {
      accounts: [],
      loading: false,
      error: null,
    };
  },
  mounted() {
    const store = useCounterStore();
    const userId = store.id;
    this.fetchAccounts(userId);
  },
  methods: {
    fetchAccounts(userId) {
      this.loading = true;
      axios
        .get("accounts?userId=" + userId)
        .then((response) => {
          this.accounts = response.data;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
    navigateToTransactions(accountId) {
      console.log(accountId);
      this.$router.push(`/transaction/onaccount?iban=${accountId}`);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
      }).format(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--dark);
  color: var(--light);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 0.5rem var(--dark);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

table {
  color: var(--light);
}
</style>
