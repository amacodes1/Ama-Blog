// import Author from "@/app/components/_child/author";
import Image from "next/image";
import RelatedPosts from "../components/_child/relatedPosts";

export default function SinglePost() {
  return (
    <section className="container mx-16 py-16 w-3/5">
        <div className="flex justify-center">
            {/* <Author></Author> */}
        </div>
        <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-5">Vote for your favourite artist for the Next Rated Award</h1>
            <p className="text-gray-500 text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut ipsa eligendi ab magni doloremque soluta consequuntur aliquid dolore commodi blanditiis eos id nemo vitae porro, consectetur facere veritatis est</p>
            <div className="py-10">
                <Image src={"/images/jack.jpg"} width={900} height={600} alt=""></Image>
            </div>
            <div className="content text-gray-600 text-lg flex flex-col gap-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut ipsa eligendi ab magni doloremque soluta consequuntur aliquid dolore commodi blanditiis eos id nemo vitae porro, consectetur facere veritatis est</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut ipsa eligendi ab magni doloremque soluta consequuntur aliquid dolore commodi blanditiis eos id nemo vitae porro, consectetur facere veritatis est</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut ipsa eligendi ab magni doloremque soluta consequuntur aliquid dolore commodi blanditiis eos id nemo vitae porro, consectetur facere veritatis est</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut ipsa eligendi ab magni doloremque soluta consequuntur aliquid dolore commodi blanditiis eos id nemo vitae porro, consectetur facere veritatis est</p>
            </div>
        </div>
        <RelatedPosts />
    </section>
  )
}
