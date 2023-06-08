<template>
    <div class="card">
        <div class="card-header">
            <h1>Number of accounts</h1>
            <h1>Total balance of all accounts</h1>
        </div>
        <div class="card-body">
            <div>
                <h2>{{ accounts.length }}</h2>
            </div>
            <div>
                <h2>{{ getTotalBalance() }}</h2>
            </div>
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
        };
    },
    mounted() {
        const store = useCounterStore();
        const userId = store.id;
        this.fetchAccounts(userId);
    },
    methods: {
        fetchAccounts(userId) {
            axios.get('accounts?userId='+userId)
                .then(response => {
                    this.accounts = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('nl-NL', {
                style: 'currency',
                currency: 'EUR'
            }).format(value);
        },
        getTotalBalance(){
            var totalBalance = 0;
            this.accounts.forEach(account => {
                totalBalance += account.balance;
            });
            return this.formatCurrency(totalBalance);
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
        justify-content:space-around;
        align-items: center;
    }

    .card-body {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>