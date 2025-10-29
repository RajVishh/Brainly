import { cva, type VariantProps } from "class-variance-authority";
import { type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

const CardVariants = cva("bg-white rounded-md", {
  variants: {
    variant: {
      primary: "bg-white rounded-md shadow-md  w-1/4 h-100",
      secondary: "",
    },
    size: {
      md: "h-60 w-1/4  px-4 py-4 text-sm",
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
  body: string;
  tags: [];
  date: string;
  firstRightIcon?: ReactElement;
  secondRightIcon?: ReactElement;
  className?: string;
  onShare:()=>void
  onDelete:()=>void
}

export const Card = ({
  title,
  variant,
  body,
  tags,
  size,
  firstRightIcon,
  secondRightIcon,
  onShare,
  onDelete
}: CardProps) => {
  return (
    <div className={twMerge(CardVariants({ variant, size }))}>
      <div className="flex justify-between">
        <div className="font-bold">{title}</div>
        <div className="flex gap-2">
          <span onClick={onShare} className="cursor-pointer">{firstRightIcon}</span>
          <span onClick={onDelete} className="cursor-pointer">{secondRightIcon}</span>
        </div>
      </div>
      <div className="mt-5">{body}</div>
      <div>{tags}</div>
    </div>
  );
};
