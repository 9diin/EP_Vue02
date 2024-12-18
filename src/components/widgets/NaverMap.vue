<template>
    <Card class="w-1/4 min-w-[25%]">
        <naver-map style="width: 100%; height: 100%" :mapOptions="mapOptions">
            <naver-marker v-for="position in positions" :latitude="position.lat" :longitude="position.lng" @onLoad="onLoadMarker($event)" @click="handleSearch(position.cityName)"> </naver-marker>
        </naver-map>
    </Card>
</template>

<script setup>
import { ref } from "vue";
import { NaverMap, NaverMarker } from "vue3-naver-maps";
import { useStore } from "@/store";
import { Card } from "@/components/ui/card";
import positions from "@/constants/map-position.json";

const store = useStore();

const marker = ref();
const onLoadMarker = (markerObject) => {
    marker.value = markerObject;
};
const mapOptions = {
    latitude: 37.51347, // 지도 중앙 위도
    longitude: 127.041722, // 지도 중앙 경도
    zoom: 8,
    zoomControl: false,
    zoomControlOptions: { position: "TOP_RIGHT" },
};

const handleSearch = (selected) => {
    store.cityName = selected;
    store.fetchApi();
};
</script>
