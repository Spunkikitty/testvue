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
          <button class="regUp" @submit.prevent="(click) => say('Success!',click)">Submit</button>
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
      firstName: "",
      lastName: "",
      email: "",
      password: " ",
      Groupmania: "{{company}}",
    };
  },
  methods: {
    submitForm() {
      // this.$emit('submit', { email, password })
      console.log(this.name, this.email);
      //this.$router.push("/login");
    },
    methods: {
      postsignup() {
        fetch("http://localhost:3000/signup");
        user
      .save()
      .then(() => {
        res.status(201).json({
          message: "User added successfully!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      }
  
  

</script>    