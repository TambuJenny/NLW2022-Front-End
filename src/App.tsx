import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

import { GameBanner } from "./components/GameBanner";
import { CreatAdBanner } from "./components/CreatAdBanner";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

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
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });

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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black ">Publique um anúncio</Dialog.Title>
         
            <form >
              <div className="">
                <label htmlFor="game">Qual o game ?</label>
                <input id = "game"placeholder="Selecione o game que deseja jogar"></input>
              </div>

              <div className="">
                <label htmlFor="name"> Seu nome (ou nickname)</label>
                <input placeholder="Como te chama no game ?"></input>
              </div>

              <div>
                <div>
                  <label htmlFor="yearsPlaying">Joga há quantos anos ?</label>
                  <input type="number" name="" id="" placeholder="Tudo bem ser zero." />
                </div>

                <div>
                  <label htmlFor="discord">Qual é o seu discord ?</label>
                  <input type="text" name="" id="discord" placeholder="Usuario#0000" />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="weekDay">Quando constuma a jogar ?</label>
                </div>
                <div>
                  <label htmlFor="weekDay">Qual horáro do dia ?</label>
                  <div>
                    <input id="hourStart"type="time" placeholder="De"/>
                    <input id="hourEnd"type="time" placeholder="Até"/>
                  </div>
                </div>
              </div>

              <div>
                <input type="checkbox" id="" />
                Costumo me conectar ao chat de voz
              </div>

              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController/>
                  Encontrar duo
                </button>
              </footer>

            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
