<template>
    <div class="page">
        <div class="page__container">
            <CommonHeader />
            <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6">
                <div className="w-full flex items-flex justify-start gap-6">
                    <WidgetCurrentWeather />
                    <WidgetHourlyWeather />
                </div>
                <div className="w-full flex items-center gap-6">
                    <WidgetHightlightWeather />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CommonHeader, WidgetCurrentWeather, WidgetHourlyWeather, WidgetHightlightWeather } from "@/components/common";
</script>

<style lang="scss" scoped></style>
