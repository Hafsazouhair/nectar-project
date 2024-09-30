<template>
 <header class="topbar bg-gray-800 text-white fixed top-0  w-full z-5left-00">
    <div class="container mx-auto flex justify-between items-center p-1">
      <div class="icons flex space-x-6">
        <a href="#" class="hover:text-gray-400">
          <img src="/icons/facebook.svg" alt="Facebook" class="w-4 h-4">
        </a>
        <a href="#" class="hover:text-gray-400">
          <img src="/icons/twitter.svg" alt="Twitter" class="w-4 h-4">
        </a>
        <a href="#" class="hover:text-gray-400">
          <img src="/icons/google.svg" alt="Google" class="w-4 h-4">
        </a>
        <a href="#" class="hover:text-gray-400">
          <img src="/icons/instagram.svg" alt="Instagram" class="w-4 h-4">
        </a>
        <a href="#" class="hover:text-gray-400">
          <img src="/icons/search.svg" alt="Search" class="w-4 h-4">
        </a>
      </div>
      <div class="auth flex items-center space-x-1">
        <!-- Display Login and Register links if not authenticated -->
        <div v-if="!isAuthenticated" class="flex items-center space-x-1">
          <img src="/icons/user-icon.svg" alt="User Icon" class="w-4 h-4">
          <router-link to="/Login" class="hover:text-gray-400 text-xs">Log in</router-link>
          <span class="divider">|</span>
          <img src="/icons/edit.svg" alt="Register Icon" class="w-4 h-4">
          <router-link to="/Register" class="hover:text-gray-400 text-xs">Register</router-link>
        </div>
        <!-- Display User Info and Logout button if authenticated -->
        <div v-else class="flex items-center space-x-1">
          <img src="/icons/user-icon.svg" alt="User Icon" class="w-4 h-4">
          <span class="text-xs">{{ userName }}</span>
          <button @click="logout" class="text-red-500 hover:text-red-300 text-xs">Logout</button>
        </div>
        <span class="divider">|</span>
        <div class="flex items-center space-x-1">
          <img src="/icons/cart.svg" alt="Cart" class="w-4 h-4">
         
           <router-link to="/Shop" class="hover:text-gray-400 text-xs" >0 Items - ($0.00)</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header-app',
  data() {
    return {
      isAuthenticated: false,
      userName: '' // The name of the authenticated user
    }
  },
  created() {
    this.checkAuthentication();
  },
  watch: {
    $route() {
      this.checkAuthentication();
    }
  },
  methods: {
    checkAuthentication() {
      const user = localStorage.getItem('user');
      if (user) {
        try {
          const parsedUser = JSON.parse(user);
          this.isAuthenticated = true;
          this.userName = parsedUser.name || 'User';
        } catch (error) {
          console.error('Error parsing user data:', error);
          this.isAuthenticated = false;
          this.userName = '';
        }
      } else {
        this.isAuthenticated = false;
        this.userName = '';
      }
    },
    logout() {
      localStorage.removeItem('user');
      this.isAuthenticated = false;
      this.userName = '';
      this.$router.push('/Login');
    }
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
