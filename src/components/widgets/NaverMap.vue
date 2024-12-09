<template>
    <Card class="w-1/4 min-w-[25%]">
        <naver-map style="width: 100%; height: 100%" @onLoad="onLoadMap($event)" />
    </Card>
</template>

<script setup>
import { Card } from "@/components/ui/card";
import { NaverMap } from "vue3-naver-maps";

const onLoadMap = (map) => {
    const latLng = new window.naver.maps.LatLng(37.51347, 127.041722);
    map.setCenter(latLng); // Change Map Center
};
</script>
