import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"

export default function Section1() {
  return (
    <section className="py-6">
        <div className="container mx-auto md:px-20">
            {/* <h1 className="font-bold font-luma text-2xl sm:text-3xl md:text-4xl pt-6 justify-start">Trending</h1> */}
        </div>
    </section>
  )
}

export function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"../singlePost"}><Image src={"/images/jack.jpg"} width={600} height={600} alt="" /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Music, Entertainment</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">July 26, 2023</Link>
                </div>
                <div className="title">
                <Link href={"../singlePost"} className="text-3xl md:text-4xl font-bold font-web text-gray-800 hover:text-gray-600"> Vote for your favourite artist for the Next Rated Award</Link>
                </div>
                <p className="text-gray-700 py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut ipsa eligendi ab magni doloremque soluta consequuntur aliquid dolore commodi blanditiis eos id nemo vitae porro, consectetur facere veritatis est.
                </p>
                <Author/>
            </div>
        </div>
    )
}
