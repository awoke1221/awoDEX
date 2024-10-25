import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import Main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            future <span>of</span> finance
          </h1>
          <p>
            Discover the future of finance with AWO-Defi, where you can
            effortlessly trade, stake, and earn with complete security and
            transparency. Our user-friendly platform offers the best rates for
            token swaps, cutting-edge staking options, and seamless integration
            with leading NFT marketplaces. Join our thriving community today and
            unlock endless opportunities in the decentralized world.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={Main} alt="hunting" className="img main-img" />
      </div>
      <div className="container page">
        <img src={Main} alt="hunting" className="img main-img" />
        <div className="info">
          <h3>
            future <span>of</span> finance
          </h3>
          <p>
            Discover the future of finance with AWO-Defi, where you can
            effortlessly trade, stake, and earn with complete security and
            transparency. Our user-friendly platform offers the best rates for
            token swaps, cutting-edge staking options, and seamless integration
            with leading NFT marketplaces. Join our thriving community today and
            unlock endless opportunities in the decentralized world.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
      </div>
      <div className="container page">
        <div className="info">
          <h1>
            future <span>of</span> finance
          </h1>
          <p>
            Discover the future of finance with AWO-Defi, where you can
            effortlessly trade, stake, and earn with complete security and
            transparency. Our user-friendly platform offers the best rates for
            token swaps, cutting-edge staking options, and seamless integration
            with leading NFT marketplaces. Join our thriving community today and
            unlock endless opportunities in the decentralized world.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={Main} alt="hunting" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
