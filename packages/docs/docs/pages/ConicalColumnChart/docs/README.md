<!-- 加载 demo 组件 start -->
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 锥形柱图

锥形柱图

## 基础用法
<Preview comp-name="ConicalColumnChart" demo-name="demo1">
  <demo1 />
</Preview>

## 数值显示
<Preview comp-name="ConicalColumnChart" demo-name="demo2">
  <demo2 />
</Preview>

## config属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
data |	柱数据 |	`Array<Object>` |	`见下方data属性` |	`[]`
img |	柱顶图片url |	`Array<String>` |	--- |	`[]`
fontSize |	文字大小 |	`Number` |	--- |	`12`
imgSideLength |	图片边长 |	`Number` |	--- |	`30`
columnColor |	柱颜色 |	`String` |	--- |	`'rgba(0, 194, 255, 0.4)'`
textColor |	文字颜色 |	`String` |	--- |	`'#fff'`
showValue |	显示数值 |	`Boolean` |	--- |	`false`

**将根据自动排序后的排名顺序使用img中的图片。**

## data属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
name |	柱名称 |	`String` |	--- |	---
value |	柱数值 |	`Number` |	---	| ---

