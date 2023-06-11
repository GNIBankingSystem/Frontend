<template>
  <div class="card">
    <div class="card-header">
      <h1>New Transaction</h1>
    </div>
    <div class="card-body">
      <form>
        <div class="form-group" id="senderDiv">
          <label for="sender">Sender Account:</label><br />
          <select
            class="form-control"
            v-model="selectedAccount"
            name="sender"
            id="sender"
          >
            <option
              v-for="(account, index) in accounts"
              :key="account.id"
              :value="account.id"
            >
              {{ account.id }} - {{ account.type }} -
              {{ formatCurrency(account.balance) }}
            </option>
          </select>
        </div>
        <div class="form-group" id="receiverDiv">
          <label for="receiver">Receiver IBAN:</label><br />
          <input
            type="text"
            class="form-control"
            v-model="selectedAccountForTransfer"
            name="receiver"
            id="receiver"
            required
          />
        </div>
        <div class="form-group" id="amountDiv">
          <label for="amount">Amount:</label><br />
          <td>
            <input
              type="double"
              class="form-control"
              name="amount"
              id="amount"
              required
            />
          </td>
        </div>
        <div class="button">
          <button class="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth.js";
import { useAccountStore } from "../../stores/store.js";
import { useCounterStore } from "../../stores/counter.js";
export default {
  data() {
    return {
      selectedAccount: "",
      accounts: [],
      selectedAccountForTransfer: "",
    };
  },
  mounted() {
    const store = useCounterStore();
    const userId = store.id;
    console.log(userId);
    this.fetchAccounts(userId);
  },
  methods: {
    fetchAccounts(userId) {
      this.loading = true;
      axios
        .get("accounts?userId=" + userId)
        .then((response) => {
          console.log(response.data);
          this.accounts = response.data;
        })
        .catch((error) => {
          this.error = error;
        });
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
      }).format(value);
    },
  },
  computed: {
    selectedAccountForTransfer() {
      const store = useAccountStore();
      return store.selectedAccountForTransfer;
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
select {
  background-color: #483763;
  color: var(--light);
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  margin-bottom: 1rem;
}

input {
  background-color: #483763;
  color: var(--light);
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  margin-bottom: 1rem;
}
</style>
