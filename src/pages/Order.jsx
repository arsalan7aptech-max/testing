const orders = [
  {
    id: 1,
    customer: "Ali Khan",
    product: "Nike Shoes",
    price: "$120",
    status: "Pending",
    date: "2026-05-14",
  },
  {
    id: 2,
    customer: "Sara Ahmed",
    product: "Watch",
    price: "$80",
    status: "Delivered",
    date: "2026-05-12",
  },
  {
    id: 3,
    customer: "Sami Khan",
    product: "Headphones",
    price: "$80",
    status: "Pending",
    date: "2026-06-14",
  },
  {
    id: 4,
    customer: "Ahmed",
    product: "Wallet",
    price: "$40",
    status: "Delivered",
    date: "2026-05-12",
  },
  {
    id: 5,
    customer: "shoaib",
    product: "Jacket",
    price: "$150",
    status: "Pending",
    date: "2026-06-24",
  },
  {
    id: 6,
    customer: "Ali",
    product: "Cap",
    price: "$30",
    status: "Delivered",
    date: "2026-05-12",
  },
  {
    id: 7,
    customer: "sumaira",
    product: "Nike Shoes",
    price: "$120",
    status: "Pending",
    date: "2026-05-14",
  },
  {
    id: 8,
    customer: "Saba",
    product: "HeadPhones",
    price: "$80",
    status: "Delivered",
    date: "2026-05-12",
  },
  {
    id: 9,
    customer: "sohail",
    product: "Wallet",
    price: "$40",
    status: "Pending",
    date: "2026-05-14",
  },
  {
    id: 2,
    customer: "Sara Ahmed",
    product: "Watch",
    price: "$80",
    status: "Delivered",
    date: "2026-05-12",
  },
]

export default function Orders() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Orders
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-xl">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">

                <td className="p-4">{order.customer}</td>
                <td className="p-4">{order.product}</td>
                <td className="p-4">{order.price}</td>

                <td className="p-4">
                  <span
                    className={
                      order.status === "Delivered"
                        ? "text-green-600 font-bold"
                        : "text-orange-500 font-bold"
                    }
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4">{order.date}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

// import { DataTable } from '@/components/data-table'
// import data from '@/app/dashboard/data.json'
// import React from 'react'

// const Order = () => {
//   return (
//     <div>
//          <DataTable data={data} />
//     </div>
//   )
// }

// export default Order