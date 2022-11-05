
<template>
  <div id="app">
    <h1>Welcome to Groupmania</h1>

    <div :style="{ 'background-image': 'url(./assets/images/icon-above-front.png)' }">
    </div>
  </div>
  <form class="form-1" @submit.prevent="onSubmit">
    <ul>
      <li>FirstName ${{ FirstName }}</li>
      <li>LastName ${{ LastName }}</li>
      <li>Email ${{ Email }}</li>
      <li>Password ${{ Password }}</li>
    </ul>

    <button @click="(event) => warn('Use Company Email Only.', event)"> Submit </button>
  </form>

</template>

<script>


export default {
  name: "GroupmaniaView",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  }
}




</script>

<style>
.background-image {
  background-image: center;
}

;

.form-1 {
  background-color: #ffd7d7;

}

;
</style>

