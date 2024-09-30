<template>
  <div class="register-container">
    <div class="form-container">
      <div class="title-container">
        <h1>Create a new account</h1>
      </div>
      <div class="trial-container">
        Or
        <router-link to="/login">Sign in</router-link>
      </div>
      <div class="form-content">
        <div class="form-box">
          <div class="input-group">
            <label for="username">Email address</label>
            <input id="username" v-model="email" type="text" placeholder="user@example.com">
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" placeholder="*">
          </div>
          <div class="input-group">
            <label for="confirm-password">Confirm Password</label>
            <input id="confirm-password" v-model="confirmPassword" type="password" placeholder="*">
          </div>
          <div class="form-options">
            <div class="terms-and-conditions">
              <label>
                <input type="checkbox" v-model="agreeTerms">
                <span>I agree to the Terms and Conditions</span>
              </label>
            </div>
          </div>
          <div class="submit-button">
            <button type="button" @click="registerUser">Register</button>
          </div>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterApp',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
      errorMessage: ''
    };
  },
  methods: {
    async registerUser() {
      // Validation des champs
      if (!this.email || !this.password || !this.confirmPassword) {
        this.errorMessage = 'Please fill all fields';
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match';
        return;
      }

      if (!this.agreeTerms) {
        this.errorMessage = 'You must agree to the Terms and Conditions';
        return;
      }

      // Réinitialiser le message d'erreur
      this.errorMessage = '';

      // Créer un nouvel utilisateur
      const newUser = {
        email: this.email,
        password: this.password
      };

      try {
        // Envoi des données à JSON Server
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });

        if (response.ok) {
          alert('Registration successful!');
          this.$router.push('/login'); // Redirection vers la page de login
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      } catch (error) {
        this.errorMessage = 'Error connecting to server. Please try again later.';
      }
    }
  }
};
</script>


<style scoped>
.register-container {
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
  margin-bottom: 20px;
}

.terms-and-conditions span {
  font-size: 0.875rem;
  color: #6b7280;
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
</style>
