import React from "react";
import logisticsBanner from "../New newspaper/banner-imgs/banner-1.jpg";
import VNTT from "../News/cangquoctelonganxuatkhauhang.jpg";
const LongAnexport = () => {
  return (
    <>
      <div
        className="dark-overlay"
        style={{
          backgroundImage: `url(${logisticsBanner})`,
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
                    <a style={{textDecoration:"none"}} href="/">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a style={{textDecoration:"none"}} href="/Newss">Tin Tức</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a style={{textDecoration:"none"}} >Tin Tức</a>
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
              <h1>Tin Tức</h1>
            </div>
          </section>
        </section>
      </section>

      <section className="container">
        <div className="mt-3 " style={{ textAlign: "center" }}>
          <h1>
            Xuất Khẩu Gần 50.000 Tấn Thép Đầu Tiên Sau Covid-19 Từ Cảng Quốc Tế
            Long An
          </h1>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ol className="breadcrumb text-danger">
            <li className=" breadcrumb-item">
              <a>17/03/2022 02:28:33</a>
            </li>
            <li className=" breadcrumb-item">
              <a>783 Lượt xem</a>
            </li>
          </ol>
        </div>
        <div>
          <p>
            Chiều ngày 28/6, sau thời gian trầm lắng vì đại dịch Covid-19,
            chuyến tàu quốc tế An Shun 5 đã cập cảng Quốc tế Long An để bắt đầu
            xếp dỡ, chuẩn bị cho chuyến hàng xuất khẩu gần 50.000 tấn tôn mạ và
            ống thép của Công ty cổ phần Thép TVP - trụ sở tại huyện Bến Lức,
            tỉnh Long An khởi hành đến Thái Lan.&nbsp;
          </p>
          <p>
            Đây là số thép nằm trong tổng số lượng 50.000 tấn mà Công ty TVP
            chọn Cảng quốc tế Long An để xuất khẩu.&nbsp;
          </p>
          <p>
            Điều này cho thấy, dấu hiệu hồi phục hoạt động kinh tế trở lại của
            các doanh nghiệp tại tỉnh Long An.
            <br />
            Bà Ninh Thị Bích Thùy, Tổng giám Đốc TVP cho biết, lựa chọn Cảng
            Quốc tế Long An đối với TVP là sự lựa chọn vừa thuận tiện (gần nhà
            máy), vừa mang lại lợi ích kinh tế to lớn. Bởi không phải vận chuyển
            nhiều lượt để đến những cảng xa hơn, doanh nghiệp tiết giảm được gần
            30% chi phí logistics vùng nội địa.
          </p>
          <div className="container" style={{ textAlign: "center" }}>
            <img
              className="container"
              src={VNTT}
              style={{ width: "900px", height: "500px", margin: "auto" }}
            />

            <p className="container col" style={{ margin: "auto" }}>
              Cảng quốc tế Long An được quản lý bởi công ty (Đồng Tâm Group)
            </p>
          </div>
          <p className="col mt-2">
            <p>
              Cảng quốc tế Long An là dự án do Tập đoàn Đồng Tâm (Đồng Tâm
              Group) làm chủ đầu tư, nằm trên luồng sông Soài Rạp mé phải thượng
              nguồn sông Đồng Nai, cách cửa biển 19 km, cách phao số 0 khoảng 40
              km. Cảng Quốc tế Long An là 1 dự án nằm trong quần thể gồm 4 khu
              dự án với tổng quy mô 1.935 ha, bao gồm: Cảng Quốc tế Long An; Khu
              công nghiệp Đông Nam Á Long An; Khu dịch vụ Công nghiệp Đông Nam Á
              Long An; Khu đô thị Đông Nam Á Long An.
            </p>
            <p>
              Cho đến cuối năm 2019, trong quá trình vừa xây dựng vừa khai thác
              Cảng Quốc tế Long An đã đón gần 1.000 chuyến tàu trong và ngoài
              nước ra vào Cảng, đạt gần 1 triệu tấn hàng hóa xuất nhập thông qua
              cảng, đáng chú ý nhất là Cảng đã tiếp nhận và bốc dỡ hàng hóa
              thành công nhiều tàu tải trọng trên 50.000 DWT.&nbsp;
            </p>
          </p>
          <p style={{ textAlign: "right", margin: "auto" }}>
            <strong>Jkeyan_Univer</strong>
          </p>
        </div>
      </section>
    </>
  );
};

export default LongAnexport;
