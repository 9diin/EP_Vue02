<template>
    <div class="page">
        <div class="page__container">
            <!-- 헤더 영역 -->
            <CommonHeader />
            <div class="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6">
                <!-- 상단 위젯 영역 -->
                <div class="w-full flex items-flex justify-start gap-6">
                    <WidgetCurrentWeather :data="dataOfCW" />
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
import axios from "axios";
import { CommonHeader } from "@/components/common";
import { WidgetCurrentWeather, WidgetHourlyWeather, WidgetHighlightWeather, WidgetOneWeekWeather, WidgetNaverMap } from "@/components/widgets";
import { onMounted, reactive, ref } from "vue";

const WEATHER_BASE_URL = "http://api.weatherapi.com/v1";
const WEATHER_API_KEY = "56442fada1144d12abf64743241411";

const cityName = ref<string>("seoul");
const dataOfCW = reactive({ temp: 0, country: "", cityName: "", localtime: "", iconCode: 0, iconUrl: "" }); // WidgetCurrentWeather 컴포넌트에서 필요한 데이터

const fetchApi = async () => {
    try {
        const res = await axios.get(`${WEATHER_BASE_URL}/forecast.json?q=${cityName.value}&days=7&key=${WEATHER_API_KEY}`);
        console.log(res);
        /** WidgetCurrentWeather 컴포넌트에서 필요한 데이터 */
        const { current, location } = res.data;
        dataOfCW.temp = current.temp_c;
        dataOfCW.country = location.country;
        dataOfCW.cityName = location.name;
        dataOfCW.localtime = location.localtime;
        dataOfCW.iconCode = current.condition.code;
        dataOfCW.iconUrl = current.condition.icon;
    } catch (error) {
        console.log("error: ", error);
    }
};

onMounted(() => {
    fetchApi();
});
</script>
