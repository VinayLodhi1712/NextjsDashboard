import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Package, MoreVertical, Info, Edit, Trash2 } from 'lucide-react';

// Import profile images
import john from "@/assets/profile/1.jpg";
import lila from "@/assets/profile/2.jpg";
import jass from "@/assets/profile/3.jpg";

const LatestTransactions = () => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Transaction data with customer images
  const transactions = [
    {
      id: "XD5328A1",
      product: "Gaming Keyboard",
      customer: "John Smith",
      image: john,
      date: "Mar 29, 2025",
      price: "189.99",
      status: "Delivered",
      statusColor: "green"
    },
    {
      id: "XD7291B3",
      product: "Wireless Headphones",
      customer: "Lisa Johnson",
      image: lila,
      date: "Mar 28, 2025",
      price: "129.50",
      status: "Pending",
      statusColor: "yellow"
    },
    {
      id: "XD8172C4",
      product: "Smart Watch",
      customer: "Michael Brown",
      image: jass,
      date: "Mar 27, 2025",
      price: "249.99",
      status: "Processing",
      statusColor: "yellow"
    },
    {
      id: "XD5328A1",
      product: "Gaming Keyboard",
      customer: "John Smith",
      image: john,
      date: "Mar 29, 2025",
      price: "189.99",
      status: "Delivered",
      statusColor: "green"
    },
    {
      id: "XD7291B3",
      product: "Wireless Headphones",
      customer: "Lisa Johnson",
      image: lila,
      date: "Mar 28, 2025",
      price: "129.50",
      status: "Pending",
      statusColor: "yellow"
    },
  ];

  const toggleMenu = (id: string | null) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="mt-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Latest Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-400">Tracking ID</TableHead>
                <TableHead className="text-gray-400">Product</TableHead>
                <TableHead className="text-gray-400">Customer</TableHead>
                <TableHead className="text-gray-400">Price</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="border-gray-700">
                  <TableCell className="font-medium text-gray-300">{transaction.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-md bg-gray-700 flex items-center justify-center">
                        <Package className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="text-gray-300">{transaction.product}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image 
                          src={transaction.image}
                          alt={transaction.customer}
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                      </div>
                      <span className="text-gray-300">{transaction.customer}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">${transaction.price}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        transaction.status === "Delivered"
                          ? "bg-green-500/20 text-green-500 hover:bg-green-500/20"
                          : "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="relative">
                      <button 
                        className="text-gray-400 hover:text-gray-300 p-1 rounded-full hover:bg-gray-700 transition-colors"
                        onClick={() => toggleMenu(transaction.id)}
                      >
                        <MoreVertical size={16} />
                      </button>
                      
                      {openMenuId === transaction.id && (
                        <div className="absolute right-0 z-10 mt-1 w-36 rounded-md bg-gray-700 shadow-lg">
                          <div className="py-1">
                            <button className="flex w-full items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 transition-colors">
                              <Info size={14} className="mr-2" />
                              View Details
                            </button>
                            <button className="flex w-full items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 transition-colors">
                              <Edit size={14} className="mr-2" />
                              Edit
                            </button>
                            <button className="flex w-full items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-600 transition-colors">
                              <Trash2 size={14} className="mr-2" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestTransactions;
