<template>
    <div class="card">
        <div class="card-header">
            <h6>&nbsp; UserId: &nbsp;</h6>
            <input type="number" v-model="filter.userId" placeholder="Search by userId" />
            <h6>&nbsp; Type: &nbsp; </h6>
            <select v-model="filter.type">
                <option value="all">All</option>
                <option value="current">Current</option>
                <option value="savings">Savings</option>
            </select>
            <h6>&nbsp; Status: &nbsp;</h6>
            <select v-model="filter.status">
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
            </select>

            <div>
                &nbsp;<button class="btn btn-primary" @click="fetchAccounts"><span class="material-icons">search</span></button>
                &nbsp;<button class="btn btn-success"><span class="material-icons">add</span></button>
            </div>
        </div>
        <div class="card-body">
            <Table class="table table">
                <thead>
                    <tr>
                        <th scope="col">IBAN</th>
                        <th scope="col">UserId</th>
                        <th scope="col">Type</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(account, index) in accounts" :key="account.id">
                        <td>{{ account.id }}</td>
                        <td>{{ account.userId }}</td>
                        <td>{{ account.type }}</td>
                        <td>{{ formatCurrency(account.balance) }}</td>
                        <td>{{ account.status }}</td>
                        <td>
                            <button class="btn btn-warning">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <button class="btn btn-secondary" v-on:click="filter.limit + 10, filter.offset + 10" @click="fetchAccounts"> >> </button>
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
            filter: {
                type: 'all',
                status: 'all',
                userId:'',
                offset: 0,
                limit: 10,
            }
        };
    },
    mounted() {
        this.fetchAccounts();
    },
    methods: {
        fetchAccounts() {
            this.loading = true;
            var url = "accounts?type=" + this.filter.type + "&status=" + this.filter.status + "&offset=" + this.filter.offset + "&limit=" + this.filter.limit;
            if(this.filter.userId != ""){
                url += "&userId=" + this.filter.userId
            }
            axios.get(url)
                .then(response => {
                    this.accounts = response.data;
                    this.loading = false;
                })
                .catch(error => {
                    this.error = error;
                    this.loading = false;
                });
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('nl-NL', {
                style: 'currency',
                currency: 'EUR'
            }).format(value);
        }
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