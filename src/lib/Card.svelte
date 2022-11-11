<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let port: string;
	import { variables } from '../lib/variables';
</script>

<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
	<div class="md:flex">
		<div class="md:shrink-0">
			<img
				class="h-48 w-full object-cover md:h-full md:w-48"
				src={imageUrl}
				alt="Modern building architecture"
			/>
		</div>
		<div class="p-8">
			<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{port}</div>
			<a
				href="{variables.basePath}:{port}"
				class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a
			>
			<p class="mt-2 text-slate-500">{description}</p>
		</div>
	</div>
</div>
