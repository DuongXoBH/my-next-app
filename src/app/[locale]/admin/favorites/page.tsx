import PageHeader from "@/components/common/globals/page-header";
import FavoritesList from "@/components/page/admin/favorites/favorites";

export default function Favorites() {
  return (
    <div className="w-full pb-2">
      <PageHeader page="Favorites" />
      <FavoritesList />
    </div>
  );
}
