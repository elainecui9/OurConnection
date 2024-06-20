import Image from "next/image";
import PenPal from "./Assets/PenPals.png"

export default function Home() {
    return (
        <div className="bg-brown flex-col">
            <Image src={PenPal} width={200} height={200}></Image>
            <h1>Pen Pal Letters</h1>
        </div>
    )}