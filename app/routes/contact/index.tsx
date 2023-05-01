import SectionHeader from "~/components/SectionHeader";
import ContactForm from "~/components/ContactForm";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { sendMail } from "~/services/mailservice.server";

interface FormValues {
  name: FormDataEntryValue;
  email: FormDataEntryValue;
  phone: FormDataEntryValue;
  message: FormDataEntryValue;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const values = Object.fromEntries(formData);
  const data: FormValues = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    message: values.message,
  };

  let result = await sendMail(data);

  return json({ result }, { status: result.error ? 500 : 200 });
};

export default function ContactRouter() {
  return (
    <section className="container text-center mx-auto">
      <SectionHeader title="Contact" />
      <div className="max-w-screen-sm mx-auto text-left">
        <ContactForm />
      </div>
    </section>
  );
}
