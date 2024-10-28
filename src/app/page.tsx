import HarryPotterCharacterResults from "@/components/HarryPotterCharacterResults";
import { Suspense } from "react";

export default function Home() {
  return (
      <main className="max-w-screen-xl my-14 m-auto">
        <Suspense fallback={<p>loading...</p>}>
          <HarryPotterCharacterResults />
        </Suspense>
      </main>
  );
}
