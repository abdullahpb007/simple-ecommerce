import ProfileIcon from "../assets/svg/profile.svg";
import CartIcon from "../assets/svg/cart.svg";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="d-flex flex-row justify-content-between align-items-center pt-4 pb-4  ">
            <div className="logo">
              <img src={Logo} />
            </div>
            <nav>
              <ul className="inline-list mt-0 mb-0">
                {[
                  { label: "Home" },
                  { label: "All Products" },
                  { label: "Why us" },
                  { label: "How it works" },
                  { label: "For Business" },
                  { label: "FAQ's" },
                ].map(({ label }, i) => (
                  <li key={i} className="ms-3">
                    <a href="#" className="text-regular">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="quick-access">
              <ul className="inline-list ps-0  mt-0 mb-0">
                <li className="pe-3">
                  <a href="#" className="text-white">
                    <img src={ProfileIcon} />
                  </a>
                </li>
                <li className="ps-3">
                  <a href="#" className="text-white ">
                    <img src={CartIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
