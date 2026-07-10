import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Nike Shoes",
    price: "$100",
    update: "$120",
    description: "Comfortable running shoes with premium cushioning.",
    variants: {
      red: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      blue: "https://tse2.mm.bing.net/th/id/OIP.WHLHPRGTvOevpc-Qw2GTFQHaGQ?rs=1&pid=ImgDetMain&o=7&rm=3",
      green:
        "https://img.freepik.com/premium-photo/green-nike-shoe-with-nike-logo-side_1254770-1913.jpg?w=2000",
    },
  },
  {
    id: 2,
    name: "Headphones",
    price: "$80",
    update: "$100",
    description: "Wireless headphones with crystal-clear sound and comfort.",
    variants: {
      red: "https://img.freepik.com/premium-photo/red-headphone_823919-11965.jpg?w=2000",
      blue:
        "https://i.pinimg.com/originals/78/d6/79/78d67996fc395c336eec9b99e63bd2d6.png",
      green:
        "https://tse1.mm.bing.net/th/id/OIP.0kSF_WUtsupnJCsy2CHJ7QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  },
  {
    id: 3,
    name: "Watch",
    price: "$50",
    update: "$80",
    description: "Elegant smartwatch with health tracking features.",
    variants: {
      silver: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      black:
        "https://tse3.mm.bing.net/th/id/OIP.4N6JyCLecOgCKTewGF9JQQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      golden:
        "https://m.media-amazon.com/images/I/61-VDs3IrCL._AC_UY1000_.jpg",
    },
  },
  {
    id: 4,
    name: "Wallet",
    price: "$40",
    update: "$60",
    description: "Premium leather wallet with multiple compartments.",
    variants: {
      black: "https://i5.walmartimages.com/asr/b70c68b5-d432-4835-ac84-ccac3f88d9ac.c6eb48699909c8e6a77c5b48370813eb.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      brown:
        "https://png.pngtree.com/png-vector/20250103/ourmid/pngtree-classic-brown-leather-wallet-for-everyday-use-png-image_15033547.png",
      grey:
        "https://images.squarespace-cdn.com/content/v1/539dffebe4b080549e5a5df5/1ffca77a-56cd-4946-bf09-6d87b487787f/cool-grey-leather-wallet-ili-7822-museum-outlets.jpg",
    },
  },
  {
    id: 5,
    name: "Jacket",
    price: "$150",
    update: "$180",
    description: "Stylish winter jacket with water-resistant fabric.",
    variants: {
      black: "https://tse4.mm.bing.net/th/id/OIP.8Ax9ojpcz1ORjSKtiX_QMgHaJQ?cb=thfvnext&w=1600&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3",
      brown:
        "https://img.freepik.com/premium-photo/mockup-design-brown-premium-stylish-luxury-leather-jacket_1114736-4882.jpg?w=996",
      green:
        "https://i5.walmartimages.com/seo/TACVASEN-Mens-Casual-Outdoor-Jacket-Lightweight-Hiking-Bomber-Coat-Green-S_9194f7ae-811e-4b62-87f1-9c6f382e10d0.bb5ee0a224e42530e7cbbc438c0087ab.jpeg?odnHeight=424&odnWidth=424&odnBg=FFFFFF",
    },
  },
  {
    id: 6,
    name: "Cap",
    price: "$30",
    update: "$50",
    description: "Classic cotton baseball cap for everyday wear.",
    variants: {
      black: "https://i5.walmartimages.com/seo/Nike-Men-s-Classic-Cotton-Baseball-Cap-Black-White-OS_19839477-1caf-4543-b00b-0255670a0a96.3b90e216449b11957c830675e7f38e17.png",
      blue:
        "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/5a7e44a1-5e56-4297-8fde-85d826d39b9d/U+NK+DF+CLUB+CAP+S+CB+P.png",
     pink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a051e2a1-2201-4c64-bdd1-81fc072c7954/club-unstructured-futura-wash-cap-b1sDph.png",
    },
  },
]

export default function ProductsPage() {
  const [selectedImages, setSelectedImages] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = Object.values(product.variants)[0]
      return acc
    }, {})
  )

  return (
    <>
      <h2 className="text-4xl font-bold mt-6 text-center">
        Our Products
      </h2>

      <div className="grid grid-cols-1 gap-4 p-3 mt-2 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={selectedImages[product.id]}
              alt={product.name}
              className="h-96 w-full object-cover"
            />

            <div className="flex items-center gap-1 text-yellow-500 px-4 py-2">
              <p className="bg-green-500 text-white px-4 py-1 text-sm rounded-full mr-2">
                In Stock
              </p>

              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 fill-yellow-400"
                />
              ))}
            </div>

            <CardContent className="space-y-3 p-4">
              <h2 className="text-3xl font-bold">
                {product.name}
              </h2>

              <p className="text-gray-600  text-xl mt-2 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center gap-3">
                <p className="text-3xl font-bold">
                  {product.price}
                </p>

                <p className="text-xl text-gray-400 line-through">
                  {product.update}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Select Variant
                </h3>

                <div className="flex gap-2 flex-wrap">
                  {Object.entries(product.variants).map(
                    ([color, image]) => (
                      <Button
                        key={color}
                        style={{
                          backgroundColor: color,
                        }}
                        className="capitalize text-white bg-blue-500 text-lg rounded-xl px-6"
                        onClick={() =>{
                          setSelectedImages((prev) => ({
                            ...prev,
                            [product.id]: image,
                          }
                        
                        ))
                        console.log(selectedImages);
                        }}
                      >
                        {color}
                      </Button>
                    )
                  )}
                </div>
              </div>

              <Button className="w-full bg-blue-700 mt-4 text-lg">
                Buy Now
              </Button>

              <Button className="w-full text-lg">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}