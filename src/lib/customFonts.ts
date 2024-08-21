import localFont from "next/font/local";

const catherova = localFont({
  src: [{ path: "../../fonts/Catherova.ttf" }],
  variable: "--font-catherova",
});
// const recia = localFont({
//   src: [{ path: "../../fonts/recia.ttf" }],
//   variable: "--font-recia",
// });

export { catherova };
