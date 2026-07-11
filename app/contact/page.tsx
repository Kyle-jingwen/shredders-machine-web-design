import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TIMO for a solution or quotation for your shredding, dewatering or recycling application.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Get a solution or a quotation"
        description="Need a solution or a quotation for your application? Kindly contact us and our engineers will respond quickly."
      />

      <section className="container-x py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* 联系信息 */}
          <Reveal>
            <div className="space-y-6">
              <InfoRow icon="✉" title="Email">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-brand-500"
                >
                  {site.contact.email}
                </a>
              </InfoRow>

              <InfoRow icon="⚲" title="Address">
                {site.contact.address}
              </InfoRow>

              <InfoRow icon="✆" title="WhatsApp">
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-500"
                >
                  {site.contact.whatsappDisplay}
                </a>
              </InfoRow>

              <InfoRow icon="▶" title="YouTube">
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-500"
                >
                  Visit our channel
                </a>
              </InfoRow>

              {/* 阶段3回填：谷歌地图嵌入 / 工厂位置图 */}
              <div className="pt-2">
                <Placeholder
                  label="工厂位置地图（阶段3嵌入 Google Maps iframe，定位中山市地址）"
                  ratio="16/9"
                />
              </div>
            </div>
          </Reveal>

          {/* 表单 */}
          <Reveal from="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-steel-400">
          {title}
        </p>
        <div className="mt-1 text-sm text-steel-200">{children}</div>
      </div>
    </div>
  );
}
