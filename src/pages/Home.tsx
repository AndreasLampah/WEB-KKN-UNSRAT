import Navbar from "../components/Navbar"
import Carousels from "../components/Carousels"
import AboutKkn from "../components/AboutKkn"
import Kegiatan from "../components/Kegiatan"
import ContactSection from "../components/ContactSection"



const Home = () => {
    return (
        <div>
        <Navbar />
        <Carousels />
        <AboutKkn />
        <Kegiatan />
        <ContactSection />
        </div>
        
    )
}

export default Home