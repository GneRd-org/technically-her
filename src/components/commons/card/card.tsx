import { FC, ReactNode } from "react";
type CardProps = {
  image: ReactNode;
  text: string;
};
export const Card: FC<CardProps> = ({ image, text }) => {
  return (
    <section className="flex flex-col gap-2 text-xs w-full justify-center">
      <section className="">{image}</section>
      <section className="break-all">{text}</section>
    </section>
  );
};
