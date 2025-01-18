import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Heart, MoveRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const cartItems = [
  {
    id: 1,
    name: "Luxury Sofa Set",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1974&auto=format&fit=crop",
    quantity: 1,
  },
  {
    id: 2,
    name: "Artisan Wall Art",
    price: "$199",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1974&auto=format&fit=crop",
    quantity: 1,
  },
];

const wishlistItems = [
  {
    id: 3,
    name: "Designer Coffee Table",
    price: "$449",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Pendant Light",
    price: "$179",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1974&auto=format&fit=crop",
  },
];

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Tabs defaultValue="cart" className="w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
          </div>
          <TabsList>
            <TabsTrigger value="cart" className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Cart ({cartItems.length})
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Wishlist ({wishlistItems.length})
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="cart">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-6">
                        <div className="relative group">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{item.name}</h3>
                              <p className="text-sm text-gray-500">Category: Living Room</p>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-2xl font-bold text-purple-600">{item.price}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 border rounded-lg p-1">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Badge variant="secondary">In Stock</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="sticky top-4">
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Order Summary
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">$1,498</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">$149.80</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>$1,647.80</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Badge variant="outline">🚚 Free Shipping</Badge>
                      <Badge variant="outline">💳 Secure Payment</Badge>
                    </div>
                    <p className="text-sm text-gray-500 text-center">
                      30-day easy returns. Money back guarantee.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="wishlist">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="relative group">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <Button 
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-2xl font-bold text-purple-600 mt-2">{item.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          Move to Cart
                          <MoveRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Cart;