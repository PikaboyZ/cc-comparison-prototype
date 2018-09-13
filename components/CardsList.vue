<template>
    <div class="cards-list">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <CardItem :user="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import CardItem from "./CardItem";

    export default {
        name: "CardsList",
        components: {CardItem},
        props: ['items'],
    }
</script>

<style scoped>

</style>