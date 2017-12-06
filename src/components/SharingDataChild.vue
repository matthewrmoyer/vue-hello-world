<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ myNumber }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Sharing Data Child',
            }
        },
        props: ['myNumber']
    }
</script>

<style scoped>

</style>