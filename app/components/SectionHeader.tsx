export default function SectionHeader({
  title,
  styleClass = "text-center font-bold text-2xl mx-auto my-32",
}) {
  return <h1 className={styleClass}>{title}</h1>;
}
