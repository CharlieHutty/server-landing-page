<script lang="ts">
	import Card from '../lib/Card.svelte';
</script>

<div class="text-center">
	<h1 class="text-4xl underline pt-8">Welcome to SvelteKit</h1>
	<p class="text-2xl pt-4">Hello, world!</p>
</div>

<div class="pt-4">
	<Card title="OpenBooks" description="For downloading books" port="8000" imageUrl="/book.jpg" />
</div>
