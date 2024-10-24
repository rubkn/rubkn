import Footer from "@/components/footer";
import Hello from "@/components/hello";
import FeaturedWork from "@/components/work";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full justify-between">
      <main className="max-w-prose mx-auto p-6 w-full text-base leading-relaxed shadow-2xl">
        <Hello />
        <FeaturedWork />
      </main>
      <Footer />
    </div>
  );
}
