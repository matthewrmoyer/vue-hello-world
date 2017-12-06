<template>
    <div>
        <h1>{{ title }}</h1>
        <p>Show: {{ show }}</p>
        <!-- v-if attaches/detaches from dom, can use v-show to add display none to the div and keep the element in the dom -->
        <div v-if="show === 'A'">Showing A</div>
        <div v-else-if="show === 'A'">Showing A</div>
        <div v-else-if="show === 'B'">Showing B</div>
        <div v-else-if="show === 'C'">Showing C</div>
        <div v-else>Showing asdfasfasf</div>
        
        <ul>
            <li v-for="person in people">{{ person.name }}</li>
        </ul>

        <ul>
            <li v-for="(person, i) in people">{{ person.name}} {{ i }}</li>
        </ul>
        <hr>
        <template v-for="(person, index) in people">
            <h5>{{ person.name }}</h5>
            <p>{{ index }}</p>
        </template>
        <hr>
        <button @click="people.push({name: 'Pete', uuid: '23414'})">Add Peter</button>
        <ul>
            <li v-for="person in people">
                <p v-for="(value, key, index) in person" :key="person.uuid">
                    {{ key }}:{{ value }}, {{ index }}
                </p>
            </li>
        </ul>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Conditionals and Lists',
                show: 'A',
                people: [
                    {name: 'Joe', age: 24, weight: 160, uuid: '111234'},
                    {name: 'Steve', age: 29, weight: 120, uuid: '1318'},
                    {name: 'Sarah', age: 54, weight: 110, uuid: '21123'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>