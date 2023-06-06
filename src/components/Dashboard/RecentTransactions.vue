<template>
    <div class="card">
        <div class="card-header">
            <h1>Recent Transactions</h1>
        </div>
        <div class="card-body">
            <Table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>John Doe</td>
                        <td>€ 525,00</td>
                        <td>01-01-2021</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>John Doe</td>
                        <td>€ 525,00</td>
                        <td>01-01-2021</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
</template>

<script setup>
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