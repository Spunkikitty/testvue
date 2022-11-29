<template>
  <div>
    <h1>Welcome to {{ company }}</h1>

    <h2 id="container">Registration Page</h2>

    <div class="image-1">
      <div class="Register">
        <form class="form-1" @submit.prevent="onSubmit">
          <!-- TODO indicate signup page, add styling -->
          Name:
          <input type="text" :label-for="nameSet" placeholder="name" /><br />
          Email:
          <input
            type="text"
            :label-for="emailSet"
            placeholder="@groupmania.com"
          /><br />
          Password:
          <input
            type="password"
            :label-for="passwordSet"
            placeholder="password"
          /><br />

          <!-- TODO: finish click event handler for submitting signup -->
          <button class="regUp" @click="(event) => say('Thank You', event)">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// TODO: verify backend signup api still works

// TODO: signup add signup method for button class
// TODO: use fetch API in new signup method to send post request to backend signup api
// TODO: After successful signup redirect user to login page
// TODO: remove components/ signupPage.vue in components

export default {
  name: "signupPage",
  data() {
    return {
      name: " ",
      email: "",
      password: " ",
      Groupmania: "{{company}}",
    };
  },
  methods: {
    submitForm() {
      // this.$emit('submit', { email, password })
      console.log(this.name, this.email);
    },
  },
};

// TODO this.$router.push("/login");
</script>

<style>
/* TODO: style signup page think chapter 2, button keep color palette of company  written down from logo */
.background-image {
  background-image: center;
}

.form-1 {
  background-color: #ffd7d7;
}
</style>
