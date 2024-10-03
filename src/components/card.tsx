import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPhone } from "react-icons/bi";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
  BsX,
} from "react-icons/bs";
import { FaPinterest } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CardInterface } from "../../types";

const Card = ({ info }: { info: CardInterface }) => {
  return (
    <div className=" p-5 w-full h-full max-w-sm min-w-36 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col gap-5">
      <div className="flex gap-5 items-center w-full">
        <div className="relative min-w-28 min-h-28 ">
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
      {/* <div className="flex justify-between gap-2">
        {info?.tools && (
          <div className="">
            <h3 className="text-black font-bold">Tools</h3>
            <div className="ml-2">
              <ul className="list-disc marker:text-[#d13643] marker:text-xl">
                {info?.tools.map((tool) => {
                  return (
                    <li
                      key={tool}
                      className="text-gray-700 text-base capitalize text-xs"
                    >
                      {tool}
                    </li>
                  );
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
                {info?.stack.map((stack) => {
                  return (
                    <li
                      key={stack}
                      className="text-gray-700 text-base capitalize text-xs"
                    >
                      {stack}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div> */}

      <div>
        <h3 className="text-black font-bold">Bio</h3>
        <div className="text-gray-700 text-xs py-3">{info?.bio}</div>
      </div>
      <div className="text-black">
        <h3 className=" font-bold">Contact</h3>
        <div className="flex flex-col gap-3 justify-center text-xs">
          {/* mail */}
          {info?.mail && (
            <div className="flex gap-2 items-center">
              <MdEmail size={20} />
              <p>{info?.mail}</p>
            </div>
          )}
          {/* phoneNumber */}
          {info?.phoneNumber && (
            <div className="flex gap-2 items-center">
              <BiPhone size={20} color="blue" />
              <Link href={`tel: ${info?.phoneNumber}`}>
                {info?.phoneNumber}
              </Link>
            </div>
          )}
          {/* whatsapp */}
          {info?.whatsapp && (
            <div className="flex gap-2 items-center">
              <BsWhatsapp size={20} color="green" />
              <Link target="_blank" href={`https://wa.me/${info?.whatsapp}`}>
                Whatsapp
              </Link>
            </div>
          )}
          {/* github */}
          {info?.github && (
            <div className="flex gap-2 items-center">
              <BsGithub size={20} color="" />
              <Link target="_blank" href={`https://github.com/${info?.github}`}>
                Github
              </Link>
            </div>
          )}
          {/* linkedin */}
          {info?.linkedin && (
            <div className="flex gap-2 items-center">
              <BsLinkedin size={20} color="#0a66c2" />
              <Link target="_blank" href={info?.linkedin}>
                Linkedin
              </Link>
            </div>
          )}
          {/* pinterest */}
          {info?.pinterest && (
            <div className="flex gap-2 items-center">
              <FaPinterest size={20} color="red" />
              <Link target="_blank" href="https://pin.it/gWpzlCHrT">
                Pinterest
              </Link>
            </div>
          )}
          {info?.twitter && (
            <div className="flex gap-2 items-center">
              <BsTwitterX size={20} color="black" />
              <Link target="_blank" href={info?.twitter}>
                Twitter
              </Link>
            </div>
          )}
          {info?.instagram && (
            <div className="flex gap-2 items-center">
              <BsInstagram size={20} color="red" />
              <Link target="_blank" href={info?.instagram}>
                Instagram
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
