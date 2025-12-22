'use client'
import dynamic from "next/dynamic";

const Signature = dynamic(() => import("@/app/components/Signature"), { ssr: false });

export default function Bayiler() {
  return <Signature />;
}