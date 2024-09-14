import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip"; // Correct default import
import "../styles/components/MenuBook.css"; // Import your custom styles

const MenuBook = () => {
  const pageFlipRef = useRef(null); // Ref to control page flipping
  const [bookState, setBookState] = useState("front-cover"); // Track book state: 'open', 'front-cover', 'back-cover'

  const goToPreviousPage = () => {
    pageFlipRef.current.pageFlip().flipPrev(); // Flip to previous page
  };

  const goToNextPage = () => {
    pageFlipRef.current.pageFlip().flipNext(); // Flip to next page
  };

  const handlePageChange = (e) => {
    const { data } = e;
    const totalPages = pageFlipRef.current.pageFlip().getPageCount();

    if (data === 0) {
      setBookState("front-cover"); // If on the front cover page
    } else if (data === totalPages - 1) {
      setBookState("back-cover"); // If on the back cover page
    } else {
      setBookState("open"); // Any other interior page
    }
  };

  const MenuItem = ({ name, price }) => (
    <div className="menu-item">
      <span className="menu-name">{name}</span>
      <span className="menu-price">{price}</span>
    </div>
  );

  return (
    <>
      <div className={`flip-page-container ${bookState}`}>
        <HTMLFlipBook
          width={400} // Set half of the book width for each page
          height={600} // Adjust height accordingly
          size="fixed" // Fixed size for consistency
          maxShadowOpacity={0.5} // Optional shadow for the book effect
          showCover={true} // Show cover
          mobileScrollSupport={false} // Disable mobile scroll for better interaction
          ref={pageFlipRef} // Attach ref for programmatic navigation
          onFlip={handlePageChange} /* Detect when the page is flipped */
        >
          <div className="page">
            <div className="page-contents">
              <h1>大衆BAR BASK</h1>
              <h2>ようこそ！</h2>
            </div>
          </div>
          <div className="page">
            <div className="page-contents">
              <h1>お酒</h1>
              <h3>ウィスキー</h3>
              <MenuItem name="１" price="¥500" />
              <MenuItem name="２" price="¥300" />
              <MenuItem name="３" price="¥400" />
              <h3>ウォッカ</h3>
              <MenuItem name="１" price="¥500" />
              <MenuItem name="２" price="¥300" />
              <MenuItem name="３" price="¥400" />
            </div>
          </div>
          <div className="page">
            <div className="page-contents">
              <h1>Appetizers</h1>
              <ul>
                <li>Spring Rolls</li>
                <li>Edamame</li>
                <li>Gyoza</li>
              </ul>
            </div>
          </div>
          <div className="page">
            <div className="page-contents">
              <h1>Appetizers</h1>
              <ul>
                <li>Spring Rolls</li>
                <li>Edamame</li>
                <li>Gyoza</li>
              </ul>
            </div>
          </div>
          <div className="page">
            <div className="page-contents">
              <h1>Appetizers</h1>
              <ul>
                <li>Spring Rolls</li>
                <li>Edamame</li>
                <li>Gyoza</li>
              </ul>
            </div>
          </div>
          <div className="page">
            <div className="page-contents">
              <h1>Appetizers</h1>
              <ul>
                <li>Spring Rolls</li>
                <li>Edamame</li>
                <li>Gyoza</li>
              </ul>
            </div>
          </div>
          <div className="page">
            <div className="page-contents">
              <h1>Appetizers</h1>
              <ul>
                <li>Spring Rolls</li>
                <li>Edamame</li>
                <li>Gyoza</li>
              </ul>
            </div>
          </div>
          <div className="page">
            <div className="page-contents">
              <h1>Back cover</h1>
              <h2>We hope to see you again soon!</h2>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
      <div className="navigation-buttons">
        {bookState !== "front-cover" && (
          <button className="prev-button" onClick={goToPreviousPage}>
            前へ
          </button>
        )}
        {bookState !== "back-cover" && (
          <button className="next-button" onClick={goToNextPage}>
            次へ
          </button>
        )}
      </div>
    </>
  );
};

export default MenuBook;
