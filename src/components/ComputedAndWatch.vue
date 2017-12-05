<template>
    <div>
        <button @click="counter++">Increase</button>
        <button @click="counter--">Decrease</button>  
        <button @click="secondCounter++">Increase Second</button>
              
        <p>Counters {{ counter }} {{secondCounter}} </p>
        <p>{{ result() }} | {{ output }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0,
                secondCounter: 0
            }
        },
        computed: {
            // only called when a property used in the function is changed <- way more effecient than using a method
            output() {
                console.log('Computed Called');
                return this.counter > 5 ? 'Greater than 5' : 'Less than 5'                
            }
        },
        watch: {
            //must match a property
            counter(value) {
                // runs whenever the counter property changes
                setTimeout(() => {
                    console.log('reset counter');
                    this.counter = 0
                }, 5000);
            }
        },
        methods: {
            // called everytime data changes
            result() {
                console.log('Method Called');
                return this.counter > 5 ? 'Greater than 5' : 'Less than 5'
            }
        },
    }
</script>

<style scoped>

</style>