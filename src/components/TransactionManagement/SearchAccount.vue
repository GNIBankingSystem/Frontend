<template>
  <div>
    <label for="">{{ message }}</label>
  </div>
  <div>
    <h5 for="" class="mx-2">Account</h5>
    <input
      type="text"
      id="iban"
      v-model="iban"
      placeholder="NL00 INHO 0123 4567 89"
      @input="checkInput()"
    />
    <button
      :disabled="isButtonDisabled"
      @click.prevent="searchAccount()"
      class="buttonSearch"
    >
      Search
    </button>
  </div>
</template>

<script>
import { useAccountStore } from "../../stores/store.js";
export default {
  data() {
    return {
      iban: "",
      message: "",
    };
  },
  methods: {
    checkInput() {
      const regex = /^[A-Z]{2}[0-9]{2} [A-Z]{4} [0-9]{4} [0-9]{4} [0-9]{2}$/;
      if (regex.test(this.iban)) {
        this.message = "IBAN format verified successfully.";
        this.isButtonDisabled = false; // Enable the button
      } else if (this.iban == "") {
        this.message = "";
      } else {
        this.isButtonDisabled = true; // Disable the button
        this.message =
          "Invalid IBAN format. Please check and re-enter your IBAN.";
      }
    },
    sumbitSearch() {
      this.searchAccount();
    },
    searchAccount() {
      const accountInfo = this.iban;
      const store = useAccountStore();
      store.setAccountInfo(accountInfo);
      console.log(store.accountInfo);
    },
  },
  computed: {},
};
</script>
<style>
.buttonSearch {
  margin-left: 10px;
}
</style>
