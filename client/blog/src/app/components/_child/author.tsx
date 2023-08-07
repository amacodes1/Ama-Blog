import Image from "next/image"
import Link from "next/link"

export default function Author() {
  return (
    <div className="author flex py-5">
        <Image src={"/images/english-pic.jpg"} width={40} height={50} className="rounded-full" alt=""></Image>
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"} className="text-md font-bold text-gray-800 hover:text-gray-600">Ama Codes</Link>
            <span className="text-sm text-gray-500">Content Writer</span>
        </div>
    </div>
  )
}
