<template>
  <div class="btn"><a @click.prevent="callAction(valueCall)">{{name}}</a></div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    valueCall: {
      type: String,
      required: false
    }
  },
  methods: {
    callAction (value) {
      this.$emit('actionCalled', value)
    }
  }
}
</script>

<style scoped>
.btn {
  width: 70px;
  text-align: center;
}
.btn a {
  text-decoration: none;
  color:black;
  text-transform:uppercase;
  font-size: 14px;
}
.btn a:hover {
  color: red;
  cursor: pointer;
}

</style>
