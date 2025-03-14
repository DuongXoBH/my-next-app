import { GridFooterContainer, GridPagination } from "@mui/x-data-grid";
import {  Box } from "@mui/material";

export function CustomTableFooter() {
  return (
    <GridFooterContainer>
      <Box sx={{ display: "flex", justifyContent: "start", width: "100%", padding: "8px" }}>
        <GridPagination />
      </Box>
    </GridFooterContainer>
  );
}
