import { Loader } from "lucide-react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

export const Loading = () => {
  return (
    <main className="h-full w-full flex relative
     bg-neutral-100 touch-none items-center justify-center">
      <Loader className="h-6 w-6 
      text-muted-foreground animate-spin" />
      <Info.Skeleton/>
      <Participants.Skeleton/>
      <Toolbar.Skeleton/>
    </main>
  );
};
