import React, { useState, useEffect } from "react";
import { Button, Row, Col, Carousel, Container, Image } from "react-bootstrap";
import { FaCheck, FaShippingFast, FaUserShield, FaStar } from "react-icons/fa";
import imgurl from "../images/b1.jpg";
import imgurlt from "../images/2.jpg";
import { ButtonBase } from "@mui/material";

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
                SOLUTION FOR QUALITY TRANSPORTATION
              </h6>
              <h4 className="text-white fw-bold display-2">
                Flexible professional services tailored to your needs.
              </h4>
              <p className="text-white">
                An optimistic and effective approach to ensuring the highest
                quality transportation. With a team of transportation experts,
                we commit to providing reliable transport services, from
                sagittis pulvinar to dis venenatis. We support Nunc vitae
                aliquam vestibulum, delivering an Elite and secure
                transportation experience, not just a service but a trustworthy
                partner for all your needs.
              </p>
              <ul className="list-unstyled">
                <li className="text-white fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_359)">
                      <path fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_359">
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Fully licensed and insured for legal peace of mind.
                </li>
                <li className="text-white fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_359)">
                      <path fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_359">
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  A 100% reliable and transparent company you can count on.
                </li>
                <li className="text-white fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_359)">
                      <path fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_359">
                        <rect width={23} height={23} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Genuine, transparent, and trustworthy.
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
          // backgroundColor: "#40e0d0",
          backgroundImage: `url(${imgurl})`,
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
                  <div
                    className="-widget -widget-form-control -required -widget-4128292 -widget-unique-3785602"
                    data-id="4128292"
                  >
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

      <section id="delivery-section" style={{ backgroundColor: "#ffa500" }}>
        <div className="container ">
          <Row>
            <Col
              md={9}
              className="#ffa500"
              style={{ marginTop: "50px", paddingBottom: "50px" }}
            >
              <h3>
                Mạng lưới bưu cục trên <br />
                <span className="ms-5"> 63 tỉnh thành</span>
              </h3>
              <a href="https://apps.apple.com/us/app/viettelpost-chuy%E1%BB%83n-ph%C3%A1t-nhanh/id1398283517">
                <img
                  src="https://viettelpost.com.vn/wp-content/themes/viettel/assets/images/app.png"
                  alt="Download on the App Store"
                  className="app-icon"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.viettel.ViettelPost">
                <img
                  src="https://viettelpost.com.vn/wp-content/themes/viettel/assets/images/gg.png"
                  alt="Get it on Google Play"
                  className="app-icon"
                />
              </a>
            </Col>
            <Col md={3} className=" align-items">
              <ul className="p-4 rounded ">
                <h3 className="">
                  <FaUserShield className="fa-user fs-1" />
                  <span className="ms-3">990</span>.<span>870</span>
                  <span>+</span>
                </h3>
                <p>KHÁCH HÀNG TIN DÙNG</p>
              </ul>

              <ul className="p-4 rounded">
                <h3 className="">
                  <FaShippingFast className="fs-1" />
                  <span className="ms-3">483</span>.<span>870</span>
                  <span>+</span>
                </h3>
                <p>ĐƠN HÀNG ĐANG VẬN CHUYỂN</p>
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
                    src={imgurl}
                    alt="logo"
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
                    src={imgurl}
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
                        <a style={{ backgroundColor: "#40e0d0" }}>
                          <Image src="./images/2.jpg" alt="Vận chuyển nhà" />
                        </a>

                        <div>
                          <h3
                            className="-widget -widget-title -widget-10423024 -widget-unique-1001696833752669"
                            data-widget-id="10423024"
                            data-widget-unique="1001696833752669"
                          >
                            <a
                             style={{backgroundImage: `url(${imgurl})`}}
                            >
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
