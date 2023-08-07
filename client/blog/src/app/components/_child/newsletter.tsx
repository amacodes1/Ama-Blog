export default function Newsletter() {
  return (
    <section className=" mb-10">
        <div className="container mx-auto md:px-8 py-16 text-center grid justify-items-start">
            <h1 className="font-bold text-2xl text-white font-kanit">Newsletter</h1>
            <p className="text-l text-white">Subscribe to get our latest updates </p>
            <div className="py-4">
                <input type="text" className="shadow border rounded w-72 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Enter your Email..." />
            </div>
            <button className="bg-orange-400 px-10 py-3 rounded text-gray-50 text-l">Subscribe</button>
        </div>
    </section>
  )
}