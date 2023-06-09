<template>
  <div class="card">
    <div class="card-header">
      <h1>Transactions of account:</h1>
      <select name="account" id="account">
        <option value="account1">Savings :</option>
        <option value="account2">Current : 2</option>
        <option value="account3">Student : 3</option>
      </select>
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
          <tr>
            <td>John Doe Current account</td>
            <td>Amazon prime</td>
            <td>- € 525,00</td>
            <td>02-01-2021</td>
          </tr>
          <tr>
            <td>John Doe Savings account</td>
            <td>John Doe Current account</td>
            <td>- € 525,00</td>
            <td>01-01-2021</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
</template>

<script setup></script>

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
