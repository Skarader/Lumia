export default function ListItems(props) {
  const { name, id, description, cost, image, keywords } = props.lampa;

  return (
    <>
      <img src={image} alt="lampa" />
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
        <button>Köp för {cost} Kr.</button>
      </div>
      <br />
    </>
  );
}
