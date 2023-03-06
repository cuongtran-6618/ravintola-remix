import SectionHeader from "./SectionHeader";
import meal from "../../public/images/meal.png";
export default function CheckoutMenu() {
  return (
    <section className="text-xl lg:text-2xl lg:leading-10">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="">
          <img src={meal} alt="Vietnamese dish" />
        </div>
        <div className="flex flex-col justify-center mobile-block">
          <div className="">
            To top off an exotic meal, we recommend enjoying different
            Vietnamese coffee drinks that can be served sweet, cold or hot!
          </div>
          <button className="lg:mx-auto bg-none border-solid border border-black my-8 py-4 px-8 lg:max-w-[400px] font-semibold">
            Check out the menu
          </button>
        </div>
      </div>
    </section>
  );
}
