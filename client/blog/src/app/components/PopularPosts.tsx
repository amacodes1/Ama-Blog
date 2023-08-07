import Link from "next/link"
import Image from "next/image"

export default function PopularPosts() {
  return (
    <section className="container bg-gray-100 mx-auto my-8 md:px-20 py-10">
        <h1 className="font-bold font-luma text-4xl py-12 text-center">Popular Posts</h1>
        <div className="grid md:grid-cols-2 gap-y-6 md:gap-14">
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
            {ReturnPopularPosts()}
        </div>
    </section>
  )
}

export function ReturnPopularPosts() {
    return(
        <div className="flex flex-row p-4 text-xs">
            <div className="images py-6 md:py-4">
                <Link href={"/"}><Image src={"/images/jack.jpg"} width={150} height={50} className="rounded" alt="" /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4 ml-4">
                <div className="title">
                <Link href={"/"} className="text-l md:text-xl font-bold font-web text-gray-800 hover:text-gray-600"> Vote for your favourite artist for the Next Rated Award</Link>
                </div>
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Music, Entertainment</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">July 26, 2023</Link>
                </div>
            </div>
        </div>
    )
}