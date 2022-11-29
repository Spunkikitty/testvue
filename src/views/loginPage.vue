<template>
  <!-- <div class="wrapper" /> -->
  <!-- <div>
        <router-view></router-view>
    </div> -->

  <form class="form-2">
    Email <input type="text" name="email" v-model="email" /><br />
    Password <input type="password" name="password" v-model="password" /><br />

    <button class="login-1" type="submit" @click.prevent="submitForm">
      Login
    </button>
  </form>
</template>
<script>
export default {
  name: "loginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // this.$emit('submit', { email, password })
      console.log(this.email, this.password);
      // TODO: verify backend login API still working using API
      // TODO: use fetch API to Post login request to backend
      // Login request will have email and password
      // TODO: store userId and token recieved from backend into local storage
      //  redirect user to homepage or whatever page will have post then you will be done with login page
      // TODO: after this login page is working remove components/ loginPage.vue in components folder
      //Review project 05 product data in project 05
      localStorage.setItem("email", "userId");
    },
  },
};



// TODO add event listener for login button
// use fetch API to post login request
// store user ID and token in local storage
// redirect user to postPage
</script>
<style scoped>
.wrapper {
  border: black 5pt bold;
  background-color: aqua;
}
</style>
