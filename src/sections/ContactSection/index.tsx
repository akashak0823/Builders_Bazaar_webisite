import { ContactForm } from "./components/ContactForm";

export const ContactSection = () => {
    return (
        <section className="bg-white box-border caret-transparent px-[15px] py-[60px] md:px-0">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <ContactForm />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border border-zinc-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.756285668656!2d78.53065637502266!3d9.35471199071985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01a707c7070707%3A0x7070707070707070!2sSayalkudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701614000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "400px" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sayalkudi Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
