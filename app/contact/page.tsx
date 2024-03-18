import IFrameMaps from "@/components/About/iFrameMaps";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

function Contact() {
  return (
    <section className="pt-[10rem] -z-50">
      <div className="container">
        <h1 className="font-ExtraBold text-center text-4xl text-dark_blue_black mb-12 tracking-wider">
          Contact Us
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:w-2/3">
            <ContactForm />
          </div>
          <div className="w-full sm:w-1/3">
            <ContactInfo />
          </div>
        </div>
      </div>

      <div className="h-[550px] mt-10 rounded-md overflow-hidden">
        <IFrameMaps />
      </div>
    </section>
  );
}

export default Contact;
