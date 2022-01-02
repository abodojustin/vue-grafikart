<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Counter></Counter>
    <Alert></Alert>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./Counter.vue";
import Alert from "./Alert.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Counter,
    Alert,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
