import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar"

interface CanvasPageProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasPageProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};


