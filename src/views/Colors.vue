<template>
  <div>
    <div class="colors">
      <button class="button" id="redButton" @click="select('red')">Red</button>
      <button class="button" id="orangeButton" @click="select('orange')">Orange</button>
      <button class="button" id="yellowButton" @click="select('yellow')">Yellow</button>
      <button class="button" id="greenButton" @click="select('green')">Green</button>
      <button class="button" id="blueButton" @click="select('blue')">Blue</button>
      <button class="button" id="indigoButton" @click="select('indigo')">Indigo</button>
      <button class="button" id="violetButton" @click="select('violet')">Violet</button>
      <button class="button" id="whiteButton" @click="select('white')">White</button>
      <button class="button" id="grayButton" @click="select('gray')">Gray</button>
      <button class="button" id="blackButton" @click="select('black')">Black</button>
    </div>
    <EmployeeList :employees="employees" />
  </div>
</template>

<script>
import EmployeeList from "../components/EmployeeList.vue"
export default {
  name: 'Colors',
  components: {
    EmployeeList
  },
  data() {
    return {
      color: '',
    }
  },
  computed: {
    employees() {
      return this.$root.$data.employees.filter(employee => employee.favorite_color === this.color);
    }
  },
  methods: {
    select(color) {
      this.color = color;
    }
  }
}
</script>
