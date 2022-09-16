import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

import { GameBanner } from "./components/GameBanner";
import { CreatAdBanner } from "./components/CreatAdBanner";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/input";

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
         
            <form className="mt-8 flex flex-col gap-4" >
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="game">Qual o game ?</label>
                <Input placeholder="Selecione o game que deseja jogar"/>
              </div>

              <div className="">
                <label htmlFor="name"> Seu nome (ou nickname)</label>
                <Input placeholder="Como te chama no game ?"/>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos ?</label>
                  <Input type="number" name="" id="" placeholder="Tudo bem ser zero." />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual é o seu discord ?</label>
                  <Input type="text" name="" id="discord" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDay">Quando constuma a jogar ?</label>

                  <div className="grid grid-cols-4 gap-2">
                    <button 
                      className=" w-8 h-8 rounded bg-zinc-900" title="Domingo">D</button>
                    <button 
                      className=" w-8 h-8 rounded bg-zinc-900" title="Segunda">S</button>
                    <button 
                      className=" w-8 h-8 rounded bg-zinc-900" title="Terça">T</button>
                    <button 
                      className=" w-8 h-8 rounded bg-zinc-900" title="Quarta">Q</button>
                    <button 
                      className=" w-8 h-8 rounded bg-zinc-900" title="Quinta">Q</button>
                    <button 
                      className=" w-8 h-8 rounded bg-zinc-900" title="Sexta">S</button>
                    <button 
                      className=" w-8 h-8 rounded bg-zinc-900" title="Sábado">S</button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="weekDay">Qual horáro do dia ?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart"type="time" placeholder="De"/>
                    <Input id="hourEnd"type="time" placeholder="Até"/>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm ">
                <Input type="checkbox" id="" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close type="button" className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">Cancelar</Dialog.Close>
                <button type="submit" className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600">
                  <GameController className="w-6 h-6"/>
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
