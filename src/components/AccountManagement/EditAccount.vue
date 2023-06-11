<template>
    <main>
        <h1>Edit Account</h1>
        <h2>iban: {{ id }}</h2>
        <form>
            <div class="form-group">
                <label for="userId">User id: &nbsp;</label>
                <input type="number" v-model="userId" id="userId" placeholder="Enter user ID">
            </div>
            <div class="form-group">
                <label for="absoluteLimit">absolute limit: &nbsp;</label>
                <input type="number" v-model="absoluteLimit" id="absoluteLimit" placeholder="Enter absolute limit">
            </div>
            <div class="form-group">
                <label for="userId">Account type: &nbsp;</label>
                <select v-model="type">
                    <option value="Current">Current</option>
                    <option value="Savings">Savings</option>
                </select>
            </div>
            <router-link to="/accountmanagement" type="submit" @click="updateAccount" class="btn btn-primary">Submit</router-link>
        </form>
    </main>
</template>

<script>
import axios from "../../axios-auth.js";
export default {
  name: "EditAccount",
  props: {
    id: String,
  },
  mounted() {
    this.getAccount();
  },
  data() {
    return {
      userId: "",
      absoluteLimit: "",
      type: "",
    };
  },
  methods: {
    getAccount() {
      axios
        .get("accounts/" + this.id)
        .then((response) => {
          console.log(response);
          this.userId = response.data.userId;
          this.absoluteLimit = response.data.absoluteLimit;
          this.type = response.data.type;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateAccount() {
      axios
        .put("accounts/" + this.id, {
          userId: this.userId,
          absoluteLimit: this.absoluteLimit,
          type: this.type,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/accountmanagement");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>