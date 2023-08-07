import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function Posts() {

  return (
    <section className="container mt-6 mx-auto md:px-20 py-10">
        <h2 className="font-bold font-luma text-2xl sm:text-3xl md:text-4xl py-12 justify-start">Latest Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {ReturnPosts()}
            {ReturnPosts()}
            {ReturnPosts()}
            {ReturnPosts()}
            {ReturnPosts()}
            {ReturnPosts()}
            {ReturnPosts()}
            {ReturnPosts()}
            {ReturnPosts()}
        </div>
    </section>
  )
}

export function ReturnPosts() {
    return(
        <div className="item shadow-lg shadow-gray-200 hover:shadow-gray-400 box-content">
            <div className="images">
                <Link href={"../singlePost"}><Image src={"/images/jack.jpg"} width={500} height={350} className="rounded" alt="" /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4 p-4">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Music, Entertainment</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">July 26, 2023</Link>
                </div>
                <div className="title">
                <Link href={"../singlePost"} className="text-xl font-bold font-web text-gray-800 hover:text-gray-600"> Vote for your favourite artist for the Next Rated Award</Link>
                </div>
                <p className="text-gray-700 py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut ipsa eligendi ab magni doloremque soluta consequuntur aliquid dolore commodi blanditiis eos id nemo vitae porro, consectetur facere veritatis est....
                </p>
                <Author/>
            </div>
        </div>
    )
}
