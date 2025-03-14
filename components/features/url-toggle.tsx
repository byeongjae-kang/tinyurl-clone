"use client";

import { useState } from "react";
import TooltipContainer from "../core/tooltip-container";

type Props = {
  url: string;
};

export default function URLToggle({ url }: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <TooltipContainer message={isCollapsed ? "Expand URL" : "Collapse URL"}>
      <button
        role="button"
        className={`text-sm text-primary break-all cursor-pointer text-left ${
          isCollapsed && "line-clamp-2"
        }`}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <span>{url}</span>
      </button>
    </TooltipContainer>
  );
}
