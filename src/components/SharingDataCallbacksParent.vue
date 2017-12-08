<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name }}</p>
        <app-sharing-data-callbacks-child :name="name" :setName="setName"></app-sharing-data-callbacks-child>

    </div>
</template>

<script>
    import SharingDataCallbacksChild from './SharingDataCallbacksChild.vue'

    export default {
        data() {
            return {
                title: 'Sharing Data With Callbacks Parent',
                name: "Joe"
            }
        },
        components: {
            appSharingDataCallbacksChild: SharingDataCallbacksChild
        },
        methods: {
            setName() {
                console.log('set name called');
                this.name = "Matt"
            }
        },
    }
</script>

<style scoped>

</style>