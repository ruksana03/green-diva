import ContactBanner from "../Components/Contact/ContactBanner";
import OurPleace from "../Components/Contact/OurPleace";
import UserQna from "../Components/Contact/UserQna";


const Contact = () => {
    return (
        <div>
            <ContactBanner/>
            <UserQna></UserQna>
            <OurPleace></OurPleace>
        </div>
    );
};

export default Contact;