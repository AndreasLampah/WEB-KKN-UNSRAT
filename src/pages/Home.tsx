import NavbarTop from "../components/NavbarTop"
import Carousels from "../components/Carousels"
import AboutKkn from "../components/AboutKkn"
import Kegiatan from "../components/Kegiatan"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"


const Home = () => {
    return (
        <div>
        <NavbarTop />
        <Carousels />
        <div style={{marginTop:"70px"}}>
        <AboutKkn />
        </div>
        <div style={{marginTop:"50px"}}>
            <Kegiatan />
        </div>
       <div style={{paddingTop:"220px"}}>
        <ContactSection />
       </div>
       <Footer />
        </div>
        
    )
}

export default Home