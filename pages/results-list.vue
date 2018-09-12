<template>
    <div>
        <div class="left-bar">
            <FilterResult/>
        </div>
        <div class="main-body">
        </div>
    </div>
</template>

<script>
    import FilterResult from '~/components/FilterResults';

    export default {
        name: 'cards-list',
        components: {FilterResult},
    };
</script>

<style scoped>

</style>
