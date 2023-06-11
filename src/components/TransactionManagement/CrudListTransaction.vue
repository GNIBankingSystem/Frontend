<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h1>Transactions of account: {{ selectedAccount }}</h1>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">From account</th>
              <th scope="col">To account</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions">
              <td>{{ transaction.accountFrom }}</td>
              <td>{{ transaction.accountTo }}</td>
              <td>€ {{ transaction.amount }}</td>
              <td>{{ formatDate(transaction.timestamp) }}</td>
              <td>
                <router-link
                  :to="{
                    name: 'EditTransaction',
                    query: { id: transaction.id },
                  }"
                  class="btn btn-primary"
                >
                  Edit
                </router-link>
              </td>
              <td>
                <router-link
                  :to="{
                    name: 'DeleteTransaction',
                    query: { id: transaction.id },
                  }"
                  class="btn btn-danger"
                >
                  Delete
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth.js";
import { useAccountStore } from "../../stores/store.js";
export default {
  data() {
    return {
      selectedAccount: "",
      transactions: [],
    };
  },
  mounted() {
    this.getTransactionsOnSelectedAccount();
  },
  methods: {
    async getTransactionsOnSelectedAccount() {
      try {
        const response = await axios.get(
          `transactions?iban=${this.accountInfo}`
        );
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
  computed: {
    accountInfo() {
      const store = useAccountStore();
      return store.accountInfo;
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
