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
          <button className="py-4 px-8 color-tumma-roosa bg-white max-w-[200px] my-8">
            Book a table
          </button>
        </div>
      </div>
    </section>
  );
}
