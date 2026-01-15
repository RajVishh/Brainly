import { cva, type VariantProps } from "class-variance-authority";
import { type ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import {getYouTubeVideoId} from "../utils/fetchThumbnails.ts"
import { Button } from "../ui/button";
import {summarize} from '../utils/summarize.ts'
import axios from "axios"

const CardVariants = cva("bg-white rounded-md", {
  variants: {
    variant: {
      primary: "bg-white rounded-md border-[0.5px] border-[#e0e0e0] cursor-pointer hover:shadow-xs  w-1/4 h-100",
      secondary: "",
    },
    size: {
      md: "h-70 w-[250px]  px-4 py-4 text-sm",
      lg: "h-100 w-1/4  px-6 py-6 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface CardProps extends VariantProps<typeof CardVariants> {
  title: string;
  tags: [];
  date: string;
  firstRightIcon?: ReactElement;
  secondRightIcon?: ReactElement;
  className?: string;
  onShare?:()=>void;
  onDelete?:()=>void;
  link: string
}

export const Card = ({
  title,
  link,
  variant,
  tags,
  size,
  firstRightIcon,
  secondRightIcon,
  onShare,
  onDelete
}: CardProps) => {
  console.log(link)
  const videoId = getYouTubeVideoId(link);

  async function handleClick() {

    summarize(link)
    
  }


  return (
    <div className={twMerge(CardVariants({ variant, size }))}>
      <div className="flex justify-between">
        <div className="font-bold">{title}</div>
        <div className="flex gap-2">
          <span onClick={onShare} className="cursor-pointer">{firstRightIcon}</span>
          <span onClick={onDelete} className="cursor-pointer">{secondRightIcon}</span>
        </div>
        
      </div>
      <div><img className = "rounded-md border-1 mt-5 border-[#C9C8C7]"
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="YouTube thumbnail"
          
        /></div>
      <div>{tags}</div>
      <Button
          variant="tertiary"
          size="sm"
          children="Summarize"
          onClick={handleClick}
        /></div>
  );
};
