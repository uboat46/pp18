<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.color-itam {
	background-color: #006853 !important;
}

.grey-itam {
	background-color: #222222 !important;
}

.bg-itam {
  background-color: #ddffdd!important;
}

.color-text-itam {
  color: #006853 !important;
}

.border-itam {
	border-color: #09553B !important;
}

</style>
