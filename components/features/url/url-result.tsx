"use client";

import ClipboardButton from "@/components/core/clipboard-button";
import LinkButton from "@/components/core/link-button";
import TextInput from "@/components/core/text-input";
import { BASE_URL } from "@/components/features/url/my-urls-item";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link2, WandSparkles } from "lucide-react";
import Link from "next/link";

type Props = {
  longURL: string;
  shortURL: string;
  onShortenAnother: () => void;
};

export default function URLShortened({
  longURL,
  shortURL,
  onShortenAnother
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <Label className="mb-4 text-base">
          <Link2 />
          <span>Your Long URL</span>
        </Label>
        <TextInput defaultValue={longURL} readOnly />
      </div>
      <div>
        <Label className="mb-4 text-base">
          <WandSparkles className="size-5" />
          <span>TinyURL</span>
        </Label>
        <TextInput defaultValue={`${BASE_URL}/${shortURL}`} readOnly />
      </div>
      <div className="space-x-1">
        <LinkButton href={`/${shortURL}`} />
        <ClipboardButton text={`${BASE_URL}/${shortURL}`} />
      </div>
      <div className="space-y-2">
        <Button
          className="w-full p-6 text-base font-semibold rounded-xl"
          onClick={onShortenAnother}
        >
          Shorten Another
        </Button>
        <Button
          asChild
          className="w-full p-6 text-base font-semibold rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          variant="outline"
        >
          <Link href="/app/my-urls">My URLs</Link>
        </Button>
      </div>
    </div>
  );
}
