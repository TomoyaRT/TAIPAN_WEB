"use client";

import React from "react";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";

const InstagramIcon = () => {
  return (
    <svg
      height="96px"
      viewBox="0 0 48 48"
      width="96px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <radialGradient
        cx="19.38"
        cy="42.035"
        gradientUnits="userSpaceOnUse"
        id="yOrnnhliCrdS2gy~4tD8ma"
        r="44.899"
      >
        <stop offset="0" stopColor="#fd5" />
        <stop offset=".328" stopColor="#ff543f" />
        <stop offset=".348" stopColor="#fc5245" />
        <stop offset=".504" stopColor="#e64771" />
        <stop offset=".643" stopColor="#d53e91" />
        <stop offset=".761" stopColor="#cc39a4" />
        <stop offset=".841" stopColor="#c837ab" />
      </radialGradient>
      <path
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
      />
      <radialGradient
        cx="11.786"
        cy="5.54"
        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
        gradientUnits="userSpaceOnUse"
        id="yOrnnhliCrdS2gy~4tD8mb"
        r="29.813"
      >
        <stop offset="0" stopColor="#4168c9" />
        <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
      </radialGradient>
      <path
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
      />
      <path
        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        fill="#fff"
      />
      <circle cx="31.5" cy="16.5" fill="#fff" r="1.5" />
      <path
        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        fill="#fff"
      />
    </svg>
  );
};

const ListboxWrapper = ({ children }) => (
  <div className="w-full max-w-[400px] min-w-[300px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

function ListBox() {
  return (
    <ListboxWrapper>
      <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
        <ListboxSection title="活動資訊">
          <ListboxItem key="new">
            ・Project: Ligaya 幸福企劃　「Globe」X「社会貢献」
          </ListboxItem>
          <ListboxItem key="copy">
            ・Project: Ligaya 幸福企劃　「Globe」X「社会貢献」
          </ListboxItem>
          <ListboxItem key="edit">
            ・Project: Ligaya 幸福企劃　「Globe」X「社会貢献」
          </ListboxItem>
          <ListboxItem key="edit2">
            ・Project: Ligaya 幸福企劃　「Globe」X「社会貢献」
          </ListboxItem>
          <ListboxItem key="edit3">
            ・Project: Ligaya 幸福企劃　「Globe」X「社会貢献」
          </ListboxItem>
        </ListboxSection>
      </Listbox>
    </ListboxWrapper>
  );
}

export const Footer = () => {
  return (
    <>
      <div className="mx-auto w-[100%]">
        <div className="w-[80%] mx-auto flex flex-col-reverse min-[1150px]:flex-row justify-between items-center">
          <div className="flex-col">
            <div className="text-[30px] mt-0 pt-0 font-medium">TAIPAN</div>
            <div className="flex justify-between items-center w-[250px]">
              <Image
                alt="Mountains"
                className="opacity-100 border  border-solid	border-gray-400 shadow-lg"
                height={100}
                src="/10.png"
                width={100}
              />
              <Image
                alt="Picture of the author"
                className="opacity-100 shadow-lg"
                height={100}
                src="/11.png"
                width={100}
              />
            </div>

            <div className="w-[200px] flex justify-between items-center ">
              <Button isIconOnly aria-label="Like" variant="light">
                <FaFacebookSquare
                  className="text-[30px]"
                  style={{ fill: "#0962F7" }}
                />
              </Button>
              <Button isIconOnly aria-label="Like" variant="light">
                <FaLinkedin
                  className="text-[30px]"
                  style={{ fill: "#0B65C2" }}
                />
              </Button>
              <Button isIconOnly aria-label="Like" variant="light">
                <FaYoutube className="text-[30px]" style={{ fill: "red" }} />
              </Button>
              <Button isIconOnly aria-label="Like" variant="light">
                <InstagramIcon />
              </Button>
            </div>

            <div className="flex justify-between items-center">
              <Link href="#">服務條款</Link>
              <Link href="#">隱私權政策</Link>
            </div>
          </div>
          <div>
            <ListBox />
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};
