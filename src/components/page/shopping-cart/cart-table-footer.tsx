import { GridFooterContainer } from "@mui/x-data-grid";

export function CustomCartTableFooter() {
  return (
    <GridFooterContainer>
      <div className="w-full h-[85px] flex flex-row items-center justify-between px-10">
        <button className="h-[85px]">Continue Shopping</button>
        <button className="h-[85px]">CheckOut</button>
      </div>
    </GridFooterContainer>
  );
}
