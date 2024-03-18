import React from "react";
import logisticsBanner from "../New newspaper/banner-imgs/banner-1.jpg";
import VNTT from "../News/kinhte-tang-truong.jpg";
const VietnamEconomicReport = () => {
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
      {/*Body*/}
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
          <h1>Việt Nam vẫn tăng trưởng dương, đạt 0,36% trong quý II/2020</h1>
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
          <div className="container" style={{ textAlign: "center" }}>
            <img
              className="container"
              src={VNTT}
              style={{ width: "900px", height: "500px", margin: "auto" }}
            />

            <p className="container col" style={{ margin: "auto" }}>
              Việt Nam vẫn tăng trưởng dương, đạt 0,36% trong quý II/2020
            </p>
          </div>
          <p className="col mt-2">
            <p>
              Dù là mức tăng trưởng thấp nhất trong giai đoạn 2011 - 2020, nhưng
              mức tăng GDP 6 tháng vẫn là kết quả đáng ghi nhận của kinh tế Việt
              Nam.
            </p>
            <p>
              Trong mức tăng trưởng 1,81% của 6 tháng đầu năm, khu vực nông, lâm
              nghiệp và thủy sản tăng 1,19%, đóng góp 11,89% vào mức tăng trưởng
              chung; khu vực công nghiệp và xây dựng tăng 2,98%, đóng góp
              73,14%; khu vực dịch vụ tăng 0,57%, đóng góp 14,97%.
            </p>
            <p>
              Động lực chính cho tăng trưởng kinh tế 6 tháng đầu năm là công
              nghiệp chế biến, chế tạo (tăng 4,96%) và các ngành dịch vụ thị
              trường (bán buôn và bán lẻ tăng 4,3%; hoạt động tài chính, ngân
              hàng và bảo hiểm tăng 6,78%).
            </p>
            <p>
              Tổng cục Thống kê nhận định sản xuất công nghiệp 6 tháng đầu năm
              chịu ảnh hưởng từ dịch Covid-19 nên đạt mức tăng thấp nhất so với
              mức tăng cùng kỳ các năm 2011-2020. Tuy nhiên do dịch bệnh sớm
              được kiểm soát, các lĩnh vực của nền kinh tế đang từng bước hoạt
              động bình thường trở lại, sản xuất công nghiệp có sự khởi sắc và
              dần lấy lại đà tăng trưởng cao từ tháng 5/2020.
            </p>
            <p>
              Đáng chú ý, sau 2 tháng nới lỏng và gỡ bỏ các biện pháp giãn cách
              xã hội, các hoạt động kinh tế - xã hội đang dần được khôi phục. Số
              doanh nghiệp thành lập mới trong tháng 6 tiếp tục khởi sắc với
              13,7 nghìn doanh nghiệp, tăng 27,9% so với tháng trước.
            </p>
            <p>
              Hoạt động thương mại, vận tải trong nước tháng 6 tiếp tục tăng trở
              lại sau khi dịch Covid-19 cơ bản được khống chế. Cụ thể, tổng mức
              bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng tháng 6 ước tính
              đạt 431 nghìn tỷ đồng, tăng 6,2% so với tháng trước và tăng 5,3%
              so với cùng kỳ năm trước. Hoạt động vận tải trong nước tháng 6
              cũng tiếp tục xu hướng khôi phục trở lại với mức tăng 13,4% lượng
              hành khách vận chuyển và tăng 7,3% lượng hàng hóa vận chuyển so
              với tháng trước.
            </p>
            <p>
              Tuy nhiên, du khách quốc tế là một nốt trầm lớn khi trong tháng 6
              chỉ có 8,8 nghìn lượt người, giảm 61,3% so với tháng trước và giảm
              99,3% so với cùng kỳ năm trước. Tính chung 6 tháng đầu năm, khách
              quốc tế đến nước ta ước tính đạt 3.744,5 nghìn lượt người, giảm
              55,8% so với cùng kỳ năm trước.
            </p>
            <p>
              Về đầu tư, tín hiệu đáng chú ý là vốn đầu tư toàn xã hội thực hiện
              theo giá hiện hành 6 tháng đầu năm ước tính đạt 850,3 nghìn tỷ
              đồng, tăng 3,4% so với cùng kỳ năm trước và bằng 33% GDP (quý
              II/2020 đạt 481,2 nghìn tỷ đồng, tăng 4%).
            </p>
            <p>
              Về xuất nhập khẩu, dù tổng kim ngạch xuất, nhập khẩu hàng hóa giảm
              2,1% so với cùng kỳ năm trước (đạt 238,4 tỷ USD) trong đó xuất
              khẩu giảm 1,1%, nhập khẩu giảm 3% tuy nhiên, trong 6 tháng đầu
              năm, Việt Nam xuất siêu ước tính đạt 4 tỷ USD (cùng kỳ năm trước
              xuất siêu 1,7 tỷ USD).
            </p>
            <p>
              Về lạm phát, chỉ số giá tiêu dùng (CPI) tháng 6/2020 tăng 0,66% so
              với tháng trước, chủ yếu do giá xăng dầu tăng cao 3 đợt liên tiếp
              sau chuỗi giảm kéo dài kể từ Tết Nguyên đán và giá thịt lợn tiếp
              tục tăng trong những ngày đầu tháng 6.
            </p>
            <p>
              Mặc dù vậy chỉ số giá tiêu dùng tháng 6/2020 vẫn giảm 0,59% so với
              tháng 12 năm trước - mức thấp nhất trong giai đoạn 2016-2020. Bình
              quân 6 tháng đầu năm 2020, chỉ số giá tiêu dùng tăng 4,19% so với
              cùng kỳ năm trước, đây là mức tăng cao nhất trong giai đoạn
              2016-2020.
            </p>
            <p>
              Về các vấn đề xã hội, tính đến ngày 10/6/2020, cả nước giải ngân
              được 10,5 nghìn tỷ đồng để hỗ trợ người dân gặp khó khăn do đại
              dịch Covid-19. Trong đó, người có công với cách mạng, đối tượng
              bảo trợ xã hội, người thuộc hộ nghèo, cận nghèo hơn 10,4 nghìn tỷ
              đồng; người lao động 50,5 tỷ đồng; hộ kinh doanh 2,6 tỷ đồng...
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

export default VietnamEconomicReport;
