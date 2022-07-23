<template>
    <div>
        <span class="loading-text">loading</span>
    </div>
</template>

<script setup>

</script>
<style lang='scss' scoped>
.loading-text {
    position: relative;
    &::after {
        content: "";
        display: inline-block;

    }
}
</style>
