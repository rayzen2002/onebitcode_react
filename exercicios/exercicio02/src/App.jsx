import Card from "./components/Card/Card";
import posterImgSw from "./assets/sw-poster.jpg"
import posterImgEsb from "./assets/esb-poster.jpg"
import posterImgRotj from "./assets/rotj-poster.jpg"

export default function App(){
  return (
    <>
      <Card title = "Pôster: Star Wars (1977)" posterImg = {posterImgSw}/>
      <Card title = "Pôster: Empire strikes back (1980)" posterImg = {posterImgEsb}/>
      <Card title = "Pôster: Return of the Jedi (1983)" posterImg = {posterImgRotj}/>
    </>
  )
}