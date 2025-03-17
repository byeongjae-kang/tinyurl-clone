import TooltipContainer from "@/components/core/tooltip-container";
import DeleteURLButton from "@/components/features/url/delete-url-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type Props = {
  deleteAction: () => void;
  children: ReactNode;
};

export function DeleteURLDialog({ children, deleteAction }: Props) {
  return (
    <Dialog>
      <TooltipContainer message="Delete URL(s)">
        <DialogTrigger asChild>{children}</DialogTrigger>
      </TooltipContainer>
      <DialogContent className="sm:max-w-[425px] gap-6">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Once you delete, data would be lost permanently. Do you want to
            proceed?
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
