"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";

import { useMutation } from "convex/react";
import { toast } from "sonner";

interface NewBoardProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardProps) => {
  const { organization } = useOrganization();

  const create = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    create({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        disabled && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className=" text-sm text-white font-light">Create new</p>
    </button>
  );
};
