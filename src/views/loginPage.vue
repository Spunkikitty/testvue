<template>
    <div class="wrapper" />
    <div>
      <router-view></router-view>
      </div>



    <form class="form-2">

        Email <input type="text" name="email"  v-model="email"><br />
        Password <input type="text" name ="password" placeholder="password" ><br />
       
        <button class="login-1" > Login </button>
    </form>
</template>
<script>


export default {
    name: "loginPage",
    data() {
        return {
            email: " ",
            password: " "
        }
         
    }


}






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