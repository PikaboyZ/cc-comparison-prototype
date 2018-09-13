<template>
    <div class="cards-list">
        <CardItem v-for="(item, index) in items" :key="index" :user="item"/>
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