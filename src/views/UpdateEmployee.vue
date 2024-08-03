<template>
  <div class="update-employee">
    <div class="row">
      <form @submit.prevent="updateEmployee" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="number" v-model="employee_id" required disabled />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="department" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
          </div>
        </div>
        <button type="submit" class="btn">Update Employee</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, query, where, getDocs, updateDoc } from "firebase/firestore";
const db = getFirestore();

export default {
  data() {
    return {
      employee_id: null,
      name: null,
      department: null,
      position: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    fetchData(to.params.employee_id).then(employeeData => {
      next(vm => {
        vm.employee_id = employeeData.employee_id;
        vm.name = employeeData.name;
        vm.department = employeeData.department;
        vm.position = employeeData.position;
      });
    });
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async fetchData(employeeId) {
      const q = query(collection(db, "employees"), where("employee_id", "==", employeeId));
      const querySnapshot = await getDocs(q);
      let employeeData = {};
      querySnapshot.forEach(doc => {
        employeeData = doc.data();
      });
      this.employee_id = employeeData.employee_id;
      this.name = employeeData.name;
      this.department = employeeData.department;
      this.position = employeeData.position;
    },
    async updateEmployee() {
      const q = query(collection(db, "employees"), where("employee_id", "==", this.$route.params.employee_id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async doc => {
        await updateDoc(doc.ref, {
          employee_id: this.employee_id,
          name: this.name,
          department: this.department,
          position: this.position,
        });
      });
      this.$router.push({ name: "ViewEmployee", params: { employee_id: this.employee_id } });
    },
  },
};
</script>

<style>
.update-employee {
  margin-top: 40px;
  margin-left: 130px;
  margin-right: 100px;
  text-align: left;
}
</style>
