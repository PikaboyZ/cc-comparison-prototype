<template>
    <nuxt-link :to="`/results-ssr/${user.id}`">{{ user.title }}</nuxt-link>
</template>

<script>
    export default {
        name: "CardItemSsr",
        props: ['user']
    }
</script>

<style scoped>

</style>