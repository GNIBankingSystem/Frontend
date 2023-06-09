<template>
  <div class="card">
    <div class="card-header">
      <h1>Transactions of account:</h1>
      <select
        name="account"
        id="account"
        v-model="selectedAccount"
        @change="getTransactionsOnAccount(selectedAccount)"
      >
        <option v-for="account in accounts" :value="account.id">
          {{ account.type }} : {{ account.id }}
        </option>
      </select>
    </div>
    <div class="card-body">
      <Table class="table">
        <thead>
          <tr>
            <th scope="col">From account</th>
            <th scope="col">To account</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions">
            <td>{{ transaction.accountFrom }}</td>
            <td>{{ transaction.accountTo }}</td>
            <td>€ {{ transaction.amount }}</td>
            <td>{{ formatDate(transaction.timestamp) }}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth.js";
export default {
  data() {
    return {
      selectedAccount: "",
      userid: "",
      accounts: [],
      transactions: [],
    };
  },
  mounted() {
    this.userid = localStorage.getItem("id");
    this.getAccounts(this.userid);
    this.getTransactionsOnAccount(this.selectedAccount);
  },
  methods: {
    async getAccounts(userId) {
      try {
        const response = await axios.get(`accounts?userId=${userId}`);
        this.accounts = response.data;
        if (this.accounts.length > 0) {
          this.selectedAccount = this.accounts[0].id;
        }
      } catch {
        console.error(`Failed to fetch accounts: ${error.message}`);
      }
    },
    async getTransactionsOnAccount(accountId) {
      try {
        console.log(accountId);
        const response = await axios.get(`transactions?iban=${accountId}`);
        this.transactions = response.data;
      } catch (error) {
        console.error(`Failed to fetch transactions: ${error.message}`);
      }
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style lang="scss">
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

.table {
  color: var(--light);
}
</style>
