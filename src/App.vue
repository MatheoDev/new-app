<template>
  <div id="nav">
    News App
  </div>
  <router-view/>
</template>

<style lang="less">
body {
  background-color: #d9d9d954;
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
  font-size: 70px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
