import { Button } from "@/components/ui/button";
import Form from "next/form";

type Props = {
  deleteAction: () => void;
};

export default function DeleteURLButton({ deleteAction }: Props) {
  return (
    <Form className="w-full sm:w-fit" action={deleteAction}>
      <Button className="w-full bg-destructive hover:bg-destructive/80">
        Confirm
      </Button>
    </Form>
  );
}
