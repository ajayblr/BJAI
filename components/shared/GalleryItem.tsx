"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share2, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GalleryItem as GalleryItemType } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function GalleryItem({
  item,
  onOpen,
}: {
  item: GalleryItemType;
  onOpen: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(item.likes);
  const [shared, setShared] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setShared(true);
    setTimeout(() => setShared(false), 1500);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:shadow-xl">
      <button
        onClick={onOpen}
        className="relative block aspect-square w-full overflow-hidden"
      >
        <Image
          src={item.image}
          alt={item.caption}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
        {item.type === "video" && (
          <PlayCircle className="absolute inset-0 m-auto h-12 w-12 text-white drop-shadow-lg" />
        )}
        <Badge className="absolute left-2 top-2 bg-white/90 text-xs font-semibold text-maroon shadow">
          {item.category}
        </Badge>
      </button>
      <div className="space-y-2 p-3">
        <p className="line-clamp-2 text-sm font-medium text-foreground">
          {item.caption}
        </p>
        <p className="text-xs text-muted-foreground">
          {item.event} &middot; {item.year}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <button
            onClick={toggleLike}
            className={cn(
              "flex items-center gap-1 transition-colors hover:text-maroon",
              liked && "text-maroon"
            )}
          >
            <Heart className={cn("h-4 w-4", liked && "fill-maroon")} />
            {likes}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            className="flex items-center gap-1 transition-colors hover:text-royalblue"
          >
            <MessageCircle className="h-4 w-4" />
            {item.comments}
          </button>
          <button
            onClick={handleShare}
            className="ml-auto flex items-center gap-1 transition-colors hover:text-deepgreen"
          >
            <Share2 className="h-4 w-4" />
            {shared ? "Shared!" : "Share"}
          </button>
        </div>
      </div>
    </div>
  );
}
