<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-vue-next";

const props = defineProps<{
    defaultValue?: string | number;
    modelValue?: string | number;
    class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
    (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
});
</script>

<template>
    <div class="flex items-center border border-input rounded-md bg-background">
        <SearchIcon class="h-5 w-5 ml-3" />
        <input
            v-model="modelValue"
            :class="
                cn(
                    'flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                    props.class
                )
            "
            placeholder="원하는 이미지를 검색하세요."
        />
    </div>
</template>
