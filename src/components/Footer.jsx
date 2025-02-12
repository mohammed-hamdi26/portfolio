import ContactInfo from "./ContactInfo";
import FooterHeader from "./FooterHeader";

function Footer() {
  return (
    <footer className="bg-[#272727] px-4 py-4 sm:px-16  sm:py-20 divide-y-4 text-[#FCFCFD] divide-[#475467] ">
      <FooterHeader />
      <ContactInfo />
    </footer>
  );
}

export default Footer;
