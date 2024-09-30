<template>
  <header class="hero flex items-center">
    <div class="container">
      <div class="welcome flex items-center">
        <span>Welcome to</span>
        <img src="/icons/logo-2.svg" alt="Restaurant Logo" />
      </div>
      <h1>The Best <span>Restaurant</span> Website</h1>
      <p>
        We serve the best food in the city, offering exceptional customer service, delicious meals, and unbeatable prices. Come visit us!
      </p>
      <div>
        <router-link to="/aboutus" class="btn btn-primary">Read More</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainApp', // Make sure this name is consistent with your references
}
</script>


