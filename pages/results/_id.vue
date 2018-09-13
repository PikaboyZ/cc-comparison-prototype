<template>
    <div class="container">
        <dl>
            <dt>Title</dt><dd>- {{ details.title }}</dd>
            <dt>Description</dt><dd>- {{ details.body }}</dd>
        </dl>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        async asyncData ({params}) {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            return { details: data };
        },
    }
</script>

<style scoped>
    dt {
        font-weight: bold;
    }
</style>