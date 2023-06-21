import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="flex h-[100vh] flex-col justify-between">
      <div className="flex flex-row justify-between px-4 py-5">
        <img
          src={logo}
          alt="logo"
          className="]h-[18px] w-[160px] md:h-[30px] md:w-[260px]"
        />
        <h3 className="hidden lg:block">info@backstagetalks.com</h3>
      </div>

      <div className="flex flex-row justify-between pl-6 pr-4 py-5 items-end">
        <div className="w-[320px]">
          <div>
            <h4 className="text-[18px] leading-[25px] pb-1">
              Backstage Talks is a magazine of casual, but in depth dialogues on
              design and business. Our decisions shape and influence this
              complex world—to have a chance to make the right ones, we need to
              talk.
            </h4>
          </div>
          <div className="pb-[32px]">
            <p className="text-[12px]">
              © 2023 <span className="underline cursor-default">Published by Büro Milk</span>
            </p>
          </div>
          <div>
            {" "}
            <h4 className="text-[18px] underline hover:no-underline cursor-default">Privacy Policy</h4>
          </div>
        </div>

        <div>
          <ul className=" flex flex-col-reverse gap-[2px] text-[18px]">
            <li className="cursor-default hover:underline">Issue #1</li>
            <li className="cursor-default hover:underline">Issue #2</li>
            <li className="cursor-default hover:underline">Issue #3</li>
            <li className="cursor-default hover:underline">Issue #4</li>
            <li className="cursor-default hover:underline">Issue #5</li>
            <li className="cursor-default hover:underline">Issue #6</li>
            <li className="cursor-default hover:underline">Issue #7</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
