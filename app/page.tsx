import { URLForm } from "@/components/features/url/url-form";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="lg:flex">
      <Card className="p-4 lg:min-w-[448px]">
        <CardContent className="px-0">
          <URLForm />
        </CardContent>
      </Card>

      <div className="flex-1"></div>
    </div>
  );
}
