"use client";

import { useEffect, useRef, useState } from "react";
import TooltipContainer from "../../core/tooltip-container";

type Props = {
  url: string;
};

export default function URLToggle({ url }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [isCollapsible, setIsCollapsible] = useState<boolean>(true);

  useEffect(() => {
    if (ref.current) {
      setIsCollapsible(ref.current.scrollHeight > ref.current.clientHeight);
    }
  }, []);

  return isCollapsible ? (
    <TooltipContainer message={isCollapsed ? "Expand URL" : "Collapse URL"}>
      <p
        role="button"
        ref={ref}
        className={`text-sm text-primary break-all text-left cursor-pointer  ${
          isCollapsed && "line-clamp-2"
        }`}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        {url}
      </p>
    </TooltipContainer>
  ) : (
    <p className="text-sm text-primary break-all">{url}</p>
  );
}
