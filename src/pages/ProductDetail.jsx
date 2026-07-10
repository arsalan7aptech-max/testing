import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader } from "lucide-react";



const ProductDetail = () => {
  const [product,setProducts]= useState([]);
  const {id}= useParams()
  const [loading,setLoading]=useState(false)

  console.log(id);
  
  const[quantity,setQuantity] = useState(1);
  async function getProducts(){
    setLoading(true)
    const response= await axios.get(`https://6a26b8d7a84f9d39e907c2b9.mockapi.io/Products/${id}`)
    .finally(()=>setLoading(false))
    setProducts(response.data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  console.log(product)

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto max-w-7xl px-4 py-10">
       {loading?<div className="flex justify-center items-center"><Loader/></div>:
        <Card className="border shadow-sm">
          <CardContent className="p-6 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-2">

              {/* Product Image */}
              <div>
                <div className="overflow-hidden rounded-xl border bg-muted">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-500px w-full object-contain p-6"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">
                  Product Category
                </span>

                <h1 className="mt-2 text-4xl font-bold tracking-tight">
                  {product.title}
                </h1>

                <div className="mt-3 flex items-center gap-3">
                  <span className="font-medium">⭐ 4.8</span>
                  <span className="text-muted-foreground">
                    (120 Reviews)
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <span className="text-4xl font-bold">
                    Rs. {product.price}
                  </span>
                </div>

                <Separator className="my-6" />

                <p className="leading-7 text-muted-foreground">
                  {product.description}
                </p>

                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">
                    Stock Available: {product.stock}
                  </span>
                </div>

                {/* Quantity */}
                <div className="mt-8">
                  <h3 className="mb-3 font-semibold">
                    Quantity
                  </h3>

                  <div className="flex w-fit items-center gap-4 rounded-lg border px-4 py-2">
                    <button
                      onClick={() =>
                        quantity > 1 &&
                        setQuantity(quantity - 1)
                      }
                      className="text-lg font-bold"
                    >
                      -
                    </button>

                    <span className="font-medium">
                      {quantity}
                    </span>

                    <button
                      onClick={() =>
                        setQuantity(quantity + 1)
                      }
                      className="text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="flex-1">
                    Add to Cart
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                  >
                    Buy Now
                  </Button>
                </div>

                <Separator className="my-8" />

                <div>
                  <h3 className="mb-4 text-lg font-semibold">
                    Product Details
                  </h3>

                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ High Quality Product</li>
                    <li>✓ Fast Delivery</li>
                    <li>✓ Secure Payment</li>
                    <li>✓ Best Customer Support</li>
                    <li>✓ Easy Returns</li>
                  </ul>
                </div>

              </div>

            </div>
          </CardContent>
        </Card>
  }
      </div>
    </div>
  );
};

export default ProductDetail;