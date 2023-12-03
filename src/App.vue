<template>
  <div>
    <InputWord></InputWord>
    <hr>

  </div>
</template>

<script>
import InputWord from "./components/InputWord.vue"

export default {
  name: 'App',
  components: {
    InputWord
  }
}
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
