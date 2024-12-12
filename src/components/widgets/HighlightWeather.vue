<template>
    <Card class="flex-1">
        <CardHeader>
            <CardTitle class="text-xl">Today's Highlights</CardTitle>
            <CardDescription>오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col gap-5">
            <div class="flex items-center gap-5">
                <!-- 해양 및 조수 데이터 위젯 -->
                <Card class="w-full bg-neutral-100">
                    <CardHeader>
                        <CardDescription class="font-semibold text-neutral-700">
                            해양 및 조수 데이터
                            <span class="text-neutral-400 font-normal ml-1">Marine and Sailing</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="w-full flex items-center justify-between">
                        <img src="/assets/images/waves.png" alt="" class="h-14" />
                        <div class="w-fit grid grid-cols-4 gap-3">
                            <div class="flex flex-col items-center">
                                <p class="text-sm text-muted-foreground">1회 - 만조</p>
                                <p class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">{{ data.moonset }}</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <p class="text-sm text-muted-foreground">2회 - 간조</p>
                                <p class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">{{ data.sunrise }}</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <p class="text-sm text-muted-foreground">3회 - 만조</p>
                                <p class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">{{ data.moonrise }}</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <p class="text-sm text-muted-foreground">4회 - 간조</p>
                                <p class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">{{ data.sunset }}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <!-- 일출/일몰 위젯 -->
                <Card class="w-full h-fit bg-neutral-50">
                    <CardHeader>
                        <CardDescription class="font-semibold text-neutral-700">
                            일출/일몰
                            <span class="text-neutral-400 font-normal ml-1">Sunrise & Sunset</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="grid grid-cols-2 items-center">
                        <div class="w-full flex items-center gap-2">
                            <img src="/assets/icons/1000d.svg" alt="" class="h-14" />
                            <div class="flex flex-col">
                                <p class="text-sm text-muted-foreground">Sunrise</p>
                                <p class="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">{{ data.sunrise }}</p>
                            </div>
                        </div>
                        <div class="w-full flex items-center gap-2">
                            <img src="/assets/icons/1000n.svg" alt="" class="h-14" />
                            <div class="flex flex-col">
                                <p class="text-sm text-muted-foreground">Sunset</p>
                                <p class="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">{{ data.sunset }}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div class="w-full grid grid-cols-4 gap-5">
                <Card class="w-full h-fit bg-neutral-50">
                    <CardHeader>
                        <CardDescription class="font-semibold text-neutral-700">
                            습도
                            <span class="text-neutral-400 font-normal ml-1">Humidity</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="flex items-center justify-between">
                        <img src="/assets/images/humidity.svg" alt="" class="h-10 w-10" />
                        <p class="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                            {{ data.humidity }}
                            <span class="text-lg ml-1">%</span>
                        </p>
                    </CardContent>
                </Card>
                <Card class="w-full h-fit bg-neutral-50">
                    <CardHeader>
                        <CardDescription class="font-semibold text-neutral-700">
                            기압
                            <span class="text-neutral-400 font-normal ml-1">Pressure</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="flex items-center justify-between">
                        <img src="/assets/images/wind.svg" alt="" class="h-10 w-10" />
                        <p class="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                            {{ data.pressure }}
                            <span class="text-lg ml-1">hPa</span>
                        </p>
                    </CardContent>
                </Card>
                <Card class="w-full h-fit bg-neutral-50">
                    <CardHeader>
                        <CardDescription class="font-semibold text-neutral-700">
                            가시거리
                            <span class="text-neutral-400 font-normal ml-1">Visibility</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="flex items-center justify-between">
                        <img src="/assets/images/fog.svg" alt="" class="h-10 w-10" />
                        <p class="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                            {{ data.visibility }}
                            <span class="text-lg ml-1">km</span>
                        </p>
                    </CardContent>
                </Card>
                <Card class="w-full h-fit bg-neutral-50">
                    <CardHeader>
                        <CardDescription class="font-semibold text-neutral-700">
                            체감온도
                            <span class="text-neutral-400 font-normal ml-1">Feels Like</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="flex items-center justify-between">
                        <img src="/assets/images/hot.svg" alt="" class="h-10 w-10" />
                        <p class="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight flex items-start">
                            {{ data.feelsLike }}
                            <span class="text-lg ml-[2px] -mt-[2px]">&#8451;</span>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { toRefs } from "vue";

interface HighlightData {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    humidity: number;
    pressure: number;
    visibility: number;
    feelsLike: number;
}

const props = defineProps<{ data: HighlightData }>();
const { data } = toRefs(props);
</script>
