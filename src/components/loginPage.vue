

<!--  -->

<template>
  <button class="login-1" />
</template>

<script>
import { profile } from 'console'

//@click="(event) => say('Welcome to GroupMania', event)"
export default {
  'login': {
    emits: {
      // No validation
      click: onclick,
     
}

      // Validate submit event
      submit: ({ email, password }) => {
        if (email && password) {
          return true
        } else {
          console.warn('Incorrect information!')
          return false
        }
      }
    },
    methods: {
      submitForm(email, password) {
        this.$emit('submit', { email, password })
      }
    }
  }

fetch("https://localhost:8080/profile", Credential:'include')
    .then(response => response.json())
    .then(data => (this.userId = data.id));

const app = new Vue({
  router,
  methods: {

    this.$router.push(profile);
  }
},


</script>



