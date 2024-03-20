import React from "react";
import logisticsBanner from "../New newspaper/banner-imgs/banner-1.jpg";
import ACV from "../News/acv.jpg";

const Acv = () => {
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
                    <a style={{ textDecoration: "none" }} href="/">
                      Trang chủ
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a style={{ textDecoration: "none" }} href="/Newss">
                      Tin Tức
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a style={{ textDecoration: "none" }}>Tin Tức</a>
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
        <div
          className="container mt-3 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h1>ACV Dự Kiến Lợi Nhuận 2020 Giảm 80%</h1>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ol className="breadcrumb text-danger">
            <li className=" breadcrumb-item">
              <a>17/03/2020 02:28:33</a>
            </li>
            <li className=" breadcrumb-item">
              <a>125 Lượt xem</a>
            </li>
          </ol>
        </div>
        <div>
          <p>
            Tại đại hội đồng cổ đông, lãnh đạo doanh nghiệp đã công bố các số
            liệu sản xuất kinh doanh năm 2020 với dự kiến tổng lượng khách qua
            21 cảng hàng không giảm 41% so với năm 2019, còn 69,2 triệu lượt.
            Lượng hàng hóa cũng giảm 13% còn 1,34 triệu tấn, lượt cất hạ cánh
            giảm 29%.
          </p>
          <p>
            Với tình hình kinh doanh khó khăn do ảnh hưởng Covid-19, Ủy ban quản
            lý vốn Nhà nước tại doanh nghiệp, cổ đông đang nắm 95% cổ phần, đề
            ra mục tiêu tổng doanh thu 11.317 tỷ đồng, giảm 45% và lợi nhuận
            trước thuế 2.007 tỷ, giảm 80% so với thực hiện năm 2019. Tuy nhiên
            sau quý I, đơn vị này đã thực hiện 1.927 tỷ lợi nhuận, hoàn thành
            96% chỉ tiêu cả năm.
          </p>
          <div className="container" style={{ textAlign: "center" }}>
            <img
              className="container"
              src={ACV}
              style={{ width: "500px", height: "300px", margin: "auto" }}
            />

            <p
              className="container col  text-danger"
              style={{ margin: "auto" }}
            >
              Ảnh: Hoàng Hà.
            </p>
          </div>
          <p className="col mt-2">
            <p>
              Lãnh đạo doanh nghiệp cũng nhận định ảnh hưởng của dịch Covid-19
              sẽ tác động đến kế hoạch kinh doanh trung hạn đến năm 2025 do dòng
              tiền tích lũy hàng năm sụt giảm. Với tác động trên, ACV đã phải
              điều chỉnh giãn tiến độ một số dự án đầu tư để đảm bảo hiệu quả sử
              dụng vốn.
            </p>
            <p>
              Về nguồn thu sau dịch Covid-19, ACV đánh giá dù thị trường nội địa
              phục hồi nhanh, toàn mạng bay được khôi phục trong tháng 6, nhưng
              thị trường quốc tế vẫn còn nhiều rủi ro. Lợi nhuận của doanh
              nghiệp năm 2020 giảm sâu cũng bởi thị trường quốc tế chiếm tới
              khoảng 60% tổng nguồn thu.
            </p>
            Tổng giám đốc ACV, ông Vũ Thế Phiệt cho biết kế hoạch 2020 được lập
            ra hồi tháng 5 khi dự tính mở cửa hàng không quốc tế vào giai đoạn
            tháng 8, 9.
            <p>
              Tuy nhiên, điều này không khả thi do các nước bắt đầu xuất hiện
              làn sóng dịch thứ 2, nằm ngoài dự báo của ACV.
            </p>
            <p>
              Ông Phiệt tính toán việc mở cửa cho khách du lịch quốc tế có thể
              đến cuối quý III và sẽ ảnh hưởng lớn đến kế hoạch kinh doanh.
            </p>
            <p>
              “Năm 2020 ACV cố gắng không lỗ nhưng cũng là thách thức rất lớn
              trong thời gian tới”, ông Phiệt nói.
            </p>
            <p>
              Đại diện cổ đông lớn nhất là Ủy ban quản lý vốn Nhà nước tại doanh
              nghiệp đánh giá kế hoạch kinh doanh năm 2020 của ACV là khả quan,
              tuy nhiên đề nghị doanh nghiệp xem xét và rà soát lại các chi phí,
              cơ cấu tổ chức và lực lượng lao động, từ đó tối ưu hóa năng lực
              quản trị tại doanh nghiệp.
            </p>
            <p>
              Theo ACV chia sẻ, tính đến cuối năm 2019, doanh nghiệp sở hữu tổng
              tài sản khoảng 58.176 tỷ đồng, trong đó vốn chủ sở hữu hơn 36.700
              tỷ. Năm ngoái, doanh thu hợp nhất là 20.641 tỷ đồng, lãi sau thuế
              hơn 8.200 tỷ.
            </p>
            <p>
              Cũng tại đại hội đồng cổ đông, ACV một lần nữa nhấn mạnh những
              vướng mắc về cơ chế mà doanh nghiệp đang gặp phải khi các quy định
              pháp luật còn chồng chéo tại Luật Đầu tư, Luật Xây dựng, Luật Hàng
              không, Luật Quy hoạch. Vướng mắc về cơ chế khiến doanh nghiệp gặp
              khó khi đầu tư hạ tầng mới cũng như bảo dưỡng, sửa chữa hạ tầng
              đường băng tại các khu bay.
            </p>
            <p>
              Trong năm 2020, ACV sẽ tiếp tục đầu tư các dự án cải tạo, xây mới
              nhà ga hành khách như T3 Phú Bài, T3 Tân Sơn Nhất..., mở rộng sân
              đỗ máy bay tại Đà Nẵng, Cam Ranh, Cát Bi... cũng như đẩy nhanh
              tiến độ để triển khai dự án sân bay Long Thành giai đoạn 1..
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

export default Acv;
