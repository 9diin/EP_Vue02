<template>
    <header class="header">
        <div class="header__start">
            <div class="header__start__logo">
                <img src="/assets/images/logo.svg" alt="" />
                <h3 className="poppins-bold scroll-m-20 text-2xl font-semibold tracking-tight text-white">Weather.io</h3>
            </div>
            <div class="flex-1">
                <SearchBar />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import SearchBar from "@/components/ui/search-bar/SearchBar.vue";
</script>

<style lang="scss" scoped>
.header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 20px 24px;

    &__start {
        width: 50%;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        gap: 20px;

        &__logo {
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 4px;

            font-family: "Poppins", sans-serif;

            img {
                height: 44px;
            }
        }
    }
}
</style>
