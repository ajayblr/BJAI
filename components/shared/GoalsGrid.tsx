import {
  HeartHandshake,
  Users,
  Briefcase,
  Globe2,
  TrendingUp,
  CalendarHeart,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Wrench,
  Sparkles,
  BookUser,
  PartyPopper,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { Goal } from "@/data/goals";
import Reveal from "@/components/shared/Reveal";

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Users,
  Briefcase,
  Globe2,
  TrendingUp,
  CalendarHeart,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Wrench,
  Sparkles,
  BookUser,
  PartyPopper,
  Lightbulb,
};

export default function GoalsGrid({ goals }: { goals: Goal[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {goals.map((goal, index) => {
        const Icon = iconMap[goal.icon] ?? Sparkles;
        return (
          <Reveal key={goal.title} delay={(index % 3) * 0.08}>
            <div className="flex h-full flex-col gap-3 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-festive text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-base font-bold text-foreground">
                {goal.title}
              </h3>
              <p className="text-sm text-muted-foreground">{goal.description}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
