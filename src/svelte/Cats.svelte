<script lang="typescript">
import { data, genres } from '../data'
</script>

<template type="pug">
  +each('genres as genre')
    li
      a(href="#{genre}") {genre}
</template>