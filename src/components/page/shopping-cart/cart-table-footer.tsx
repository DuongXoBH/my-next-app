import LinkTag from "@/components/common/global/link-tag";
import { GridFooterContainer } from "@mui/x-data-grid";

export function CustomCartTableFooter() {
  return (
    <GridFooterContainer>
      <div className="w-full h-[85px] flex flex-row items-center justify-between px-10">
        <LinkTag
          href="/admin/products"
          className="h-[45px] px-2 flex items-center text-sm font-bold text-purple-500 border-[2px] border-purple-500 rounded hover:bg-purple-500 hover:text-white"
        >
          Continue Shopping
        </LinkTag>
        <LinkTag
          href="#"
          className="h-[45px] px-2 flex items-center text-sm font-bold text-white border-[2px] border-purple-500 rounded bg-purple-500 hover:bg-purple-800"
        >
          CheckOut
        </LinkTag>
      </div>
    </GridFooterContainer>
  );
}
