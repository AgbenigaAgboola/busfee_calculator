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
      "route_number": 1,
      "areas_covered": [
        "GWARIMPA",
        "CITEC/JABI",
        "LIFECAMP"
      ],
      "round_trip_price": 355500,
      "one_way_price": 325500
    },
    {
      "route_number": 2,
      "areas_covered": [
        "LOKOGOMA",
        "SUNNY VILLE"
      ],
      "round_trip_price": 355500,
      "one_way_price": 325500
    },
    {
      "route_number": 3,
      "areas_covered": [
        "GAMES VILLAGE",
        "WONDERLAND",
        "SUNCITY"
      ],
      "round_trip_price": 331800,
      "one_way_price": 301800
    },
    {
      "route_number": 4,
      "areas_covered": [
        "APO ZONE E",
        "APO RESETTLEMENT",
        "APO NEPA"
      ],
      "round_trip_price": 308100,
      "one_way_price": 278100
    },
    {
      "route_number": 5,
      "areas_covered": [
        "WUYE",
        "ZONE E"
      ],
      "round_trip_price": 308100,
      "one_way_price": 278100
    },
    {
      "route_number": 6,
      "areas_covered": [
        "GADUWA",
        "PRINCE & PRINCESS"
      ],
      "round_trip_price": 284400,
      "one_way_price": 254400
    },
    {
      "route_number": 7,
      "areas_covered": [
        "MAITAMA",
        "WUSE 2",
        "BERGER",
        "GARKI",
        "CBN",
        "AREA 1"
      ],
      "round_trip_price": 284400,
      "one_way_price": 254400
    },
    {
      "route_number": 8,
      "areas_covered": [
        "NAF VALLEY",
        "MAMBILLA BARRACKS"
      ],
      "round_trip_price": 260700,
      "one_way_price": 230700
    },
    {
      "route_number": 9,
      "areas_covered": [
        "ASOKORO 1",
        "GUZAPE"
      ],
      "round_trip_price": 237000,
      "one_way_price": 207000
    },
    {
      "route_number": 10,
      "areas_covered": [
        "School Environs",
        "T.Y Danjuma",
        "Linda Chalker",
        "IOM",
        "KPADUMA 1"
      ],
      "round_trip_price": 213300,
      "one_way_price": 183300
    }
  ], // Your bus routes data
  discount: {
    "2_children": {
      round_trip_discount: 60000,
      one_way_discount: 40000,
    },
    "3_children": {
      round_trip_discount: 90000,
      one_way_discount: 60000,
    },
    "4_children": {
      round_trip_discount: 130000,
      one_way_discount: 90000,
    },
    "5_children": {
      round_trip_discount: 160000,
      one_way_discount: 130000,
    },
  }, // Your discount data
} as BusServicesData;

export default busServicesData;
export type { BusRoute };
