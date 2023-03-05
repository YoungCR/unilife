import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

function Contact() {
  return (
    <section className="bg-uni-blue flex justify-around text-white py-20">
      <div className="flex flex-col justify-start max-w-md">
        <h2 className="font-medium text-4xl mb-4">Keep in touch</h2>
        <p className="font-normal text-xl mb-10">
          Curious about new offerings? Sign up for our weekly newsletter and
          stay informed.
        </p>
        <form action="">
          <input
            type="email"
            placeholder="Your email"
            className="border-uni-grey border rounded-xl h-12 text-uni-grey w-80"
          />
        </form>
      </div>
      <div className="flex flex-col justify-start max-w-md">
        <h2 className="font-medium text-4xl mb-4">Let's Socialize</h2>
        <div className="flex items-baseline">
          <FaFacebook />
          <p className="font-normal text-xl ml-5">Facebook</p>
        </div>
        <div className="flex items-baseline">
          <AiFillTwitterCircle />
          <p className="font-normal text-xl ml-5">Twitter</p>
        </div>
        <div className="flex items-baseline">
          <AiFillInstagram />
          <p className="font-normal text-xl ml-5">Instagram</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
