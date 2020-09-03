<template>
  <div class="chips">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.chips{
  border: none;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 12px;
  margin-right: 10px;
  font-size: 14px;
  color: white;
  background-color: green;
}
</style>
