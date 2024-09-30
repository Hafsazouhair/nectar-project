<template>
  <nav>
    <div class="top">
   
    </div>

    <div class="navbar fixed  left-0 w-full z-50  bg-white">
      <div class="container flex justify-center">
        <a href="#" class="active"> <router-link to="/">Home</router-link></a>
      <router-link to="/aboutus">About us</router-link>
       <router-link to="/dishes">Dishes</router-link>
      <router-link to="/Blog" >Blog</router-link>
       <router-link to="/Shop" >Shop</router-link>
        <router-link to="/services" >Services</router-link> 
        <router-link to="/gallery" > Gallery</router-link> 
        <router-link to="/contact" >Contact us</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: 'HelloWorld',
}
</script>
