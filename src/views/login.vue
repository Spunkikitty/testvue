<template>
    <div :style="{ 'background-image': 'url(./assets/images/icon-above-front.png)' }">
    </div>
    <form class=form-2>
        <input type="text" placeholder="email"> Email
        <input type="text" placeholder="password"> Password
        <button class="login-1" @click="(event) => say('Welcome to GroupMania', event)"> Login </button>
    </form>
</template>
<script>
export default {
    name: "Groupmania",
    data() {
        return {
            email: " ",
            password: " "
        }
    }
};

</script>
<style>

</style>