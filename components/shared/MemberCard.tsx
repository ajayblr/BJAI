import Image from "next/image";
import { UserCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Member } from "@/data/members";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="h-full overflow-hidden rounded-2xl py-0 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative mx-auto mt-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-saffron/20">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="112px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <UserCircle className="h-16 w-16 text-muted-foreground/40" />
          </div>
        )}
      </div>
      <CardContent className="flex flex-col items-center gap-2 pb-6 pt-3">
        <h3 className="font-heading text-lg font-bold text-foreground">
          {member.name}
        </h3>
        <span className="rounded-full bg-gradient-festive px-3 py-1 text-xs font-semibold text-white">
          {member.role}
        </span>
        {member.bio && (
          <p className="mt-1 text-sm text-muted-foreground">{member.bio}</p>
        )}
      </CardContent>
    </Card>
  );
}
