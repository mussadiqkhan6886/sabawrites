import {Playfair_Display, Dancing_Script, Quicksand, Ballet, Rouge_Script, Corinthia, WindSong} from "next/font/google";

export const playfair = Playfair_Display({
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
    subsets: ["latin"]
})

export const dancing = WindSong({
    weight: ["400"],
    subsets: ["latin"],
    style: "normal",
})

export const quicksand = Quicksand({
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"]
})