<template>
  <div class="new-employee">
    <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <label>Employee Id</label>
          <div class="input-field col s12">
            <input type="number" v-model="employee.employee_id" required />
          </div>
        </div>
        <div class="row">
          <label>Name</label>
          <div class="input-field col s12">
            <input type="text" v-model="employee.name" required />
          </div>
        </div>
        <div class="row">
          <label>Department</label>
          <div class="input-field col s12">
            <input type="text" v-model="employee.department" required />
          </div>
        </div>
        <div class="row">
          <label>Position</label>
          <div class="input-field col s12">
            <input type="text" v-model="employee.position" required />
          </div>
        </div>

        <button type="submit" class="btn">Add Employee</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default {
  setup() {
    const router = useRouter();
    const db = getFirestore();
    const employee = ref({
      employee_id: null,
      name: null,
      department: null,
      position: null,
    });

    const saveEmployee = async () => {
      try {
        await addDoc(collection(db, "employees"), {
          employee_id: employee.value.name,
          name: employee.value.name,
          department: employee.value.department,
          position: employee.value.position,
        });
        router.push("/");
      } catch (err) {
        console.error(err);
      }
    };

    return {
      employee,
      saveEmployee,
    };
  },
};
</script>

<style scoped>
.new-employee {
  margin-top: 40px;
  margin-left: 130px;
  margin-right: 100px;
  text-align: left;
}
label {
  text-align: left;
  font-size: 14px;
  color: black;
}
button {
  margin-right: 10px;
}
</style>
