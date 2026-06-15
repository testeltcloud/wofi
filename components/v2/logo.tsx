import Image from "next/image";
import logoImg from "@/public/images/1.svg";

/** Logo oficial da Woofi (colorida, para fundos claros). */
export function V2Logo() {
  return (
    <Image src={logoImg} alt="Woofi" priority sizes="260px" className="h-36 w-auto" />
  );
}
