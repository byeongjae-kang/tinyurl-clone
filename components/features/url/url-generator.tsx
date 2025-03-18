"use client";

import { URLForm } from "@/components/features/url/url-form";
import URLShortened from "@/components/features/url/url-result";
import { PayloadType, StateType, createURL } from "@/lib/actions/urls";
import { Url } from "@prisma/client";
import { startTransition, useActionState, useEffect, useState } from "react";

export default function URLGenerator() {
  const [isShortened, setIsShortened] = useState<boolean>(false);
  const [longURL, setLongURL] = useState<string>("");
  const [{ error, short }, action, isPending] = useActionState<
    StateType,
    PayloadType
  >(createURL, { short: "", error: "" });

  useEffect(() => {
    if (!error && short) {
      setIsShortened(true);
    }
  }, [short, error]);

  function handleSubmit(long: Url["long"]) {
    startTransition(() => {
      action({ long });
      setLongURL(long);
    });
  }

  const reset = () => {
    setIsShortened(false);
    setLongURL("");
  };

  return isShortened ? (
    <URLShortened longURL={longURL} shortURL={short} onShortenAnother={reset} />
  ) : (
    <URLForm onSubmit={handleSubmit} isPending={isPending} error={error} />
  );
}
