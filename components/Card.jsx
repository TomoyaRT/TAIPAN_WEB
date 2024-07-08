"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Avatar } from "@nextui-org/avatar";
import { IoPerson } from "react-icons/io5";
import Tilt from "react-parallax-tilt";

export const CardComponent = () => {
  return (
    <>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <Card className="cursor-pointer p-3 max-w-[350px] h-[425px] border-2 border-[#e8e8ea]">
          <CardBody className="w-full h-[200px] rounded-xl overflow-hidden">
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
                alt="Mountains"
                src="/04.jpg"
                layout="fill"
                // style={{ objectFit: "contain" }}
                className="rounded-xl opacity-100"
              />
            </div>
          </CardBody>
          <div className="mt-6">
            <div>
              <Chip color="default" variant="flat">
                イベント
              </Chip>
            </div>
            <div className="font-bold text-large mt-3 mb-4">
              クリスマスパーティーを開催しました開催【日本東京】言語【日本
              ・繁体中国】
            </div>
            <div className="flex items-center justify-between w-full ">
              <div className="flex items-center justify-between w-[90px]">
                <Avatar
                  showFallback
                  fallback={<IoPerson className="text-[20px] " />}
                  size="sm"
                />
                <p className="text-[#97989F]">TAIPAN</p>
              </div>
              <small className="text-[#97989F]">2023年12月27日</small>
            </div>
          </div>
        </Card>
      </Tilt>
    </>
  );
};
