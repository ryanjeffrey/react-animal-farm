import './Animal.css';

export default function Animal(props) {
  let audio = new Audio(process.env.PUBLIC_URL + `/animals/${props.type}.mp3`);

  const start = () => {
    audio.play();
  };

  return <>
    <div className="animal" style={{ top: `${props.top}`, left: `${props.left}` }} onClick={start}>
      <img src={process.env.PUBLIC_URL + `/animals/${props.type}.svg`} />
      <p className="name">{props.name}</p>
      <p>{props.says}</p>
    </div>
  </>;
}
