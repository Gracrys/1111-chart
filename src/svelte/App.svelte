<script >
import Genres from './Genres.svelte'
import Cats from './Cats.svelte'
import Player from './Player.svelte'
import menu_icon from '../../assets/icons/menu.svg'

let openState = false

const open = e => openState = !openState

</script>


<template >
	<button class="menu" on:click="{open}">
		<img src="{menu_icon }" alt="">
	</button>
	<aside class="{openState ? "open": ""}">
		<header>
			<h2> Categorias </h2>
		</header>
		<hr>
		<ul>
			<Cats />
		</ul>
	</aside>

	<main>
		<h1 class="text-2xl text-left "> 1111 Essentials Recordings Of Music v2.00 (2020/04/20) </h1>
		<Genres />
		<Player />
	</main>

</template>

<style type="sass">
  section > div
      display: flex
</style>