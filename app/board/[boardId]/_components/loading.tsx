import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
  return (
    <main
      className="h-full w-full flex relative
     bg-neutral-100 touch-none items-center justify-center"
    >
      <Loader
        className="h-6 w-6 
      text-muted-foreground animate-spin"
      />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
