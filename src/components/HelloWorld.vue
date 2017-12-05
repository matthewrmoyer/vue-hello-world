<template>
  <div>
    <input type="text" name="title" id="title-input" v-on:input="changeTitle">
    <h1> {{ title }} </h1>
    <h2 v-once> V-Once Title: {{ title }}</h2>
    <p> {{ sayHi() }} </p>
    <a v-bind:href="link">Portfolio Site</a>
    <hr>
    <p v-html="finishedLink"></p>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello World',
        link: 'https://matthewmoyer.rocks',
        finishedLink: "<a href='https://matthewmoyer.rocks'>Portfolio Site V-HTML</a>"
      }
    },
    methods: {
      changeTitle(e) {
        this.title = e.target.value
      },
      sayHi() {
        this.title = 'Yo World'
        return this.title
      }
    },
  }
</script>

<style scoped>

</style>