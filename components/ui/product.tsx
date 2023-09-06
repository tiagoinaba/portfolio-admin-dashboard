import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import defaultImg from "@/assets/produtos/ketchup.jpg";

export const Product = ({
  className,
  imgUrl,
  name,
  price,
}: {
  className?: string;
  imgUrl?: string;
  name: string;
  price: number;
}) => {
  return (
    <div
      className={cn(
        "border rounded flex-auto min-w-[200px] cursor-pointer hover:bg-red-100 p-4 transition-colors duration-500 text-center flex flex-col justify-between max-w-[250px] mx-auto max-h-[400px]",
        className
      )}
    >
      <div className="relative h-3/4 rounded overflow-hidden w-full">
        <Image
          src={imgUrl ?? defaultImg}
          alt="Imagem do produto"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className="text-lg font-semibold tracking-tight truncate">{name}</h3>
      <span>R${price}</span>
    </div>
  );
};
