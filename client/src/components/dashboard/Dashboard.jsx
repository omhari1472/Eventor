import * as React from "react";
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import usePrivateRoute from "../login/usePrivateRoute";
  
const Dashboard = ({ isAuthenticated }) => {
    // Use the usePrivateRoute hook to secure the route
    usePrivateRoute(isAuthenticated);
    const navigate = useNavigate();

    const handleClick = () => {
      // Navigate to the "/event" route when the button is clicked
      navigate('/event');
    };
  
  return (
    <>
  <header className="header" data-header="">
  
  <button onClick={handleClick}>
        Event
      </button>


    <div className="container">
      <a href="#">
        <h1 className="logo">Tourest</h1>
      </a>
      <button
        className="nav-toggle-btn"
        data-nav-toggle-btn=""
        aria-label="Toggle Menu"
      >
        <ion-icon name="menu-outline" className="open" />
        <ion-icon name="close-outline" className="close" />
      </button>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a href="#" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Tours
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Destinations
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Contact Us
            </a>
          </li>
        </ul>
        <a href="#" className="btn btn-secondary">
          Booking Now
        </a>
      </nav>
    </div>
  </header>
  <main>
    <article>
      {/* 
  - #HERO
*/}
      <section
        className="section hero"
        style={{
          backgroundImage:
            'url("./assets/images/hero-bg-bottom.png") url("./assets/images/hero-bg-top.png")'
        }}
      >
        <div className="container">
          <img
            src="./assets/images/shape-1.png"
            width={61}
            height={61}
            alt="Vector Shape"
            className="shape shape-1"
          />
          <img
            src="./assets/images/shape-2.png"
            width={56}
            height={74}
            alt="Vector Shape"
            className="shape shape-2"
          />
          <img
            src="./assets/images/shape-3.png"
            width={57}
            height={72}
            alt="Vector Shape"
            className="shape shape-3"
          />
          <div className="hero-content">
            <p className="section-subtitle">Explore Your Travel</p>
            <h2 className="hero-title">Trusted Travel Agency</h2>
            <p className="hero-text">
              I travel not to go anywhere, but to go. I travel for travel's sake
              the great affair is to move.
            </p>
            <div className="btn-group">
              <a href="#" className="btn btn-primary">
                Contact Us
              </a>
              <a href="#" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
          <figure className="hero-banner">
            <img
              src="./assets/images/hero-banner.png"
              width={686}
              height={812}
              loading="lazy"
              alt="hero banner"
              className="w-100"
            />
          </figure>
        </div>
      </section>
      {/* 
  - #DESTINATION
*/}
      <section className="section destination">
        <div className="container">
          <p className="section-subtitle">Destinations</p>
          <h2 className="h2 section-title">Choose Your Place</h2>
          <ul className="destination-list">
            <li className="w-50">
              <a href="#" className="destination-card">
                <figure className="card-banner">
                  <img
                    src="./assets/images/destination-1.jpg"
                    width={1140}
                    height={1100}
                    loading="lazy"
                    alt="Malé, Maldives"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Malé</p>
                  <h3 className="h3 card-title">Maldives</h3>
                </div>
              </a>
            </li>
            <li className="w-50">
              <a href="#" className="destination-card">
                <figure className="card-banner">
                  <img
                    src="./assets/images/destination-2.jpg"
                    width={1140}
                    height={1100}
                    loading="lazy"
                    alt="Bangkok, Thailand"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Bangkok</p>
                  <h3 className="h3 card-title">Thailand</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="destination-card">
                <figure className="card-banner">
                  <img
                    src="./assets/images/destination-3.jpg"
                    width={1110}
                    height={480}
                    loading="lazy"
                    alt="Kuala Lumpur, Malaysia"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Kuala Lumpur</p>
                  <h3 className="h3 card-title">Malaysia</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="destination-card">
                <figure className="card-banner">
                  <img
                    src="./assets/images/destination-4.jpg"
                    width={1110}
                    height={480}
                    loading="lazy"
                    alt="Kathmandu, Nepal"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Kathmandu</p>
                  <h3 className="h3 card-title">Nepal</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="destination-card">
                <figure className="card-banner">
                  <img
                    src="./assets/images/destination-5.jpg"
                    width={1110}
                    height={480}
                    loading="lazy"
                    alt="Jakarta, Indonesia"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Jakarta</p>
                  <h3 className="h3 card-title">Indonesia</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #POPULAR
*/}
      <section className="section popular">
        <div className="container">
          <p className="section-subtitle">Featured Tours</p>
          <h2 className="h2 section-title">Most Popular Tours</h2>
          <ul className="popular-list">
            <li>
              <div className="popular-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src="./assets/images/popular-1.jpg"
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="Kuala Lumpur, Malaysia"
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="P12D">12 Days</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">From $50.00</div>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star-outline" />
                      <data value={2}>(2)</data>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </a>
                  </h3>
                  <address className="card-location">
                    Kuala Lumpur, Malaysia
                  </address>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src="./assets/images/popular-2.jpg"
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="Kuala Lumpur, Malaysia"
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="P12D">12 Days</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">From $50.00</div>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star-outline" />
                      <data value={2}>(2)</data>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </a>
                  </h3>
                  <address className="card-location">
                    Kuala Lumpur, Malaysia
                  </address>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src="./assets/images/popular-3.jpg"
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="Kuala Lumpur, Malaysia"
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="P12D">12 Days</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">From $50.00</div>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star-outline" />
                      <data value={2}>(2)</data>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </a>
                  </h3>
                  <address className="card-location">
                    Kuala Lumpur, Malaysia
                  </address>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #ABOUT
*/}
      <section className="section about">
        <div className="container">
          <div className="about-content">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">
              Explore all tour of the world with us.
            </h2>
            <p className="about-text">
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
            <ul className="about-list">
              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="compass" />
                </div>
                <div className="about-item-content">
                  <h3 className="h3 about-item-title">Tour guide</h3>
                  <p className="about-item-text">
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some.
                  </p>
                </div>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="briefcase" />
                </div>
                <div className="about-item-content">
                  <h3 className="h3 about-item-title">Friendly price</h3>
                  <p className="about-item-text">
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some.
                  </p>
                </div>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="umbrella" />
                </div>
                <div className="about-item-content">
                  <h3 className="h3 about-item-title">Reliable tour</h3>
                  <p className="about-item-text">
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some.
                  </p>
                </div>
              </li>
            </ul>
            <a href="#" className="btn btn-primary">
              Booking Now
            </a>
          </div>
          <figure className="about-banner">
            <img
              src="./assets/images/about-banner.png"
              width={756}
              height={842}
              loading="lazy"
              alt=""
              className="w-100"
            />
          </figure>
        </div>
      </section>
      {/* 
  - #BLOG
*/}
      <section className="section blog">
        <div className="container">
          <p className="section-subtitle">From The Blog Post</p>
          <h2 className="h2 section-title">Latest News &amp; Articles</h2>
          <ul className="blog-list">
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src="./assets/images/popular-1.jpg"
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving."
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="12-04">04 Dec</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="author-wrapper">
                      <figure className="author-avatar">
                        <img
                          src="./assets/images/author-avatar.png"
                          width={30}
                          height={30}
                          alt="Jony bristow"
                        />
                      </figure>
                      <div>
                        <a href="#" className="author-name">
                          Jony bristow
                        </a>
                        <p className="author-title">Admin</p>
                      </div>
                    </div>
                    <time className="publish-time" dateTime="10:30">
                      10:30 AM
                    </time>
                  </div>
                  <h3 className="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </a>
                  </h3>
                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src="./assets/images/blog-2.jpg"
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving."
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="12-04">04 Dec</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="author-wrapper">
                      <figure className="author-avatar">
                        <img
                          src="./assets/images/author-avatar.png"
                          width={30}
                          height={30}
                          alt="Jony bristow"
                        />
                      </figure>
                      <div>
                        <a href="#" className="author-name">
                          Jony bristow
                        </a>
                        <p className="author-title">Admin</p>
                      </div>
                    </div>
                    <time className="publish-time" dateTime="10:30">
                      10:30 AM
                    </time>
                  </div>
                  <h3 className="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </a>
                  </h3>
                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src="./assets/images/blog-3.jpg"
                      width={740}
                      height={518}
                      loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving."
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline" />
                    <time dateTime="12-04">04 Dec</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="author-wrapper">
                      <figure className="author-avatar">
                        <img
                          src="./assets/images/author-avatar.png"
                          width={30}
                          height={30}
                          alt="Jony bristow"
                        />
                      </figure>
                      <div>
                        <a href="#" className="author-name">
                          Jony bristow
                        </a>
                        <p className="author-title">Admin</p>
                      </div>
                    </div>
                    <time className="publish-time" dateTime="10:30">
                      10:30 AM
                    </time>
                  </div>
                  <h3 className="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on
                      arriving.
                    </a>
                  </h3>
                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
  <footer
    className="footer"
    style={{ backgroundImage: 'url("./assets/images/footer-bg.png")' }}
  >
    <div className="container">
      <div className="footer-top">
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Top destination</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Indonesia, Jakarta
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Maldives, Malé
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Australia, Canberra
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Thailand, Bangkok
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Morocco, Rabat
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Categories</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Travel
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Lifestyle
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Fashion
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Education
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Food &amp; Drink
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Quick links</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Tours
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Booking
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
        <div className="footer-list">
          <p className="footer-list-title">Get a newsletter</p>
          <p className="newsletter-text">
            For the latest deals and tips, travel no further than your inbox
          </p>
          <form action="" className="newsletter-form">
            <input
              type="email"
              name="email"
              required=""
              placeholder="Email address"
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#" className="logo">
          Tourest
        </a>
        <p className="copyright">
          © 2022{" "}
          <a href="#" className="copyright-link">
            codewithsadee
          </a>
          . All Rights Reserved
        </p>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-google" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  {/* 
    - #GO TO TOP
  */}
  <a href="#top" className="go-top" data-go-top="" aria-label="Go To Top">
    <ion-icon name="chevron-up-outline" />
  </a>
    </>
  )
}

export default Dashboard;
