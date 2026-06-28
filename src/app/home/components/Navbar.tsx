import React from "react";
import { Badge } from "@/src/components/ui/badge";
import { Search } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";

const navbar = () => {
  return (
    <div className="text-white border-b bg-gray-100">
      <nav className="bg-green-600 text-sm flex flex-col items-center justify-between border-b px-4 py-2 md:flex-row">
        <h1 className="text-sm font-medium ">
          Free Delivery on orders over 30$ - KHQR payment accepted
        </h1>
        <div className="flex items-center gap-4">
          <h1>1 USD = 4,100 KHR </h1>
          <Badge variant="outline" className="ml-2 rounded-sm">
            USD/KHR
          </Badge>
        </div>
      </nav>

      <div className="flex flex-row items-center gap-6 p-4 justify-between">
        <h1 className="text-green-500 text-2xl font-bold leading-none">
          SUPPLY <br />{" "}
          <span className="text-orange-500 text-base">MATRIX</span>
        </h1>
        <div className="text-gray-600 border-gray-300 border rounded-full px-4 py-2 ml-4 flex items-center w-full max-w-md">
          <Search className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search for products, brands, suppliers ..."
            className="ml-2 bg-transparent focus:outline-none w-full"
          />
          <Button className="ml-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
            Search
          </Button>
        </div>
        <div className="text-xl flex flex-row items-center gap-6 flex-wrap px-5">
          <h1 className="text-gray-600 text-sm font-bold">Products</h1>
          <h1 className="text-gray-600 text-sm font-bold">Suppliers</h1>
          <h1 className="text-gray-600 text-sm font-bold">Promotions</h1>
          <h1 className="text-gray-600 text-sm font-bold">Orders</h1>
          <h1 className="text-gray-600 text-sm font-bold">Supports</h1>
        </div>

        <div className="flex flex-row items-center gap-2 flex-wrap px-5 ">

          <div className="flex flex-col items-center flex-wrap px-2">
            <Heart className="h-4 w-4 text-gray-600" />
            <h1 className="text-gray-600 text-sm font-bold">Saved</h1>
          </div>

          <div className="flex flex-col items-center flex-wrap px-2">
            <ShoppingCart className="h-4 w-4 text-gray-600" />
            <h1 className="text-gray-600 text-sm font-bold">Cart</h1>
          </div>

          <div className="flex flex-col items-center flex-wrap px-2">
            <User className="h-4 w-4 text-gray-600" />
            <h1 className="text-gray-600 text-sm font-bold">Account</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default navbar;
