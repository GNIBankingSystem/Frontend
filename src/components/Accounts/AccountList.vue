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
import axios from '../../axios-auth.js'
import { useCounterStore } from '../../stores/counter.js'
export default {
    data() {
        return {
            accounts: [],
            loading: false,
            error: null,
        };
    },
    mounted() {
        const userId = 1; // Replace with the actual user ID
        this.fetchAccounts(userId);
    },
    methods: {
        fetchAccounts(userId) {
            this.loading = true;
            const store = useCounterStore();
            console.log('store.token: ' + store.token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.token;
            console.log(axios.defaults.headers.common['Authorization'].toString());

            axios.get('accounts')
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