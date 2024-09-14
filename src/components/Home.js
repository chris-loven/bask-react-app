import React from "react";
import "../styles/components/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>BAR BASKへようこそ！</h1>
      </section>
      <section className="about-section">
        <h2>バスクってどんなお店？</h2>
        <p>
          オーナーシェフのえりさんは、和食から洋食まで幅広い料理を得意としていて、どれもとっても美味しいです。
          <br />
          新鮮な食材を使って、伝統的な技法と現代的なアレンジをミックスした料理をお楽しみいただけます。
          <br />
          お一人でも、ご家族や友人と一緒でも、誰でも楽しめるメニューが揃っています。
          <br />
          心を込めて作られた料理は、来るたびに新しい味との出会いをお届けします。
          <br />
          ぜひ、色とりどりの美味しい料理を味わってください。
        </p>
        <p>
          スタッフはみんなフレンドリーで、いつも笑顔でお迎えします。
          <br />
          お店の雰囲気は、あたたかくて、まるで自分の家にいるかのようにリラックスできます。
          <br />
          音楽やインテリアも、お店全体の居心地の良さを引き立てています。
          <br />
          美味しい料理と心地よい空間で、特別な時間をお過ごしください。
          <br />
          ぜひ、五感で楽しめるひとときをご堪能ください。
        </p>
      </section>
    </div>
  );
};

export default Home;
