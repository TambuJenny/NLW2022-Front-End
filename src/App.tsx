import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

import { GameBanner } from "./components/GameBanner";
import { CreatAdBanner } from "./components/CreatAdBanner";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Input } from "./components/Form/input";
import { CreatModal } from "./components/CreateAdModal";
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games")
      .then((response) =>  setGames(response.data));

    console.log(games);
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white mt-20 font-black">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo {""}
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              gameName={game.title}
              imgUrl={game.bannerURL}
              ads={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreatAdBanner />
        <CreatModal></CreatModal>

      </Dialog.Root>
    </div>
  );
}

export default App;
