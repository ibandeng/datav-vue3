<template>
  <div wfull hfull flex="~ col" gap10 justify-center items-center bg-dark>
    <div mt10 text-white>
      不在 config-provider 里面包含的组件使用默认的配色，或自己设置配色
    </div>
    <div style="width:50rem;height:18rem;" flex="~" p3 justify-center items-center bg-dark>
      <dv-border-box1>
        <div w800px h300px color-white flex justify-center items-center>
          dv-border-box1
        </div>
      </dv-border-box1>
    </div>
    <dv-config-provider :color="color">
      <div mt10 text-white>
        在 config-provider 里面包含的组件统一使用 config-provider 指定的配色，或自己设置配色
      </div>
      <div style="width:50rem;height:18rem;" flex="~ " p3 justify-center items-center bg-dark>
        <dv-border-box1>
          <div w800px h300px color-white flex justify-center items-center>
            dv-border-box1
          </div>
        </dv-border-box1>
      </div>
      <div style="width:50rem;height:18rem;" flex="~ " p3 justify-center items-center bg-dark>
        <dv-border-box1 :color="['#ff002b', '#00ffd5']">
          <div w800px h300px color-white flex justify-center items-center>
            自己设置配色示例
          </div>
        </dv-border-box1>
      </div>
      <div style="width:50rem;height:18rem;" flex="~ " p3 justify-center items-center bg-dark>
        <dv-border-box2>
          <div w800px h300px color-white flex justify-center items-center>
            dv-border-box2
          </div>
        </dv-border-box2>
      </div>
      <div style="width:50rem;height:18rem;" flex="~ " p3 justify-center items-center bg-dark>
        <dv-border-box3>
          <div w800px h300px color-white flex justify-center items-center>
            dv-border-box3
          </div>
        </dv-border-box3>
      </div>
    </dv-config-provider>
  </div>
</template>

<script setup>
const color = reactive(['#0077ff', '#ff8800'])
</script>
