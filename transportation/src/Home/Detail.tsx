import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detail.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

interface Service {
  _id: string;
  serviceCode: string;
  name: string;
  imagePath: string;
  type: string;
  evaluate: number;
  price: number;
  description: string;
}

const Detail: React.FC = () => {
  const [serviceDetail, setServiceDetail] = useState<Service | null>(null);

  const { id } = useParams<{ id: string }>();

  const getProduct = async (id: string) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/service/getDetail/${id}`
      );
      setServiceDetail(res.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  if (!serviceDetail) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container">
      <div className="row row-cols-2 m-0 g-3 p-3">
        <div className="col text-decoration-none">
          <img
            src={"http://localhost:4000" + serviceDetail.imagePath}
            className="image ms-5"
            alt={serviceDetail.name}
            style={{
              width: "80%",
              height: "250px",
              boxShadow: "20px 20px 50px grey",
            }}
          />
        </div>

        <div className="col text-decoration-none">
          <b className="fs-3" style={{ fontWeight: "500" }}>
            {serviceDetail.name}
          </b>{" "}
          <hr />
          {/* Mô tả */}
          <p>
            <span>{serviceDetail.description}</span>
          </p>
          <p className="mt-2">
            <b>Mã dịch vụ:</b> <span>{serviceDetail.serviceCode}</span>
          </p>
          <div className="d-flex flex-nowrap">
            <p>
              <b>Đánh Giá:</b> <span>{serviceDetail.evaluate}</span>
            </p>
            <p className="ms-3">
              <b>Giá Dịch Vụ:</b> <span>{serviceDetail.price}</span>{" "}
              <span>đ</span>
            </p>
          </div>
          <div className="d-flex flex-nowrap">
            <button className="contactButton">
              <Link className="text-decoration-none text-white" to="/Contact">
                Liên Hệ Chúng Tôi
              </Link>
              <div className="iconButton">
                <FaArrowRightLong />
              </div>
            </button>
            <div className="icon mt-2 ms-5 fs-5">
              <a
                href="https://www.facebook.com"
                className="social-link-iconFacebook"
              >
                <FaFacebookF />
              </a>{" "}
              &nbsp;
              <a
                href="https://twitter.com"
                className="social-link-iconTwitter ms-3"
              >
                <FaTwitter />
              </a>{" "}
              &nbsp;
              <a
                href="https://www.youtube.com"
                className="social-link-iconYoutube ms-3"
              >
                <FaYoutube />
              </a>{" "}
              &nbsp;
              <a
                href="https://www.pinterest.com"
                className="social-link-iconPinterest ms-3"
              >
                <FaPinterestP />
              </a>{" "}
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
