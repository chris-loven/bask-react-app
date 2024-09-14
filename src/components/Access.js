import React from "react";
import "../styles/components/Access.css";

const Access = () => {
  return (
    <div className="access-container">
      <h1>アクセス</h1>
      <h2>ご質問がありましたらお気軽にお問い合わせください。</h2>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7186.777339680819!2d140.46540207640922!3d40.60047274443514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b01e884ea3e69%3A0x19684747e96b2ab0!2z5aSn6KGGQkFSIEJBU0s!5e1!3m2!1sen!2sjp!4v1726216582028!5m2!1sen!2sjp"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="restaurant-location"
        ></iframe>
        <div className="access-info">
          <p>
            <b>住所：</b>
            <br />
            青森県弘前市大字本町７３
          </p>
          <p>
            <b>営業時間</b>：<br />
            月曜～土曜: <br />
            午後６時～午後１１時
          </p>
          <p>
            <b>電話番号：</b>
            <br />
            090-6228-3890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Access;
