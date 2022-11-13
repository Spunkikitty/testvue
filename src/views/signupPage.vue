
<template>
  <div id="app">
    <h1>Welcome to {{ company }} </h1>

    <div class ="image-1">
    </div>
  </div>
  <form class="form-1" @submit.prevent="onSubmit">
<!-- TODO indicate signup page, add styling -->
    Name: <input type="text" placeholder="name"><br />
    Email: <input type="text" placeholder="email"><br />
    Password: <input type="password" placeholder="password"><br />

    <button @click="(event) => warn('Use Company Email Only.', event)"> Submit </button>
  </form>

</template>

<script>
export default {
  name: "signupPage",
  data() {
    return {
      name: " ",
      email: " ",
      password: " ",
      Groupmania: "{{company}}"

    }
  }
}


// TODO this.$router.push("/login");

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

