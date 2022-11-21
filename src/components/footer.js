import LinkedinIcon from "../assets/svg/linkedin.svg";
import InstagramIcon from "../assets/svg/instagram.svg";
import FacebookIcon from "../assets/svg/facebook.svg";

function FooterCredits() {
  return (
    <div className="d-flex flex-row justify-content-between pb-5">
      <div className="d-flex flex-row align-items-center">
        <p className="text-white ps-2">&#169; 2021 - 2022 LL</p>
        <p className="text-white ps-2">|</p>
        <ul className="inline-list ps-0">
          <li className="text-white ps-2">
            <a href="#" className="text-white">
              Privacy
            </a>
          </li>
          <li className="text-white ps-2">
            &#x2022;
            <a href="#" className="ps-2 text-white ">
              Terms
            </a>
          </li>
          <li className="text-white ps-2">
            &#x2022;
            <a href="#" className="ps-2 text-white">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-row align-items-center">
        <p className="text-white text-regular pe-2">Follow us on</p>
        <ul className="inline-list ps-0">
          <li>
            <a href="#" className="text-white">
              <img src={LinkedinIcon} />
            </a>
          </li>
          <li>
            <a href="#" className="ps-2 text-white ">
              <img src={InstagramIcon} />
            </a>
          </li>
          <li>
            <a href="#" className="ps-2 text-white">
              <img src={FacebookIcon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row pt-5">
          <div class="col-5">
            <h6 className="text-white mb-4">Shop</h6>
            <div className="row">
              <div class="col-4">
                <ul>
                  {[
                    { label: "Computers" },
                    { label: "Phones & Tablets" },
                    { label: "Gaming & VR" },
                    { label: "Audio & Music" },
                    { label: "Wearables" },
                  ].map(({ label }, i) => (
                    <li key={i} className="mt-1">
                      <a href="#" className="text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-4">
                <ul>
                  {[
                    { label: "Wearables" },
                    { label: "Home Entertainment" },
                    { label: "E-mobility" },
                    { label: "Special Products" },
                    { label: "All Categories" },
                  ].map(({ label }, i) => (
                    <li key={i} className="mt-1">
                      <a href="#" className="text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <h6 className="text-white mb-4">LL</h6>

            <ul>
              {[
                { label: "About us" },
                { label: "How it works" },
                { label: "Careers" },
                { label: "Investors" },
                { label: "LL care" },
              ].map(({ label }, i) => (
                <li key={i} className="mt-1">
                  <a href="#" className="text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="col">
            <h6 className="text-white mb-4">Help</h6>

            <ul>
              <li className="text-white mt-1">
                <b>+971 5857 05790</b>
              </li>
              <li className="mt-1">
                <a href="mailto:help@ll.com" className="text-white">
                  <u>help@ll.com</u>
                </a>
              </li>
              {[
                { label: "FAQ's" },
                { label: "Return policy" },
                { label: "Contact us" },
              ].map(({ label }, i) => (
                <li key={i} className="mt-1">
                  <a href="#" className="text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="col-3">
            <h6 className="text-white mb-4">Be in the know</h6>
            <p className="text-white">
              Get the latest products, promotions, and design tips in your
              inbox.
            </p>
            <input
              className="form-control form-control-custom mb-3"
              placeholder="Email Address"
            />
            <div class="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary btn-primary-custom"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="text-white mt-5 mb-5" />
        <FooterCredits />
      </div>
    </section>
  );
}

export default Footer;
