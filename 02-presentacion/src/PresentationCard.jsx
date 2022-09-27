import "./PresentationCard.css";
import avatar from "./assets/avatar.jpg";
let name = "Uriel";
function PresentationCard(){
  return(
    <div class="presentation-card">
      <img src={avatar} alt="Avatar" class="avatar" />
      <h1>Hola, soy {name} y estoy aprendiendo React</h1>
    </div>
  );
}

export default PresentationCard;