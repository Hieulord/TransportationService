import React, { useState } from "react";
import { Button,
  Row,
  Col,
  Carousel,
  Alert,
  Card,
  Container, } from "react-bootstrap";
import { FaCheck, FaShippingFast, FaUserShield, FaStar } from "react-icons/fa";
import imgurl from "../images/sea2.jpeg";
import Av from "../Avatar/avatar-1.jpg";
import Avt from "../Avatar/avatar-11.jpg";


const cardStyle = {
  border: "none",
  padding: "2px",
};

const imgStyle = {
  width: "80%", // Adjust the width as needed
  height: "auto",
  transition: "transform 0.3s ease-in-out",
};

const imgHoverStyle = {
  transform: "scale(1.05)",
};



const Body: React.FC = () => {
  const [provinceGo, setProvinceGo] = useState<string>("");
  const [districtGo, setDistrictGo] = useState<string>("");
  const [provinceArrive, setProvinceArrive] = useState<string>("");
  const [districtArrive, setDistrictArrive] = useState<string>("");
  const [productWeight, setProductWeight] = useState<number>(0);
  const [priceDeclaration, setPriceDeclaration] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const calculateEstimate = (): number => {
    // Kiểm tra dữ liệu đầu vào
    if (
      !provinceGo ||
      !districtGo ||
      !provinceArrive ||
      !districtArrive ||
      productWeight <= 0
    ) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin");
      return 0;
    }

    // Giá cơ bản mỗi gram và tỉ lệ phí khai báo
    const baseRatePerGram = 3000; // Giá cơ bản mỗi gram
    const declarationRate = 0.01; // Tỉ lệ phí khai báo

    // Tính toán chi phí dựa trên trọng lượng sản phẩm và giá trị khai báo
    const weightCost = productWeight * baseRatePerGram; // Chi phí dựa trên trọng lượng

    let declarationCost = 0;
    if (priceDeclaration > 0) {
      // Nếu có giá trị khai báo, tính thêm chi phí dựa trên giá trị này
      declarationCost = priceDeclaration * declarationRate; // Chi phí dựa trên giá trị khai báo
    }

    // Tổng chi phí bằng tổng chi phí vận chuyển và phí khai báo
    const totalCost = weightCost + declarationCost;

    // Trả về tổng chi phí ước tính với hai số sau dấu phẩy bị loại bỏ
    return Math.floor(totalCost / 100) * 100;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const estimate = calculateEstimate();
    if (estimate === 0) {
      // Hiển thị thông báo lỗi nếu dữ liệu không hợp lệ
      setErrorMessage("Vui lòng kiểm tra lại thông tin");
    } else {
      // Nếu dữ liệu hợp lệ, hiển thị kết quả
      setResult(`Ước tính chi phí của bạn là: ${estimate.toLocaleString()} VND`);
      // Xóa thông báo lỗi nếu có
      setErrorMessage(null);
    }
  };

  return (
    <>
      <section
        className="position-relative overflow-hidden py-4"
        style={{
          backgroundImage: `url(${imgurl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          imageRendering: "pixelated",
        }}
      >
        <div className="container py-5 mt-5">
          <div className="row align-items-center py-5 mt-5">
            <div className="col-md-6 mb-5 mb-md-0">
              <h6 className="text-white">
                GIẢI PHÁP CHẤT LƯỢNG GIẢI PHÁP VẬN CHUYỂN CHẤT LƯỢNG
              </h6>
              <h4 className="text-white fw-bold display-2">
                Dịch vụ chuyên nghiệp linh hoạt phù hợp với nhu cầu của bạn.
              </h4>
              <p className="text-white">
                Một cách tiếp cận lạc quan và hiệu quả để đảm bảo hiệu quả cao
                nhất vận chuyển có chất lượng. Với đội ngũ chuyên gia vận tải,
                chúng tôi cam kết cung cấp dịch vụ vận tải đáng tin cậy, từ
                sagittis pulvinar đến dis venenatis. Chúng tôi ủng hộ Nunc vitae
                aliquam vestibulum, mang lại sự đẳng cấp và an toàn kinh nghiệm
                vận chuyển, không chỉ là một dịch vụ mà còn là một nơi đáng tin
                cậy đối tác cho tất cả các nhu cầu của bạn.
              </p>
              <ul className="list-unstyled">
                <li className="text-white fw-bold">
                  <FaUserShield className="me-2" />
                  Được cấp phép và bảo hiểm đầy đủ để bạn yên tâm về mặt pháp
                  lý.
                </li>
                <li className="text-white fw-bold">
                  <FaCheck className="me-2" />
                  Một công ty đáng tin cậy và minh bạch 100% mà bạn có thể tin
                  cậy.
                </li>
                <li className="text-white fw-bold">
                  <FaShippingFast className="me-2" />
                  Chính hãng, minh bạch và đáng tin cậy.
                </li>
              </ul>
            </div>
            <div
              className="col-md-5 offset-md-1 text-bg-secondary text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "20px",
                fontWeight: "600",
                backdropFilter: "blur(5px)",
              }}
            >
              <form className="hero-form p-5" onSubmit={handleFormSubmit}>
                <h3>Ước tính phí tự động</h3>
                <div className="mb-4">
                  <label htmlFor="provinceGo" className="form-label mb-0">
                    Dịch vụ *
                  </label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="provinceGo"
                    value={provinceGo}
                    onChange={(e) => setProvinceGo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="districtGo" className="form-label mb-0">
                    Gửi từ *
                  </label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="districtGo"
                    value={districtGo}
                    onChange={(e) => setDistrictGo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="provinceArrive" className="form-label mb-0">
                    Quận / Huyện gửi *
                  </label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="provinceArrive"
                    value={provinceArrive}
                    onChange={(e) => setProvinceArrive(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="districtArrive" className="form-label mb-0">
                    Gửi đến *
                  </label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="districtArrive"
                    value={districtArrive}
                    onChange={(e) => setDistrictArrive(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productWeight" className="form-label mb-0">
                    Trọng lượng (Gram) *
                  </label>
                  <input
                    type="number"
                    className="form-control border-0"
                    id="productWeight"
                    value={productWeight}
                    onChange={(e) => setProductWeight(parseInt(e.target.value))}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="priceDeclaration" className="form-label mb-0">
                    Số tiền thu hộ
                  </label>
                  <input
                    type="number"
                    className="form-control border-0"
                    id="priceDeclaration"
                    value={priceDeclaration}
                    onChange={(e) =>
                      setPriceDeclaration(parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="d-grid">
                  <Button type="submit" variant="primary" size="lg">
                    <FaCheck className="me-2" />
                    Ước Tính Tự Động
                  </Button>
                </div>
                 {/* Hiển thị kết quả */}
                 {result && <p className="mt-3">{result}</p>}
                {/* Hiển thị cảnh báo lỗi */}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#0b3d66",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div className="container">
          <Row className="align-items-center">
            <Col
              md={3}
              className="text-white d-flex flex-column align-items-center justify-content-center"
            >
              <h3>
                Mạng lưới bưu cục <br />
                trên 63 tỉnh thành
              </h3>
              <div className="d-flex justify-content-center">
                {" "}
                <a
                  style={{ marginTop: "15px" }}
                  href="https://apps.apple.com/us/app/viettelpost-chuy%E1%BB%83n-ph%C3%A1t-nhanh/id1398283517"
                  className="me-3"
                >
                  <img
                    src="https://viettelpost.com.vn/wp-content/themes/viettel/assets/images/app.png"
                    alt="Download on the App Store"
                    className="app-icon"
                  />
                </a>
                <a
                  style={{ marginTop: "5px" }}
                  href="https://play.google.com/store/apps/details?id=com.viettel.ViettelPost"
                >
                  <img
                    src="https://viettelpost.com.vn/wp-content/themes/viettel/assets/images/gg.png"
                    alt="Get it on Google Play"
                    className="app-icon"
                  />
                </a>
              </div>
            </Col>

            <Col md={4} className="text-white">
              <ul className="list-unstyled d-flex align-items-center">
                <li>
                  <FaUserShield className="fa-user fs-1 me-3" />
                </li>
                <li>
                  <h3>990.870+</h3>
                  <p className="mb-0">KHÁCH HÀNG TIN DÙNG</p>
                </li>
              </ul>
            </Col>

            <Col md={5} className="text-white">
              <ul className="list-unstyled d-flex align-items-center">
                <li>
                  <FaShippingFast className="fs-1 me-3" />
                </li>
                <li>
                  <h3>483.870+</h3>
                  <p className="mb-0">ĐƠN HÀNG ĐANG VẬN CHUYỂN</p>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>

      <section
        style={{ height: "250px", backgroundColor: "#E5E5E5" }}
        className="text-center  "
      >
        <div className="p-5">
          <div className=" ">
            <FaStar /> Đánh giá
          </div>
          <h2>
            <span className="-content">Khách hàng nhận xét</span>
          </h2>
        </div>
      </section>
      <Carousel>
        <Carousel.Item>
          <section
            style={{ height: "250px", backgroundColor: "#E5E5E5" }}
            className="justify-content-center align-items-center"
          >
            <div
              className="container-fluid d-flex justify-content-center align-items-center text-center"
              style={{ height: "200px" }}
            >
              <div className="row row-cols-1">
                <div className="col">
                  <img
                    src={Av}
                    className="rounded-circle me-2 mt-5"
                    height="90px"
                    width="90px"
                    alt="Avatar"
                  />
                </div>
                <div className="col">
                  <h2>Jkeyan Uni</h2>
                </div>
                <div className="col">
                  <p>
                    Là bên vận chuyển mình sử dụng lâu nhất từ 2015, khoảng thời
                    gian&nbsp;Transland&nbsp;còn mới giá còn rẻ&nbsp;
                    <br /> và chưa vận chuyển được cả nước, ưu điểm của
                    Transland tại thời điểm hiện tại là giao rất nhanh, cập nhật
                    đơn hàng nhanh, nhân viên lấy hàng và giao hàng rất tuyệt
                    vời.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item
          style={{ height: "250px", backgroundColor: "#E5E5E5" }}
          className="justify-content-center align-items-center"
        >
          <div
            className="container-fluid d-flex justify-content-center align-items-center text-center"
            style={{ height: "200px" }}
          >
            <div className="row row-cols-1">
              <div className="col">
                <img
                  src={Avt}
                  alt="Avatar"
                  className="rounded-circle me-2 mt-5"
                  height="90px"
                  width="90px"
                />
              </div>
              <div className="col">
                <h2>Kaition</h2>
              </div>
              <div className="col">
                <p>
                  Một trong những nét độc đáo riêng biệt mà chưa đơn vị nào thực
                  hiện. Transland có hệ thống website, <br />
                  dịch vụ chăm sóc khách hàng tốt, chấp nhận bồi thường trong
                  trường hợp hàng hóa bị hư hỏng. Là đơn vị uy tín tôi tin dùng
                  nhiều năm.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row
          className="justify-content-center"
          style={{
            padding: "9px",
          }}
        >
          <h4 className=" text-center text-primary">ĐỐI TÁC</h4>
          <Col md={1} lg={2}>
            <Card style={cardStyle}>
              <Card.Body className="p-0">
                <Card.Img
                  src="https://demo031018.web30s.vn/datafiles/31255/upload/images/banner/interart.png?t=1608523041"
                  alt="Interart"
                  style={imgStyle}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} lg={2}>
            <Card style={cardStyle}>
              <Card.Body className="p-0">
                <Card.Img
                  src="https://demo031018.web30s.vn/datafiles/31255/upload/images/banner/misontrans.png?t=1608520907"
                  alt="Misontrans"
                  style={imgStyle}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} lg={2}>
            <Card style={cardStyle}>
              <Card.Body className="p-0">
                <Card.Img
                  src="https://demo031018.web30s.vn/datafiles/31255/upload/images/banner/angimex.png?t=1608522226"
                  alt="Angimex"
                  style={imgStyle}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} lg={2}>
            <Card style={cardStyle}>
              <Card.Body className="p-0">
                <Card.Img
                  src="https://demo031018.web30s.vn/datafiles/31255/upload/images/banner/misontrans.png?t=1608520907"
                  alt="Misontrans"
                  style={imgStyle}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} lg={2}>
            <Card style={cardStyle}>
              <Card.Body className="p-0">
                <Card.Img
                  src="https://demo031018.web30s.vn/datafiles/31255/upload/images/banner/royaltrans.png?t=1608521400"
                  alt="Royaltrans"
                  style={imgStyle}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} lg={2}>
            <Card style={cardStyle}>
              <Card.Body className="p-0">
                <Card.Img
                  src="https://demo031018.web30s.vn/datafiles/31255/upload/images/banner/misontrans.png?t=1608520907"
                  alt="Misontrans"
                  style={imgStyle}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Body;
