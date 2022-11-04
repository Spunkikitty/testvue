import vue from 'Vue',
import app from 'App',
<template> 
<div id=" app">
  <h1>Welcome to Groupmania</h1>
   
 <div :style="{'background-image':'url(./assets/images/icon-above-front.png)'}">
  </div>
</div>
<form class="form-1">
<ul> 
  <li>FirstName ${{FirstName}}</li>
  <li>LastName ${{LastName}}</li>
  <li>Email ${{Email}}</li>
  <li>Password ${{Password}}</li>
</ul>
</form>

</template>

<script>
export default{
  const app = new Vue({
      el: '#app',
      data: { 
        FirstName,
        LastName, 
        Email,
        Password
      }
      })
      <form @submit.prevent ="onSubmit">
      <button@click = "(event) => warn('Use Company Email Only.', event)"> Submit </button>
      </form>



</script>

<style>
 .background-image{ 
  background-image: center;
  };
  .form-1{
    
    background-color: #ffd7d7;

  }; 

</style>

