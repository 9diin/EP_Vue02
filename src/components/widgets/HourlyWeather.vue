<template>
    <Card class="flex-1 max-w-[calc(50%-48px)]">
        <CardHeader>
            <CardTitle class="text-xl">Hourly</CardTitle>
            <CardDescription>오늘의 시간대별 날씨를 조회하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent class="w-full flex items-center gap-4 overflow-x-scroll">
            <Card v-for="item in data" :key="item.time" class="w-24 min-w-24 h-fit flex flex-col items-center py-[6px] gap-1 bg-neutral-50">
                <span class="text-sm mt-1">{{ useFormattedTime(item.time) }}</span>
                <img v-if="item.condition.icon.includes('day')" :src="`/assets/icons/${item.condition.code}d.svg`" alt="" class="h-14 w-14" />
                <img v-else :src="`/assets/icons/${item.condition.code}n.svg`" alt="" class="h-14 w-14" />
                <div class="w-full flex items-start justify-center">
                    <span class="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">{{ item.temp_c }}</span>
                    <span class="text-[13px] ml-[1px] mt-[2px] font-medium">&#8451;</span>
                </div>
            </Card>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { computed, toRefs } from "vue";

interface HourlyData {
    time: string;
    condition: {
        code: number;
        icon: string;
    };
    temp_c: number;
}

const props = defineProps<{ data: HourlyData[] }>();
const { data } = toRefs(props);

const useFormattedTime = (time: string) => {
    return computed(() => {
        const [date, hourString] = time.split(" ");
        const [hour, minute] = hourString.split(":").map(Number);

        let formattedTime;

        if (hour === 0) formattedTime = "오전 0시";
        else if (hour === 12) formattedTime = "낮 12시";
        else {
            const isAM = hour < 12; // 오전인지 확인
            const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // 12시간 형식으로 변환
            const period = isAM ? "오전" : "오후";

            formattedTime = `${period} ${formattedHour}시`;
        }
        return formattedTime;
    });
};
</script>
