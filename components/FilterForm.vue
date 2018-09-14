<template>
    <div class="filter-form">
        <div>
            <label for="life-style"></label>
            <select id="life-style" name="life_style" v-model="value.userId">
                <option value="">Select</option>
                <option v-for="(n, index) in 10" :value="n" :key="index" :selected="value.userId == n">{{ n }}</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilterForm',
        props: ['value'],
    };
</script>

<style scoped>

</style>
