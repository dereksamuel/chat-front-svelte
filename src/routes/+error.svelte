<article class="error-container">
  <h1 class="error-container__title">{$page.status}: {$page.error?.message}</h1>
</article>

<script>
import { page } from '$app/stores';
</script>

<style>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
