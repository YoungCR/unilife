// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import unilifeText from '../assets/UniLifeLogo.svg';
import unilifeLogo from '../assets/UniLifeText.svg';

function Header() {
  return (
    <header className="bg-uni-blue h-16 flex justify-between items-center text-white px-20">
      <div className="flex items-baseline">
        <img src={unilifeLogo} alt="UniLife Text" />
        <img src={unilifeText} alt="UniLife Logo" className="pl-4" />
      </div>
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
  );
}

export default Header;
