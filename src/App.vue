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
  background-color: #F9F9F9;
  font-family: 'Kameron', serif;
}

span.Titre {
  border-bottom: #2c3e50 solid 1px;
  padding-bottom: 10px;
}

#app {
  text-align: center;
  color: #2c3e50;
  font-family: 'Kameron', serif;
}

#nav {
  padding: 30px;
  font-family: 'Pinyon Script', cursive;
  font-size: 80px;
  margin-bottom: 1.5%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (max-width: 380px) {
  span.Titre {
    font-size: 4rem;
  }
}
@media (min-width: 1025px) {
  .home {
    padding: 0 20%;
  }
}
</style>
