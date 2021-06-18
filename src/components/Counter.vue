<template>
<button v-on:click="updateCount"
        v-if="showCounter">
  {{ count }}
</button>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    showCounter: Boolean,
  },
  emits: 'setVisibleState',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    updateCount() {
      this.count += 1;
      this.$emit('setVisibleState', this.count);
    },
  },
};
</script>

<style scoped>

</style>
