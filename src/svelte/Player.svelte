<script type="typescript">
  import {currentAlbum} from '../store'
  let album
  
  currentAlbum.subscribe(x  => album = x)
</script>


<template type="pug">

  +if('album.youtube')
    footer
        iframe( id="ytplayer" type="text/html" src="{album.youtube}")
        aside
          h1 {album.album}
          h2 {album.artist}
          i {album.subcategory || ""}
</template>


<style type="sass">
footer h1
  font-size: 2rem
</style>