import type { Metadata } from "next";
import { applicationGroups, applicationsByGroup } from "@/lib/applications";
import { PageHeader } from "@/components/ui/PageHeader";
import { ApplicationCard } from "@/components/cards/ApplicationCard";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Separation and recycling solutions for food, organic, medical, slaughterhouse, pulp & paper and municipal waste.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Applications"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Applications" }]}
        title="Separation and industry solutions"
        description="Solid–liquid separation and depackaging for food waste, plus complete lines for composting, medical, pulp & paper, slaughterhouse and municipal recycling."
      />

      <section className="container-x py-12 lg:py-16">
        {applicationGroups.map((group) => {
          const items = applicationsByGroup(group.id);
          return (
            <div key={group.id} className="mb-16 last:mb-0">
              <div className="mb-8 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {group.label}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white">
                  {group.id === "separation"
                    ? "Food waste separation"
                    : "Industry applications"}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">
                  {group.intro}
                </p>
              </div>
              <RevealStagger
                className={`grid gap-6 sm:grid-cols-2 ${
                  items.length > 2 ? "xl:grid-cols-3" : ""
                }`}
              >
                {items.map((application) => (
                  <RevealItem key={application.slug}>
                    <ApplicationCard application={application} />
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          );
        })}
      </section>
    </>
  );
}
