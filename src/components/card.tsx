import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CardInterface } from "../../types";

const Card = ({ info }: { info: CardInterface }) => {
  return (
    <div className=" p-5 w-full max-w-sm min-w-36 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-center gap-5">
      <div className="flex gap-5 items-center w-full">
        <div className="relative w-32 h-32 ">
          <Image
            fill
            src={info?.src}
            alt="profile"
            className="object-cover object-center rounded-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-sm text-gray-700 capitalize">{info?.name}</div>
          <div className="text-sm text-gray-500 capitalize">{info?.role}</div>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        {info?.tools && (
          <div className="">
            <h3 className="text-black font-bold">Tools</h3>
            <div className="ml-2">
              <ul className="list-disc marker:text-[#d13643] marker:text-xl">
                {info?.tools.map((tool) => {
                  return <li className="text-gray-700 text-base capitalize text-xs">{tool}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
        {info?.stack && (
          <div className="">
            <h3 className="text-black font-bold">Stack</h3>
            <div className="ml-2">
              <ul className="list-disc marker:text-[#d13643] marker:text-xl">
                {info?.stack.map((tool) => {
                  return <li className="text-gray-700 text-base capitalize text-xs">{tool}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="text-black">
        <h3 className=" font-bold">Contact</h3>
        <div className="flex flex-col gap-2 justify-center">
            {
                info?.mail && 
            }
            {
                info?.mail && 
            }
            {
                info?.mail && 
            }
          <div className="flex gap-5 items-center">
            <MdEmail size={20} />
            <p>gsackeyrobertson@gmail.com</p>
          <div className="flex gap-5 items-center">
            <BiPhone size={20} color="blue" />
            <Link href="tel:+233552853158">+233 55 285 3158 </Link>
          </div>
          </div>
            {
                info?.whatsapp && 
          <div className="flex gap-5 items-center">
            <BsWhatsapp size={20} color="green" />
            <Link target="_blank" href={`https://wa.me/${info?.whatsapp}`}>
              Whatsapp
            </Link>
          </div>
            }
            {
                info?.linkedin && 
          <div className="flex gap-5 items-center">
            <BsLinkedin size={20} color="#0a66c2" />
            <Link
              target="_blank"
              href="http://www.linkedin.com/in/george-sackey-robertson-38690031b"
              >
              Linkedin
            </Link>
          </div>
            }
                {
                    info?.pinterest && 
          <div className="flex gap-5 items-center">
            <FaPinterest size={20} color="red" />
            <Link target="_blank" href="https://pin.it/gWpzlCHrT">
              Pinterest
            </Link>
          </div>
                }
        </div>
      </div>
    </div>
  );
};

export default Card;
