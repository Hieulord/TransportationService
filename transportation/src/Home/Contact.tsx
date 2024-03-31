import React, { useState, useEffect } from "react";
import imgurl from "../images/banner-1.jpg";
// import imgur from "../images/logistics-banner.jpg";
import { FiRefreshCcw } from "react-icons/fi";

const Contact: React.FC = () => {
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

  // Function to handle clearing form data
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

  // Generate captcha when component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <>
      <div
        className="dark-overlay"
        style={{
          backgroundImage: `url(${imgurl})`,
          backgroundSize: "cover",
          height: "300px",
        }}
      />

      <section style={{ backgroundColor: "#E5E5E5" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col mt-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a style={{ textDecoration: "none" }} href="/">
                      Trang chủ
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Liên Hệ Chúng Tôi
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center" }}>
        <section style={{ maxWidth: "800px" }}>
          <section className="content">
            <div className="container mt-3 text-primary">
              <h1>Liên Hệ Với Chúng Tôi</h1>
            </div>
          </section>
        </section>
      </section>
      <section
        style={{
          height: "500px",
          width: "auto",
          // backgroundImage: `url(${imgur})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="mt-3">Yêu Cầu Một Cuộc Gọi Lại</h1>
              <div>
                <h6 className="mt-3">
                  *Chỉ mất 30 giây và sau đó chúng tôi sẽ gọi cho bạn trở lại
                  vào
                  <br />
                  Thứ Hai đến Thứ Sáu, 8 giờ sáng - 5 giờ chiều.
                </h6>
                <h6>*Hoặc liên hệ với chúng tôi:</h6>
                <p>
                  -Địa chỉ: **** ,Phường *, Quận *, Tp. Hồ Chí Minh, Việt Nam
                  <br />
                  -Email: JkeyanUniver-Kation204@gmail.com
                  <br />
                  -Điện thoại: +84x xxxx xxx xx
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control my-2"
                    value={formData.fullname}
                    name="fullname"
                    type="text"
                    placeholder="*Họ và tên"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control my-2"
                    value={formData.email}
                    name="email"
                    type="email"
                    placeholder="*Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control my-2"
                    value={formData.phone}
                    name="phone"
                    type="tel"
                    placeholder="*Số điện thoại"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control my-2"
                    value={formData.address}
                    name="address"
                    type="text"
                    placeholder="*Địa chỉ"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control my-2"
                    value={formData.content}
                    name="content"
                    rows={3}
                    placeholder="*Nội dung"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      value={formData.captchaInput}
                      name="captchaInput"
                      type="text"
                      className="form-control"
                      placeholder="*Mã Capcha"
                      onChange={handleChange}
                      required
                    />
                    <span className="input-group-text">{captcha}</span>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary my-2">
                    Gửi tin nhắn
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={handleClear}
                  >
                    <FiRefreshCcw /> Làm lại
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
