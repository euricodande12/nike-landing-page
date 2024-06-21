import customer1 from "../assets/images/customer1.jpeg";
import customer2 from "../assets/images/customer2.svg";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  const reviews = [
    {
      imgURL: customer1,
      customerName: "Morich Brown",
      rating: 4.5,
      feedback:
        "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    },
    {
      imgURL: customer2,
      customerName: "Lota Mongeskar",
      rating: 4.5,
      feedback:
        "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    },
  ];

  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          ></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
