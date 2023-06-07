<template>
    <div class="card">
        <div class="card-header">
            <h1>Accounts</h1>
            <div class="logo">
            </div>
        </div>
        <div class="card-body">
            <Table class="table table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">IBAN</th>
                        <th scope="col">Type</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(account, index) in accounts" :key="account.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ account.id }}</td>
                        <td>{{ account.type }}</td>
                        <td>{{ formatCurrency(account.balance) }}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>NL01INHO0000000003</td>
                        <td>Savings</td>
                        <td>€ 10.000,42</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>NL01INHO0000000004</td>
                        <td>Savings</td>
                        <td>€ 3.045,01</td>
                    </tr>
                </tbody>
            </Table>
                <p v-if="loading">Loading...</p>
                <p v-else-if="error">An error occurred: {{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      accounts: [],
      loading: false,
      error: null,
    };
  },
  created() {
    const userId = NL01INHO0000000001; // Replace with the actual user ID
    this.fetchAccounts(userId);
  },
  methods: {
    fetchAccounts(userId) {
      this.loading = true;
      axios.get(`http://localhost:8080/accounts/${userId}`)
        .then(response => {
          this.accounts = response.data;
          this.loading = false;
        })
        .catch(error => {
          this.error = error;
          this.loading = false;
        });
    },
  },

}
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