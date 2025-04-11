import { Divider } from "@mui/material";

export default function OrderSummary() {
  return (
    <div className="w-[22%] max-h-[380px] bg-[white] rounded-2xl flex flex-col">
      <div className="w-full p-4 flex flex-row justify-between">
        <input
          type="text"
          className="px-2 w-[70%] border border-gray-200"
          placeholder="Coupon Code"
        />
        <button className="p-2 bg-gray-800 hover:bg-gray-400 text-white font-semibold rounded">
          Apply
        </button>
      </div>
      <Divider />
      <div className="w-full flex flex-row justify-between p-4">
        <p>Sub Total :</p>
        <p>$340.00</p>
      </div>
      <div className="w-full flex flex-row justify-between p-4">
        <p>Discount (DIS15%) : :</p>
        <p className="text-green-500">-$51.00
        </p>
      </div>
      <div className="w-full flex flex-row justify-between p-4">
        <p>Shipping Charge : :</p>
        <p className="text-green-500">Free</p>
      </div>
      <div className="w-full flex flex-row justify-between p-4">
        <p>Tax Vat 19% (included) :</p>
        <p className="text-green-500">$64.00</p>
      </div>
      <Divider />
      <div className="w-full flex flex-row justify-between p-4">
        <p>Order Total :</p>
        <p className="text-purple-500">$368.00</p>
      </div>
    </div>
  );
}
