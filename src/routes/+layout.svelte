<Navbar></Navbar>
<slot></slot>

<script>
import Navbar from '../components/Navbar.svelte';
</script>

<style lang="scss" global>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,900;1,200;1,300;1,500;1,900&display=swap');
@import "../sass/material-icons.scss";
@import "../sass/bulma.min.scss";
@import '../sass/variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  color: white;
}

body, button, input, optgroup, select, textarea, * {
  font-family: 'Poppins', sans-serif;
}

html, body, body > div {
  background-color: $color-dark;
  height: 100%;
}

body {
  max-width: 450px;
  margin: 0 auto;
}

.button-without-styles {
  background: none;
  color: $color-light;
  border: none;
  outline: none;
  cursor: pointer;

  span {
    font-size: 35px;
  }
}

.input {
  background-color: $color-dark-soft;
  border: none;
  color: white;
}

.input::placeholder {
  color: $color-light;
}
</style>
