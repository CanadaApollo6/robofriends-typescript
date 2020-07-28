import React from "react";
import Card from "./Card";
import { RobotDTO } from "../robotDTO";

export interface CardListProps {
  robots: RobotDTO[];
}

const CardList = ({ robots }: CardListProps) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id.toString()}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
