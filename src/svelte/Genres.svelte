<script lang="typescript">
import { data, genres } from '../data'
let arr = Object.values(data)
</script>

<template type="pug">
div.my-8#genres
  +each('genres as genre')
    section.px-4.pb-4(id="{genre}")
      h2.text-left {genre}
      hr.mb-2
      div.text-left
        +each('data.rock as album')
          article
              b {album.album}
              p {album.artist}
              i.subgenre {album.subgenre}
              img(src="{album.cover}")
              +if('!!album.youtube')
                figure
                  iframe( id="ytplayer" type="text/html" src="{album.youtube}")
</template>

<style type="sass">
  #genres
    margin: 2rem 0
  section 
    background-color: hsla(0, 100%, 70%, 0.4)
    hr
      border-color: hsla(0, 100%, 70%, 0.6)
    > div
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr))
      grid-gap: 2rem
      article
        overflow: hidden
        transition: all 0.6s
        > div
          height: 100%
        img
          width: 100%
          height: 70%
          cursor: pointer
        figure
          display: none
        &:hover
          padding: 1rem
          transform: scale(1.3)
          background-color: hsla(0, 100%, 70%, 0.8)
          img
          .subgenre
            display: block
</style>