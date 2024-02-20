"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { ConfirmModal } from "@/components/confirm-modal";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Button } from "@/components/ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  const {onOpen} = useRenameModal()
  const { mutate, pending } = useApiMutation(api.board.remove);


  const copyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Copied to clipboard"))
      .catch(() => toast.error("Failed to copy"));
  };


  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board deleted"))
      .catch(() => toast.error("Failed to delete"));
  };

  // const removeBoard = useMutation(api.board.remove);
  // const onDelete = () => {
  //   removeBoard({ id: id });
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.preventDefault()}
        side={side}
        sideOffset={sideOffset}
      >
        <DropdownMenuItem className=" p-2 cursor-pointer" onClick={copyLink}>
          <Link2 className="h-4 w-4 mr-2" />
          Copy to clipboard
        </DropdownMenuItem>
        <DropdownMenuItem className=" p-2 cursor-pointer" onClick={()=> onOpen(id,title)}>
          <Pencil className="h-4 w-4 mr-2" />
          Rename board
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete Board"
          description="Are you confirm to delete the board with all of its contents?"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
            className=" p-2 cursor-pointer text-sm w-full justify-start font-normal"
          >
            <Trash2 className="h-4 w-4  mr-2" />
            Delete board
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
