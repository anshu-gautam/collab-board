import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

// custom hook useCase
// import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
  const { organization } = useOrganization();

  const create = useMutation(api.board.create);

  // custom hook useCase
  // const {mutate, pending} = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;
    create({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
      })
      .catch(() => toast.error("Failed to create board"));

    // custom hook useCase
    // }
    // const onClick = () => {
    //   if (!organization) return;
    //   mutate({
    //     orgId: organization.id,
    //     title: "Untitled",
    //   });
  };

  return (
    <div className="h-ful flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="empty-favou" height={110} width={110} />
      <h2 className="text-2xl font-semibold mt-6"> Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start creating boards for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" onClick={onClick}>
          Create your Board
        </Button>

        {/* // custom hook useCase */}
        {/* <Button size="lg" disabled={pending} onClick={onClick}>
          Create your Board
        </Button> */}
      </div>
    </div>
  );
};
