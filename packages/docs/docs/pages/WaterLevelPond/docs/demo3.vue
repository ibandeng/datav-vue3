<template>
  <div style="width:800px;height:250px;" py10 flex="~ " justify-center items-center bg-dark>
    <dv-water-level-pond :config="config" style="width:200px;height:200px" />
  </div>
</template>
<script lang="ts" setup>
const config = reactive({
  data: [55],
  shape: 'round',
})
</script>
