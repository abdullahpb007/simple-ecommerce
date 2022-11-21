function ProductCard({
  productImage,
  name,
  subText,
  isStriked,
  StrikedText = "",
}) {
  return (
    <div className="product-card pt-2 pb-4">
      <div className="product-card__image">
        <img src={productImage} />
      </div>
      <p className="mt-1 mb-1">{name}</p>
      {isStriked ? (
        <p className="mt-1 mb-1 striked">
          <del>{StrikedText}</del>
        </p>
      ) : (
        <></>
      )}
      <h6 className={"mt-0 mb-0 " + (isStriked ? "text-highlight" : "")}>
        {subText}
      </h6>
    </div>
  );
}

export default ProductCard;
