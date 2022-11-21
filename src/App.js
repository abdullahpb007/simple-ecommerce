import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/global.css";

import Footer from "./components/footer";
import Header from "./components/header";

import productImage1 from "./assets/images/product1.png";
import productImage2 from "./assets/images/product2.png";
import productImage3 from "./assets/images/product3.png";
import ProductCard from "./components/productCard";
import { useState } from "react";

function App() {
  let [productState, setProductState] = useState(products);

  return (
    <>
      <Header />
      <section className="container">
        <div className="row pt-5">
          <div className="col-2">
            <p>Filter</p>
          </div>
          <div className="col">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                <h5>Computers</h5>
                <p>Seo text will be here</p>
              </div>
              <div>
                <select
                  class="form-select"
                  onChange={(e) => {
                    console.log(e.target.value);
                    let sortBy = e.target.value;
                    switch (sortBy) {
                      case "hl": {
                        let newProducts = productState.sort(
                          (a, b) => b.price - a.price
                        );
                        setProductState([...newProducts]);
                        break;
                      }

                      case "lh": {
                        let newProducts = productState.sort(
                          (a, b) => a.price - b.price
                        );
                        setProductState([...newProducts]);
                        break;
                      }

                      default: {
                        setProductState([...products]);
                        break;
                      }
                    }
                  }}
                >
                  <option selected value="mp">
                    Most Popular
                  </option>
                  <option value="lh">Price (Low to High)</option>
                  <option value="hl">Price (High to Low)</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between flex-wrap">
              {productState.map((e, i) => (
                <ProductCard key={i} {...e} />
              ))}
            </div>
            <div className="d-flex flex-row justify-content-center mt-5 mb-5">
              <button
                className="btn btn-primary btn-primary-custom"
                onClick={() => {
                  setProductState([...productState, ...newProducts]);
                }}
              >
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const products = [
  {
    name: "Apple iPhone 13 Pro Max",
    subText: "Rent for AED 139/month",
    isStriked: false,
    StrikedText: "",
    price: 139,
    productImage: productImage1,
  },
  {
    name: 'MacBook Pro 14" Laptop',
    subText: "Rent for AED 189/month",
    isStriked: false,
    StrikedText: "",
    price: 189,
    productImage: productImage2,
  },
  {
    name: 'MacBook Pro 14" Laptop',
    subText: "Rent for AED 189/month",
    isStriked: true,
    StrikedText: "AED 339 / month",
    price: 189,
    productImage: productImage2,
  },
  {
    name: "Microsoft Xbox Series S",
    subText: "Rent for AED 152/month",
    isStriked: false,
    StrikedText: "AED 363 / month",
    price: 152,
    productImage: productImage3,
  },
  {
    name: "Apple iPhone 13 Pro Max",
    subText: "Rent for AED 139/month",
    isStriked: false,
    StrikedText: "",
    price: 139,
    productImage: productImage1,
  },

  {
    name: "Microsoft Xbox Series S",
    subText: "Rent for AED 152/month",
    isStriked: false,
    StrikedText: "AED 363 / month",
    price: 152,
    productImage: productImage3,
  },
  {
    name: "Apple iPhone 13 Pro Max",
    subText: "Rent for AED 139/month",
    isStriked: false,
    StrikedText: "",
    price: 139,
    productImage: productImage1,
  },
  {
    name: "Apple iPhone 13 Pro Max",
    subText: "Rent for AED 139/month",
    isStriked: false,
    StrikedText: "",
    price: 139,
    productImage: productImage1,
  },
  {
    name: 'MacBook Pro 14" Laptop',
    subText: "Rent for AED 189/month",
    isStriked: false,
    StrikedText: "",
    price: 189,
    productImage: productImage2,
  },
  {
    name: "Microsoft Xbox Series S",
    subText: "Rent for AED 152/month",
    isStriked: false,
    StrikedText: "AED 363 / month",
    price: 152,
    productImage: productImage3,
  },

  {
    name: 'MacBook Pro 14" Laptop',
    subText: "Rent for AED 189/month",
    isStriked: false,
    StrikedText: "",
    price: 189,
    productImage: productImage2,
  },
  {
    name: "Microsoft Xbox Series S",
    subText: "Rent for AED 152/month",
    isStriked: false,
    StrikedText: "AED 363 / month",
    price: 152,
    productImage: productImage3,
  },
  {
    name: "Microsoft Xbox Series S",
    subText: "Rent for AED 152/month",
    isStriked: false,
    StrikedText: "AED 363 / month",
    price: 152,
    productImage: productImage3,
  },
  {
    name: "Apple iPhone 13 Pro Max",
    subText: "Rent for AED 139/month",
    isStriked: false,
    StrikedText: "",
    price: 139,
    productImage: productImage1,
  },
  {
    name: 'MacBook Pro 14" Laptop',
    subText: "Rent for AED 189/month",
    isStriked: false,
    StrikedText: "",
    price: 189,
    productImage: productImage2,
  },

  {
    name: 'MacBook Pro 14" Laptop',
    subText: "Rent for AED 189/month",
    isStriked: false,
    StrikedText: "",
    price: 189,
    productImage: productImage2,
  },
  {
    name: "Apple iPhone 13 Pro Max",
    subText: "Rent for AED 139/month",
    isStriked: false,
    StrikedText: "",
    price: 139,
    productImage: productImage1,
  },

  {
    name: "Microsoft Xbox Series S",
    subText: "Rent for AED 152/month",
    isStriked: false,
    StrikedText: "AED 363 / month",
    price: 152,
    productImage: productImage3,
  },
];

const newProducts = [
  {
    name: "Apple iPhone 13 Pro Max",
    subText: "Rent for AED 139/month",
    isStriked: false,
    StrikedText: "",
    price: 139,
    productImage: productImage1,
  },
  {
    name: 'MacBook Pro 14" Laptop',
    subText: "Rent for AED 189/month",
    isStriked: false,
    StrikedText: "",
    price: 189,
    productImage: productImage2,
  },
  {
    name: 'MacBook Pro 14" Laptop',
    subText: "Rent for AED 189/month",
    isStriked: true,
    StrikedText: "AED 339 / month",
    price: 189,
    productImage: productImage2,
  },
];

export default App;
