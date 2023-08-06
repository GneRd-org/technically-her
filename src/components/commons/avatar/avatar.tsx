import React from "react";

export type AvatarProps = {
  imgSrc: string;
  onlineStatus?:
    | "Employed"
    | "Looking & Employed"
    | "Freelancing"
    | "Unemployed";
  className?: string;
};

export const Avatar = ({ imgSrc, onlineStatus, className }: AvatarProps) => {
  const color = onlineStatus === "Unemployed" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`avatar inline-block relative w-50 h-50 ${className}`}>
      <img className="rounded-3xl" src={imgSrc} alt="Avatar" />
      {onlineStatus !== "Unemployed" && onlineStatus && (
        <p
          className={`absolute p-2 w-27 -bottom-3.5 left-1/3 rounded-md ${color} text-white`}
        >
          {onlineStatus}
        </p>
      )}
    </div>
  );
};
