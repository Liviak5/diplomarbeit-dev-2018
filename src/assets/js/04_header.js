/**
 *Für Login
 */
const headerLogin = document.getElementById('header-login');
const loginBox = document.getElementById('login-box');

/**
 * blendet im div header-login die Klasse 'visible' ein und aus
 */
function toggleLogin () {
  loginBox.classList.toggle('hide');
}

ready(() => {
  headerLogin.addEventListener('click', toggleLogin);
});
