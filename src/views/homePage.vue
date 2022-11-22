<template>

  <body />

  <h1 class="sum-1"> {{ message }}</h1>

  <div class = "navLinks">
 <section>
  <a button name="login" type="button" class="login-1" href="login">Login</a><br />
 </section>
 
  <section>
  <a button name="signup" type="button" class="signup-1" href="signup">Signup</a>
  </section>
  </div>

</template>


<script>
export default {
  name: "homePage",
  data() {
    return {
      message: " Welcome to our company social media site."
    }
  }
}





</script>

<style>
body {
  background-image: url('../assets/images/icon-left-font-monochrome-black.png');
  background-repeat: no-repeat;

  /* background: #ffd7d7; /*  fallback for old browsers  */
  /* background: -webkit-linear-gradient(to left, #ffd7d7, #fd2d21); Chrome 10-25, Safari 5.1-6  */
  /* background: linear-gradient(to right, #fd2d21, #ffffff); W3C,  IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+   */
  /* background-color: #fd2d01; */
}



/* .login-1 {
  border: black 10pt bold;
  width: 50pt;
  height: 50pt;
  background-color: #fd2d01;
  text-align: center;
  border-radius: 30%;

}



.signup-1 :hover {
  border: black 10pt bold;
  background-color: violet;
  text-align: center;
  border-radius: 30%;
} */
</style>