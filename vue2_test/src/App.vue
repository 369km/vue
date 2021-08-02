<template>
  <div>
    <input type="text">
    <button>提交</button>
    <el-time-picker
        is-range
        v-model="value1"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围">
    </el-time-picker>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>
