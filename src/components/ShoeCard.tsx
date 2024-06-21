import ShoeCardProps from "../interfaces/shoeCardProps.interface";

const ShoeCard: React.FC<ShoeCardProps> = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImage,
}) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL) {
      changeBigShoeImage(imgURL);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
