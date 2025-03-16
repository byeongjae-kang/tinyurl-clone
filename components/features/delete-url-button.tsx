import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Form from "next/form";

type Props = {
  deleteAction: () => void;
};

export default function DeleteURLForm({ deleteAction }: Props) {
  return (
    <Form action={deleteAction}>
      <Button
        className="border-destructive text-destructive hover:bg-destructive hover:text-white"
        variant="outline"
        size="icon"
      >
        <Trash className="size-5" />
      </Button>
    </Form>
  );
}
