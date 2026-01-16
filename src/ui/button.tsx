import { cva, type VariantProps } from "class-variance-authority";
import {type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("text-center py-1 px-2 rounded-md font-medium cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-[#4A44DA] text-white hover:bg-[#7A77E4] trasnition duration-400",
      secondary: "bg-[#E0E3FF] text-[#4A44DA] hover:bg-black",
      tertiary: "bg-white bg-[#F7F9FB] text-center border-[#E0E3FF] hover:bg-[#E0E3FF] trasnition duration-400 border-1 rounded-[200px]",
      fourth: "bg-white bg-[#F7F9FB] text-center border-gray-300 hover:bg-gray-100 trasnition duration-400 border-1 rounded-md",
    },
    size: {
      md: "h-8 px-3 text-sm",
      sm: "h-7 px-2 mt-2 text-sm",
      lg: "h-12 px-6 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface buttonProps extends VariantProps<typeof buttonVariants>{
  children: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ 
    onClick,
    children,
  className, 
  variant, 
  size,startIcon,endIcon,
  ...props 
}: buttonProps) => {
  return (
    <button type="submit" onClick={onClick}
      className={twMerge(buttonVariants({variant, size }), className)}
      {...props}
    ><div className="flex gap-2"><span>{startIcon}</span>{children}
     
    <span>{endIcon}</span></div>
     
    </button>
  );
};