<template>
    <div class = "wrapper" />

    
    
    <form class = "form-2">
        Email <input type = "text" placeholder ="email"><br/> 
        Password <input type = "text" placeholder="password"><br/> 
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

fetch()

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