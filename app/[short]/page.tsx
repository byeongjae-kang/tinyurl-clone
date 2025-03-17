import RedirectLoading from "@/components/features/url/redirect-loading";
import { incrementClicks } from "@/lib/actions/urls";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ short: string }>;
};

export default async function Redirect({ params }: Props) {
  const { short } = await params;

  const url = await prisma.url.findUnique({ where: { short } });

  if (!url) {
    notFound();
  }

  return <RedirectLoading action={incrementClicks.bind(null, url.id)} />;
}
