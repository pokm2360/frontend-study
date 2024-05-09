import './FancyBorder.css';

function FancyBorder(props) {
  console.log(props);

  return (
    <>
      <div className={"FancyBorder FancyBorder-" + props.color}>
        {props.children} {/* FancyBorder의 요소들이 들어감 h1, p태그 */}
      </div>
    </>
  );
};

export default FancyBorder;