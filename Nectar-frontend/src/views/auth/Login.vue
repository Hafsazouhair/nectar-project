<template>
  <div class="login-container">
    <div class="form-container">
      <div class="title-container">
        <h1>Sign in to your account</h1>
      </div>
      <div class="trial-container">
        Or
        <router-link to="/register">Register</router-link>
      </div>
      <div class="form-content">
        <div class="form-box">
          <form @submit.prevent="handleLogin">
            <div class="input-group">
              <label for="username">Email address</label>
              <input id="username" v-model="email" type="email" placeholder="user@example.com" required>
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input id="password" v-model="password" type="password" placeholder="*" required>
            </div>
            <div class="form-options">
              <div class="remember-me">
                <label>
                  <input type="checkbox" v-model="rememberMe">
                  <span>Remember me</span>
                </label>
              </div>
              <div class="forgot-password">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
            <div class="submit-button">
              <button type="submit">Sign in</button>
            </div>
            <div v-if="error" class="error-message">{{ error }}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginApp',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: null
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Basic client-side validation
        if (!this.email || !this.password) {
          this.error = 'Both email and password are required.';
          return;
        }

        // Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.email)) {
          this.error = 'Invalid email format.';
          return;
        }

        // Call the JSON Server to authenticate the user
        const response = await axios.get('http://localhost:3000/users', {
          params: {
            email: this.email,
            password: this.password
          }
        });

        console.log('Login response:', response.data); // Debug log

        if (response.data.length > 0) {
          // User authenticated successfully
          const user = response.data[0];

          // Optionally store user data and token
          if (this.rememberMe) {
            localStorage.setItem('user', JSON.stringify(user));
          } else { 
            sessionStorage.setItem('user', JSON.stringify(user));
          }

          // Redirect to user dashboard or appropriate page
          this.redirectUser(user.role);
        } else {
          this.error = 'Invalid email or password.';
        }
      } catch (error) {
        this.error = 'An error occurred during login. Please try again later.';
        console.error('Login error:', error); // Debug log
      }
    },
    redirectUser(role) {
      switch (role) {
        case 'admin':
          this.$router.push('/dashboard'); // Redirect to dashboard
          break;
        case 'user':
        case 'guest':
          this.$router.push('/'); // Redirect to home page
          break;
        default:
          this.$router.push('/'); // Default redirection to home
      }
    },
  }
};
</script>

<style scoped>
/* Your styles here */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Other styles remain unchanged */
</style>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.title-container h1 {
  font-size: 2rem;
  color: #4a4a4a;
  font-weight: bold;
}

.trial-container {
  margin: 20px 0;
  font-size: 0.9rem;
  color: #6b7280;
}

.trial-link {
  color: #4f46e5;
  transition: color 0.2s ease-in-out;
}

.trial-link:hover {
  color: #4338ca;
}

.form-content {
  margin-top: 20px;
}

.form-box {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  display: block;
  font-size: 0.875rem;
  color: #4a4a4a;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #d1d5db;
  transition: border-color 0.2s ease-in-out;
}

.input-group input:focus {
  border-color: #4f46e5;
  outline: none;
}

.form-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.remember-me span {
  font-size: 0.875rem;
  color: #6b7280;
}

.forgot-password a {
  color: #4f46e5;
  font-size: 0.875rem;
  transition: color 0.2s ease-in-out;
}

.forgot-password a:hover {
  color: #4338ca;
}

.submit-button {
  margin-bottom: 20px;
}

.submit-button button {
  width: 100%;
  padding: 12px;
  background-color: #EEBF00;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;
}

.submit-button button:hover {
  background-color: #4338ca;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 10px;
}
</style>
