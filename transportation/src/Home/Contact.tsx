import React, { useState, useEffect } from "react"
import imgur from "../images/logistics-banner.jpg";



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
  const [activeIndex, setActiveIndex] = useState(0);

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
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
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

  return (
    <>
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
    </>
  );
};

export default Contact;
