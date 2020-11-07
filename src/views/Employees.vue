<template>
  <div id="container">
    <EmployeeList :employees="employees" />
  </div>
</template>


<script>
import EmployeeList from "../components/EmployeeList.vue"
export default {
  name: 'Employees',
  components: {
    EmployeeList
  },
  data() {
    return {
    }
  },
  computed: {
    employees() {
      return this.$root.$data.employees;
    }
  },
}
</script>
