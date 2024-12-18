<template>
    <header class="header">
        <div class="header__start">
            <div class="header__start__logo">
                <img src="/assets/images/logo.svg" alt="" />
                <h3 class="poppins-bold scroll-m-20 text-2xl font-semibold tracking-tight text-neutral-700">Weather.io</h3>
            </div>
            <div class="flex-1">
                <SearchBar @update:model-value="changeSearchValue" @keydown.enter="handleSearch" />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import SearchBar from "@/components/ui/search-bar/SearchBar.vue";
import { useStore } from "@/store";
import { ref } from "vue";

const store = useStore();
const searchValue = ref<string>("");

const changeSearchValue = (event: string | number) => {
    searchValue.value = String(event);
};
const handleSearch = () => {
    if (searchValue.value === "") store.cityName = "seoul";
    else store.cityName = searchValue.value;

    store.fetchApi();
};
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

            img {
                height: 44px;
            }
        }
    }
}
</style>
