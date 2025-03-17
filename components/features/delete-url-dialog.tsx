import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Trash } from "lucide-react";
import DeleteURLButton from "./delete-url-button";

type Props = {
  deleteAction: () => void;
};

export function DeleteURLDialog({ deleteAction }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="border-destructive text-destructive hover:bg-destructive hover:text-white"
          variant="outline"
          size="icon"
        >
          <Trash className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] gap-6">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Once you delete the url, it would be permanently gone. Do you want
            to proceed?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DeleteURLButton deleteAction={deleteAction} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
