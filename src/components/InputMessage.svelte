<form class="input-message" data-testid="input-message">
  <input class="input" required data-testid="input" type="text" name="message" placeholder="Type a message here" />
  <button type="submit" class="button is-primary" data-testid="send-button">
    <span class="material-symbols-outlined">
      send
    </span>
  </button>
</form>

<script></script>

<style lang="scss">
.input-message {
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 4px 0 0 4px;
  }

  .button {
    border-radius: 0 4px 4px 0;
  }
}
</style>
