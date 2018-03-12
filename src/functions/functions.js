import firebase from 'firebase'

function returns(bool) {
  return bool;
}

async function checkForRegistro(id) {
  var registro = await checkRegistro(id);
  return registro;
}

function checkRegistro(id) {
  return new Promise(
    resolve => firebase.database().ref("/users/"+id).once('value', function(snapshot) {
    var exists = (snapshot.val() !== null);
    if(exists) {   
      resolve(snapshot.val().Registro);
    }else{
      resolve(false);
    }
  }))
}

function checkForUser() {
  return firebase.auth().currentUser;
}

function getUserId() {
  return firebase.auth().currentUser.uid;
}

function checkEmailVerified() {
  var currentUser = checkForUser();
  return currentUser ? currentUser.emailVerified : false;
}

export default {
  'checkForRegistro': checkForRegistro,
  'checkForUser': checkForUser,
  'checkEmailVerified': checkEmailVerified,
  'getUserId': getUserId
}