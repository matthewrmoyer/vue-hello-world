<template>
    <div>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <p> {{ tripleAge()}} </p>
        <img v-bind:src="pandaUrl" alt="">
        <hr>
        <input type="text" v-on:input="changeHeading">
        <p>{{ heading }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Matt',
                age: 27,
                pandaUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
                heading: 'Heading'
            }
        },
        methods: {
            tripleAge() {
                return this.age *3
            },
            changeHeading(e) {
                this.heading = e.target.value
            }
        },
        
    }
</script>

<style scoped>
    img {
        width: 100px;
        height: 50px;
    }
</style>