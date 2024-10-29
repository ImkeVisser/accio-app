import { HarryPotterCharacter, ImageType} from "@/types/type";
import Carousel from "./ui/Carousel/Carousel";

export default async function HarryPotterCharacterResults() {
    const response = await fetch(`${process.env.BASE_URL}/characters`);

    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
  
    const characters = (await response.json()) as HarryPotterCharacter[];

    const images = characters
                  .filter(character => character.image) 
                  .map(character => {
                    return {id: character.id, url:character.image, title: character.name,}
                  }) as ImageType[]

    return (
      <>
        <h1 className="mb-4 text-2xl text-center">Accio Image</h1>
        <div className="h-96 max-w-screen-sm w-full m-auto">
          <Carousel images={images} containImage autoPlay/>
        </div>
      </>
    )
}