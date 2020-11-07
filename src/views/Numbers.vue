<template>
<div>
    <div class="numbers">
      <button class="button" id="1button" @click="select(1)">1</button>
      <button class="button" id="2button" @click="select(2)">2</button>
      <button class="button" id="3button" @click="select(3)">3</button>
      <button class="button" id="4button" @click="select(4)">4</button>
      <button class="button" id="5button" @click="select(5)">5</button>
      <button class="button" id="6button" @click="select(6)">6</button>
      <button class="button" id="7button" @click="select(7)">7</button>
      <button class="button" id="8button" @click="select(8)">8</button>
      <button class="button" id="9button" @click="select(9)">9</button>
      <button class="button" id="0button" @click="select(0)">0</button>
    </div>
    <EmployeeList :employees="employees" />
  </div>
</template>

<script>
import EmployeeList from "../components/EmployeeList.vue"
export default {
  name: 'Numbers',
  components: {
    EmployeeList
  },
  data() {
    return {
      number: '',
    }
  },
  computed: {
    employees() {
      return this.$root.$data.employees.filter(employee => employee.favorite_digit === this.number);
    }
  },
  methods: {
    select(number) {
      this.number = number;
    }
  }
}
</script>
