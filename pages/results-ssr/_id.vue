<template>
    <div class="container">
        <div class="nav-link">
            <nuxt-link :to="backUrl">&leftarrow; Go Back</nuxt-link>
        </div>
        <div class="details-content">
            <dl>
                <dt>Title</dt><dd>- {{ details.title }}</dd>
                <dt>Description</dt><dd>- {{ details.body }}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['value'],
        async asyncData ({params}) {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            return { details: data };
        },
        data() {
            let backUrl = '/results-ssr';
            backUrl += this.value.userId ? `?userId=${this.value.userId}` : '';
            return { backUrl }
        }
    }
</script>

<style scoped>
    dt {
        font-weight: bold;
    }
    .nav-link {
        flex-shrink: 0;
    }
    .details-content {
        padding-left: 15px;
    }
</style>