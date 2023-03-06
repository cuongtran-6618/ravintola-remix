import BookATable from "./BookATable";
export default function HeroSection() {
  return (
    <section id="hero-container-wrapper" className="">
      <div
        id="hero-container"
        className="min-h-[80vh] flex flex-col justify-center items-center"
      >
        <div className="hero-container-content text-white mx-auto flex flex-col justify-center items-center">
          <span className="text-xl mobile-block text-center">
            The wonderful flavors of Vietnam are only a table reservation away.
          </span>
          <BookATable />
        </div>
      </div>
    </section>
  );
}
