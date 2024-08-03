<template>
  <div class="view-employee">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ employee.name }}</h4>
      </li>
      <li class="collection-item">Employee ID : {{ employee.employee_id }}</li>
      <li class="collection-item">Department : {{ employee.department }}</li>
      <li class="collection-item">Position : {{ employee.position }}</li>
    </ul>

    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteEmployee" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        :to="{ name: 'UpdateEmployee', params: { employee_id: employee.employee_id } }"
        class="btn-floating btn-large green"
      >
        <i class="material-icons">create</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getFirestore, collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const db = getFirestore();
    const employee = ref({});

    const fetchData = async () => {
      const q = query(
        collection(db, "employees"),
        where("employee_id", "==", route.params.employee_id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        employee.value = doc.data();
      });
    };

    const deleteEmployee = async () => {
      if (confirm("Are you sure?")) {
        const q = query(
          collection(db, "employees"),
          where("employee_id", "==", route.params.employee_id)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
          router.push("/");
        });
      }
    };

    onMounted(fetchData);

    return {
      employee,
      deleteEmployee,
    };
  },
};
</script>

<style scoped>
.view-employee {
  margin-top: 30px;
  margin-left: 60px;
  margin-right: 100px;
  text-align: left;
}
button {
  margin-left: 10px;
}
</style>
