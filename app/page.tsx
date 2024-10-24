import Footer from "@/components/footer";
import Hello from "@/components/hello";
import FeaturedWork from "@/components/work";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full justify-between">
      <main className="max-w-prose mx-auto p-6 w-full text-base leading-relaxed shadow-2xl">
        <p className="mb-12 text-pretty">
          hello, I&apos;m <strong>Ruben Brandão</strong>, a 28 y/o{" "}
          <strong>full-stack developer</strong> with a{" "}
          <strong>focus on front-end</strong> looking to build{" "}
          <strong>creative projects</strong> and collaborate with{" "}
          <strong>inspiring people</strong>. {"I'm"} passionate about{" "}
          <strong>technology</strong>, <strong>cinema</strong> and{" "}
          <strong>analog photography</strong>. Love <strong>car rides</strong>{" "}
          and <strong>exploring new places</strong>.
        </p>
        <FeaturedWork />
      </main>
      <Footer />
    </div>
  );
}
