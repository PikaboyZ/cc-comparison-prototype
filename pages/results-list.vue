<template>
    <div class="container">
        <div class="left-bar">
            <FilterForm/>
        </div>
        <div class="main-body">
            <CardsList :items="items"/>
        </div>
    </div>
</template>

<script>
    import FilterForm from '~/components/FilterForm';
    import CardsList from "~/components/CardsList";
    import axios from 'axios';

    export default {
        name: 'results-list',
        components: {CardsList, FilterForm},
        props: ['userIds'],
        async asyncData () {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return { items: data };
        },
    };
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
    }

    .left-bar {
        width: 35%;
    }
    .main-body {
        width: 65%;
    }
</style>
