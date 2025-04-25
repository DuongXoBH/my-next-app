import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectImage() {
  return (
    <AspectRatio
      ratio={4 / 3}
      className="w-full bg-muted rounded-lg overflow-hidden"
    >
      <Image src="/customer/home/banner-1.png" alt="Ảnh 16:9" fill />
    </AspectRatio>
  );
}
