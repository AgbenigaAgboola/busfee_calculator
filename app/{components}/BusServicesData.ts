// BusServicesData.ts
interface BusRoute {
  route_number: number;
  areas_covered: string[];
  round_trip_price: number;
  one_way_price: number;
}

interface Discount {
  [key: string]: {
    round_trip_discount: number;
    one_way_discount: number;
  };
}

interface BusServicesData {
  bus_routes: BusRoute[];
  discount: Discount;
}

const busServicesData: BusServicesData = {
  bus_routes: [
    {
      route_number: 1,
      areas_covered: [
        "GARKI",
        "CBN",
        "MAITAMA",
        "WUSE 2",
        "ZONE E",
        "BERGER",
        "WUYE",
      ],
      round_trip_price: 189600,
      one_way_price: 169600,
    },
    {
      route_number: 2,
      areas_covered: [
        "GAMES VILLAGE",
        "AREA 1",
        "PRINCE & PRINCESS",
        "WONDERLAND",
        "SUNCITY",
      ],
      round_trip_price: 221200,
      one_way_price: 201200,
    },
    {
      route_number: 3,
      areas_covered: ["NAF VALLEY", "KPADUMA 1"],
      round_trip_price: 173800,
      one_way_price: 153800,
    },
    {
      route_number: 4,
      areas_covered: ["GWARIMPA", "CITEC/JABI", "LIFECAMP"],
      round_trip_price: 237000,
      one_way_price: 217000,
    },
    {
      route_number: 5,
      areas_covered: ["GADUWA", "GUDU", "KABUSA"],
      round_trip_price: 189600,
      one_way_price: 169600,
    },
    {
      route_number: 6,
      areas_covered: ["APO ZONE E", "APO RESETTLEMENT", "APO NEPA"],
      round_trip_price: 205400,
      one_way_price: 185400,
    },
    {
      route_number: 7,
      areas_covered: ["SUNNY VILLE"],
      round_trip_price: 237000,
      one_way_price: 217000,
    },
    {
      route_number: 8,
      areas_covered: ["LOKOGOMA"],
      round_trip_price: 237000,
      one_way_price: 217000,
    },
    {
      route_number: 9,
      areas_covered: ["GUZAPE"],
      round_trip_price: 158000,
      one_way_price: 138000,
    },
    {
      route_number: 10,
      areas_covered: ["MAMBILLA BARRACKS"],
      round_trip_price: 173800,
      one_way_price: 153800,
    },
  ], // Your bus routes data
  discount: {
    "2_children": {
      round_trip_discount: 50000,
      one_way_discount: 30000,
    },
    "3_children": {
      round_trip_discount: 80000,
      one_way_discount: 50000,
    },
    "4_children": {
      round_trip_discount: 120000,
      one_way_discount: 80000,
    },
    "5_children": {
      round_trip_discount: 150000,
      one_way_discount: 150000,
    },
  }, // Your discount data
} as BusServicesData;

export default busServicesData;
export type { BusRoute };