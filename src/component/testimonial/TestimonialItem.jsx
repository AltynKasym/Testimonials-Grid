import "./testimonial-item.scss";

function TestimonialItem(props) {
  return (
    <div className="user">
      <div className="user__header">
        <img className="user__avatar" src={props.avatar} alt={props.name} />
        <div className="user__header-right">
          <h2 className="user__name">{props.name}</h2>
          <p className="user__status">{props.status}</p>
        </div>
      </div>
      <h3 className="user__testimonial-Title">{props.TesTitle}</h3>
      <p className="user__testimonial-Text">{props.TesText}</p>
    </div>
  );
}
export default TestimonialItem;
