<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="changeNumber">Change Number</button>
        <app-sharing-data-child :my-number="myNumber"></app-sharing-data-child>
    </div>
</template>

<script>
    import SharingDataChild from './SharingDataChild.vue';

    export default {
        data() {
            return {
                title: 'Sharing Data Parent',
                myNumber: 100
            }
        },
        methods: {
            changeNumber() {
                this.myNumber = 9999
            }
        },
        components: {
            appSharingDataChild: SharingDataChild
        }
    }
</script>

<style scoped>

</style>