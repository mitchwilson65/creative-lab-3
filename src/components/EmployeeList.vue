<template>
<div class="wrapper">
  <div class="employees">
    <h1 id="employeeTitle">Employees</h1>
    <div class="employee" v-for="employee in employees" :key="employee.email">
      <div id="employeeInfo">
        <hr>
        <p id="infoText">{{employee.first_name}} {{employee.last_name}}, {{employee.email}}, {{employee.gender}},
        {{employee.favorite_color}}, {{employee.favorite_digit}} </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'EmployeeList',
  props: {
    employees: Array
  }
}
</script>

<style>
  #favorites {
    display: flex;
  }

  #employeeTitle {
    color: #0CF1F9;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .employees {
    width: 50%;
  }
</style>
