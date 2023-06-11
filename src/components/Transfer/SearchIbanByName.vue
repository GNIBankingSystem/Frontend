<template>
  <div>
    <label for="">{{ message }}</label>
  </div>
  <div>
    <h5 for="" class="mx-2">Name</h5>
    <input
      type="text"
      id="firstname"
      v-model="firstname"
      placeholder="Firstname e.g. Jhon"
    />
    <input
      type="text"
      id="lastname"
      v-model="lastname"
      placeholder="Lastname e.g. Doe"
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
      firstname: "",
      lastname: "",
      message: "",
      isButtonDisabled: true,
    };
  },
  methods: {
    searchAccount() {
      const store = useAccountStore();
      store.setFirstName(this.firstname);
      store.setLastName(this.lastname);
      console.log(store.firstName + " " + store.lastName);
    },
  },
  computed: {
    isButtonDisabled() {
      return !this.firstname || !this.lastname;
    },
  },
};
</script>
<style>
.buttonSearch {
  margin-left: 10px;
}

input {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
