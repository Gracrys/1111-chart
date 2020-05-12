<script lang="typescript">
import { data, genres } from '../data'
let arr = Object.values(data)
let open = false

// document.body.addEventListener("click", () => open = false)

const expand = function(x) {
  x.target.parentNode.classList.add("expanded")
  console.log(x.target.parentNode.classList)
  open = true
}

</script>

<template type="pug">
div.my-8#genres
  +each('genres as genre')
    section.px-4.pb-4
      h2.text-left {genre}
      hr.mb-2
      div.text-left
        +each('data.rock as album')
          article(class="{!open ? 'tagged' : ''}" on:click="{expand}")
              b {album.album}
              p {album.artist}
              img(src="{album.cover}")
              <!-- +if('!!album.youtube') -->
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
        > div
          height: 100%
        img
          width: 100%
          height: 90%
          cursor: pointer
        figure
          display: none
        &.expanded
          background-color: hsla(0, 100%, 70%, 0.8)
          img
            display: none
          figure 
            display: block
            width: 100%
</style>