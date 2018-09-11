<template>
    <b-container>
        <b-row>
            <b-col sm="3">
                <label for="salary-range">Salary Range</label>
            </b-col>
            <b-col sm="9">
                <b-form-input id="salary-range" :type="range"></b-form-input>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'FilterResults',
    };
</script>

<style scoped>

</style>
