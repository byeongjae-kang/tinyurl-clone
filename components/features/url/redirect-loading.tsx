"use client";

import { useEffect } from "react";

type Props = {
  action: () => void;
};

export default function RedirectLoading({ action }: Props) {
  useEffect(() => {
    action();
  }, []);

  // 1
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-background"></div>
  );
}
