import Image from "next/image";

export default function ImageLogo() {
  return (
    <div className="size-15 m-r-20">
      <Image src="/window.svg" alt="compony logo" width={50} height={50} />
    </div>
  );
}
