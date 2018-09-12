<template>
    <div class="cards-list">
        <CardItem v-for="item in items" :key="item.userId" :user-id="item"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import CardItem from "./CardItem";

    export default {
        name: "CardsList",
        components: {CardItem},
        async fetch () {
            let { data } = await axios.get('https://dog.ceo/api/breeds/list');
            return { items: data.message }
        },
    }
</script>

<style scoped>

</style>