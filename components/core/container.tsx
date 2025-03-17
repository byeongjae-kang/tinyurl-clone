import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export default function Container({ children, className, ...rest }: Props) {
  return (
    <div className={cn("container mx-auto p-4", className)} {...rest}>
      {children}
    </div>
  );
}
