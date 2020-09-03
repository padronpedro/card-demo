<template>
  <label>
    <input
      type="text"
      class="search-box"
      v-model="textSearch"
      >
  </label>
</template>

<script>
export default {
  data () {
    return {
      textSearch: ''
    }
  },
  watch: {
    textSearch (value) {
      if (value.length > 3) {
        this.$emit('triggerSearch', value)
      } else {
        this.$emit('clearSearch')
      }
    }
  }
}
</script>

<style scoped>
.search-box{
  width: 300px;
  height: 25px;
  border-radius: 50px;
  border: 1px solid rgb(97, 95, 95);
  padding-left: 30px;
  font-size: 18px;
  color:rgb(129, 123, 123)
}
.search-box:focus {
  outline: none;
}
label {
  position: relative;
}
/* adding an icon to the left of the search box */
label:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 15px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
}
</style>
