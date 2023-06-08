<template>
  <main id="transaction-page">
    <h3>Filter</h3>
    <div class="col-12">
      <div class="card">
        <div>
          <form class="filter-form">
            <div>
              <label for="iban">IBAN:</label>
              <input type="text" id="iban" v-model="filter.iban" />
            </div>

            <div>
              <label for="startDate">Start Date:</label>
              <input type="date" id="startDate" v-model="filter.startDate" />
            </div>

            <div>
              <label for="endDate">End Date:</label>
              <input type="date" id="endDate" v-model="filter.endDate" />
            </div>

            <div>
              <label for="comparison">Comparison:</label>
              <select
                name="comparison"
                id="comparison"
                v-model="filter.comparison"
              >
                <option value="=">=</option>
                <option value="<"></option>
                <option value=">">></option>
              </select>
            </div>

            <button @click.prevent="submitForm">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      filter: {
        iban: "",
        startDate: "",
        endDate: "",
        comparison: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Use axios here to send `this.filter` to your backend.
      console.log(this.filter);
    },
  },
};
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
input {
  border-radius: 0.5rem;
  border: 1px solid var(--light);
  padding: 0.5rem;
  background-color: var(--dark);
  color: var(--light);
  margin-bottom: 1rem;
}
select {
  border-radius: 0.5rem;
  border: 1px solid var(--light);
  padding: 0.5rem;
  background-color: var(--dark);
  color: var(--light);
  margin-bottom: 1rem;
}
button {
  border-radius: 0.5rem;
  border: 1px solid var(--light);
  padding: 0.5rem;
  background-color: var(--dark);
  color: var(--light);
  margin-bottom: 1rem;
}
.filter-form {
  display: flex;
  gap: 80px;
}
</style>
