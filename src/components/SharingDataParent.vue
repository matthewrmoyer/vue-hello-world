<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ myNumber }}</p>
        <input type="number" name="number-input" id="number-input" placeholder="type number to send to the child" @input="setMyNumber">
        <button @click="changeNumber">Change Number</button>
        <app-sharing-data-child :my-number="myNumber" @setNumberToFiveEvent="myNumber=$event"></app-sharing-data-child>
    </div>
</template>

<script>
    import SharingDataChild from './SharingDataChild.vue';

    export default {
        data() {
            return {
                title: 'Sharing Data Parent',
                myNumber: 100,
                newNumber: 0,
            }
        },
        methods: {
            changeNumber() {
                this.myNumber = this.newNumber
            },
            setMyNumber(e) {
                this.newNumber = parseInt(e.target.value)
            }
        },
        components: {
            appSharingDataChild: SharingDataChild
        }
    }
</script>

<style scoped>
    #number-input {
        width: 200px;
    }
</style>