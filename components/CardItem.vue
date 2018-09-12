<template>
    <div>
        <ul>
            <li>{{ userId }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CardItem",
        props: ['userId']
    }
</script>

<style scoped>

</style>