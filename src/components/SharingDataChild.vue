<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="changeMyNumber">Change Number In Child Only</button>
        <p>{{ myNumber }}</p>
        <button @click="setNumberToFive">Set Number to 5 in Parent and Child</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Sharing Data Child',
            }
        },
        //properties set from outside the component 
        props: {
            'myNumber': {
                // type: Number
            }
        },
        methods: {
            changeMyNumber() {
                this.myNumber++
            },
            setNumberToFive() {
                this.myNumber = 5
                this.$emit('setNumberToFiveEvent', this.myNumber)
            }
        },
    }
</script>

<style scoped>

</style>