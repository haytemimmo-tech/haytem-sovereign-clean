import MandateForm from "./MandateForm";

export const dynamic = "force-dynamic";

interface MandatePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function MandatePage({ searchParams }: MandatePageProps) {
  const city = typeof searchParams.city === 'string' ? searchParams.city : undefined;

  return <MandateForm city={city} />;
}