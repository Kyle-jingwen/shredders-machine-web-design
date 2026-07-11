import type { Metadata } from "next";
import { applications } from "@/lib/applications";
import { PageHeader } from "@/components/ui/PageHeader";
import { ApplicationCard } from "@/components/cards/ApplicationCard";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Waste recycling solutions for food & organic, medical, slaughterhouse, pulp & paper and municipal waste.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Applications"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Applications" }]}
        title="Solutions for every waste stream"
        description="TIMO builds shredders, dewatering presses, conveyors, separators and customized systems for a wide range of industries."
      />

      <section className="container-x py-12 lg:py-16">
        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <RevealItem key={application.slug}>
              <ApplicationCard application={application} />
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
