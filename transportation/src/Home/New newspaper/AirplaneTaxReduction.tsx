import React from "react";
import logisticsBanner from "../New newspaper/banner-imgs/banner-1.jpg";
import VNTT from "../News/giam-thue-nhien-lieu-may-bay.jpg";
const AirplaneTaxReduction = () => {
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
        <div
          className="container mt-3 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h1>Đề Xuất Giảm Thuế Môi Trường Với Nhiên Liệu Bay</h1>
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
              <a>251 Lượt xem</a>
            </li>
          </ol>
        </div>
        <div>
          <p>
            Theo đó, Bộ Tài chính hoàn thiện dự thảo nghị quyết để Chính phủ
            trình Ủy ban Thường vụ Quốc hội giảm 30% mức thuế BVMT đối với nhiên
            liệu bay, từ 3.000 đồng/lít giảm còn 2.100 đồng/lít. Thời điểm áp
            dụng là từ khi nghị quyết được ban hành cho đến hết ngày 31.12.2020.
          </p>
          <div className="container" style={{ textAlign: "center" }}>
            <img
              className="container"
              src={VNTT}
              style={{ width: "700px", height: "400px", margin: "auto" }}
            />

            <p
              className="container col  text-danger"
              style={{ margin: "auto" }}
            >
              Chính phủ dự thảo Nghị quyết mức thuế bảo vệ môi trường (BVMT)
            </p>
          </div>
          <p className="col mt-2">
            <p>
              Theo Bộ Tài chính, thiệt hại của ngành hàng không do Covid-19 rất
              nghiêm trọng. Vietnam Airlines báo cáo tính đến hết quý 2/2020 đã
              giảm tổng 32.700 chuyến bay (giảm 88,2% so với kế hoạch), giảm
              khoảng 5,67 triệu khách, giảm 89,3% so với kế hoạch. Vietnam
              Airlines phải thực hiện ngừng việc với hơn 6.000 lao động. Dự kiến
              trong năm 2020, doanh thu Vietnam Airlines giảm 49.300 tỉ đồng, và
              mức lỗ lên gần 16.000 tỉ đồng.
            </p>
            <p>
              Đối với thuế BVMT, số thu vào ngân sách tăng từ 11.676 tỉ đồng năm
              2012 lên 63.079 tỉ đồng năm 2019. Trong đó, số thu thuế BVMT với
              nhiên liệu bay bình quân giai đoạn 2015 - 2019 là 2.939 tỉ
              đồng/năm. Việc giảm thuế cho hàng không với mức 900 đồng/lít sẽ
              tác động trực tiếp giảm giá thành nhiên liệu đầu vào, còn ngân
              sách nhà nước giảm thu 72 - 80 tỉ đồng/tháng.
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

export default AirplaneTaxReduction;
