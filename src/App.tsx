import "./App.css";
import logo from "./assets/logo.png";
import BookCard from "./BookCard";
import { bookDetails } from "./bookDetails";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    // const link = document.getElementsByClassName(".link") as HTMLCollectionOf<HTMLElement>;
    // const link = (document.getElementById("link") as HTMLElement) || null;

    // link.style.color = "white";
    body.style.backgroundColor = "#ff608c";

    // trigger this function every time the user scrolls
    window.onscroll = function () {
      const scroll = window.pageYOffset;
      if (scroll < 300) {
        // pink
        body.style.backgroundColor = "#ff608c";
      } else if (scroll >= 300 && scroll < 1200) {
        // white
        body.style.backgroundColor = "#ffffff";
      } else if (scroll >= 1200 && scroll < 1800) {
        // green
        body.style.backgroundColor = "#00c1b5";
      } else if (scroll >= 1800 && scroll < 2400) {
        // orange
        body.style.backgroundColor = "#ff6519";
      } else if (scroll >= 2400 && scroll < 3600) {
        // yellow
        body.style.backgroundColor = "#ffbe00";
      } else if (scroll >= 3600 && scroll < 4000) {
        // blue
        body.style.backgroundColor = "#1d3fbb";
      } else if (scroll >= 4000 && scroll < 9000) {
        // red
        body.style.backgroundColor = "#e30512";
      } else {
        // white
        body.style.backgroundColor = "#ffffff";
      }
    };
  }, []);

  // useEffect(() => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  // });

  return (
    <div className="flex flex-col">
      <div className="absolute sm:fixed left-5 flex h-[100vh] flex-col justify-between">
        {" "}
        <img
          src={logo}
          alt="logo"
          className="mt-5 h-[18px] w-[160px] md:h-[30px] md:w-[260px]"
        />
        <div className="mb-5 hidden w-[320px] lg:block">
          <div>
            <h4 className="pb-1 text-[18px] leading-[25px]">
              Backstage Talks is a magazine of casual, but in depth dialogues on
              design and business. Our decisions shape and influence this
              complex world—to have a chance to make the right ones, we need to
              talk.
            </h4>
          </div>
          <div className="pb-[32px]">
            <p className="text-[12px]">
              © 2023{" "}
              <a href="">
                <span className="cursor-default underline hover:no-underline">
                  Published by Büro Milk
                </span>
              </a>
            </p>
          </div>
          <div>
            {" "}
            <a href="">
              {" "}
              <h4 className="cursor-default text-[18px] underline hover:no-underline">
                Privacy Policy
              </h4>
            </a>
          </div>
        </div>
      </div>

      <div className="fixed right-5 flex h-[100vh] flex-col items-end justify-between">
        <a href="#">
          <h3 className="mt-5 hidden cursor-default text-[18px] hover:underline lg:block">
            info@backstagetalks.com
          </h3>
        </a>
        <div className="mb-5 hidden lg:block">
          <ul className="flex flex-col-reverse gap-[2px] text-[18px]">
            <a href="#1" onClick={handleScroll}>
              {" "}
              <li className="cursor-default hover:underline">Issue #1</li>
            </a>{" "}
            <a href="#2" onClick={handleScroll}>
              {" "}
              <li className="cursor-default hover:underline">Issue #2</li>
            </a>{" "}
            <a href="#3" onClick={handleScroll}>
              {" "}
              <li className="cursor-default hover:underline">Issue #3</li>
            </a>{" "}
            <a href="#4" onClick={handleScroll}>
              {" "}
              <li className="cursor-default hover:underline">Issue #4</li>
            </a>{" "}
            <a href="#5" onClick={handleScroll}>
              {" "}
              <li className="cursor-default hover:underline">Issue #5</li>
            </a>{" "}
            <a href="#6" onClick={handleScroll}>
              {" "}
              <li className="cursor-default hover:underline">Issue #6</li>
            </a>{" "}
            <a href="#7" onClick={handleScroll}>
              {" "}
              <li className="cursor-default hover:underline">Issue #7</li>
            </a>{" "}
          </ul>
        </div>
      </div>

      {bookDetails.map((book) => {
        return (
          <BookCard
            key={book.id}
            img={book.img}
            buy={book.buy}
            sold={book.sold}
            id={book.id}
          />
        );
      })}

      <div className="flex flex-col items-center justify-center">
        <div className="mb-5 sm:hidden w-[95%] flex items-center flex-col">
          <div>
            <h4 className="pb-1 text-[18px] leading-[25px] text-center">
              Backstage Talks is a magazine of casual, but in depth dialogues on
              design and business. Our decisions shape and influence this
              complex world—to have a chance to make the right ones, we need to
              talk.
            </h4>
          </div>
          <div className="pb-[32px]">
            <p className="text-[12px]">
              © 2023{" "}
              <a href="">
                <span className="cursor-default underline hover:no-underline">
                  Published by Büro Milk
                </span>
              </a>
            </p>
          </div>
          <div>
            {" "}
            <a href="">
              {" "}
              <h4 className="cursor-default text-[18px] underline hover:no-underline">
                Privacy Policy
              </h4>
            </a>
          </div>
        </div>

        <a href="#">
          <h3 className="mt-5 mb-10 sm:hidden cursor-default text-[18px] hover:underline ">
            info@backstagetalks.com
          </h3>
        </a>
      </div>
    </div>
  );
}

export default App;
