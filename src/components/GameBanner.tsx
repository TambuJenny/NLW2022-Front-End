interface GameBannerProps {
    imgUrl: string;
    gameName: string;
    ads: number;
}
export function GameBanner(props: GameBannerProps) {

    let ads = '';

    if(props.ads > 1)
         ads = props.ads +' anúcios';
    else   
        ads = props.ads +' anúcio';

  return (
     <a href="" className="relative rounded-lg overflow-hidden">
          <img src= {props.imgUrl} alt={props.imgUrl} />

          <div className="w-full pt-16 pb-12 px-4 bg-game-gradient absolute top-24  botttom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              {props.gameName}
            </strong>
            <span className="text-zinc-300 text-sm block "> {ads} </span>
          </div>
        </a>
  );
}