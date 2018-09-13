<template>
    <div>
        <ul>
            <li>User ID: {{ user.userId }}</li>
            <li>Title: {{ user.title }}</li>
            <li>Description: {{ user.body }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CardItem",
        props: ['user']
    }
</script>

<style scoped>

</style>