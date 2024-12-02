<template>
    <Card class="w-1/4">
        <CardHeader>
            <CardTitle class="text-xl">7 Days</CardTitle>
            <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col w-full gap-1">
            <div class="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-md" key="{item.date}">
                <div class="w-fit h-10 flex items-center gap-2">
                    <img src="/assets/icons/1000d.svg" alt="" class="h-7 w-7" />
                    <div class="flex items-center gap-1 w-20">
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">25</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">10</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-end gap-5 mb-1">
                    <small class="text-sm leading-none">Nov 30</small>
                    <small class="text-sm leading-none">토요일</small>
                </div>
            </div>
            <div class="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-md" key="{item.date}">
                <div class="w-fit h-10 flex items-center gap-2">
                    <img src="/assets/icons/1000d.svg" alt="" class="h-7 w-7" />
                    <div class="flex items-center gap-1 w-20">
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">25</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">10</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-end gap-5 mb-1">
                    <small class="text-sm leading-none">Nov 30</small>
                    <small class="text-sm leading-none">토요일</small>
                </div>
            </div>
            <div class="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-md" key="{item.date}">
                <div class="w-fit h-10 flex items-center gap-2">
                    <img src="/assets/icons/1000d.svg" alt="" class="h-7 w-7" />
                    <div class="flex items-center gap-1 w-20">
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">25</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">10</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-end gap-5 mb-1">
                    <small class="text-sm leading-none">Nov 30</small>
                    <small class="text-sm leading-none">토요일</small>
                </div>
            </div>
            <div class="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-md" key="{item.date}">
                <div class="w-fit h-10 flex items-center gap-2">
                    <img src="/assets/icons/1000d.svg" alt="" class="h-7 w-7" />
                    <div class="flex items-center gap-1 w-20">
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">25</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">10</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-end gap-5 mb-1">
                    <small class="text-sm leading-none">Nov 30</small>
                    <small class="text-sm leading-none">토요일</small>
                </div>
            </div>
            <div class="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-md" key="{item.date}">
                <div class="w-fit h-10 flex items-center gap-2">
                    <img src="/assets/icons/1000d.svg" alt="" class="h-7 w-7" />
                    <div class="flex items-center gap-1 w-20">
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">25</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">10</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-end gap-5 mb-1">
                    <small class="text-sm leading-none">Nov 30</small>
                    <small class="text-sm leading-none">토요일</small>
                </div>
            </div>
            <div class="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-md" key="{item.date}">
                <div class="w-fit h-10 flex items-center gap-2">
                    <img src="/assets/icons/1000d.svg" alt="" class="h-7 w-7" />
                    <div class="flex items-center gap-1 w-20">
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">25</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">10</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-end gap-5 mb-1">
                    <small class="text-sm leading-none">Nov 30</small>
                    <small class="text-sm leading-none">토요일</small>
                </div>
            </div>
            <div class="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-md" key="{item.date}">
                <div class="w-fit h-10 flex items-center gap-2">
                    <img src="/assets/icons/1000d.svg" alt="" class="h-7 w-7" />
                    <div class="flex items-center gap-1 w-20">
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">25</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                        <div class="w-full h-full flex items-start gap-[2px]">
                            <span class="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">10</span>
                            <span class="text-xs font-normal mt-[3px]">&#8451;</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-end gap-5 mb-1">
                    <small class="text-sm leading-none">Nov 30</small>
                    <small class="text-sm leading-none">토요일</small>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
</script>

<style scoped></style>
