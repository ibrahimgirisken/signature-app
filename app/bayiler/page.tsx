'use client'
import dynamic from "next/dynamic";

const Signature = dynamic(() => import("../signature/page"), { ssr: false });

export default function Bayiler() {
  return <Signature />;
}