import Image from "next/image";

export function Logo() {
  return (
    <strong className="flex items-center justify-center gap-2 text-xl font-semibold text-zinc-900">
      <Image src='/images/logo.svg' alt={""} width="150" height="200"  />
    </strong>
  )
}
