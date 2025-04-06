
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Booking = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  
  // Get any query params from the URL
  const checkInParam = searchParams.get('checkIn');
  const checkOutParam = searchParams.get('checkOut');
  const adultsParam = searchParams.get('adults');
  const childrenParam = searchParams.get('children');
  const roomsParam = searchParams.get('rooms');

  // Form state
  const [checkIn, setCheckIn] = useState<Date | undefined>(
    checkInParam ? new Date(checkInParam) : undefined
  );
  const [checkOut, setCheckOut] = useState<Date | undefined>(
    checkOutParam ? new Date(checkOutParam) : undefined
  );
  const [adults, setAdults] = useState(adultsParam || "2");
  const [children, setChildren] = useState(childrenParam || "0");
  const [rooms, setRooms] = useState(roomsParam || "1");
  const [roomType, setRoomType] = useState("deluxe");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate the total price based on selection
  useEffect(() => {
    if (!checkIn || !checkOut) {
      setTotalPrice(0);
      return;
    }

    // Get base price from room type
    let basePrice = 0;
    switch (roomType) {
      case "deluxe":
        basePrice = 12000;
        break;
      case "premium":
        basePrice = 18000;
        break;
      case "family":
        basePrice = 20000;
        break;
      case "royal":
        basePrice = 35000;
        break;
      default:
        basePrice = 12000;
    }

    // Calculate number of nights
    const nights = Math.round(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (nights <= 0) {
      setTotalPrice(0);
      return;
    }

    // Calculate total price
    const roomCount = parseInt(rooms);
    let price = basePrice * nights * roomCount;

    // Add charges for extra occupants if applicable
    // This is just a simple example; real pricing would be more complex
    const adultCount = parseInt(adults);
    if (adultCount > 2) {
      price += (adultCount - 2) * 2000 * nights;
    }

    setTotalPrice(price);
  }, [checkIn, checkOut, roomType, adults, rooms]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!checkIn || !checkOut) {
      toast({
        variant: "destructive",
        title: "Please select check-in and check-out dates",
      });
      return;
    }
    
    if (checkIn >= checkOut) {
      toast({
        variant: "destructive",
        title: "Check-out date must be after check-in date",
      });
      return;
    }

    if (!agreedToTerms) {
      toast({
        variant: "destructive",
        title: "Please agree to the terms and conditions",
      });
      return;
    }

    // Submit booking
    toast({
      title: "Booking Request Received",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    
    // In a real app, you would submit this data to your backend
    console.log({
      checkIn,
      checkOut,
      adults,
      children,
      rooms,
      roomType,
      name,
      email,
      phone,
      specialRequests,
      totalPrice
    });
  };

  return (
    <Layout>
      <PageHeader
        title="Book Your Stay"
        subtitle="Reserve your perfect mountain getaway"
        backgroundImage="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary text-center">Reservation Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dates and Room Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Check-in Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Check-out Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          disabled={(date) => checkIn ? date <= checkIn : date <= new Date()}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Room Type</label>
                    <Select value={roomType} onValueChange={setRoomType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deluxe">Deluxe Mountain View Room (₹12,000/night)</SelectItem>
                        <SelectItem value="premium">Premium Lake View Suite (₹18,000/night)</SelectItem>
                        <SelectItem value="family">Family Suite (₹20,000/night)</SelectItem>
                        <SelectItem value="royal">Royal Himalayan Suite (₹35,000/night)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Number of Rooms</label>
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of rooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Room" : "Rooms"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Adults</label>
                    <Select value={adults} onValueChange={setAdults}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of adults" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Adult" : "Adults"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Children</label>
                    <Select value={children} onValueChange={setChildren}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of children" />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Child" : "Children"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Guest Information */}
                <div className="pt-4 border-t">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Guest Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        placeholder="Enter your full name" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        placeholder="Enter your email address" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mt-6">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input 
                      id="phone" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                      placeholder="Enter your phone number" 
                    />
                  </div>

                  <div className="space-y-2 mt-6">
                    <label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">Special Requests</label>
                    <Textarea 
                      id="specialRequests" 
                      value={specialRequests} 
                      onChange={(e) => setSpecialRequests(e.target.value)} 
                      placeholder="Any special requests or preferences?" 
                      rows={4}
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="pt-4 border-t">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Price Summary</h3>
                  
                  {totalPrice > 0 && checkIn && checkOut ? (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">
                          Room Rate ({Math.round(
                            (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
                          )} nights, {rooms} {parseInt(rooms) === 1 ? "room" : "rooms"})
                        </span>
                        <span className="font-medium">₹{totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Taxes & Fees (18%)</span>
                        <span className="font-medium">₹{Math.round(totalPrice * 0.18).toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between items-center">
                        <span className="text-lg font-bold text-primary">Total</span>
                        <span className="text-lg font-bold text-primary">₹{Math.round(totalPrice * 1.18).toLocaleString()}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      Please select check-in and check-out dates to see the total price.
                    </p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2 pt-4">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>, <a href="#" className="text-primary hover:underline">cancellation policy</a>, and <a href="#" className="text-primary hover:underline">privacy policy</a>.
                  </label>
                </div>

                <div className="pt-6 text-center">
                  <Button 
                    type="submit" 
                    className="min-w-[200px] bg-primary hover:bg-primary/90"
                    disabled={!checkIn || !checkOut || !agreedToTerms}
                  >
                    Complete Reservation
                  </Button>
                </div>
              </form>
            </div>

            {/* Additional Information */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <InfoCard
                title="Flexible Cancellation"
                content="Free cancellation up to 72 hours before arrival. For cancellations within 72 hours, one night's charge applies."
              />
              <InfoCard
                title="Secure Payment"
                content="We use secure payment methods. Your card will be charged only after check-in, though we'll take a hold for the amount."
              />
              <InfoCard
                title="Special Requests"
                content="Have special needs or celebrating a special occasion? Let us know and we'll do our best to accommodate you."
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
          <Check size={16} />
        </div>
        <h3 className="font-semibold text-primary">{title}</h3>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Booking;
