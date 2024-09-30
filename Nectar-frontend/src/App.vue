<template>
  <div>
    <header-app />
    <div></div>
    <header2-app />
    <router-view /> <!-- This will display the matched route component -->
    <footer-app />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Header2 from './components/Header2.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'header-app': Header,
    'header2-app': Header2,
    'footer-app': Footer ,
  }
}
</script>
