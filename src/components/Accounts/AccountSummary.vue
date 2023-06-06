<template>
    <div class="card">
        <div class="card-header">
            <h1>Number of accounts</h1>
            <h1>Total balance of all accounts</h1>
        </div>
        <div class="card-body">
            <div>
                <h2>3</h2>
            </div>
            <div>
                <h2>13.594,43</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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