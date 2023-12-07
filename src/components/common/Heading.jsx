import ChairPhoto from "../../images/rocking_chair.png";

function Heading(props) {
  return (
    <>
      <div className={props.className}>
        <div className={props.leftSideName}>
          <img src={ChairPhoto} alt="" className="chairImage"/>
        </div>
        <div className={props.rightSideName}>
          <h1>Chair</h1>
          <section>
            <h4>What is called chair? </h4>
            A chair is a type of seat,
            typically designed for one person and consisting of one or more
            legs, a flat or slightly angled seat and a back-rest. They may be
            made of wood, metal, or synthetic materials, and may be padded or
            upholstered in various colors and fabrics.
          </section>
        </div>
      </div>
    </>
  );
}

export default Heading;
