<template>
  <div class="verificacion">
    <header class="header color-itam w3-text-white">
      <p class="header__title">Prácticas de Verano {{getYear}}</p>
    </header>
    <button class="logout" @click="logOut">Logout</button>


    <footer class="footer grey-itam w3-text-white">
      Derechos Reservados © ITAM, {{getYear}}<br>
			Creado por <a href="http://wil.itam.mx" title="wil itam">wil.itam.mx</a>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase'
import functions from './../functions/functions'

export default {
  name: 'Verificacion',
  data () {
    return {
    }
  },
  methods: {
    logOut () {
      firebase.auth().signOut().then(
        () => this.$router.replace({name: 'Login'})
      )
    }
  },
  computed: {
    getYear () {
      return new Date().getFullYear();
    }
  },
  mounted () {
    var vm = this;
    if( functions.checkForUser() ) {
      if( functions.checkForRegistro(functions.getUserId))
        console.log('Hay Usuario con registro');
      functions.checkForRegistro(functions.getUserId)
    }else {
      vm.$router.replace({name: 'Login'})
    }
  }
}
</script>

<style>

.verificacion {
  height: 100%;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 50px;
}

.header {
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
}

.header__title {
  margin: auto;
  font-size: 20px;
  border-bottom: 2px lightgrey solid;
}

.logout {
  position: fixed;
  top: 65px;
  background-color: #ffffff;
  right: 15px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
}

.logout:focus, .logout:hover{
  background-color: #006853;
  color: #ffffff !important;
}

.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  text-align: center;
}
</style>
