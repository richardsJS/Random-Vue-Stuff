<template>
  <div>
    <h1>Generate date using numbers</h1>

    <label for="day">Day</label>
    <input id="day" v-model="day" type="number" min="1" max="31"/>

    <label for="month">Month</label>
    <input id="month" v-model="month" type="number" min="1" max="12"/>

    <label for="year">Year</label>
    <input id="year" v-model="year" type="number" min="0"/>

    <span v-if="date">Date: {{ date.toDateString() }}</span>
  </div>
</template>

<script>
export default {
  name: 'DateGenerator',
  data() {
    return {
      day: '',
      month: '',
      year: '',
    };
  },
  computed: {
    date() {
      if (this.day && this.month && this.year) {
        return new Date(+this.year, +this.month - 1, +this.day);
      }

      return null;
    },
  },
};
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
