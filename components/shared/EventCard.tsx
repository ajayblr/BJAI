import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BjaiEvent } from "@/data/events";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, string> = {
  Cultural: "bg-saffron text-white",
  Charity: "bg-maroon text-white",
  Youth: "bg-royalblue text-white",
  Festival: "bg-gold text-deepgreen",
  Community: "bg-deepgreen text-white",
  Networking: "bg-royalblue-light text-white",
};

export default function EventCard({ event }: { event: BjaiEvent }) {
  return (
    <Card className="group h-full overflow-hidden rounded-2xl py-0 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          className={cn(
            "absolute left-3 top-3 px-3 py-1 text-xs font-semibold shadow",
            categoryStyles[event.category]
          )}
        >
          {event.category}
        </Badge>
        {event.featured && (
          <Badge className="absolute right-3 top-3 bg-white/90 px-3 py-1 text-xs font-semibold text-maroon shadow">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col gap-3 pt-4">
        <h3 className="font-heading text-lg font-bold text-foreground">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.shortDescription}
        </p>
        <div className="mt-1 space-y-1.5 text-sm text-foreground/80">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-saffron" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-saffron" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-saffron" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-transparent px-4 pb-4">
        <Button
          render={<Link href={`/events/${event.slug}`} />}
          className="w-full bg-royalblue text-white hover:bg-royalblue/90"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
