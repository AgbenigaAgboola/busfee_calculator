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
      areas_covered: ["GWARIMPA", "CITEC/JABI", "LIFECAMP"],
      round_trip_price: 462150,
      one_way_price: 432150
    },
    {
      route_number: 2,
      areas_covered: ["LOKOGOMA", "SUNNY VILLE"],
      round_trip_price: 462150,
      one_way_price: 432150
    },
    {
      route_number: 3,
      areas_covered: ["GAMES VILLAGE", "WONDERLAND", "SUNCITY", "GALADIMAWA"],
      round_trip_price: 431340,
      one_way_price: 401340
    },
    {
      route_number: 4,
      areas_covered: ["APO ZONE E", "APO RESETTLEMENT", "APO NEPA"],
      round_trip_price: 400530,
      one_way_price: 370530
    },
    {
      route_number: 5,
      areas_covered: ["WUYE", "ZONE E"],
      round_trip_price: 400530,
      one_way_price: 370530
    },
    {
      route_number: 6,
      areas_covered: ["GADUWA", "PRINCE & PRINCESS"],
      round_trip_price: 369720,
      one_way_price: 339720
    },
    {
      route_number: 7,
      areas_covered: ["MAITAMA", "WUSE 2", "BERGER", "GARKI", "CBN", "AREA 1", "ASO VILLA"],
      round_trip_price: 369720,
      one_way_price: 339720
    },
    {
      route_number: 8,
      areas_covered: ["NAF VALLEY", "MAMBILLA BARRACKS", "ASOKORO 2"],
      round_trip_price: 338910,
      one_way_price: 308910
    },
    {
      route_number: 9,
      areas_covered: ["ASOKORO 1", "GUZAPE"],
      round_trip_price: 308100,
      one_way_price: 278100
    },
    {
      route_number: 10,
      areas_covered: ["School Environs", "T.Y Danjuma", "Linda Chalker", "IOM", "KPADUMA 1"],
      round_trip_price: 277290,
      one_way_price: 247290
    }
  ],

  discount: {
    "2_children": {
      round_trip_discount: 70000,
      one_way_discount: 50000,
    },
    "3_children": {
      round_trip_discount: 100000,
      one_way_discount: 70000,
    },
    "4_children": {
      round_trip_discount: 140000,
      one_way_discount: 100000,
    },
    "5_children": {
      round_trip_discount: 170000,
      one_way_discount: 140000,
    },
  }
};

export default busServicesData;
export type { BusRoute };
