import Hero from "@/components/Hero";
import News from "@/components/News";
import Officials from "@/components/Officials";
import Departments from "@/components/Departments";
import Schemes from "@/components/Schemes";
import Gallery from "@/components/Gallery";
import Helpline from "@/components/Helpline";
import ImportantLinks from "@/components/ImportantLinks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="w-screen px-4 py-8 space-y-12">
        {/* Full-width Officials + Departments */}
        <div className="my-8 md:my-12 px-4 sm:px-8 md:px-20">
          <Officials />
          <Departments />
        </div>

        {/* Gallery  */}

        <Gallery />

        {/* Side-by-side Schemes, Helpline, ImportantLinks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F6FAFD] my-8 md:my-12 px-4 sm:px-8 md:px-20">
          <div className="flex flex-col h-full p-4   transition transform hover:scale-105">
            <Schemes />
          </div>
          <div className="flex flex-col h-full e p-4   transition transform hover:scale-105">
            <Helpline />
          </div>
          <div className="flex flex-col h-full p-4  rounded transition transform hover:scale-105 ">
            <ImportantLinks />
          </div>
        </div>
      </div>
    </main>
  );
}
