import { Container, Row, Col, Card } from "react-bootstrap";
import FotoKkn from "../assets/foto-kkn.jpg"; 
import "../index.css"; // file CSS animasi

const aboutFeatures = [
  {
    title: "Tujuan KKN",
    description:
      "Memberikan pengalaman langsung kepada mahasiswa untuk mengabdi di masyarakat, sekaligus mengembangkan soft skill dan kepedulian sosial.",
    icon: "🎯",
  },
  {
    title: "Manfaat KKN",
    description:
      "Mahasiswa dapat belajar dari masyarakat, membantu pemecahan masalah lokal, serta memperluas wawasan dan pengalaman.",
    icon: "🌱",
  },
  {
    title: "Sejarah KKN",
    description:
      "KKN telah menjadi bagian integral dari kurikulum universitas, bertujuan mencetak lulusan yang peduli dan siap terjun ke masyarakat.",
    icon: "📜",
  },
];

const AboutKkn = () => {
  return (
    <section className="about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} className="fade-in-left">
            <img
              src={FotoKkn}
              alt="Tentang KKN"
              className="img-fluid rounded shadow about-image"
            />
          </Col>
          <Col md={6} className="fade-in-right">
            <h2 className="mb-3">Tentang KKN</h2>
            <p className="lead">
              Kuliah Kerja Nyata (KKN) adalah program pengabdian mahasiswa
              kepada masyarakat yang bertujuan mengembangkan keterampilan,
              pengalaman sosial, dan kepedulian terhadap lingkungan sekitar.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {aboutFeatures.map((feature, index) => (
            <Col md={4} key={index} className="fade-in-up">
              <Card className="h-100 text-center border-0 shadow-sm feature-card">
                <div className="display-4 mb-3">{feature.icon}</div>
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutKkn;
