import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-3xl mb-5 ">Contact</h2>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center justify-center md:justify-start">
          <MdEmail size={30} />
          <p>gsackeyrobertson@gmail.com</p>
        </div>
        <div className="flex gap-5 items-center justify-center md:justify-start">
          <BiPhone size={30} />
          <Link href="tel:+233552853158">+233 55 285 3158 </Link>
        </div>
        <div className="flex gap-5 items-center justify-center md:justify-start">
          <BsWhatsapp size={30} />
          <Link target="_blank" href="https://wa.me/qr/WUX6GEFLODMUN1">
            Whatsapp
          </Link>
        </div>
        <div className="flex gap-5 items-center justify-center md:justify-start">
          <BsLinkedin size={30} />
          <Link
            target="_blank"
            href="http://www.linkedin.com/in/george-sackey-robertson-38690031b"
          >
            Linkedin
          </Link>
        </div>
        <div className="flex gap-5 items-center justify-center md:justify-start">
          <FaPinterest  size={30} />
          <Link target="_blank" href="https://pin.it/gWpzlCHrT">
            Pinterest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
