<template>
    <div class="card">
        <div class="card-header">
            <h1>New Transaction</h1>
        </div>
        <div class="card-body">
            <form action="">
                <div class="form-group" id="receiverDiv">
                    <label for="receiver">Receiver IBAN:</label><br>
                    <input type="text" class="form-control" name="receiver" id="receiver">
                </div>
                <div class="form-group" id="fullnameDiv">
                    <label for="fullname">Full name:</label><br>
                    <input type="text" class="form-control" name="fullname" id="fullname">
                </div>
                <div class="form-group" id="amountReasonDiv">
                    <table>
                        <tr>
                            <td><label for="amount">Amount:</label></td>
                            <td><label for="reason">Reason:</label></td>
                        </tr>
                        <tr>
                            <td><input type="double" class="form-control" name="amount" id="amount"></td>
                            <td><input type="text" class="form-control" name="reason" id="reason"></td>
                        </tr>
                    </table>
                </div>
                <div class="button">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
            </form>
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

input {
    background-color: #483763;
    color: var(--light);
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: none;
    margin-bottom: 1rem;
}
</style>