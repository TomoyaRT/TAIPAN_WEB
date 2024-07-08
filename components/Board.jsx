"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";

const fakeBoardData = [
  {
    key: 1,
    date: "2024年4月23日",
    category: "活動",
    title:
      "Monthly Community Gathering [International Party] / マンスリー国際交流パーティー[国際交流パーティ]開催【日本 銀座】",
  },
  {
    key: 2,
    date: "2024年4月24日",
    category: "活動",
    title:
      "Monthly Community Gathering [International Party] / マンスリー国際交流パーティー[国際交流パーティ]開催【日本 銀座】",
  },
  {
    key: 3,
    date: "2024年4月25日",
    category: "活動",
    title:
      "Monthly Community Gathering [International Party] / マンスリー国際交流パーティー[国際交流パーティ]開催【日本 銀座】",
  },

  {
    key: 4,
    date: "2024年4月26日",
    category: "活動",
    title:
      "Monthly Community Gathering [International Party] / マンスリー国際交流パーティー[国際交流パーティ]開催【日本 銀座】",
  },
  {
    key: 5,
    date: "2024年4月27日",
    category: "活動",
    title:
      "Monthly Community Gathering [International Party] / マンスリー国際交流パーティー[国際交流パーティ]開催【日本 銀座】",
  },
];

export const Board = () => {
  return (
    <Table
      //   isStriped
      aria-label="Example static collection table"
      bottomContent={
        <div className="flex w-full justify-center">
          <Button variant="flat">Load More</Button>
        </div>
      }
      color={"primary"}
      selectionMode="single"
    >
      <TableHeader>
        <TableColumn maxWidth={100}>日期</TableColumn>
        <TableColumn minWidth={200}>分類</TableColumn>
        <TableColumn minWidth={300}>名稱</TableColumn>
      </TableHeader>
      <TableBody>
        {fakeBoardData.map((item) => (
          <TableRow key={item.key}>
            <TableCell className="text-nowrap">{item.date}</TableCell>
            <TableCell className="cursor-pointer">
              <Chip color="default" variant="flat">
                {item.category}
              </Chip>
            </TableCell>
            <TableCell className="cursor-pointer">
              {/* <div className="truncate  max-w-[300px]">{item.title}</div> */}
              {item.title}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
