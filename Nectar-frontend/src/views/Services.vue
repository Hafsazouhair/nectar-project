<template>
  <div class="text-center mt-40">
    <h4 class="font-bold text-2xl mb-8">Our Services</h4>
    <div class="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 px-5">

      <!-- Reservation Management -->
      <div class="flex gap-4 items-start flex-col text-center">
        <span class="icon-circle">
          <i class="fas fa-calendar-alt icon-small"></i>
        </span>
        <div>
          <h3 class="font-semibold text-xl">Reservation Management</h3>
          <p class="mt-1 text-gray-500">Easily manage and track customer reservations for your restaurant.</p>
        </div>
      </div>

      <!-- Menu Management -->
      <div class="flex gap-4 items-start flex-col text-center">
        <span class="icon-circle">
          <i class="fas fa-utensils icon-small"></i>
        </span>
        <div>
          <h3 class="font-semibold text-xl">Menu Management</h3>
          <p class="mt-1 text-gray-500">Update and customize your restaurant menu with ease.</p>
        </div>
      </div>

      <!-- Order Management -->
      <div class="flex gap-4 items-start flex-col text-center">
        <span class="icon-circle">
          <i class="fas fa-shopping-cart icon-small"></i>
        </span>
        <div>
          <h3 class="font-semibold text-xl">Order Management</h3>
          <p class="mt-1 text-gray-500">Manage customer orders efficiently and accurately.</p>
        </div>
      </div>

      <!-- Customer Reviews -->
      <div class="flex gap-4 items-start flex-col text-center">
        <span class="icon-circle">
          <i class="fas fa-star icon-small"></i>
        </span>
        <div>
          <h3 class="font-semibold text-xl">Customer Reviews</h3>
          <p class="mt-1 text-gray-500">Collect and respond to customer reviews to enhance satisfaction.</p>
        </div>
      </div>

      <!-- Staff Management -->
      <div class="flex gap-4 items-start flex-col text-center">
        <span class="icon-circle">
          <i class="fas fa-users icon-small"></i>
        </span>
        <div>
          <h3 class="font-semibold text-xl">Staff Management</h3>
          <p class="mt-1 text-gray-500">Organize and manage your restaurant staff effectively.</p>
        </div>
      </div>

      <!-- Analytics & Reporting -->
      <div class="flex gap-4 items-start flex-col text-center">
        <span class="icon-circle">
          <i class="fas fa-chart-line icon-small"></i>
        </span>
        <div>
          <h3 class="font-semibold text-xl">Analytics & Reporting</h3>
          <p class="mt-1 text-gray-500">Gain insights through detailed analytics and reports.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'service-app',
}
</script>

<style scoped>
.icon-circle {
  width: 60px; /* Size of the circle */
  height: 60px; /* Size of the circle */
  border-radius: 50%; /* Makes the icon circular */
  background-color: rgba(147, 51, 234, 0.1); /* Light background */
  display: flex; /* Centers the icon */
  align-items: center; /* Centers the icon vertically */
  justify-content: center; /* Centers the icon horizontally */
}

.icon-small {
  font-size: 20px; /* Smaller size for the icon */
  color: #9333ea; /* Icon color */
}

.grid {
  gap: 20px; /* Space between grid items */
}
</style>
