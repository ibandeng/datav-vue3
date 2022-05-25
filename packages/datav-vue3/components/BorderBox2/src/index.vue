<template>
  <div ref="borderBox2" class="dv-border-box-2">
    <svg class="dv-border-svg-container" :width="width" :height="height">
      <polygon
        :fill="backgroundColor" :points="`
        7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}
      `"
      />

      <polyline
        :stroke="state.mergedColor[0]"
        :points="`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`"
      />
      <polyline
        :stroke="state.mergedColor[1]"
        :points="`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`"
      />
      <circle :fill="state.mergedColor[0]" cx="11" cy="11" r="1" />
      <circle :fill="state.mergedColor[0]" :cx="width - 11" cy="11" r="1" />
      <circle :fill="state.mergedColor[0]" :cx="width - 11" :cy="height - 11" r="1" />
      <circle :fill="state.mergedColor[0]" cx="11" :cy="height - 11" r="1" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import autoResize from 'packages/datav-vue3/utils/autoResize'
import { deepClone, deepMerge } from 'packages/datav-vue3/utils'

const props = defineProps({
  color: {
    type: Array,
    default: () => ([]),
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
})
const borderBox2 = ref<HTMLElement | null>(null)

const injectColor = inject('color', props.color)
const _color = computed(() =>
  props.color.length === 0 ? injectColor : props.color
)

const state = reactive({
  defaultColor: ['#fff', 'rgba(255, 255, 255, 0.6)'],
  mergedColor: [],
})

const mergeColor = () => {
  state.mergedColor = deepMerge(deepClone(state.defaultColor, true), _color.value || [])
}

watch(() => _color.value, () => {
  mergeColor()
})

const { width, height } = autoResize(borderBox2)

onMounted(() => {
  mergeColor()
})

</script>

<style lang="less">
.dv-border-box-2 {
  position: relative;
  width: 100%;
  height: 100%;

  .dv-border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    &>polyline {
      fill: none;
      stroke-width: 1;
    }
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
