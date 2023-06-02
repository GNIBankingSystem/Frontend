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
                <h2> NL01 INHO 0000 0000 01</h2>
                <h2> € 525,00 </h2>
            </div>
            <img :src="CirclesOnCardURL" alt="" width="100"/>
        </div>
    </div>
</template>

<script setup>
import logoURL from '../../assets/GNILogo.svg'
import CirclesOnCardURL from '../../assets/CirclesOnCard.png'
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