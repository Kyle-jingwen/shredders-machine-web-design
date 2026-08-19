import { applications } from "@/lib/applications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ApplicationCard } from "@/components/cards/ApplicationCard";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export function ApplicationsSection() {
  return (
    <section className="relative border-y border-ink-800 bg-ink-900/40">
      <div className="container-x py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Applications"
          title={
            <>
              One platform, <span className="text-brand-500">many waste streams</span>
            </>
          }
          description="Shredding, dewatering, depackaging and composting lines for food, medical, paper, slaughterhouse and municipal waste."
        />

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {applications.map((application) => (
            <RevealItem key={application.slug}>
              <ApplicationCard application={application} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
