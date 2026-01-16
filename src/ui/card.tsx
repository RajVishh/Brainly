import { cva, type VariantProps } from "class-variance-authority";
import { useState, type ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { getYouTubeVideoId } from "../utils/fetchThumbnails.ts";
import { summarize } from "../utils/summarize.ts";
import { SummaryDialog } from "../app_components/summaryDialog.tsx";
import { TwitterSvg } from "../images/twittersvg.tsx";

const CardVariants = cva("bg-white rounded-md", {
  variants: {
    variant: {
      primary:
        "bg-white rounded-md border-[0.5px] border-[#e0e0e0] cursor-pointer hover:shadow-xs  w-1/4 h-100",
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
  onShare?: () => void;
  onDelete?: () => void;
  link: string;
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
  onDelete,
}: CardProps) => {
  console.log(link);
  const videoId = getYouTubeVideoId(link);

  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSummariseClick() {
    setIsLoading(true);
    console.log(videoId);
    const summarisedContent = await summarize(link);
    if (!summarisedContent) {
      setIsLoading(false);
      return;
    }
    setSummary(summarisedContent);
    setIsLoading(false);
  }

  return (
    <div>
      <div className={twMerge(CardVariants({ variant, size }))}>
        <div className="flex justify-between">
          <div className="font-bold">{title}</div>
          <div className="flex gap-2">
            <span onClick={onShare} className="cursor-pointer">
              {firstRightIcon}
            </span>
            <span onClick={onDelete} className="cursor-pointer">
              {secondRightIcon}
            </span>
          </div>
        </div>

        {link.includes("youtube.com") || link.includes("youtu.be") ? (
          <img
            className="rounded-md border-1 mt-5 border-[#C9C8C7]"
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="YouTube thumbnail"
          />
        ) : link.includes("x.com") ? (
          <div>
            <TwitterSvg />
          </div>
        ) : (
          <p className="text-lg ">BLOG</p>
        )}

        <div>{tags}</div>

        <SummaryDialog
          videoId={videoId}
          onClick={handleSummariseClick}
          summary={summary}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};