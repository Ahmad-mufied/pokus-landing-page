import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ShineBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
  borderWidth?: number;
}

const ShineBorder = ({
  children,
  className,
  color = "oklch(var(--primary))",
  borderWidth = 1,
}: ShineBorderProps) => {
  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--border-color": color,
        } as React.CSSProperties
      }
      className={cn(
        "relative rounded-lg border border-solid p-[var(--border-width)]",
        "bg-[linear-gradient(110deg,transparent,45%,var(--border-color),55%,transparent)] bg-[length:200%_100%]",
        "animate-shine",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ShineBorder; 