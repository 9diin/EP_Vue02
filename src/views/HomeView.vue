<template>
    <div class="page">
        <div class="page__container">
            <!-- 헤더 영역 -->
            <CommonHeader />
            <div class="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6">
                <!-- 상단 위젯 영역 -->
                <div class="w-full flex items-flex justify-start gap-6">
                    <WidgetCurrentWeather />
                    <WidgetHourlyWeather />
                    <!-- 네이버 지도 위젯 -->
                    <WidgetNaverMap />
                </div>
                <!-- 하단 위젯 영역 -->
                <div class="w-full flex items-start gap-6">
                    <WidgetHighlightWeather />
                    <WidgetOneWeekWeather />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CommonHeader } from "@/components/common";
import { WidgetCurrentWeather, WidgetHourlyWeather, WidgetHighlightWeather, WidgetOneWeekWeather, WidgetNaverMap } from "@/components/widgets";
</script>
