import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqCategory } from "@/data/faq";

export default function FaqAccordion({
  categories,
}: {
  categories: FaqCategory[];
}) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.category}>
          <h3 className="font-heading text-xl font-bold text-maroon">
            {category.category}
          </h3>
          <Accordion className="mt-3 rounded-2xl border border-border bg-card px-4 shadow-sm">
            {category.items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`${category.category}-${index}`}
              >
                <AccordionTrigger className="text-base font-semibold text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
