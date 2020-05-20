<script lang="typescript">
import { data, genres } from '../data'
import { currentAlbum } from '../store';
let arr = Object.values(data)

  let player = x => {
    console.log(x)
    currentAlbum.set(x)
  }

</script>

<div class="my-8" id="genres">
  {#each genres as genre}
    <section class="px-4 pb-4" id={genre}>
      <h2 class="text-left">{genre}</h2>
      <div class="text-left">
        {#each data[genre] as album}
          <article on:click="{() => player(album)}">
            <b> {album.album}</b>
            <p> {album.artist} </p>
            <i class="subgenre"> {album.subgenre || ""} </i>
            <img src="{album.cover}" />
          </article>
        {/each}
      </div>
    </section>
  {/each}
</div>

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