import { ChevronDown } from "lucide-react";
import { LayoutGrid } from 'lucide-react';
import { List } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";

export function Header() {
  return (
    <>
    <div className=" justify-between border-b bg-gray-100" > 
      <Breadcrumb className="px-4 py-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">All Products</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between border-b  bg-gray">
        <div className="px-4 py-2">
          <h1 className="text-2xl font-bold">All Products</h1>
          <h2 className="text-sm text-muted-foreground">
            1,240 products from verified Cambodian suppliers
          </h2>
        </div>

        <div className="flex flex-row items-center space-x-6 rounded-md px-3 py-1 ">
          <h1 className="text-sm text-muted-foreground">sort by: </h1>
          <div className="flex items-center space-x-1 rounded-md border px-3 py-1">
            <h1> Popularity</h1>
            <ChevronDown />
          </div>
          <div className="flex items-center space-x-1 rounded-md border px-3 py-1">
          <LayoutGrid className="h-5 w-5" />
          <List className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
