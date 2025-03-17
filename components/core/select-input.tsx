import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Select> &
  ComponentProps<typeof SelectTrigger> &
  ComponentProps<typeof SelectValue>;

export default function SelectInput({
  placeholder,
  className,
  children,
  ...rest
}: Props) {
  return (
    <Select {...rest}>
      <SelectTrigger
        className={cn(
          "w-full font-medium p-3 h-fit! text-base rounded-xl",
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  );
}
