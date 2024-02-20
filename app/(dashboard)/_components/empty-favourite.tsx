import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="h-ful flex flex-col items-center justify-center">
      <Image
        src="/empty-favourites.svg"
        alt="empty-favou"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mt-6"> No favourites</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favouriting board
      </p>
    </div>
  );
};
