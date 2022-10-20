<template>
  <div id="nav">
    <span class="Titre"> News App </span>
  </div>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}

</script>

<style lang="less">
body {
  background-color: #d9d9d954;
}

span.Titre {
  border-bottom: #2c3e50 solid 1px;
  padding-bottom: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-family: 'Pinyon Script', cursive;
  font-size: 80px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
