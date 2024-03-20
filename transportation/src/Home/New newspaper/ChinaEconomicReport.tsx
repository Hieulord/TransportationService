import React from "react";
import logisticsBanner from "../New newspaper/banner-imgs/banner-1.jpg";
import CNTT from "../News/hang-an-do.jpg";
const ChinaEconomicReport = () => {
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

      <div
        className="mt-3 "
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>
          Hàng hóa Trung Quốc 'chết cứng' tại biên giới: Ấn Độ cho Bắc Kinh 'nếm
          mùi'?
        </h1>
      </div>
      <section className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ol className="breadcrumb text-danger">
            <li className=" breadcrumb-item">
              <a>17/03/2020 02:28:33</a>
            </li>
            <li className=" breadcrumb-item">
              <a>261 Lượt xem</a>
            </li>
          </ol>
        </div>
        <div>
          <p>
            Động thái trên được nhà chức trách lý giải là để tiến hành kiểm tra
            bổ sung hàng hóa, diễn ra trong bối cảnh quân đội Trung Quốc và Ấn
            Độ vừa xảy ra đụng độ đẫm máu ở thung lũng Galwan, khu vực đông
            Ladakh trên Đường kiểm soát thực tế (LAC), ngày 15/6.
          </p>
          <p>
            Vụ đụng độ khiến 20 binh sĩ Ấn Độ thiệt mạng và ít nhất 76 người
            khác bị thương.
          </p>
          <p>
            Tờ Bưu điện Hoa Nam Buổi sáng (SCMP) ngày 24/6 đưa tin, việc ách tắc
            các lô hàng Trung Quốc tại cảng Chennai - đầu mối vận chuyển nhiều
            loại hàng hóa khác nhau bao gồm xe hơi, linh kiện, phân bón và các
            sản phẩm dầu mỏ - có thể khiến chuỗi cung ứng bị gián đoạn.
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              className="container"
              src={CNTT}
              style={{ width: "900px", height: "500px", margin: "auto" }}
            />
            <p className="container col" style={{ margin: "auto" }}>
              (Ảnh: Reuters)
            </p>
          </div>
          <p className="col mt-2">
            <p>
              Theo 3 nguồn tin, mặc dù chưa có mệnh lệnh chính thức từ chính phủ
              Ấn Độ, nhưng cơ quan hải quan Chennai đã thông báo với các nhà
              nhập khẩu rằng hàng hóa nhập khẩu từ Trung Quốc chỉ được rời khỏi
              cảng sau khi đã được kiểm tra bổ sung. Các lô hàng nhập khẩu thông
              thường chỉ bị kiểm tra ngẫu nhiên và không bắt buộc soi chiếu.
            </p>
            <p>
              Phát ngôn viên của hãng Ford Ấn Độ xác nhận lô hàng bị kẹt lại này
              gồm các bộ phận cần thiết để sản xuất và xuất khẩu ô tô.
            </p>
            <p>
              "Chúng tôi đang làm việc với hải quan và cung cấp các các tài liệu
              và thông tin cần thiết theo yêu cầu của họ," người này cho hay.
            </p>
            <p>
              Một số lô hàng dược phẩm cũng bị giữ lại tại cảng Chennai, một số
              cảng khác và tại một sân bay.
            </p>
            <p>
              Theo giám đốc điều hành cao cấp của một hãng dược phẩm, các công
              ty nhập khẩu đã được phía hải quan thông báo rằng lô hàng của họ
              sẽ được thông quan sau khi được kiểm tra kĩ lưỡng từng kiện một.
            </p>
            <p>
              Hiệp hội môi giới hải quan Chennai, một tổ chức đại diện cho các
              công ty logistics, đã thông báo cho các doanh nghiệp thành viên
              hôm 23/6 về một số sự chậm trễ vì họ mới nhận được một bản hướng
              dẫn nội bộ từ cơ quan hải quan về việc giữ lại tất cả các lô hàng
              nhập khẩu từ Trung Quốc.
            </p>
            <p>
              “Chúng tôi vẫn đang đợi nhận được 1 thông cáo chính thức từ cơ
              quan hải quan”, trích thông báo của Hiệp hội.
            </p>
            <p>
              Đầu tháng này, Ấn Độ đã thay đổi các quy định mua hàng của các cơ
              quan chính phủ, theo đó các nhà cung cấp bắt buộc phải đề cập đến
              xuất xứ hàng hóa nhằm thúc đẩy tiêu dùng hàng hóa nội địa và tránh
              xa các nhà cung cấp Trung Quốc.
            </p>
            <p>
              Theo thông cáo chính phủ hôm 23, những người bán hàng mới trên Chợ
              điện tử của chính phủ, một nền tảng mua sắm trực tuyến giống như
              website Amazon phục vụ nhu cầu mua sắm hàng hóa của các cơ quan
              chính phủ, sẽ phải đăng ký nguồn gốc sản phẩm của họ.
            </p>
            <p>
              Những sản phẩm đã có sẵn trên website cũng phải đáp ứng quy định
              mới hoặc đối mặt nguy cơ bị loại bỏ khỏi website. Chợ điện tử cho
              phép người mua lọc các sản phẩm dựa trên nước xuất xứ và chọn
              những sản phẩm có tỷ lệ nội địa hóa cao.
            </p>
            <p>
              Người mua chỉ có thể chọn mua những sản phẩm đáp ứng tối thiểu 50%
              tỉ lệ nội địa hóa, với mục đích thúc đẩy sự phát triển của sáng
              kiến “Make in India” do Thủ tướng Narendra Modi đề xuất nhằm tăng
              cường tính tự chủ của nền kinh tế Ấn Độ.
            </p>
            <p>
              Với 324.000 nhà cung cấp, chợ điện tử của chính phủ Ấn ghi nhận
              doanh số bán hàng lên tới 400 tỷ rupee (5,3 tỷ USD) trong năm
              ngoái.
            </p>
          </p>
          <p style={{ textAlign: "right", margin: "auto" }}>
            <strong>LIO-Kaition</strong>
          </p>
        </div>
      </section>
    </>
  );
};

export default ChinaEconomicReport;
