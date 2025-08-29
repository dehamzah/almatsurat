import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const mobileWidthVariants = cva("max-w-[700px] mx-auto");

interface MobileWidthProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mobileWidthVariants> {
  children: React.ReactNode;
}

export const MobileWidth: React.FC<MobileWidthProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(mobileWidthVariants({ className }))} {...props}>
      {children}
    </div>
  );
};

export default MobileWidth;
