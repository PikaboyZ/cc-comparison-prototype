<template>
    <div class="filters">
        <form action="">
            <div>
                <label for="life-style"></label>
                <select id="life-style" name="life_style">
                    <option value="">Select</option>
                    <option value="travel">Travel</option>
                    <option value="shopping">Shopping</option>
                    <option value="food">Food</option>
                </select>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'FilterResults',
    };
</script>

<style scoped>

</style>
