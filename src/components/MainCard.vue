<template>
  <main>

    <div class="main-top">
      <div class="top-search">
        <input-search
          @triggerSearch="searchDrink"
          @clearSearch="clearSearch" />
      </div>
      <div>
        <select class="filter" v-model="byFilter">
          <option
            v-for="oneFilter in filterList" :key="oneFilter.value"
            :value="oneFilter.value"
           >{{oneFilter.title}}</option>
        </select>
      </div>
    </div>

    <div class="results">
      <card-box
        v-for="oneDrink in drinks" :key="oneDrink.idDrink"
        :idDrink="oneDrink.idDrink"
        :strDrink="oneDrink.strDrink"
        :strCategory="oneDrink.strCategory"
        :strDrinkThumb="oneDrink.strDrinkThumb"
        :strInstructions="oneDrink.strInstructions"
        @openModal="openDetailsModal"
        >
      </card-box>
    </div>

    <modal-win ref="modalDetails" />
    <snackbar ref="snackbar" :textToShow="snackText"/>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MainCard',
  data () {
    return {
      snackText: '',
      drinks: [],
      byFilter: 'name',
      filterList: [
        {
          value: 'name',
          title: 'By Name'
        },
        {
          value: 'ingredient',
          title: 'By Ingredient'
        }
      ],
      auxSearch: ''
    }
  },
  watch: {
    byFilter () {
      this.searchDrink(this.auxSearch)
    }
  },
  methods: {
    searchDrink (value) {
      this.auxSearch = value
      let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
      let formData = {
        s: value.toLowerCase()
      }
      if (this.byFilter === 'ingredient') {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?'
        formData = {
          i: value.toLowerCase()
        }
      }

      axios.get(url, {params: formData})
        .then((response) => {
          if (response.status === 200) {
            if (this.byFilter === 'name') {
              this.drinks = response.data.drinks
            } else {
              this.drinks = this.getDrinkDetails(response.data.drinks)
            }
          }
        })
        .catch((error) => {
          this.snackText = error
          this.$refs.snackbar.showSnack()
        })
    },
    clearSearch () {
      this.drinks = []
      this.auxSearch = ''
    },
    getDrinkDetailsById (idDrink) {
      let formData = {
        i: idDrink
      }
      return axios('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {params: formData})
        .then((response) => {
          if (response.status === 200) {
            if (response.data.drinks.length > 0) {
              return response.data.drinks[0]
            }
          }
          return []
        })
        .catch((error) => {
          this.snackText = error
          this.$refs.snackbar.showSnack()
        })
    },
    getDrinkDetails (listDrinks) {
      let results = []
      if (listDrinks) {
        for (let i = 0; i < listDrinks.length; i++) {
          this.getDrinkDetailsById(listDrinks[i].idDrink)
            .then(infoDrink => {
              results.push(infoDrink)
            })
        }
      }
      return results
    },
    openDetailsModal (value) {
      let auxDrink = this.drinks.find(elem => {
        return elem.idDrink === value
      })
      if (auxDrink) {
        this.$refs.modalDetails.openModal(auxDrink)
      } else {
        this.snackText = 'Drink not found'
        this.$refs.snackbar.showSnack()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-top {
  text-align: center;
}
.main-top div {
  display: inline-block;
}

.top-search {
  padding: 10px;
}

.filter {
  height: 25px;
  border-radius: 5px;
}
.filter:focus{
  outline: none;
}

.results{
  display: flex;
  flex-wrap: wrap;
}
.results > div {
  margin: 4%;
}

</style>
