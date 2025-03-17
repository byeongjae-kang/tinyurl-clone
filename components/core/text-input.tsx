import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Input>;

export default function TextInput({ className, ...rest }: Props) {
  return (
    <Input
      className={cn("font-medium text-primary p-3 h-fit rounded-xl", className)}
      {...rest}
    />
  );
}
