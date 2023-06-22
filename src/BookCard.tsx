import { bookProps } from "./bookDetails";
import "./App.css";

const BookCard = ({ img, buy, id, sold }: bookProps) => {
  return (
    <section
      className="flex h-[100vh] w-full flex-col items-center justify-center"
      id={`${id}`}
    >
      <img src={img} alt="" className="w-[420px]" />
      <div className="flex flex-col items-center gap-[23px]">
        <h4 className="inline-flex text-[18px] text-[#251d20]">
          Issue #{id}{" "}
          <span className={`${sold ? "block" : "hidden"} ml-1`}>
            is sold out.
          </span>
        </h4>

        {sold ? (
          <>
            <h4 className="mt-[-8px] text-[15px] text-[#251d20]">
              If you are lucky, you may get the last pieces in{" "}
              <a href="http://backstagetalks.com/stocklist.php">
                <span className="cursor-pointer text-white hover:underline">
                  selected stories
                </span>
                .
              </a>
            </h4>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <h4 className="inline-flex gap-1 text-[15px] text-[#251d20]">
                {" "}
                <a href={buy}>
                  <span
                    className={`${
                      id == 6 ? "text-[#e568ac]" : "text-white"
                    } cursor-pointer uppercase text-white hover:underline`}
                  >
                    Buy Here
                  </span>
                </a>{" "}
                <span className={`${id !== 7 ? "hidden" : "block"}`}>
                  (Europe)
                </span>
              </h4>
              <h4
                className={`${
                  id !== 7 ? "hidden" : "block"
                } text-[#251d20]" mt-[-4px] text-[15px]`}
              >
                {" "}
                <a href="">
                  <span className="cursor-pointer uppercase text-white hover:underline">
                    Buy Here
                  </span>
                </a>{" "}
                (UK & Overseas)
              </h4>
            </div>

            <h4 className="mt-[-8px] text-[15px] text-[#251d20]">
              or in{" "}
              <a href="http://backstagetalks.com/stocklist.php">
                <span
                  className={`cursor-pointer ${
                    id == 6 ? "text-[#e568ac]" : "text-white"
                  } hover:underline`}
                >
                  selected stories
                </span>
                .
              </a>
            </h4>
          </>
        )}
      </div>
    </section>
  );
};

export default BookCard;
