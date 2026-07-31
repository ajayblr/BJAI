"use client";

import { useState } from "react";
import Image from "next/image";
import { UserCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Member } from "@/data/members";

const READ_MORE_THRESHOLD = 180;

export default function MemberCard({ member }: { member: Member }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = member.bio ? member.bio.split("\n") : [];
  const canTruncate = member.bio.length > READ_MORE_THRESHOLD;

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
        {member.bio && (
          <>
            {expanded || !canTruncate ? (
              <div className="mt-1 w-full space-y-3 text-left">
                {paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-justify text-sm text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-1 line-clamp-4 w-full text-justify text-sm text-muted-foreground">
                {paragraphs.join(" ")}
              </p>
            )}
            {canTruncate && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-1 text-xs font-semibold text-saffron hover:underline"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
