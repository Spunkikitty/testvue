
<template>
  <div id="app">
    <h1>Welcome to {{company}}</h1>

    <div :style="{ 'background-image': 'url(./assets/images/icon-above-front.png)' }">
    </div>
  </div>
  <form class="form-1" @submit.prevent="onSubmit">

    <input type="text" placeholder="name"> Name
    <input type="text" placeholder="email"> Email
    <input type="text" placeholder="password"> Password

    <button @click="(event) => warn('Use Company Email Only.', event)"> Submit </button>
  </form>

</template>

<script>
export default {
  name: "GroupmaniaView",
  data() {
    return {
      name: " ",
      email: " ",
      password: " ", 
      Groupmania: "{{Company}}"

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

