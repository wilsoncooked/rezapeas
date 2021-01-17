export const Badge = ({ text }) => {
  const colours = [
    {
      label: "DIET",
      background: "bg-green-300",
      text: "bg-green-600"
    },
    {
      label: "MEALTIME",
      background: "bg-peach",
      text: "text-red-600"
    },
    {
      label: "CUISINE",
      background: "bg-blue-300",
      text: "bg-blue-600"
    },
    {
      label: "CATAGORY",
      background: "bg-yellow-300",
      text: "bg-yellow-600"
    },
    {
      label: "CATAGORY",
      background: "bg-purple-300",
      text: "bg-purple-600"
    }
  ];
  return <p className={`m-0.5 text-sm px-0.5 font-medium bg-peach text-red-600 rounded-sm`}>{text}</p>;
};

export default Badge;
