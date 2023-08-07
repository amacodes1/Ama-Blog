import Link from "next/link"
import Image from "next/image"

export default function RelatedPosts() {
  return (
    <section className="pt-20">
        <h1 className="font-bold text-3xl py-10">Related Posts</h1>
        <div className="flex flex-col gap-10">
            { returnRelatedPosts() }
            { returnRelatedPosts() }
            { returnRelatedPosts() }
            { returnRelatedPosts() }
        </div>
    </section>
  )
}

export function returnRelatedPosts() {
  return (
    <div className="flex gap-5">
        <div className="image flex flex-col justify-start py-4">
            <Link href={"/"}><Image src={"/images/jack.jpg"} width={150} height={50} className="rounded" alt="" /></Link>
        </div>
        <div className="info flex justify-center flex-col py-4 ml-4">
            <div className="title">
                <Link href={"/"} className="text-l md:text-xl font-bold text-gray-800 hover:text-gray-600"> Vote for your favourite artist for the Next Rated Award</Link>
            </div>
            <div className="cat">
                <Link href={"/"} className="text-orange-600 hover:text-orange-800">Music, Entertainment</Link>
                <Link href={"/"} className="text-gray-800 hover:text-gray-600">July 26, 2023</Link>
            </div>
        </div>
    </div>
  )
}
