import Image from "next/image";
import Signature from "./signature/page";

export default function Home() {
  const url="cwplusbursa"
  return (
   <>
   <Signature url={url}/>
   </>
  );
}
