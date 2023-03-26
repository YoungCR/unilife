function Footer() {
  return (
    <div className="bg-black flex justify-center">
      <footer className="w-[1440px] text-uni-grey flex justify-between px-20 py-9">
        <div className="flex items-center">
          <a href="#">About Us</a>
          <a href="#" className="ml-10">
            Terms & Conditions
          </a>
          <a href="#" className="ml-10">
            {' '}
            Privacy & Cookie Policies
          </a>
        </div>
        <div className="flex justify-around items-center">
          <p>2022</p>
          <p className="ml-7">© UniLife</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
