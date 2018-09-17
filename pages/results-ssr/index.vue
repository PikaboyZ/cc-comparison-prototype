<template>
    <div class="cards-list">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <CardItemSsr :user="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import CardItemSsr from "../../components/CardItemSsr";
    export default {
        components: {CardItemSsr},
        props: ['items'],
    }
</script>

<style scoped>

</style>