<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="increaseCounter">Increase Counter</button>
        <input type="number" v-bind:value="increaseAmount" @input="setIncreaseAmount">
        <p>Counter: {{ counter }}</p>
        <hr>
        <div id ="coords" @mousemove="updateCoords">
            <div>
                <span>Coords: {{ x }}, {{ y }}</span> 
                <span @mousemove.stop>- Dead Zone</span>
            </div>
        </div>
        <hr>
        <input type="text" placeholder="Type then press enter or space" @keyup.enter.space="alertMe">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Events',
                counter: 0,
                increaseAmount: 0,
                x: 0,
                y: 0
            }
        },
        methods: {
            setIncreaseAmount(e) {
                this.increaseAmount = e.target.value
            },
            increaseCounter() {
                this.counter = parseInt(this.counter) + parseInt(this.increaseAmount)
            },
            updateCoords(e) {
                this.x = e.clientX,
                this.y = e.clientY
            },
            alertMe(e) {
                alert(e.target.value)
            }
        },
    }
</script>

<style scoped>


</style>