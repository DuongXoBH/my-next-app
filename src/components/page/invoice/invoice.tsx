"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Tooltip } from "@mui/material";

const StyledTableCell = styled(TableCell)(({}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F5F6FA",
    color: "black",
    fontWeight: "600",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  id: string,
  description: string,
  quantity: number,
  cost: number,
  total: number
) {
  return { id, description, quantity, cost, total };
}

const rows = [
  createData("1", "Children Toy", 2, 20, 80),
  createData("2", "Makeup", 2, 50, 100),
  createData("3", "Asus Laptop", 5, 100, 500),
  createData("4", "Iphone X", 4, 1000, 4000),
];
let total = 0;
rows.forEach((row) => (total += row.total));
export default function InvoiceComponent() {
  return (
    <div className="w-full min-h-[870px] bg-white rounded-[14px] overflow-hidden">
      <div className="w-[75%] mx-[auto] mt-10 mb-14 flex flex-row justify-between items-center">
        <div className="flex flex-col ">
          <p className="text-base font-semibold text-[#404040] mb-3">
            Invoice From :
          </p>
          <p className="text-base font-bold text-black mb-2">Virginia Walker</p>
          <p className="text-sm font-semibold text-[#565656]">
            9694 Krajcik Locks Suite 635
          </p>
        </div>
        <div className="flex flex-col ">
          <p className="text-base font-semibold text-[#404040] mb-3">
            Invoice To :
          </p>
          <p className="text-base font-bold text-black mb-2">Austin Miller</p>
          <p className="text-sm font-semibold text-[#565656]">Brookview</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-base font-semibold text-[#404040] mb-3">
            Invoice Date : 12 Nov 2019
          </p>
          <p className="text-base font-semibold text-[#404040]">
            Due Date : 25 Dec 2019
          </p>
        </div>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          width: "95%",
          marginX: "auto",
        }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ borderRadius: "14px" }}>
            <TableRow>
              <StyledTableCell align="center">Serial No.</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Base Cost</StyledTableCell>
              <StyledTableCell align="center">Total Cost</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                <StyledTableCell align="center">${row.cost}</StyledTableCell>
                <StyledTableCell align="center">${row.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="w-[80%] mx-[auto] flex justify-end">
        <p className="text-base font-extrabold text-black mt-6">
          Total = ${total}
        </p>
      </div>
      <div className="w-[95%] h-14 flex flex-row justify-end items-center gap-4 mt-[60px]">
        <Tooltip title="Print">
          <button className="w-[54px] h-[54px] rounded-xl bg-[#D5D5D5] flex justify-center items-center hover:bg-[#797474]">
            <Image alt="" src="/shape.png" width={18} height={16}></Image>
          </button>
        </Tooltip>
        <Tooltip title="Send">
          <button className="w-[174px] h-[54px] rounded-xl bg-[#4880FF] flex flex-row items-center justify-end gap-10 pr-2 text-white font-medium">
            Send
            <Image alt="" src="/send-button.png" width={46} height={38}></Image>
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
