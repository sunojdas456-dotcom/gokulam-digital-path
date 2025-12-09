import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ArrowUpRight, Check, ShoppingCart, Plus, Minus, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import gauSevaImage from "@/assets/gau-seva.jpg";
import annadanaImage from "@/assets/annadana-seva.jpg";

const sevaCategories = [
  {
    id: "gau",
    name: "Gau Seva",
    description: "Support our cow sanctuary",
    image: gauSevaImage,
    options: [
      { id: "gau-week", name: "Feed a cow for a week", amount: 500 },
      { id: "gau-2weeks", name: "Feed a cow for 2 weeks", amount: 1000 },
      { id: "gau-month", name: "Feed a cow for a month", amount: 2000 },
      { id: "gau-all-day", name: "Feed all cows for a day", amount: 5000 },
      { id: "gau-special", name: "Feed all cows on your special occasion", amount: 10000 },
    ],
  },
  {
    id: "annadana",
    name: "Annadana Seva",
    description: "Feed the hungry",
    image: annadanaImage,
    options: [
      { id: "anna-10", name: "Feed 10 people", amount: 500 },
      { id: "anna-25", name: "Feed 25 people", amount: 1250 },
      { id: "anna-50", name: "Feed 50 people", amount: 2500 },
      { id: "anna-100", name: "Feed 100 people", amount: 5000 },
      { id: "anna-special", name: "Sponsor full day Annadana", amount: 25000 },
    ],
  },
];

interface CartItem {
  sevaId: string;
  optionId: string;
  name: string;
  amount: number;
  quantity: number;
}

const Donations = () => {
  const [selectedSeva, setSelectedSeva] = useState(sevaCategories[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customAmount, setCustomAmount] = useState("");
  const [wants80G, setWants80G] = useState(false);
  const [wantsPrasadam, setWantsPrasadam] = useState(false);

  const addToCart = (option: { id: string; name: string; amount: number }) => {
    const existing = cart.find((item) => item.optionId === option.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.optionId === option.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          sevaId: selectedSeva.id,
          optionId: option.id,
          name: option.name,
          amount: option.amount,
          quantity: 1,
        },
      ]);
    }
    toast({
      title: "Added to cart",
      description: `${option.name} added to your seva cart`,
    });
  };

  const updateQuantity = (optionId: string, delta: number) => {
    setCart(
      cart
        .map((item) =>
          item.optionId === optionId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.amount * item.quantity,
    0
  );

  const handleDonate = () => {
    if (cart.length === 0 && !customAmount) {
      toast({
        title: "Please select a seva",
        description: "Add items to your cart or enter a custom amount",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Proceeding to payment",
      description: "You will be redirected to the payment gateway",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 section-teal">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Donations Portal
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Your generous contributions help us continue our sacred mission. 
              All donations are eligible for 80G tax benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Content */}
      <section className="py-12 section-cream">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Seva Categories */}
            <div className="lg:col-span-2 space-y-8">
              {/* Category Tabs */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {sevaCategories.map((seva) => (
                  <button
                    key={seva.id}
                    onClick={() => setSelectedSeva(seva)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all shrink-0 ${
                      selectedSeva.id === seva.id
                        ? "bg-primary text-primary-foreground shadow-spiritual"
                        : "bg-card border border-border hover:border-primary/30"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg overflow-hidden ${
                        selectedSeva.id === seva.id ? "ring-2 ring-primary-foreground/30" : ""
                      }`}
                    >
                      <img
                        src={seva.image}
                        alt={seva.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{seva.name}</p>
                      <p
                        className={`text-sm ${
                          selectedSeva.id === seva.id
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {seva.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Seva Options */}
              <Card>
                <CardHeader>
                  <CardTitle>{selectedSeva.name} Options</CardTitle>
                  <CardDescription>Select the seva you wish to offer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedSeva.options.map((option) => {
                      const inCart = cart.find((item) => item.optionId === option.id);
                      return (
                        <div
                          key={option.id}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            inCart
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-medium text-foreground">{option.name}</p>
                              <p className="text-lg font-bold text-primary">
                                ₹{option.amount.toLocaleString()}
                              </p>
                            </div>
                            {inCart && (
                              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                                {inCart.quantity}x
                              </span>
                            )}
                          </div>
                          <Button
                            variant={inCart ? "outline" : "coral"}
                            size="sm"
                            className="w-full gap-2"
                            onClick={() => addToCart(option)}
                          >
                            <Plus className="w-4 h-4" />
                            Add to Cart
                          </Button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Custom Amount */}
                  <div className="mt-6 p-4 rounded-xl bg-muted">
                    <Label className="text-sm font-medium">Or enter custom amount</Label>
                    <div className="flex gap-3 mt-2">
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        onClick={() => {
                          if (customAmount && parseInt(customAmount) > 0) {
                            addToCart({
                              id: `custom-${Date.now()}`,
                              name: `Custom ${selectedSeva.name} Donation`,
                              amount: parseInt(customAmount),
                            });
                            setCustomAmount("");
                          }
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cart & Checkout */}
            <div className="space-y-6">
              {/* Cart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Seva Cart
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground text-sm text-center py-8">
                      Your cart is empty. Add sevas to continue.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div
                          key={item.optionId}
                          className="flex items-center justify-between py-3 border-b border-border last:border-0"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-muted-foreground text-sm">
                              ₹{item.amount.toLocaleString()} × {item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.optionId, -1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.optionId, 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}

                      <div className="pt-4 border-t border-border">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span className="text-primary">
                            ₹{totalAmount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Options */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="80g"
                      checked={wants80G}
                      onCheckedChange={(checked) => setWants80G(checked as boolean)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="80g" className="text-sm font-medium">
                        I would like to receive 80(G) Certificate
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Tax exemption certificate for Indian donors
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="prasadam"
                      checked={wantsPrasadam}
                      onCheckedChange={(checked) => setWantsPrasadam(checked as boolean)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="prasadam" className="text-sm font-medium flex items-center gap-2">
                        <Gift className="w-4 h-4 text-secondary" />
                        I would like to receive Maha Prasadam
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Only available within India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Checkout */}
              <Button
                variant="coral"
                size="xl"
                className="w-full gap-3 pr-4"
                onClick={handleDonate}
                disabled={cart.length === 0}
              >
                Donate ₹{totalAmount.toLocaleString()}
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-coral" />
                </span>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Secure payment powered by Razorpay. Your donation is 100% secure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donations;
