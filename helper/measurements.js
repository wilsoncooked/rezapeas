const measurementType = [
  {
    key: "TSP",
    singular: "teaspoon",
    plural: "teaspoons"
  },
  {
    key: "TBSP",
    singular: "tablespoon",
    plural: "tablespoons"
  },
  {
    key: "G",
    singular: "gram",
    plural: "grams"
  },
  {
    key: "SPLASH",
    singular: "splash",
    plural: "splash's"
  },
  {
    key: "ML",
    singular: "millilitre",
    plural: "millilitres"
  },
  {
    key: "PINCH",
    singular: "pinch",
    plural: "pinches"
  },
  {
    key: "DOLLOP",
    singular: "dollop",
    plural: "dollops"
  },
  {
    key: "SLICE",
    singular: "slice",
    plural: "slices"
  },
  {
    key: "RACHER",
    singular: "racher",
    plural: "rachers"
  }
];

const fractions = [
  {
    decimal: 0.25,
    value: "1/4"
  },
  {
    decimal: 0.33,
    value: "1/3"
  },
  {
    decimal: 0.5,
    value: "1/2"
  },
  {
    decimal: 0.66,
    value: "2/3"
  },
  {
    decimal: 0.75,
    value: "3/4"
  },
  {
    decimal: 1.25,
    value: "1 1/4"
  },
  {
    decimal: 1.33,
    value: "1 1/3"
  },
  {
    decimal: 1.5,
    value: "1 1/2"
  },
  {
    decimal: 1.66,
    value: "1 2/3"
  },
  {
    decimal: 1.75,
    value: "1 3/4"
  },
  {
    decimal: 2.25,
    value: "2 1/4"
  },
  {
    decimal: 2.33,
    value: "2 1/3"
  },
  {
    decimal: 2.5,
    value: "2 1/2"
  },
  {
    decimal: 2.66,
    value: "2 2/3"
  },
  {
    decimal: 2.75,
    value: "2 3/4"
  },
  {
    decimal: 3.25,
    value: "3 1/4"
  },
  {
    decimal: 3.33,
    value: "3 1/3"
  },
  {
    decimal: 3.5,
    value: "3 1/2"
  },
  {
    decimal: 3.66,
    value: "3 2/3"
  },
  {
    decimal: 3.75,
    value: "3 3/4"
  },
  {
    decimal: 4.25,
    value: "4 1/4"
  },
  {
    decimal: 4.33,
    value: "4 1/3"
  },
  {
    decimal: 4.5,
    value: "4 1/2"
  },
  {
    decimal: 4.66,
    value: "4 2/3"
  },
  {
    decimal: 4.75,
    value: "4 3/4"
  },
  {
    decimal: 5.25,
    value: "5 1/4"
  },
  {
    decimal: 5.33,
    value: "5 1/3"
  },
  {
    decimal: 5.5,
    value: "5 1/2"
  },
  {
    decimal: 5.66,
    value: "5 2/3"
  },
  {
    decimal: 5.75,
    value: "5 3/4"
  }
];

export const getMeasurement = (unit, amount) => {
  const name = measurementType.map(measurement =>
    measurement.key === unit ? (amount > 1 ? measurement.plural : measurement.singular) : ""
  );
  return name.length > 1 ? name : unit.toLowerCase();
};

export const getQuantity = quantity => {
  return quantity % 1 > 0 ? fractions.map(fraction => (fraction.decimal === quantity ? fraction.value : "")) : quantity;
};
