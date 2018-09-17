<template>
    <div class="container">
        <div class="left-bar">
            <FilterForm v-model="dataForm" />
        </div>
        <div class="main-body">
            <nuxt-child :key="$route.params.id" :items="items" v-model="dataForm" />
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import FilterForm from '~/components/FilterForm';

    export default {
        name: 'results-ssr',
        components: {FilterForm},
        data() {
            return {
                dataForm: {
                    userId: ''
                },
                items: []
            }
        },
        async asyncData ({query}) {
            const url = await query.userId ?
                `https://jsonplaceholder.typicode.com/posts?userId=${query.userId}` : 'https://jsonplaceholder.typicode.com/posts';
            const userId = await query.userId ? query.userId : '';
            const { data } = await axios.get(url);

            return {
                items: data,
                dataForm: { userId: userId }
            };
        },
        watch: {
            'dataForm.userId': async function (val) {
                const url = await val ?
                    `https://jsonplaceholder.typicode.com/posts?userId=${val}` : 'https://jsonplaceholder.typicode.com/posts';
                const { data } = await axios.get(url);

                this.items = await data;
                this.dataForm.userId = await val;
                await this.$router.push({ path: '/results-ssr', query: { userId: val } });
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
       flex-basis: 25%;
    }
    .main-body {
        flex-grow: 2;
    }
</style>
