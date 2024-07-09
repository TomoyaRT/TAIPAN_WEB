"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Avatar } from "@nextui-org/avatar";
import { IoPerson } from "react-icons/io5";
import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";

export const CardComponent = ({ date, title, image, tag }) => {
  return (
    <>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <Card className="cursor-pointer p-3 max-w-[350px] h-[425px] border-2 border-[#e8e8ea]">
          <CardBody className="w-full min-h-[200px] h-[200px] max-h-[200px] rounded-xl overflow-hidden">
            <div
              className="rounded-xl"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
              }}
            >
              <Image
                isZoomed
                alt="Image"
                className="rounded-xl opacity-100"
                layout="fill"
                src={image}
              />
            </div>
          </CardBody>
          <div className="mt-6 h-full relative">
            <div>
              <Chip color="default" variant="flat">
                {tag}
              </Chip>
            </div>
            <div className="font-bold text-large mt-3 mb-4">{title}</div>
            <div className="flex items-center justify-between w-full absolute bottom-0 left-0">
              <div className="flex items-center justify-between w-[90px]">
                <Avatar
                  showFallback
                  fallback={<IoPerson className="text-[20px] " />}
                  size="sm"
                />
                <p className="text-[#97989F]">TAIPAN</p>
              </div>
              <small className="text-[#97989F]">{date}</small>
            </div>
          </div>
        </Card>
      </Tilt>
    </>
  );
};

CardComponent.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
