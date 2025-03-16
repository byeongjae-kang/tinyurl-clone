"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import TooltipContainer from "./tooltip-container";

type Props = {
  text: string;
};

export default function ClipboardButton({ text }: Props) {
  const handleClick = async () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <TooltipContainer message="Copy URL">
      <Button onClick={handleClick}>
        <Copy />
      </Button>
    </TooltipContainer>
  );
}
