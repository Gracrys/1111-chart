<script >
import Genres from './Genres.svelte'
import Cats from './Cats.svelte'
import Player from './Player.svelte'

</script>


<template type="pug">
 	aside
			header
				h2 Categorias
				hr.border-indigo-700
				ul
					Cats
		main
			h1.text-2xl.text-left 1111 Essentials Recordings Of Music v2.00 (2020/04/20)
			Genres
			Player

</template>

<style type="sass">
  section > div
      display: flex
</style>