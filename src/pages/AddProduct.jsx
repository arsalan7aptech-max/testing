import { useEffect, useState } from "react"
import {
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

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
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import axios from "axios"
import { Spinner } from "@/components/ui/spinner"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function AddProductPage() {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    price: "",
    stock: "",
    description: "",
  })

  const [editData, setEditData] = useState({
  id: "",
  title: "",
  imageUrl: "",
  price: "",
  stock: "",
  description: "",
})

const [open, setOpen] = useState(false)
const navigate = useNavigate ()

  async function getproducts(){
  //  const response= await fetch('https://fakestoreapi.com/products');
  //  const data=await response.json();
  //  console.log(data);
  //  setProducts(data)

  const Products = await axios.get("https://6a26b8d7a84f9d39e907c2b9.mockapi.io/Products")
  console.log(Products);
  
  setProducts(Products.data)
  }
useEffect(()=>{
  getproducts()
},[])
   
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // changing
  const handleDelete = async (id) => {
  await axios.delete(
    `https://6a26b8d7a84f9d39e907c2b9.mockapi.io/Products/${id}`
  )
  setProducts(products.filter((item) => item.id !== id))
}
 
const handleUpdate = async () =>{
  const response = await axios.put(
    `https://6a26b8d7a84f9d39e907c2b9.mockapi.io/Products/${editData.id}`,
    editData
  )

  setProducts(
    products.map((item) =>
      item.id === editData.id ? response.data : item
    )
  ) 
  
  setOpen(false)
}



 const handleSubmit = async (e) => {
  e.preventDefault()
  // Simple Validation

  if (formData.title.trim().length < 3) {
    alert("Product title must be at least 3 characters")
    return
  }

  if (!formData.imageUrl.startsWith("http")) {
    alert("Please enter a valid image URL")
    return
  }

  if (Number(formData.price) <= 100) {
    alert("Price must be greater than 100")
    return
  }

  if (formData.stock < 1) {
  alert("Stock must be at least 1");
  return;
  }

  if (formData.description.trim().length < 5) {
    alert("Description must be at least 10 characters")
    return
  }  
     
  // LOADERCHANGING
 setLoading(true)
        const response= await axios.post("https://6a26b8d7a84f9d39e907c2b9.mockapi.io/Products",{
       "title":formData.title,
       "imageUrl": formData.imageUrl,
       "price": formData.price,
       "stock": formData.stock,
       "description":formData.description,
        }).finally(()=> setLoading(false))
        
  // const newProduct = {
  //   id: Date.now(),
  //   title: formData.title,
  //   imageUrl: formData.imageUrl,
  //   price: formData.price,
  //   stock: formData.stock,
  //   description: formData.description,
  // }

  console.log(response);
  setProducts([...products, response.data])

 
  // LOADERCHANGING

  // alert("Product Added Successfully")
  toast.success('Product Added Successfully')
  navigate('/Dashboard/ProductList')

  setFormData({
    title: "",
    imageUrl: "",
    price: "",
    stock: "",
    description: "",
  })
}

const handleCancel = () => {
  setFormData({
    title: "",
    imageUrl: "",
    price: "",
    stock: "",
    description: "",
  })
}

  return (
    <div className="min-h-screen bg-muted/40 p-6">
      {loading && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/20">
    <div>Loading...</div>
  </div>
)}
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Add Product
          </h1>

          <p className="text-muted-foreground">
            Create a new product for your store
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Product Title</Label>

                <Input
                  type="text"
                  name="title"
                  placeholder="Enter product title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Product Image URL</Label>

                <Input
                  type="url"
                  name="imageUrl"
                  placeholder="Enter product image URL"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                />
              </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="space-y-2">
    <Label>Price</Label>
    <Input
      type="number"
      name="price"
      placeholder="Enter product price"
      value={formData.price}
      onChange={handleChange}
      required
    />
  </div>

  <div className="space-y-2">
    <Label>Stock</Label>
    <Input
      type="number"
      name="stock"
      placeholder="Enter product stock"
      value={formData.stock}
      onChange={handleChange}
      required
      />
     </div>
      </div>

              <div className="space-y-2">
                <Label>Description</Label>

                <textarea
                  name="description"
                  placeholder="Enter product description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />

                {/* image changing */}
                {formData.imageUrl && (
                <img
                src={formData.imageUrl}
                alt="Preview"
                className="h-32 w-32 rounded-md object-cover border"
                />
                )}                                
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" disabled={loading}>
                 {loading ? (
                <>
               <Spinner />
               Save Product...
                 </>
                ) : ("Save Product")}</Button>

                <Button type="button"
                  variant="outline"
                  onClick={handleCancel}>Cancel</Button>
              </div>
              
            </form>
          </CardContent>
        </Card>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">
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
                  <TableCell className="font-medium">
                    {product.id}</TableCell>
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
                            <Button variant="ghost"size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="end">
                        <Dialog open={open} onOpenChange={setOpen}>

                      <DialogTrigger asChild>

                    <DropdownMenuItem onSelect={(e) => {
                     e.preventDefault() 
                     setEditData(product)
                     setOpen(true)}}>            
                  <Pencil className="mr-2 h-4 w-4" />
                   Edit
                 </DropdownMenuItem>

                    </DialogTrigger>

                     <DialogContent>
                      <DialogHeader>
                  <DialogTitle>Edit Product</DialogTitle>

                 <Input value={editData.title} onChange={(e) =>
                  setEditData({
                  ...editData, title: e.target.value,})}/>
                       
                 <Input value={editData.price} onChange={(e) =>
                  setEditData({
                  ...editData, price: e.target.value,})}/>
                              
                 <Input value={editData.stock} onChange={(e) =>
                  setEditData({
                  ...editData, stock: e.target.value,})}/>
                          
                 <Input value={editData.description} onChange={(e) =>
                  setEditData({
                 ...editData, description: e.target.value,})}/>

                <DialogDescription>Update product details.</DialogDescription>
                 </DialogHeader>

                    <DialogFooter>
                    <DialogClose asChild>
               <Button variant="outline">Cancel</Button>
                  </DialogClose>

                  <Button onClick={handleUpdate}>Save Changes</Button>
                   </DialogFooter>
                  </DialogContent>
                  </Dialog>

                            {/* changing */}
                           <AlertDialog>
                        <AlertDialogTrigger asChild>
                         <DropdownMenuItem className="text-red-500"onSelect={(e) =>
                          e.preventDefault()}>
                       <Trash2 className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>
                        </AlertDialogTrigger>

                 <AlertDialogContent>
                 <AlertDialogHeader>
                 <AlertDialogTitle>Delete Product?</AlertDialogTitle>

                <AlertDialogDescription>This product will be permanently deleted.</AlertDialogDescription>
                </AlertDialogHeader>
                 <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
  
             <AlertDialogAction 
             onClick={() => handleDelete(product.id)}
            >Delete</AlertDialogAction>
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
            <p className="text-muted-foreground">
              No products available.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}