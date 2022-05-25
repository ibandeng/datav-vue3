<template>
  <slot />
</template>

<script lang="ts" setup>
const props = defineProps<{
  color: Array<string>
}>()
const { color } = props
const provideColor = reactive<Array<string>>(color)

provide('color', provideColor)
</script>

<style scoped>

</style>
