import { useEffect, useState } from "react"
import axios from "axios"
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Link } from "react-router-dom"

const API_URL =
  "https://6a26b8d7a84f9d39e907c2b9.mockapi.io/Products"

const ProductList = () => {
  const [products, setProducts] = useState([])

  const [open, setOpen] = useState(false)

  const [editData, setEditData] = useState({
    id: "",
    title: "",
    imageUrl: "",
    price: "",
    stock: "",
    description: "",
  })

  async function getProducts() {
    try {
      const response = await axios.get(API_URL)
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)

      setProducts(products.filter((item) => item.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/${editData.id}`,
        editData
      )

      setProducts(
        products.map((item) =>
          item.id === editData.id ? response.data : item
        )
      )

      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold ml-120">
        Products List
      </h2>

      {products.length > 0 ? (
        <div className="overflow-x-auto rounded-md border bg-background">
          <Table>
            <TableCaption>
              Product Inventory List
            </TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                 <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                  </TableCell>

                  <TableCell className="font-medium">
                        <Link to={`/Dashboard/ProductDetail/${product.id}`}>
                        {product.title}
                        </Link>
                  </TableCell>

                  <TableCell>
                    Rs. {product.price}
                  </TableCell>

                  <TableCell>
                    {product.stock}
                  </TableCell>

                  <TableCell>
                    {product.description}
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onSelect={(e) => {
                            e.preventDefault()
                            setEditData(product)
                            setOpen(true)
                          }}
                        >
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem
                              className="text-red-500"
                              onSelect={(e) =>
                                e.preventDefault()
                              }
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </AlertDialogTrigger>

                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Product?
                              </AlertDialogTitle>

                              <AlertDialogDescription>
                                This product will be
                                permanently deleted.
                              </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>
                              <AlertDialogCancel>
                                Cancel
                              </AlertDialogCancel>

                              <AlertDialogAction
                                onClick={() =>
                                  handleDelete(
                                    product.id
                                  )
                                }
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> 
        </div>
      ) : (
        <p className="ml-120 font-bold">No products available.</p>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Edit Product
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <Input
              value={editData.title}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  title: e.target.value,
                })
              }
            />

            <Input
              value={editData.imageUrl}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  imageUrl: e.target.value,
                })
              }
            />

            <Input
              value={editData.price}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  price: e.target.value,
                })
              }
            />

            <Input
              value={editData.stock}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  stock: e.target.value,
                })
              }
            />

            <Input
              value={editData.description}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  description: e.target.value,
                })
              }
            />
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button onClick={handleUpdate}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductList