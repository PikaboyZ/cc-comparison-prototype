<template>
    <nuxt-link :to="`/results/${user.id}`">{{ user.title }}</nuxt-link>
</template>

<script>
    export default {
        name: "CardItem",
        props: ['user']
    }
</script>

<style scoped>

</style>