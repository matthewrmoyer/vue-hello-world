<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name }}</p>
        <button @click="setName()">Set Name</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Sharing Data With Callbacks Child',
            }
        },
        props: {
            setName: Function,
            name: String,
            newName: String
        },
    }
</script>

<style scoped>

</style>