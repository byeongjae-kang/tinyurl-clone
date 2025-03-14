import { Button } from "@/components/ui/button";
import MyURLSList from "./my-urls-list";

export default function MyURLsSection() {
  return (
    <div className="px-4 space-y-4 overflow-y-auto">
      <Button
        variant="outline"
        className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
      >
        Get Full Detailed Stats
      </Button>

      <MyURLSList />
    </div>
  );
}
