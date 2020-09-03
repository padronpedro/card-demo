<template>
  <div class="card">
    <div class="top">
      <div class="logo"><img src="@/assets/logo.png"></div>
      <div class="top-titles">
        <div class="title">{{cropText(strDrink)}}</div>
        <div class="subtitle">{{strCategory}}</div>
      </div>
    </div>

    <div class="picture"><img :src="strDrinkThumb"></div>

    <div class="description">{{strInstructions}}</div>

    <div class="bottom">
      <action-button
        name="Open"
        :valueCall="idDrink"
        @actionCalled="openDetails" />
      <action-button name="Share" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBox',
  data () {
    return {

    }
  },
  props: {
    idDrink: {
      type: String,
      required: true
    },
    strDrink: {
      type: String,
      required: true
    },
    strCategory: {
      type: String,
      required: false
    },
    strDrinkThumb: {
      type: String,
      required: false
    },
    strInstructions: {
      type: String,
      required: false
    }
  },
  methods: {
    cropText (value) {
      return value.length > 25 ? value.substr(0, 20) + '...' : value
    },
    openDetails (value) {
      this.$emit('openModal', value)
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 1px 10px 4px 1px rgb(160, 158, 158);
  width: 325px;
}

.picture {
  text-align: center;
  background-color: lightblue;
  height: 150px;
}
.picture img{
  height: 150px;
}

.description {
  height: 50px;
  margin-left: 10px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bottom {
  padding: 10px;
  margin-left: 20px;
}
.bottom div{
  display: inline-block;
  margin-right: 20px;
}
</style>
