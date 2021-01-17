export default function MenuIcon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke={color ? color : "white"}>
      <path
        strokeLinecap="square"
        strokeLinejoin="square"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h7"
        color={color ? color : "white"}
      />
    </svg>
  );
}
