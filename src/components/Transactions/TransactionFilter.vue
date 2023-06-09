<template>
  <main id="transaction-page">
    <h3>Transaction on all accounts</h3>
    <div class="col-12">
      <div class="card">
        <div>
          <form class="filter-form">
            <div>
              <label for="iban">IBAN:</label>
              <input
                type="text"
                id="iban"
                v-model="filter.iban"
                placeholder="NL00 INHO 0123 4567 89"
              />
            </div>

            <div>
              <label for="startDate">Start Date:</label>
              <input type="date" id="startDate" v-model="filter.startDate" />
            </div>

            <div>
              <label for="endDate">End Date:</label>
              <input type="date" id="endDate" v-model="filter.endDate" />
            </div>

            <div>
              <label for="comparison">Comparison:</label>
              <select
                name="comparison"
                id="comparison"
                v-model="filter.comparison"
              >
                <option value="=">=</option>
                <option value="<"></option>
                <option value=">">></option>
              </select>
            </div>

            <button @click.prevent="submitForm">Submit</button>
          </form>
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
    </div>
  </main>
</template>
<script>
import axios from "../../axios-auth.js";
import TransactionList from "./TransactionList.vue";
export default {
  data() {
    return {
      filter: {
        iban: "",
        startDate: "",
        endDate: "",
        comparison: "",
      },
      selectedAccount: "",
    };
  },
  mounted() {
    this.selectedAccount = TransactionList.selectedAccount;
  },

  methods: {
    submitForm() {
      // Use axios here to send `this.filter` to your backend.
      console.log(this.filter);
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

table {
  color: var(--light);
}
input {
  border-radius: 0.5rem;
  border: 1px solid var(--light);
  padding: 0.5rem;
  background-color: var(--dark);
  color: var(--light);
  margin-bottom: 1rem;
}
select {
  border-radius: 0.5rem;
  border: 1px solid var(--light);
  padding: 0.5rem;
  background-color: var(--dark);
  color: var(--light);
  margin-bottom: 1rem;
}
button {
  border-radius: 0.5rem;
  border: 1px solid var(--light);
  padding: 0.5rem;
  background-color: var(--dark);
  color: var(--light);
  margin-bottom: 1rem;
}
.filter-form {
  display: flex;
  gap: 80px;
}
</style>
