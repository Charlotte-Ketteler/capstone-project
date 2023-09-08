import { 
CowgirlHoldsHatImage,
HowdyH1,
HomeBody,
TextHome

} 
from "./index.styled"


export default function Homepage(){

    return(
        <>
<HomeBody>
        <HowdyH1>Howdy!</HowdyH1>
        <TextHome>Starte direkt durch und verwalte deine Reitstunden.</TextHome>
        <CowgirlHoldsHatImage
         src="/cowgirl_holding_hat.jpg"
         alt="cowgirl on white horse"
         height={360}
         width={240}
        />
      </HomeBody>
     
        </>
    )
}