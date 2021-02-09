<template>

    <div class="page container">
      <Nav/>
      <router-view />
  </div>
</template>

<script>
import Nav from './components/nav.vue'
// import '~/assets/normalise.css';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@import 'style/normalise.css';
@import 'style/base.css';
@import 'style/flex.css';
@import 'style/form.css';
@import 'style/theme.css';
</style>
