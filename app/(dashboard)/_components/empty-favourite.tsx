import Image from "next/image";

export const EmptyFavorite = () => {
  return (
    <div className="h-ful flex flex-col items-center justify-center">
      <Image
        src="/empty-favorites.svg"
        alt="empty-favou"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mt-6"> No favorites</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favouriting board
      </p>
    </div>
  );
};
