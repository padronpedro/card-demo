<template>
  <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="top">
          <div class="logo"><img src="@/assets/logo.png"></div>
          <div class="top-titles">
            <div class="title">{{infoDrink.strDrink}}</div>
            <div class="subtitle">{{infoDrink.strCategory}}</div>
          </div>
        </div>
        <div class="modal-main-content" >
          <p><strong>Type:</strong> {{infoDrink.strAlcoholic}}</p>
          <p style="text-align:justify; margin-right:7px">
            <strong>Instructions:</strong>
            {{infoDrink.strInstructions}}</p>
          <p>
            <strong>Ingredients:</strong>
            <ul>
              <li v-for="(listIng, index) in getIngredients(infoDrink)" :key="index" >{{listIng}}</li>
            </ul>
          </p>
          <p><strong>Preview:</strong></p>
          <div class="imageBox">
            <img class="image" :src="infoDrink.strDrinkThumb" />
          </div>
          <div class="listChips">
            <one-chip v-for="(oneTag,index) in getTags(infoDrink.strTags)" :key="index">
              {{oneTag}}
            </one-chip>
          </div>
        </div>
        <div class="bottom">
          <div class="modal-btn">
            <action-button name="Close" @actionCalled="closeModal" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      infoDrink: ''
    }
  },
  methods: {
    openModal (auxDrink) {
      var modal = document.getElementById('myModal')
      modal.style.display = 'block'
      this.infoDrink = auxDrink
    },
    closeModal () {
      var modal = document.getElementById('myModal')
      modal.style.display = 'none'
      this.infoDrink = ''
    },
    getIngredients (auxDrink) {
      let result = []
      for (let i = 1; i <= 15; i++) {
        let aux = ''
        if (auxDrink['strIngredient' + i]) {
          aux = auxDrink['strIngredient' + i]
          if (auxDrink['strMeasure' + i]) {
            aux = aux + ' (' + auxDrink['strMeasure' + i] + ')'
          }
          result.push(aux)
        }
      }
      return result
    },
    getTags (listTag) {
      if (listTag) {
        return listTag.split(',')
      }
    }
  }
}
</script>

<style scoped>

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-main-content {
  overflow: auto;
  height: 70%;
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  height: 400px;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.modal-btn {
  float: right;
}
.bottom {
  padding-top: 25px;
}
.bottom div{
  margin-right: 5px;
}
.imageBox {
  text-align: center;
}
.image{
  width: 50%;
}

.listChips div{
  display: inline-block;
  margin-top: 10px;
}

</style>
