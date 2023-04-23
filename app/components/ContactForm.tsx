import { Form, useActionData } from "@remix-run/react";

export default function ContactForm() {
  const actionData = useActionData();
  console.log(actionData);

  return (
    <Form method="post" reloadDocument>
      {actionData?.error ? <p>{actionData.error}</p> : null}
      <div className="name flex flex-col justify-between mb-8">
        <div className="mb-4 flex flex-col">
          <label htmlFor="frm-first" className="mb-4">
            Your Name<span className="text-red-600">*</span>
          </label>
          <input
            id="frm-first"
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            autoComplete="given-name"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="email flex flex-col mb-8">
          <label htmlFor="frm-email" className="mb-4">
            Your Email<span className="text-red-600">*</span>
          </label>
          <input
            id="frm-email"
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            autoComplete="email"
            placeholder="Please enter a valid email address"
            required
          />
        </div>
        <div className="phone flex flex-col mb-8">
          <label htmlFor="frm-phone" className="mb-4">
            Phone<span className="text-red-600">*</span>
          </label>
          <input
            id="frm-phone"
            type="text"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            autoComplete="tel"
            placeholder="Please enter a valid phone number"
            required
          />
        </div>
      </div>
      <div className="message flex flex-col mb-8">
        <label htmlFor="frm-message" className="mb-4">
          Message
        </label>
        <textarea
          id="frm-message"
          name="message"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows={6}
          placeholder="What are you looking for?"
        ></textarea>
      </div>

      <div className="mb-8">
        A <span className="text-red-600">*</span>
        <span> is a required field.</span>
      </div>
      <div className="button primary flex flex-col justify-start">
        <button
          className="mx-auto py-8 px-16 btn-primary-color uppercase font-bold hover:text-white hover:bg-[#ff7700]"
          type="submit"
        >
          Submit
        </button>
      </div>
    </Form>
  );
}
