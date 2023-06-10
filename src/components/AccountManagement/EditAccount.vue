<template>
    <main>
        <h1>Edit Account</h1>
        <h2>iban: {{ id }}</h2>
    </main>
</template>

<script>
export default {
  name: "EditAccount",
  props: {
    id: String,
  },
};
</script>

<style lang="scss" scoped>

</style>