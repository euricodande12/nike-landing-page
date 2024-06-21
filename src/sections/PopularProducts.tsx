import popularShoe1 from "../assets/images/shoe4.svg";
import popularShoe2 from "../assets/images/shoe5.svg";
import popularShoe3 from "../assets/images/shoe6.svg";
import popularShoe4 from "../assets/images/shoe7.svg";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  const popularShoes = [
    {
      id: 1,
      image: popularShoe1,
      name: "Nike Air Jordan-01",
      rating: 4,
      price: 200.2,
    },
    {
      id: 2,
      image: popularShoe2,
      name: "Nike Air Jordan-10",
      rating: 4.3,
      price: 210.4,
    },
    {
      id: 3,
      image: popularShoe3,
      name: "Nike Air Jordan-100",
      rating: 4.5,
      price: 220.6,
    },
    {
      id: 4,
      image: popularShoe4,
      name: "Nike Air Jordan-001",
      rating: 5,
      price: 230.8,
    },
  ];

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {popularShoes.map(({ id, image, name, rating, price }) => (
          <PopularProductCard
            key={id}
            imgURL={image}
            name={name}
            rating={rating}
            price={price}
          ></PopularProductCard>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
