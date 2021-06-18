<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Counter :show-counter="showCounter" v-on:set-visible-state="setShowCounter"/>
<!--  <DateGenerator />-->

<!--  <Counter :show-counter="showCounter" v-for="i in 3" :key="i"/>-->
<!--  <Counter :show-counter="show" v-for="(show , index) in [true, false, true]" :key="index"/>-->
<!--  <CompositionCounter :initial-count="3" />-->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';
// import DateGenerator from './components/DateGenerator.vue';
// import CompositionCounter from './components/CompositionCounter.vue';

export default {
  name: 'App',
  components: {
    // CompositionCounter,
    // DateGenerator,
    Counter,
    HelloWorld,
  },
  data() {
    return {
      showCounter: true,
    };
  },
  methods: {
    setShowCounter(count) {
      this.showCounter = count <= 5;
    },
  },
  // provide() {
  //   return {
  //     timeoutDuration: 5000,
  //   };
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
