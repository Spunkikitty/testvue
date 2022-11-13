<template>
    <div class = "wrapper">

    </div>
    
    <form class = "form-2">
        <input type = "text" placeholder ="email"> Email
        <input type = "text" placeholder="password"> Password
        <button class = "login-1" @click="(event) => say('Welcome to GroupMania', event)"> Login </button>
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
};
// TODO add event listener for login button 
// use fetch API to post login request 
// store user ID and token in local storage 
// redirect user to postPage
</script>
<style>
.wrapper { 
 border: black 5pt bold; 
 background-color: aqua;
 
}

</style>