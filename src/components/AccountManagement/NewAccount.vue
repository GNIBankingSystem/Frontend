<template>
    <main>
        <h1>New Account</h1>
        <form>
            <div class="form-group">
                <label for="userId">User id: &nbsp;</label>
                <input type="number" v-model="userId" id="userId" placeholder="Enter user ID">
            </div>
            <div class="form-group">
                <label for="userId">Account type: &nbsp;</label>
                <select v-model="type">
                    <option value="Current">Current</option>
                    <option value="Savings">Savings</option>
                </select>
            </div>
            <router-link to="/accountmanagement" type="submit" @click="createNewAccount" class="btn btn-primary">Submit</router-link>
        </form>
    </main>
</template>

<script>
import axios from '../../axios-auth.js'
export default {
    data() {
        return {
            userId: '',
            type: 'Current',
        };
    },
    methods: {
        createNewAccount() {
            axios.post('/accounts', {
                userId: this.userId,
                type: this.type,
            })
                .then((response) => {
                    console.log(response);
                    this.$router.push('/accountmanagement');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
}
</script>

<style lang="scss" scoped></style>