<template>
    <div class="container">
        <div class="left-bar">
            <FilterForm v-model="dataForm" />
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
        data() {
            return {
                dataForm: {
                    userId: ''
                },
                items: []
            }
        },
        async asyncData () {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return { items: data };
        },
        watch: {
            'dataForm.userId': async function (val) {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${val}`);
                this.items = await data;
            }
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
