"use client";

import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";

import { Carousel } from "@/components/Carousel";
import { Board } from "@/components/Board";
import { CardComponent } from "@/components/Card";

import "@/components/styles.css";
import { FaQuestionCircle } from "react-icons/fa";
import Lottie from "react-lottie-player";

import PuzzleAnimation from "@/lottie/Puzzle.json";

const CardListStyles =
  "grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 tablet-md:grid-cols-3 desktop-md:grid-cols-3";

const DividerElement = (
  <div className="my-[30px] mx-auto w-[90%] min-[1024px]:w-[85%]">
    <Divider />
  </div>
);

const SectionTitle = (title) => (
  <div className="w-full text-center">
    <div className={"inline-block highlight text-[30px] my-[30px]"}>
      {title}
    </div>
  </div>
);

const SectionWrapper = (childrenElement) => (
  <div className="flex flex-col justify-center items-center">
    <div className="min-w-[300px] max-w-[1200px] mx-[30px]">
      <div className="w-[100%]">{childrenElement}</div>
    </div>
  </div>
);

const fakeEventDataList = [
  {
    date: "2024年1月22日",
    tag: "イベント",
    title:
      "クリスマスパーティーを開催しました開催【日本東京】言語【日本 ・繁体中国】",
    image: "/event/01.jpg",
  },
  {
    date: "2024年1月22日",
    tag: "イベント",
    title: "開催【日本大阪】言語【繁体中国語】青商逗陣來作伙~日總青商來圍爐",
    image: "/event/02.jpg",
  },
  {
    date: "2023年12月19日",
    tag: "イベント",
    title: "TAIPAN クリスマスパーティーのご案内",
    image: "/event/03.jpg",
  },
  {
    date: "2024年1月22日",
    tag: "イベント",
    title: "開催【日本大阪】言語【繁体中国語】青商逗陣來作伙~日總青商來圍爐",
    image: "/event/02.jpg",
  },
  {
    date: "2023年12月19日",
    tag: "イベント",
    title: "TAIPAN クリスマスパーティーのご案内",
    image: "/event/03.jpg",
  },
  {
    date: "2024年1月22日",
    tag: "イベント",
    title:
      "クリスマスパーティーを開催しました開催【日本東京】言語【日本 ・繁体中国】",
    image: "/event/01.jpg",
  },
];

const fakeTrajectoryDataList = [
  {
    date: "2023年10月21日",
    tag: "軌跡",
    title: "日本酒講座",
    image: "/trajectory/01.jpg",
  },
  {
    date: "2023年12月21日",
    tag: "軌跡",
    title:
      "【台湾ニュース青年セミナー】日本の仕事とビジネスが熱心に語る・風の時代へ",
    image: "/trajectory/02.jpg",
  },
  {
    date: "2024年1月22日",
    tag: "軌跡",
    title:
      "クリスマスパーティーを開催しました開催【日本東京】言語【日本 ・繁体中国】",
    image: "/event/01.jpg",
  },
  {
    date: "2023年12月21日",
    tag: "軌跡",
    title:
      "【台湾ニュース青年セミナー】日本の仕事とビジネスが熱心に語る・風の時代へ",
    image: "/trajectory/02.jpg",
  },
  {
    date: "2024年1月22日",
    tag: "軌跡",
    title:
      "クリスマスパーティーを開催しました開催【日本東京】言語【日本 ・繁体中国】",
    image: "/event/01.jpg",
  },
  {
    date: "2023年10月21日",
    tag: "軌跡",
    title: "日本酒講座",
    image: "/trajectory/01.jpg",
  },
];

export default function App() {
  return (
    <>
      <Carousel />

      {DividerElement}

      {SectionWrapper(
        <>
          {SectionTitle("掲示板")}
          <Board />
        </>
      )}

      {SectionWrapper(
        <>
          <div className="w-full text-center">
            <div
              className={
                "inline-block highlight text-[30px] my-[30px] relative"
              }
            >
              TAIPAN
              <div className="absolute top-[10px] -right-[35px] ">
                <Tooltip
                  content={
                    <div className="px-1 py-2">
                      <div className="text-[14px]">
                        <p>本連盟の中国語正式名称は「台日跨領域聯盟」</p>
                        <p>本連盟の日本語名称は「台日異業種連盟」</p>
                        <p>
                          TAIPAN は Taiwan と Japan の英単語の複合新語です(^^♪
                        </p>
                      </div>
                    </div>
                  }
                >
                  <div>
                    <FaQuestionCircle className="text-[23px]" />
                  </div>
                </Tooltip>
              </div>
            </div>

            <div className="flex flex-col-reverse min-[1150px]:flex-row justify-between items-center w-full min-[768px]:w-[85%] mx-auto">
              <p className="w-[100%] min-[768px]:w-[75%] min-[1150px]:w-[50%] text-[18px] font-semibold text-start">
                日本と台湾を愛する人たちが集まり、文化や歴史について、語り合い、学び、理解を深めるとともに
                国籍・言語を超えた『人と人の絆』を創るための架け橋を担う団体です
              </p>
              <div className="relative w-[250px] h-[250px] min-[768px]:w-[300px] min-[768px]:h-[300px] min-[1150px]:w-[350px] min-[1150px]:h-[350px]">
                <Image
                  fill
                  alt="Mountains"
                  className="opacity-100"
                  sizes="50vw"
                  src="/TAIPAN01.png"
                />
              </div>
            </div>

            <div className="flex flex-col min-[1150px]:flex-row justify-between items-center w-full min-[768px]:w-[85%] mx-auto">
              <div className="relative w-[250px] h-[250px] min-[768px]:w-[300px] min-[768px]:h-[300px] min-[1150px]:w-[350px] min-[1150px]:h-[350px]">
                <Lottie
                  loop
                  play
                  animationData={PuzzleAnimation}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="w-[100%] min-[768px]:w-[75%] min-[1150px]:w-[50%] text-[18px] font-semibold text-start">
                <p>
                  現在TAIPANが企画するイベントは、主に日本で開催されています。
                </p>
                <p>
                  国籍や年齢、性別を超えて交流できる場を作り、
                  繋がりや絆を創ることを目的としています。
                </p>
                <p>
                  また、学生から社会人までイベントの共催、運営で
                  色んなノウハウを学び、社会貢献やチャレンジの場を提供します。
                </p>
                <br />
                <p>[募集ボランティア：実例]</p>
                <p>
                  イベント企画提案、運営スタッフ、撮影スタッフ、イベントレポート作成者
                  等
                </p>
                <p>
                  ⇒協力いただいた方は、必ずイベントレポートに記載させていただきます！
                  TAIPANのコアメンバーがあなたのチャレンジをサポートします！
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {SectionWrapper(
        <>
          {SectionTitle("軌跡")}
          <div className={CardListStyles}>
            {fakeTrajectoryDataList.map((item, index) => (
              <CardComponent
                key={index}
                date={item.date}
                image={item.image}
                tag={item.tag}
                title={item.title}
              />
            ))}
          </div>

          {SectionTitle("イベント")}
          <div className={CardListStyles}>
            {fakeEventDataList.map((item, index) => (
              <CardComponent
                key={index}
                date={item.date}
                image={item.image}
                tag={item.tag}
                title={item.title}
              />
            ))}
          </div>
        </>
      )}

      <br />
      {DividerElement}
      <br />
    </>
  );
}
