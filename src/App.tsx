import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

import { GameBanner } from "./components/GameBanner";
import { CreatAdBanner } from "./components/CreatAdBanner";

function App() {


  return (
    
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white mt-20 font-black">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
       <GameBanner gameName="Grand Theft Auto V" imgUrl="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg" ads={1} />
       <GameBanner gameName="Grand Theft Auto V" imgUrl="https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg" ads={5} />
       <GameBanner gameName="Grand Theft Auto V" imgUrl="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg" ads={5} />
       <GameBanner gameName="NBA 2K23" imgUrl="https://static-cdn.jtvnw.net/ttv-boxart/772421245_IGDB-188x250.jpg" ads={0} />
      </div>

      <CreatAdBanner/>
      
    </div>
  );
}

export default App;
