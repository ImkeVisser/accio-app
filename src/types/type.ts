export interface HarryPotterCharacter {
    id: string
    name:string
    alternate_names?: string[]
    species: string
    gender: "male" | "female"
    house?:  "Gryffindor" | "Ravenclaw" | "Slytherin" | "Hufflepuff"
    dateOfBirth: string | null
    yearOfBirth: string | null,
    wizard: boolean,
    ancestry?: string,
    eyeColour?: string,
    hairColour?: string,
    wand: {
      wood?: string,
      core: string,
      length: number | null
    },
    patronus?: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor?: string,
    alternate_actors?: string[],
    alive: boolean,
    image?: string
  }
  
  export type ImageType = {
    id: string
    url: string
    title: string
  }