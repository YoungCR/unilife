// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import unilifeText from '../assets/UniLifeLogo.svg';
import unilifeLogo from '../assets/UniLifeText.svg';

function Header() {
  return (
    <div className="bg-uni-blue flex justify-center">
      <header className="w-[1440px] h-16 flex justify-between items-center text-white px-20">
        <Link to="/" className="flex items-baseline">
          <img src={unilifeLogo} alt="UniLife Text" />
          <img src={unilifeText} alt="UniLife Logo" className="pl-4" />
        </Link>
        <nav className="flex">
          <div className="flex justify-center items-center pl-11">
            <AiOutlineHeart />
            <a href="/" className="pl-2.5">
              Shortlist
            </a>
          </div>
          <div className="flex justify-center items-center pl-11">
            <AiOutlineMail />
            <a href="/" className="pl-2.5">
              Contact Us
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
