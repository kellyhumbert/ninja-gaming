<script>
  import { page } from '$app/stores';
</script>

<div class="error">
  <h2>Oooops</h2>
  <p>{$page.error.message}</p>
  <a href="/guides">View all Guides</a>
</div>

<style>
  .error {
    text-align: center;
    margin-bottom: 60px;
  }
</style>