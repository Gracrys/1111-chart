import images from '../assets/covers/*.*'
interface Genre {
  [genre: string]: Albums[]
} 

interface Albums {
  album: string;
  artist: string;
  cover: any;
  youtube ?: string;
  genre: string | string[];
  subgenres: string | string[];
  
}

export const data: Genre = 
  {
    rock:
    [    
      {
        album: "The Fragile",
        artist: "Nine inch nails",
        cover: Object.values(images["the_fragile"])[0],
        youtube: "",
        genre: "",
        subgenres: ""
      },
      {
        album: "The Downward Spiral",
        artist: "Nine inch nails",
        cover: Object.values(images["downward_spiral"])[0],
        youtube: "https://www.youtube.com/embed/HszFWq5_4yo",
        genre: "",
        subgenres: ""
      },
      {
        album: "Ghosts",
        artist: "Nine inch nails",
        cover: Object.values(images["ghosts"])[0],
        youtube: "",
        genre: "",
        subgenres: ""
      },
      {
        album: "Pretty hate Machine",
        artist: "Nine inch nails",
        cover: Object.values(images["pretty_hate_machine"])[0],
        youtube: "",
        genre: "",
        subgenres: ""
      },
      {
        album: "Ghosts IV | Locusts",
        artist: "Nine inch nails",
        cover: Object.values(images["locusts"])[0],
        youtube: "",
        genre: "",
        subgenres: ""
      },
    ]
  }


export const genres: string[] = Object.keys(data)