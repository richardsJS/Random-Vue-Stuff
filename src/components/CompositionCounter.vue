<template>
  <button v-on:click="updateCount">
    {{ count }}
  </button>
</template>

<script>
import { toRefs } from 'vue';
import useCounter from '../composition/useCounter';

export default {
  name: 'CompositionCounter',
  props: {
    initialCount: Number,
  },
  setup(props) {
    const { initialCount } = toRefs(props);

    return useCounter(initialCount.value);
  },
};
</script>

<style scoped>

</style>
