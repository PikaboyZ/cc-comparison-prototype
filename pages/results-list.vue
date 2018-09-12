<template>
    <div>
        <div class="left-bar">
            <FilterResult/>
        </div>
        <div class="main-body">
            <CardsList/>
        </div>
    </div>
</template>

<script>
    import FilterResult from '~/components/FilterResults';
    import CardsList from "~/components/CardsList";

    export default {
        name: 'results-list',
        components: {CardsList, FilterResult},
    };
</script>

<style scoped>

</style>
