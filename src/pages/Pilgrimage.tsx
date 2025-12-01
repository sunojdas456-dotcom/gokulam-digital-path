import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Calendar, MapPin, Users, ArrowRight, Info, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { toast } from "@/hooks/use-toast";
import pilgrimageImage from "@/assets/pilgrimage.jpg";

const destinations = [
  {
    id: 1,
    name: "Vrindavan Yatra",
    description: "Visit the sacred land of Lord Krishna",
    duration: "3 Days",
    slotsPerMonth: 40,
    availableSlots: 12,
  },
  {
    id: 2,
    name: "Mathura Darshan",
    description: "Experience the birthplace of Lord Krishna",
    duration: "2 Days",
    slotsPerMonth: 40,
    availableSlots: 25,
  },
  {
    id: 3,
    name: "Govardhan Parikrama",
    description: "Sacred circumambulation of Govardhan Hill",
    duration: "1 Day",
    slotsPerMonth: 40,
    availableSlots: 8,
  },
];

const Pilgrimage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);

  // Only allow next 3 months
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  const handleBooking = () => {
    if (!selectedDate || !selectedDestination) {
      toast({
        title: "Please select destination and date",
        description: "Both destination and date are required to book",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login Required",
      description: "Please login to book your pilgrimage tour",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={pilgrimageImage} alt="Pilgrimage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Free Pilgrimage Tours
            </h1>
            <p className="text-primary-foreground/90 text-lg mb-6">
              We offer free pilgrimage tours to sacred destinations for those who cannot afford it. 
              Book your spiritual journey today and experience the divine.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                40 Slots/Month
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Next 3 Months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 section-cream">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Destinations */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Select Your Destination
                </h2>
                <p className="text-muted-foreground">
                  Choose from our sacred pilgrimage destinations
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {destinations.map((dest) => (
                  <Card
                    key={dest.id}
                    className={`cursor-pointer transition-all hover-lift ${
                      selectedDestination === dest.id
                        ? "border-primary shadow-spiritual"
                        : "border-border"
                    }`}
                    onClick={() => setSelectedDestination(dest.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{dest.name}</CardTitle>
                          <CardDescription>{dest.description}</CardDescription>
                        </div>
                        {selectedDestination === dest.id && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Duration: {dest.duration}</span>
                        <span className={`font-medium ${dest.availableSlots < 10 ? "text-destructive" : "text-primary"}`}>
                          {dest.availableSlots} slots left
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Info Card */}
              <Card className="bg-secondary/10 border-secondary/20">
                <CardContent className="flex items-start gap-4 pt-6">
                  <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">Important Information</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Only 40 slots available per month per destination</li>
                      <li>• Booking available for next 3 months only</li>
                      <li>• You must login to complete the booking</li>
                      <li>• Valid government ID proof required</li>
                      <li>• Confirmation will be sent to your registered email</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calendar & Booking */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Select Date</CardTitle>
                  <CardDescription>Choose your preferred travel date</CardDescription>
                </CardHeader>
                <CardContent>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < today || date > maxDate}
                    className="rounded-md border pointer-events-auto"
                  />
                </CardContent>
              </Card>

              {/* Booking Summary */}
              <Card className="gradient-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-80">Destination:</span>
                      <span className="font-medium">
                        {selectedDestination
                          ? destinations.find((d) => d.id === selectedDestination)?.name
                          : "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-80">Date:</span>
                      <span className="font-medium">
                        {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-80">Cost:</span>
                      <span className="font-medium text-secondary">FREE</span>
                    </div>
                  </div>

                  <Button
                    variant="coral"
                    className="w-full gap-2"
                    onClick={handleBooking}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pilgrimage;
