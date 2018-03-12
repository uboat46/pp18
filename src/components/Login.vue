<template>
  <div class="login bg-itam">
    <header class="header color-itam w3-text-white">
      <p class="header__title">Prácticas de Verano {{getYear}}</p>
    </header>

    <main class="form">
      <div class="form__name color-itam w3-text-white">Login</div>
      <div class="controls w3-white">
        <label class="w3-text-red" v-if="firebaseErr">{{firebaseErr}}</label>
        <div class="controls__input">
          <label for="email">Email</label>
          <label class="w3-text-red" v-if="emailErr">{{emailErr}}</label>
          <input type="text" name="email" @keyup.prevent.enter="changeFocus" @keyup.prevent="emailHandler" v-model="email">
        </div>

        <div class="controls__input">
          <label for="email">Password</label>
          <label class="w3-text-red" v-if="passwordErr">{{passwordErr}}</label>
          <input type="password" name="password" @keyup.prevent.enter="makeClick" @keyup.prevent="passwordHandler" v-model="password">
        </div>

        <div class="controls__button">
          <input type="submit" name="submit" class="border-itam color-text-itam" value="Login" :disabled="valid ? false:true" @click.prevent="login"/>
        </div>
        
        <div class="form__footer">
          <p>Aún sin cuenta? <span class="color-text-itam"><router-link to="/registro">Crea Una</router-link></span></p>
        </div>
      </div>
    </main>

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
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      emailErr: '',
      passwordErr: '',
      firebaseErr: '',
      valid: false,
      emailValid: false,
      passwordValid: false
    }
  },
  methods: {
    inputHandler () {
      this.valid = this.emailValid && this.passwordValid;
    },
    emailHandler () {
      var vm = this;
      if( vm.email == '' || vm.email == null) {
        vm.emailErr = 'Ingresa un email valido';
        vm.emailValid = false;
      }else {
        vm.emailErr = '';
        vm.emailValid = true;
      }
      this.inputHandler();
    },
    passwordHandler () {
      var vm = this;
      if( vm.password == '' || vm.password == null) {
        vm.passwordErr = 'Ingresa un password valido';
        vm.passwordValid = false;
      }else {
        vm.passwordErr = '';
        vm.passwordValid = true;
      }
      this.inputHandler();
    },
    changeFocus () {
      this.$el.querySelector('input[name="password"]').focus();
      this.emailHandler();
    },
    makeClick () {
      this.$el.querySelector('input[name="submit"]').focus();
      this.$el.querySelector('input[name="submit"]').click();
      this.emailHandler();
      this.passwordHandler();
    },
    login () {
      var vm = this;
      firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).then(
        user => {
          vm.$router.replace({name: 'FormaRegistro'})
        },
        err => {
          vm.firebaseErr= err.message;
        }
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
      vm.$router.push({name: 'FormaRegistro'})
    }
  }
}
</script>

<style>

.login {
  height: 100%;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  background: url(../../static/bg.jpeg) no-repeat center center fixed; 
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

.form {
  margin: auto;
  width: 500px;
}

.form__name {
  text-align: center;
  font-size: 30px;
  border-bottom: 1px grey solid;
}

.controls__input {
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.controls__input label{
  width: 100%;
  text-align: left;
}

.controls__input input{
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px grey solid;
  cursor: pointer;
  transition: all 0.1s;
}

.controls__input input:focus{
  border-bottom: 2px #006853 solid;
}

.controls__button {
  width: 100%;
  padding: 30px;
  text-align: center;
}

.controls__button input {
  width: 40%;
  border-radius: 10px;
  font-size: 18px;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
}

.controls__button input:focus, .controls__button input:hover{
  background-color: #006853;
  color: #ffffff !important;
}

.controls__button input:disabled{
  background-color: lightgrey;
  color: grey !important;
  border-color: grey !important;
}

.form__footer {
  text-align: center;
}

.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  text-align: center;
}

@media screen and (max-width: 933px){
  .header{
    padding-left: 10px;
  }
}
/* TODO MEDIA queries*/
/*	100%	723px	933px	1127px */

</style>
