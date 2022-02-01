import "./testimonial.scss";
import { TestimonialItem } from "../Components";
import { userTestimonials } from "../db";

function Testimonial() {
  return (
    <section className="testimonial">
      {userTestimonials.map((item, id) => {
        return (
          <div className="testimonials-item" key={item + id}>
            <TestimonialItem
              avatar={item.userAvatar}
              name={item.userName}
              status={item.userStatus}
              TesTitle={item.userTesTitle}
              TesText={item.userTesText}
            />
          </div>
        );
      })}
      {/* console.log({userTestimonials}) */}
    </section>
  );
}

export default Testimonial;
