import React from "react";
import logisticsBanner from "../New newspaper/banner-imgs/banner-1.jpg";
import VNTT from "../News/tmdt-1.jpg";
import tmdt from "../News/tmdt-2.jpg";
import tmdt3 from "../News/tmdt-3.jpg";
const Ecommerce = () => {
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
          <h1>
            Vì Sao Các Doanh Nghiệp Thi Nhau 'Lên Sàn' Thương Mại Điện Tử?
          </h1>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ol className="breadcrumb text-danger">
            <li className=" breadcrumb-item">
              <a>17/03/2021 02:28:33</a>
            </li>
            <li className=" breadcrumb-item">
              <a>310 Lượt xem</a>
            </li>
          </ol>
        </div>
        <div>
          <p>
            Cùng với kênh website và mạng xã hội, việc lên sàn TMĐT sẽ tạo nên
            thế kiềng ba chân, hỗ trợ các doanh nghiệp và hộ kinh doanh tăng
            trưởng.
          </p>
          <p>
            Thương mại điện tử đa kênh thôi thúc doanh nghiệp “lên sàn”
            <br />
            Khó khăn thường gặp của các hộ kinh doanh hay doanh nghiệp vừa và
            nhỏ (SME) là phải tự vận hành các kênh truyền thông, quảng cáo trong
            bối cảnh thiếu ngân sách và nhân lực.
          </p>
          <p>
            Trước khi “lên sàn” hồi cuối tháng 4, siêu thị là kênh bán hàng chủ
            lực của Công ty chăn nuôi và chế biến thực phẩm Sài Gòn (Sagrifood).
            Doanh nghiệp này cũng phát triển một website bán hàng riêng, tuy
            nhiên chi phí đầu tư và duy trì khá cao. Chưa kể, nếu không chạy
            quảng cáo hay có các hình thức marketing hiệu quả, website thường có
            lượt truy cập thấp, đồng nghĩa không tạo được doanh thu.
          </p>
          <p>
            “Chúng tôi tự thực hiện các chiến dịch truyền thông, quảng cáo trên
            báo chí, đài truyền hình, tổ chức sự kiện… nhưng hiệu quả so với chi
            phí bỏ ra chưa như mong muốn”, bà Minh An - Phó trưởng phòng Kế
            hoạch Đầu tư Sagrifood - cho biết.
          </p>
          <div className="container" style={{ textAlign: "center" }}>
            <img
              className="container"
              src={VNTT}
              style={{ width: "900px", height: "500px", margin: "auto" }}
            />
          </div>
          <p className="col mt-2">
            <p>
              Không phải doanh nghiệp nào cũng có đủ ngân sách và nhân sự chuyên
              nghiệp để làm truyền thông.
              <br />
              Không có mạng lưới phân phối offline hay ngân sách truyền thông
              lớn như doanh nghiệp, với các hộ kinh doanh nhỏ lẻ, mạng xã hội có
              lẽ là kênh bán hàng kiêm truyền thông phổ biến nhất.
            </p>
            <p>
              Tuy nhiên, một chuyên gia từ Hiệp hội TMĐT Việt Nam (VECOM) nhận
              định rất khó để đánh giá tiềm năng của thương mại mạng xã hội, bởi
              yếu tố mua bán đảm bảo lẫn thanh toán an toàn vẫn chưa rõ ràng.
              Hành lang pháp lý cho thương mại mạng xã hội cũng chưa có. Vị này
              cho rằng mạng xã hội chỉ góp phần giúp TMĐT phổ biến hơn.
            </p>
          </p>
          <div className="container" style={{ textAlign: "center" }}>
            <img
              className="container"
              src={tmdt}
              style={{ width: "400px", height: "300px", margin: "auto" }}
            />
          </div>
          <p>
            Mạng xã hội là kênh bán hàng phổ biến nhưng cũng tồn tại nhiều điểm
            yếu.
            <br />
            Trong bối cảnh bùng nổ của TMĐT, người tiêu dùng có xu hướng mua sắm
            đa kênh thay vì trung thành với một kênh duy nhất. Cụ thể, khảo sát
            của HBR chỉ ra 73% trong số 46.000 người đánh giá cao trải nghiệm
            mua sắm đa kênh của cửa hàng online. Còn 7% khẳng định họ đã chuyển
            từ cửa hàng offline sang mua online tại cùng một doanh nghiệp.
          </p>
          <p>
            Nhưng thực tế, các doanh nghiệp hiện đang phải vận hành đa kênh TMĐT
            trong tình trạng “nghẹt thở”. Số lượng hãng tài trợ quảng cáo trên
            các kênh tăng, chi phí quảng cáo tăng, doanh thu giảm do người dùng
            chuyển từng bước sang chế độ xem không quảng cáo.
          </p>
          <p>
            Để “lên sàn” thương mại điện tử, không phải doanh nghiệp nào cũng
            phải có một website mới. Một số hãng đã sẵn sàng kết nối cửa hàng
            trực tuyến với các hệ thống quản lý tồn kho, khách hàng hiện có. Dù
            vậy, họ cũng phải đối mặt với việc công nghệ phần mềm phát triển
            nhanh chóng, các kênh truyền thông thay đổi liên tục, dẫn đến việc
            phải cải tiến liên tục.
          </p>
          <div className="container" style={{ textAlign: "center" }}>
            <img
              className="container"
              src={tmdt3}
              style={{ width: "2000px", height: "700px", margin: "auto" }}
            />
          </div>
          <p>
            Nguyễn Tuấn Anh, giám đốc điều hành Shopee Việt Nam, cho biết đã
            quản lý một website với 1 triệu SKU và 70 triệu người dùng, nhưng
            vẫn nhận ra là không thể đáp ứng hết nhu cầu người tiêu dùng.
          </p>
          <p>
            “Doanh nghiệp cần hiểu rằng không phải website nào cũng là một kênh
            bán hàng tốt. Quy trình, hệ thống quản lý sản phẩm, vận hành, hỗ trợ
            khách hàng, chiến lược marketing,… đều quan trọng hơn”, ông Anh
            khuyên.
          </p>
          <p>
            Với việc tiếp cận nguồn lực và người dùng, việc kết nối sẽ là lợi
            thế lớn nhất của doanh nghiệp. Thế nhưng, không phải doanh nghiệp
            nào cũng làm được điều này. Bạn có phù hợp không?
          </p>
          <p>
            “Lên sàn” giúp doanh nghiệp hưởng lợi từ dịch vụ logictics chuyên
            nghiệp. Nhà bán hàng còn có thể tận dụng độ phủ quảng cáo đa nền
            tảng của sàn TMĐT để tiếp cận nhiều người dùng hơn. Đơn cử, hiện
            diện khắp 6 thị trường Đông Nam Á, sàn Lazada hỗ trợ nhiều thương
            hiệu tiếp cận hệ sinh thái TMĐT ưu việt cùng các gói giải pháp tài
            trợ hiệu quả như tiếp thị liên kết, công cụ tài trợ từ khóa.
            <p>
              Với giải pháp tiếp thị liên kết, sàn này tận dụng mạng lưới tiếp
              thị với hơn 1.000 đối tác, bao gồm các nhà sáng tạo nội dung,
              trang web có lượt truy cập cao, mạng lưới hàng đầu và các ứng dụng
              hoàn tiền để quảng bá và bán sản phẩm. Trong khi đó với công cụ
              tài trợ từ khóa, sản phẩm của thương hiệu sẽ được ưu tiên xuất
              hiện ở trang kết quả tìm kiếm, từ đó tăng mức độ hiển thị của sản
              phẩm đến đúng khách hàng đang có nhu cầu.
            </p>{" "}
            Hộ kinh doanh nhỏ có thể tiếp cận nguồn khách lớn nhờ độ phủ của sàn
            TMĐT. Trong và sau Covid-19, nhiều sàn TMĐT còn chủ động kết nối các
            ngân hàng với nhà bán hàng để có những khoản vay ưu đãi. Nhiều chính
            sách thu hút các doanh nghiệp thực phẩm tươi sống, nông sản “lên
            sàn” cũng được ra mắt, giúp doanh nghiệp vượt khó để phát triển kinh
            doanh tốt hơn.
            <p>
              Với Sagrifood, sau hai tháng “lên sàn”, mức tăng trưởng doanh thu
              so với tháng đầu đạt 600%. Dù còn nhiều bỡ ngỡ khi thao tác trên
              gian hàng, hay xử lý đơn giao đến khách, nhưng nhờ sự hỗ trợ nhiệt
              tình từ đội ngũ Lazada, mọi khó khăn của doanh nghiệp đều được
              giải quyết, đồng thời nhận được phản hồi khá tốt từ khách hàng.
            </p>
            <p>
              {" "}
              “Đây là một sự khởi đầu tốt để chúng tôi có thể tiến xa hơn trên
              thị trường online”, bà Minh An chia sẻ.
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

export default Ecommerce;
