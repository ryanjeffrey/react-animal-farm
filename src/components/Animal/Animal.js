export default function Animal(props) {
  return <>
    <div className="animal">
      <img src={`${process.env.PUBLIC_URL}/${props.type}.svg`} />
      <p className="name">{props.name}</p>
      <p>{props.says}</p>
    </div>
  </>;
}
