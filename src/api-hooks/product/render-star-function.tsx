import { StarIcon } from "lucide-react";

export default function RenderStarFunction(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarIcon
        key={`star-${i}`}
        className="w-4 h-4 fill-amber-400 text-amber-400"
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <div key="half-star" className="relative w-4 h-4">
        <StarIcon className="absolute w-4 h-4 text-amber-400" />
        <div className="absolute w-2 h-4 overflow-hidden">
          <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
        </div>
      </div>
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <StarIcon key={`empty-star-${i}`} className="w-4 h-4 text-amber-400" />
    );
  }

  return stars;
}
