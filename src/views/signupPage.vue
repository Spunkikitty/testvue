

 
<template>
  <div id="app">
    <h1>Welcome to {{ company }} </h1>

    <h2 id="container"> Registration Page</h2>

    <div class="image-1">
      <div class=" Register">


        <form class="form-1" @submit.prevent="onSubmit">
          <!-- TODO indicate signup page, add styling -->
          Name: <input type="text" :label-for="nameSet" placeholder="name"><br />
          Email: <input type="text" :label-for="emailSet" placeholder="@groupmania.com"><br />
          Password: <input type="password" :label-for="passwordSet" placeholder="password"><br />

          <button class="regUp" @click="(event) => say('Thank You', event)"> Submit </button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>




export default {
  name: "signupPage",
  data() {
    return {
      name: " ",
      email: "",
      password: " ",
      Groupmania: "{{company}}"

    }
  }
};








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

