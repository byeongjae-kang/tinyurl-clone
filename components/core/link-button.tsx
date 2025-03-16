import TooltipContainer from "@/components/core/tooltip-container";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
};

export default function LinkButton({ href }: Props) {
  return (
    <TooltipContainer message="Visit URL">
      <Button
        asChild
        size="icon"
        variant="outline"
        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
      >
        <Link href={href} target="_blank">
          <SquareArrowOutUpRight />
        </Link>
      </Button>
    </TooltipContainer>
  );
}
