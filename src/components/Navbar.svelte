<nav data-testid="navbar" class="navbar p-3">
  <button class="button-without-styles navbar__button">
    <span class="material-symbols-outlined mr-3">
      menu
    </span>
  </button>
  <h3 data-testid="navbar-title" class="navbar__title is-size-5 is-capitalized">Channel testing</h3>
</nav>

<script></script>

<style lang="scss">
@import '../sass/variables.scss';

.navbar {
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: $color-dark;
  box-shadow: 1px 1px 20px rgba(21, 20, 22, 0.5);

  &__button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
