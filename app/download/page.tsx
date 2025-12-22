'use client';
import dynamic from "next/dynamic";

const DownloadSignature = dynamic(
  () => import("../components/DownloadSignature"),
  { ssr: false }
);

export default function Page() {
  return <DownloadSignature targetRef={null as any} />;
}