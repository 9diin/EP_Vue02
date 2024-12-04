<template>
    <Card class="flex-1 max-w-[calc(50%-48px)]">
        <CardHeader>
            <CardTitle class="text-xl">Hourly</CardTitle>
            <CardDescription>오늘의 시간대별 날씨를 조회하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent class="w-full flex items-center gap-4 overflow-x-scroll">
            <Card class="w-24 min-w-24 h-fit flex flex-col items-center py-[6px] gap-1 bg-neutral-50">
                <span class="text-sm mt-1">오후 4시</span>
                <img src="/assets/images/logo.svg" alt="" class="h-14 w-14" />
                <div class="w-full flex items-start justify-center">
                    <span class="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">30</span>
                    <span class="text-[13px] ml-[1px] mt-[2px] font-medium">&#8451;</span>
                </div>
            </Card>
            <Card class="w-24 min-w-24 h-fit flex flex-col items-center py-[6px] gap-1 bg-neutral-50">
                <span class="text-sm mt-1">오후 4시</span>
                <img src="/assets/images/logo.svg" alt="" class="h-14 w-14" />
                <div class="w-full flex items-start justify-center">
                    <span class="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">30</span>
                    <span class="text-[13px] ml-[1px] mt-[2px] font-medium">&#8451;</span>
                </div>
            </Card>
            <Card class="w-24 min-w-24 h-fit flex flex-col items-center py-[6px] gap-1 bg-neutral-50">
                <span class="text-sm mt-1">오후 4시</span>
                <img src="/assets/images/logo.svg" alt="" class="h-14 w-14" />
                <div class="w-full flex items-start justify-center">
                    <span class="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">30</span>
                    <span class="text-[13px] ml-[1px] mt-[2px] font-medium">&#8451;</span>
                </div>
            </Card>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
</script>
