<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.logo {
  height: 50px;
  width: 50px;
  background-color: rgb(16, 170, 221);
  border-radius: 50%;
  display: block;
  margin:auto;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 10px
}
.logo img {
  width: 40px;
  padding-top:10px;
  padding-left: 5px;
}
.top{
  height: 70px;
}
.top div {
  display: inline-block;
  text-align: left;
}
.top-titles{
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
}
.top-titles div {
  display: block;
  overflow: auto;
}

.title {
  font-weight: bold;
  font-size: 18px;
}
.subtitle {
  font-size: 12px;
}
</style>
