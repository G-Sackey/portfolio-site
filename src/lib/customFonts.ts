import localFont from "next/font/local";

const catherova = localFont({
  src: [{ path: "../../fonts/Catherova.ttf" }],
  variable: "--font-catherova",
});
const montserrat = localFont({
  src: [{ path: "../../fonts/Montserrat-Bold.ttf" }],
  variable: "--font-montserrat",
});
const poppins = localFont({
  src: [{ path: "../../fonts/Poppins-Bold.ttf" }],
  variable: "--font-poppins",
});
const lucid = localFont({
  src: [{ path: "../../fonts/LTYPEB.ttf" }],
  variable: "--font-poppins",
});
// const recia = localFont({
//   src: [{ path: "../../fonts/recia.ttf" }],
//   variable: "--font-recia",
// });

export { catherova, montserrat, poppins, lucid };
