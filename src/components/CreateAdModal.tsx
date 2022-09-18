import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "./Form/input";
import { Check, GameController } from "phosphor-react";
import * as CheckBox from "@radix-ui/react-checkbox";
import { useState, useEffect, FormEvent } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import axios from "axios";

interface GamesInterface {
  id: string;
  title: string;
}

export function CreatModal() {
  const [AllGames, setAllGames] = useState<GamesInterface[]>([]);
  const [dayWeeks, setDayWeeks] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) =>
      setAllGames(response.data)
    );
  }, []);

  async function handleCreatedAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: dayWeeks.map(Number),
        hoursStart: data.hoursStart,
        HourEnd: data.HourEnd,
        useVoiceChannel: useVoiceChannel
      });

      alert('Anúncio criado com sucesso !')
    } catch (error) {
        console.log(error);
        alert('Erro ao criar o anúncio !')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black ">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreatedAd} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="game">
              Qual o game ?
            </label>
            <select
              id="game"
              name="game"
              placeholder=" "
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder: text-zinc-500 appearance-none"
              defaultValue=""
            >
              <option disabled value=" ">
                {" "}
                Selecione o game que deseja jogar
              </option>
              {AllGames.map((games) => {
                return (
                  <option key={games.id} value={games.id}>
                    {games.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="">
            <label htmlFor="name"> Seu nome (ou nickname)</label>
            <Input
              placeholder="Como te chama no game ?"
              name="name"
              id="name"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos ?</label>
              <Input
                type="number"
                name="yearsPlaying"
                id="yearsPlaying"
                placeholder="Tudo bem ser zero."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual é o seu discord ?</label>
              <Input
                type="text"
                name="discord"
                id="discord"
                placeholder="Usuario#0000"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDay">Quando constuma a jogar ?</label>

              <div>
                <ToggleGroup.Root
                  type="multiple"
                  className="grid grid-cols-4 gap-2"
                  onValueChange={setDayWeeks}
                >
                  <ToggleGroup.Item
                    value="0"
                    className={`w-8 h-8 rounded  ${
                      dayWeeks.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                    title="Domingo"
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="1"
                    className={`w-8 h-8 rounded  ${
                      dayWeeks.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                    title="Segunda"
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="2"
                    className={`w-8 h-8 rounded ${
                      dayWeeks.includes("2") ? "bg-violet-500" : " bg-zinc-900"
                    }`}
                    title="Terça"
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="3"
                    title="Quarta"
                    className={`w-8 h-8 rounded  ${
                      dayWeeks.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="4"
                    title="Quinta"
                    className={`w-8 h-8 rounded  ${
                      dayWeeks.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="5"
                    title="Sexta"
                    className={`w-8 h-8 rounded  ${
                      dayWeeks.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="6"
                    title="Sábado"
                    className={`w-8 h-8 rounded  ${
                      dayWeeks.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="weekDay">Qual horáro do dia ?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  id="hourStart"
                  type="time"
                  placeholder="De"
                  name="hoursStart"
                />
                <Input
                  id="hourEnd"
                  type="time"
                  placeholder="Até"
                  name="HourEnd"
                />
              </div>
            </div>
          </div>

          <label className="mt-2 flex gap-2 items-center text-sm ">
            <CheckBox.Root
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
              className="h-6 w-6 rounded p-1 bg-zinc-900"
            >
              <CheckBox.Indicator>
                <Check className="w-4 h-4 text-emerald-400  " />
              </CheckBox.Indicator>
            </CheckBox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController className="w-6 h-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
