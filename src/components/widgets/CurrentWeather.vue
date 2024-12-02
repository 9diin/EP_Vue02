<template>
    <Card class="w-1/4 min-w-[25%]">
        <CardHeader>
            <CardTitle class="text-xl">Today</CardTitle>
            <CardDescription>오늘 현재 날씨를 조회하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent>
            <div class="w-full flex items-center gap-6">
                <div class="w-full h-full flex flex-col">
                    <div class="flex items-center gap-4">
                        <img src="/assets/images/logo.svg" alt="" class="h-16 w-16" />
                        <div class="w-full flex items-start gap-1">
                            <span class="poppins-bold scroll-m-20 text-6xl font-extrabold tracking-tight">30</span>
                            <span class="text-3xl font-extrabold">&#8451;</span>
                        </div>
                    </div>
                    <Separator class="mt-2 mb-3" />
                    <div class="w-full flex flex-col">
                        <div class="flex items-center justify-start gap-2">
                            <CalendarDays class="h-4 w-4" />
                            <p class="leading-6">2024. 11. 30</p>
                        </div>
                        <div class="flex items-center justify-start gap-2">
                            <MapPinned class="h-4 w-4" />
                            <p class="leading-6">Seoul&middot;South Korea</p>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPinned } from "lucide-vue-next";
</script>
