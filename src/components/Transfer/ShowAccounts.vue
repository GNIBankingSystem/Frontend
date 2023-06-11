<template>
  <h3>Accounts</h3>

  <table class="table text-center">
    <thead>
      <th scope="col">IBAN</th>
    </thead>
    <tbody>
      <tr
        class="hoverable-row"
        v-for="iban in ibans"
        :key="iban"
        @click="selectAccount(iban)"
      >
        <td>{{ iban }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useAccountStore } from "../../stores/store.js";
import axios from "../../axios-auth.js";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      message: "",
      ibans: [],
      selectedAccount: "",
    };
  },
  mounted() {
    const store = useAccountStore();
    this.firstname = store.firstName;
    this.lastname = store.lastName;
    this.getAccounts();
  },
  methods: {
    searchAccount() {},
    async getAccounts() {
      try {
        const response = await axios.get(
          `accounts/getIban/${this.firstname}_${this.lastname}`
        );
        this.ibans = response.data;
      } catch (error) {
        console.error(`Failed to fetch accounts: ${error.message}`);
      }
    },
    selectAccount(iban) {
      const store = useAccountStore();
      store.setSelectedAccountForTransfer(iban);
    },
  },
  computed: {},
};
</script>
<style>
.buttonSearch {
  margin-left: 10px;
}
.card {
  margin-bottom: 10px;
}
input {
  margin-left: 10px;
  margin-right: 10px;
}
.hoverable-row {
  cursor: pointer;
}
</style>
