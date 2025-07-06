import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Briefcase, 
  Car, 
  Home, 
  Wallet, 
  Package,
  MapPin,
  Clock,
  TrendingUp,
  Star,
  Shield,
  Wrench,
  Truck,
  Utensils,
  Stethoscope,
  Building2
} from "lucide-react";

interface Character {
  name: string;
  level: number;
  money: number;
  job: string;
  reputation: number;
  health: number;
  hunger: number;
  thirst: number;
  energy: number;
}

interface Job {
  id: string;
  title: string;
  description: string;
  salary: number;
  requirements: string[];
  icon: any;
  available: boolean;
}

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  price: number;
  type: string;
  speed: number;
  handling: number;
  image?: string;
}

interface Property {
  id: string;
  name: string;
  price: number;
  type: string;
  location: string;
  bedrooms?: number;
  garage?: boolean;
}

const Index = () => {
  const [character, setCharacter] = useState<Character>({
    name: "Alex Rodriguez",
    level: 12,
    money: 15750,
    job: "Mechanic",
    reputation: 85,
    health: 95,
    hunger: 60,
    thirst: 40,
    energy: 75
  });

  const jobs: Job[] = [
    {
      id: "police",
      title: "Police Officer",
      description: "Serve and protect the city. Requires clean record.",
      salary: 2500,
      requirements: ["Clean Criminal Record", "Level 10+"],
      icon: Shield,
      available: true
    },
    {
      id: "mechanic",
      title: "Mechanic",
      description: "Repair and maintain vehicles around the city.",
      salary: 1800,
      requirements: ["Basic Tools", "Level 5+"],
      icon: Wrench,
      available: true
    },
    {
      id: "delivery",
      title: "Delivery Driver",
      description: "Deliver packages and food across the city.",
      salary: 1200,
      requirements: ["Valid License", "Own Vehicle"],
      icon: Truck,
      available: true
    },
    {
      id: "chef",
      title: "Restaurant Chef",
      description: "Cook delicious meals for customers.",
      salary: 2000,
      requirements: ["Cooking Skills", "Level 8+"],
      icon: Utensils,
      available: false
    },
    {
      id: "doctor",
      title: "Emergency Doctor",
      description: "Save lives and treat patients.",
      salary: 4000,
      requirements: ["Medical Degree", "Level 20+"],
      icon: Stethoscope,
      available: false
    }
  ];

  const vehicles: Vehicle[] = [
    {
      id: "civic",
      name: "Civic Type R",
      brand: "Honda",
      price: 35000,
      type: "Sports",
      speed: 85,
      handling: 90
    },
    {
      id: "mustang",
      name: "Mustang GT",
      brand: "Ford",
      price: 55000,
      type: "Muscle",
      speed: 95,
      handling: 75
    },
    {
      id: "model3",
      name: "Model 3",
      brand: "Tesla",
      price: 45000,
      type: "Electric",
      speed: 80,
      handling: 85
    },
    {
      id: "f150",
      name: "F-150 Raptor",
      brand: "Ford",
      price: 65000,
      type: "Truck",
      speed: 70,
      handling: 60
    },
    {
      id: "bmw_m3",
      name: "M3 Competition",
      brand: "BMW",
      price: 72000,
      type: "Sports",
      speed: 92,
      handling: 88
    },
    {
      id: "bmw_x5",
      name: "X5 M50i",
      brand: "BMW",
      price: 68000,
      type: "SUV",
      speed: 78,
      handling: 82
    },
    {
      id: "bmw_i8",
      name: "i8 Roadster",
      brand: "BMW",
      price: 165000,
      type: "Hybrid Sports",
      speed: 88,
      handling: 95
    },
    {
      id: "bmw_320i",
      name: "320i",
      brand: "BMW",
      price: 42000,
      type: "Sedan",
      speed: 75,
      handling: 85
    }
  ];

  const properties: Property[] = [
    {
      id: "apartment1",
      name: "Downtown Apartment",
      price: 150000,
      type: "Apartment",
      location: "Downtown",
      bedrooms: 1,
      garage: false
    },
    {
      id: "house1",
      name: "Suburban House",
      price: 350000,
      type: "House",
      location: "Suburbs",
      bedrooms: 3,
      garage: true
    },
    {
      id: "mansion1",
      name: "Luxury Mansion",
      price: 1200000,
      type: "Mansion",
      location: "Hills",
      bedrooms: 6,
      garage: true
    }
  ];

  const applyForJob = (jobId: string) => {
    const job = jobs.find(j => j.id === jobId);
    if (job && job.available) {
      setCharacter(prev => ({ ...prev, job: job.title }));
    }
  };

  const buyVehicle = (vehicleId: string) => {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (vehicle && character.money >= vehicle.price) {
      setCharacter(prev => ({ 
        ...prev, 
        money: prev.money - vehicle.price 
      }));
    }
  };

  const buyProperty = (propertyId: string) => {
    const property = properties.find(p => p.id === propertyId);
    if (property && character.money >= property.price) {
      setCharacter(prev => ({ 
        ...prev, 
        money: prev.money - property.price 
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Dalwa RP
          </h1>
          <p className="text-muted-foreground">Live your virtual life, make choices, build your empire</p>
        </div>

        <Tabs defaultValue="character" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="character" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Character
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Jobs
            </TabsTrigger>
            <TabsTrigger value="vehicles" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              Vehicles
            </TabsTrigger>
            <TabsTrigger value="properties" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Properties
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Inventory
            </TabsTrigger>
            <TabsTrigger value="city" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              City
            </TabsTrigger>
          </TabsList>

          <TabsContent value="character" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Character Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{character.name}</h3>
                    <Badge variant="secondary">Level {character.level}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Wallet className="h-4 w-4" />
                        <span className="text-sm font-medium">Money</span>
                      </div>
                      <p className="text-2xl font-bold text-green-600">${character.money.toLocaleString()}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm font-medium">Job</span>
                      </div>
                      <p className="text-lg font-semibold">{character.job}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4" />
                      <span className="text-sm font-medium">Reputation</span>
                    </div>
                    <Progress value={character.reputation} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-1">{character.reputation}/100</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Character Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Health</span>
                      <span className="text-sm text-red-500">{character.health}%</span>
                    </div>
                    <Progress value={character.health} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Hunger</span>
                      <span className="text-sm text-orange-500">{character.hunger}%</span>
                    </div>
                    <Progress value={100 - character.hunger} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Thirst</span>
                      <span className="text-sm text-blue-500">{character.thirst}%</span>
                    </div>
                    <Progress value={100 - character.thirst} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Energy</span>
                      <span className="text-sm text-green-500">{character.energy}%</span>
                    </div>
                    <Progress value={character.energy} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Center</CardTitle>
                <CardDescription>Find work and earn money to support your lifestyle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {jobs.map((job) => (
                    <Card key={job.id} className={!job.available ? "opacity-50" : ""}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <job.icon className="h-5 w-5" />
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                        </div>
                        <CardDescription>{job.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-4 w-4" />
                          <span className="font-semibold text-green-600">${job.salary}/month</span>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-1">Requirements:</p>
                          <div className="space-y-1">
                            {job.requirements.map((req, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          onClick={() => applyForJob(job.id)}
                          disabled={!job.available || character.job === job.title}
                          className="w-full"
                        >
                          {character.job === job.title ? "Current Job" : job.available ? "Apply" : "Not Available"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vehicles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Dealership</CardTitle>
                <CardDescription>Browse and purchase vehicles for transportation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vehicles.map((vehicle) => (
                    <Card key={vehicle.id}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{vehicle.brand} {vehicle.name}</CardTitle>
                        <Badge variant="secondary">{vehicle.type}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-2xl font-bold text-green-600">
                          ${vehicle.price.toLocaleString()}
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Speed</span>
                              <span className="text-sm">{vehicle.speed}/100</span>
                            </div>
                            <Progress value={vehicle.speed} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Handling</span>
                              <span className="text-sm">{vehicle.handling}/100</span>
                            </div>
                            <Progress value={vehicle.handling} className="h-2" />
                          </div>
                        </div>
                        
                        <Button 
                          onClick={() => buyVehicle(vehicle.id)}
                          disabled={character.money < vehicle.price}
                          className="w-full"
                        >
                          {character.money >= vehicle.price ? "Buy Now" : "Insufficient Funds"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="properties" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Real Estate</CardTitle>
                <CardDescription>Invest in properties and build your real estate portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {properties.map((property) => (
                    <Card key={property.id}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{property.name}</CardTitle>
                        <Badge variant="secondary">{property.type}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-2xl font-bold text-green-600">
                          ${property.price.toLocaleString()}
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{property.location}</span>
                          </div>
                          {property.bedrooms && (
                            <div className="flex items-center gap-2">
                              <Home className="h-4 w-4" />
                              <span>{property.bedrooms} bedrooms</span>
                            </div>
                          )}
                          {property.garage && (
                            <div className="flex items-center gap-2">
                              <Car className="h-4 w-4" />
                              <span>Garage included</span>
                            </div>
                          )}
                        </div>
                        
                        <Button 
                          onClick={() => buyProperty(property.id)}
                          disabled={character.money < property.price}
                          className="w-full"
                        >
                          {character.money >= property.price ? "Purchase" : "Insufficient Funds"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Inventory</CardTitle>
                <CardDescription>Manage your items and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Your inventory is empty</p>
                  <p className="text-sm text-muted-foreground mt-2">Items you collect will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="city" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    City Hall
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Register businesses, pay taxes, and handle legal matters.</p>
                  <Button variant="outline" className="w-full">Visit</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Hospital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Restore health and get medical treatment.</p>
                  <Button variant="outline" className="w-full">Visit</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    Restaurant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Satisfy hunger and socialize with other players.</p>
                  <Button variant="outline" className="w-full">Visit</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
