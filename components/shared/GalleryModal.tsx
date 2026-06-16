"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GalleryItem } from "@/data/gallery";

export default function GalleryModal({
  item,
  onClose,
}: {
  item: GalleryItem | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      {item && (
        <DialogContent className="max-w-2xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src={item.image} alt={item.caption} fill className="object-cover" />
            {item.type === "video" && (
              <PlayCircle className="absolute inset-0 m-auto h-16 w-16 text-white drop-shadow-lg" />
            )}
          </div>
          <DialogHeader>
            <DialogTitle className="text-lg">{item.caption}</DialogTitle>
            <DialogDescription>
              {item.event} &middot; {item.category} &middot; {item.year}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 border-t pt-3">
            <p className="text-sm font-medium text-foreground">Comments</p>
            <Textarea
              placeholder="Comments are coming soon — check back after launch!"
              disabled
              rows={2}
            />
            <Button variant="outline" disabled className="w-full">
              Post Comment
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
