import SpaceBlock from "./SpaceBlock";
import BookATable from "./BookATable";
export default function Footer() {
  const footerHeader = "font-bold my-4";
  return (
    <footer className="bg-color-rossa pb-16">
      <SpaceBlock />
      <div className="footer-container-wrapper grid grid-cols-1 lg:grid-cols-2 mobile-block color-hiekka">
        <div className="mx-auto text-center">
          <p className={footerHeader}>Lounas Lounas</p>
          <p>tarjoillaan arkisin klo 10:30 – 14 välisenä aikana.</p>
          <p className={footerHeader}>Illallinen</p>
          <div className="flex flex-col mb-4">
            <span>Ma – To 10:30 – 22:00</span>
            <span>Pe 10:30 – 24:00 </span>
            <span>La 12:00 – 24:00</span>
            <span>Su 12:00 – 22:00</span>
          </div>
          <p>Viimeiset tilaukset 1 tunti ennen sulkemisaikaa.</p>
        </div>
        <div className="text-center">
          <BookATable styleClass="py-4 px-8 color-tumma-roosa w-full lg:max-w-[200px] my-8 color-hiekka bg-color-rossa border-color-hiekka border-solid border" />
          <div className="flex flex-col">
            <span>Address 1</span>
            <span>02620 Espoo</span>
            <span>012345678</span>
            <span>hello@felia.fi</span>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
