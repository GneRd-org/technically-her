import { FC, ReactNode } from "react";
type CardProps = {
  image: ReactNode;
  text: string;
};
export const Card: FC<CardProps> = ({ image, text }) => {
  return (
    <section className="flex flex-col">
      <section className="">{image}</section>
      <section>{text}</section>
    </section>
  );
};
