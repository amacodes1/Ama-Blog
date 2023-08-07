import Posts from "./components/Posts";
// import Header from "./components/Header";
import Section1, { Slide } from "./components/Section1";
import PopularPosts from "./components/PopularPosts";

export default function Home() {
  return (
    <div className="bg-white">
      {/* <Header /> */}
    <main className=" min-h-screen flex-col px-6 mx-auto">
      <Section1 />
      <Slide />
      <Posts />
      <PopularPosts />
    </main>
    </div>
  )
}
