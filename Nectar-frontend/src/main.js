import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css'; // Ensure this line is included

const app = createApp(App);
app.use(router);
app.mount('#app');
