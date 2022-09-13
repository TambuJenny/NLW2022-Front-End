import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white mt-20 font-black">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-12 px-4 bg-game-gradient absolute top-24  botttom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Legends of Legends
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative  rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="" />

          <div className="w-full pt-16 pb-12 px-4 bg-game-gradient absolute top-24 botttom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2 </strong>
            <span className="text-zinc-300 text-sm block ">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative  rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-16 pb-12 px-4 bg-game-gradient absolute top-24 botttom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative  rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-16 pb-12 px-4 bg-game-gradient absolute top-24 botttom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Apex Legends{" "}
            </strong>
            <span className="text-zinc-300 text-sm block ">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative  rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-16 pb-12 px-4 bg-game-gradient absolute top-24 botttom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite </strong>
            <span className="text-zinc-300 text-sm block ">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative  rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-12 px-4 bg-game-gradient absolute top-24 botttom-0 left-0 right-0">
            <strong className="font-bold text-white block">WarCraft </strong>
            <span className="text-zinc-300 text-sm block ">4 anúcios</span>
          </div>
        </a>
      </div>

      <div className="pt-1">
      <div className="bg-[#2A2634] px-8 py-6 mt-8 self-stretch rounded-lg ">

</div>
      </div>
    </div>
  );
}

export default App;
