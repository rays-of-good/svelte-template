<script>
	import { fly } from "svelte/transition";

	export let topbarMenu = false;
</script>

<div class="topbar background">
	<button
		on:click={() => {
			topbarMenu = !topbarMenu;
		}}
	>
		Menu
	</button>
</div>

{#if topbarMenu}
	<div
		class="topbarMenu background"
		transition:fly={{ y: -20, duration: 200 }}
	>
		<button>Some</button>
		<button>List</button>
		<button>Items</button>
	</div>
{/if}

<style>
	.background {
		background: grey;
	}

	.topbar {
		display: flex;
		padding: 10px;
	}

	.topbarMenu {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 10px;
		position: absolute;
	}

	.topbar button,
	.topbarMenu button {
		font-size: 2em;
		border-radius: 4px;
		color: whitesmoke;
		transition: 0.1s;
	}

	.topbar button:hover,
	.topbarMenu button:hover {
		background-color: silver;
	}
</style>
