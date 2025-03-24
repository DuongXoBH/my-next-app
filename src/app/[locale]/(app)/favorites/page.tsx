import PageHeader from "@/components/common/global/page-header";
import FavoritesList from "@/components/page/favorites/favorites";

export default function Favorites(){
    return (
        <div className="w-full pb-2">
            <PageHeader page="Favorites"/>
            <FavoritesList/>
        </div>
      );
}