"use client";

import { ORDERLIST } from "@/constants/admin/order";
import { IOrder, IOrderSearch } from "@/stores/admin/order-filter";

export function filterFunction(orderSearch: IOrderSearch) {
  let dataVal = ORDERLIST;
  if (orderSearch.type.length > 0) {
    dataVal = dataVal.filter((order: IOrder) =>
      orderSearch.type?.includes(order.type)
    );
  }
  if (orderSearch.status.length > 0) {
    dataVal = dataVal.filter((order: IOrder) =>
      orderSearch.status?.includes(order.status)
    );
  }
  if (orderSearch.date && orderSearch.date.length > 0) {
    dataVal = dataVal.filter((order: IOrder) =>
      orderSearch.date?.includes(order.date)
    );
  }
  return dataVal;
}
