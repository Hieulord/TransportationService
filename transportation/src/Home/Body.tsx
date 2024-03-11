import React, { useState, useEffect } from "react";
import { Button, Row, Col, Carousel, Container, Image } from "react-bootstrap";
import { FaCheck, FaShippingFast, FaUserShield, FaStar } from "react-icons/fa";
import imgurl from "../images/b1.jpg";
import imgurlt from "../images/2.jpg";
import imgur from "../images/logistics-banner.jpg";
import { ButtonBase } from "@mui/material";
import Av from "../Avatar/avatar-1.jpg";
import Avt from "../Avatar/avatar-11.jpg";

const Body: React.FC = () => {
  // State for captcha and form data
  const [captcha, setCaptcha] = useState<string>("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    content: "",
    captchaInput: "",
  });
  const handleClear = () => {
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      address: "",
      content: "",
      captchaInput: "",
    });
  };

  // State for automatic estimate
  const [activeIndex, setActiveIndex] = useState(0);
  const [provinceGo, setProvinceGo] = useState<string>("");
  const [districtGo, setDistrictGo] = useState<string>("");
  const [provinceArrive, setProvinceArrive] = useState<string>("");
  const [districtArrive, setDistrictArrive] = useState<string>("");
  const [productCode, setProductCode] = useState<string>("");
  const [priceDeclaration, setPriceDeclaration] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1000);

    generateCaptcha(); // Generate captcha when component mounts

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to generate captcha
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptcha(captcha);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.captchaInput === captcha) {
      console.log(formData);
    } else {
      alert("Mã captcha không chính xác");
      generateCaptcha();
    }
  };

  // Function to calculate estimate
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const estimate = calculateEstimate();
    setResult(`Ước tính chi phí của bạn là: ${estimate.toFixed(2)} VND`);
  };

  const calculateEstimate = (): number => {
    // Logic to calculate estimate goes here
    return Math.random() * 100000;
  };

  // Function to handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
                  <svg width={23} height={23} viewBox="0 0 23 23" fill="none">
                    <g clipPath="url(#clip0_1_359)">
                      <path fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_359">
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Được cấp phép và bảo hiểm đầy đủ để bạn yên tâm về mặt pháp
                  lý.
                </li>
                <li className="text-white fw-bold">
                  <svg width={23} height={23} viewBox="0 0 23 23" fill="none">
                    <g>
                      <path fill="white" />
                    </g>
                    <defs>
                      <clipPath>
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Một công ty đáng tin cậy và minh bạch 100% mà bạn có thể tin
                  cậy.
                </li>
                <li className="text-white fw-bold">
                  <svg width={23} height={23} viewBox="0 0 23 23" fill="none">
                    <path fill="white" />

                    <defs>
                      <clipPath id="clip0_1_359">
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Chính hãng, minh bạch và đáng tin cậy.
                </li>
              </ul>
            </div>
            <div
              className="col-md-5 offset-md-1"
              style={{ backgroundColor: "gray", borderRadius: "20px" }}
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
                    Quận / Huyện *
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
                  <label htmlFor="productCode" className="form-label mb-0">
                    Quận / Huyện *
                  </label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="productCode"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productCode" className="form-label mb-0">
                    Trọng lượng (Gram) *
                  </label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="productCode"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="priceDeclaration" className="form-label mb-0">
                    Số tiền thu hộ
                  </label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="priceDeclaration"
                    value={priceDeclaration}
                    onChange={(e) => setPriceDeclaration(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <Button type="submit" variant="primary" size="lg">
                    <FaCheck className="me-2" />
                    Ước Tính Tự Động
                  </Button>
                </div>
                {result && <p className="mt-3">{result}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          height: "380px",
          width: "auto",
          // backgroundColor: "#40e0d0",
          backgroundImage: `url(${imgur})`,
        }}
      >
        <div className="container text-white">
          <div className="row">
            <div className="col-md-6">
              <h1 className="mt-3">Yêu Cầu Một Cuộc Gọi Lại</h1>
              <div>
                <h6 className="mt-3">
                  Chỉ mất 30 giây và sau đó chúng tôi sẽ gọi cho bạn trở lại, từ
                  Thứ Hai đến Thứ Sáu, 8 giờ sáng - 5 giờ chiều. Dễ dàng.
                </h6>
                <h6>Hoặc liên hệ với chúng tôi</h6>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <form onSubmit={handleSubmit}>
                {/* Các trường input ở đây */}
                <div className="form-group">
                  <input
                    className="form-control"
                    value={formData.fullname}
                    name="fullname"
                    type="text"
                    placeholder="Họ và tên"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={formData.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={formData.phone}
                    name="phone"
                    type="tel"
                    placeholder="Số điện thoại"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={formData.address}
                    name="address"
                    type="text"
                    placeholder="Địa chỉ"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    value={formData.content}
                    name="content"
                    rows={3}
                    placeholder="Nội dung"
                    onChange={handleChange}
                  ></textarea>
                </div>
                {/* Các trường input khác ở đây */}
                <div>
                  <div>
                    <div className="input-group">
                      <input
                        value={formData.captchaInput}
                        name="captchaInput"
                        type="text"
                        className="form-control"
                        placeholder="Mã Capcha"
                        onChange={handleChange}
                      />
                      <span className="input-group-text">{captcha}</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Gửi tin nhắn
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClear}
                  >
                    Làm lại
                  </button>
                </div>
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
                    src={Avt}
                    alt="logo"
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
                    Một trong những nét độc đáo riêng biệt mà chưa đơn vị nào
                    thực hiện. Transland có hệ thống website, <br />
                    dịch vụ chăm sóc khách hàng tốt, chấp nhận bồi thường trong
                    trường hợp hàng hóa bị hư hỏng. Là đơn vị uy tín tôi tin
                    dùng nhiều năm.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>

      <section>
        <Container>
          <Row>
            <Col>
              <div>
                Dịch vụ
                <h2>Dịch vụ chính</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <div>
                  <div
                    style={{
                      transitionDuration: "0ms",
                      transform: "translate3d(-2033.33px, 0px, 0px)",
                      height: "459px",
                    }}
                  >
                    <div
                      className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                      data-swiper-slide-index="1"
                      style={{
                        width: "386.667px",
                        height: "458.984px",
                        marginRight: "20px",
                      }}
                    >
                      <div className="-widget-childs -widget-slider-item -hover">
                        <a>
                          <Image src="./images/2.jpg" alt="Vận chuyển nhà" />
                        </a>
                        <div>
                          <h3
                            className="-widget -widget-title -widget-10423024 -widget-unique-1001696833752669"
                            data-widget-id="10423024"
                            data-widget-unique="1001696833752669"
                          >
                            <a style={{ backgroundImage: `url(${imgurl})` }}>
                              Vận chuyển nhà
                            </a>
                          </h3>
                          <div
                            data-widget-unique="1001696834127605"
                            className="-widget -widget-text -widget-10423025 -widget-unique-1001696834127605 -widget-display-block"
                            data-content_type="900"
                          >
                            Bạn quá mệt mỏi trong việc di chuyển đồ đạc sang nhà
                            mới. Chúng tôi có cung cấp dịch vụ này.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Các swiper-slide khác */}
                  </div>
                  <div className="swiper-pagination d-none -none"></div>
                  <div
                    className="swiper-button-next swiper-button-white swiper-button-navi"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div
                    className="swiper-button-prev swiper-button-white swiper-button-navi"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <div>Tìm hiểu thêm về dịch vụ của chúng tôi</div>
                <Button>Xem thêm</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Body;
