import { notFound } from "next/navigation";
import { getIntegratedDemo, integratedDemos } from "@/src/data/integratedDemos";
import { IntegratedDemoPage } from "@/src/components/IntegratedDemoPage";

export function generateStaticParams() {
  return integratedDemos.map((demo) => ({ slug: demo.slug }));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getIntegratedDemo(slug);

  if (!demo) {
    notFound();
  }

  return <IntegratedDemoPage demo={demo} />;
}
