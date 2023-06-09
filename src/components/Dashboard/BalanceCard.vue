<script setup>
import logoURL from '../../assets/GNILogo.svg'
import CirclesOnCardURL from '../../assets/CirclesOnCard.png'
</script>

<template>
    <div class="card">
        <div class="card-header">
            <h1>Balance</h1>
            <div class="logo">
			<img :src="logoURL" alt="GNI" /> 
		</div>
        </div>
        <div class="card-body">
            <div>
                <h2> <!--{{ accounts[0].id }}--></h2>
                <h2> <!--{{ formatCurrency(accounts[0].balance) }}--> </h2>
            </div>
            <img :src="CirclesOnCardURL" alt="" width="100"/>
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
        this.fetchAccounts();
    },
    methods: {
        fetchAccounts() {
            const store = useCounterStore();
            axios.get('accounts?userId='+store.id)
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
</style>