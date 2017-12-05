<template>
    <div>
        <div class='container' @click="attachedRed = !attachedRed">
            <div class="demo" :class="{'red':attachedRed, 'blue':!attachedRed}">1</div>
            <div class="demo" :class="{'red':attachedRed}">2</div>
            <div class="demo" :class="{'red':attachedRed}">3</div>
        </div>

        <div class='container' @click="attachedRed = !attachedRed">
            <div class="demo" :class="divClasses">5</div>
            <div class="demo" :class="divClasses">4</div>
            <div class="demo" :class="divClasses">6</div>
        </div>

        <hr>

        <input type="text" v-model="color">
        <div :class="color">Type the Color You Want in the Input Above</div>

        <hr>
        <p>Design A Div</p>
        <input type="text" placeholder="width" v-model="customWidth">
        <input type="text" placeholder="height" v-model="customHeight">
        <input type="text" placeholder="background color" v-model="customBackgroundColor">
        <div :style="customStyle"></div>

        <hr>
        <div :style="progressBar">Progress Bar</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                attachedRed: true,
                color: 'red',
                customWidth: 100,
                customHeight: 100,
                customBackgroundColor: 'grey',
                progress: 1
            }
        },
        computed: {
            divClasses () {
                return this.attachedRed ? 'red' : 'blue'
            },
            customStyle () {
                return {
                    'width': this.customWidth + 'px',
                    'height': this.customHeight + 'px',                    
                    'background-color': this.customBackgroundColor,
                }
            },
            progressBar () {
                return {
                    'width': this.progress + 'vw',
                    'height': '10px',
                    'background-color': 'purple'
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        background: grey;
    }
    .red {
        background: red;
    }
    .blue {
        background: blue;
    }
    .green {
        background: green;
    }
</style>