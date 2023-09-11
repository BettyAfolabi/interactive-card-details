import "./App.css";

function App() {
  return (
    <>
      <div className="flex font-SpaceGrotesk tracking-wider">
        <div className="relative w-3/6">
          <img
            src="./bg-main-desktop.png"
            alt="background image"
            className="h-screen"
          />
          <div className="absolute top-1/2 left-1/2">
            <div className="w-80 relative mt-4">
              <img src="./bg-card-back.png" alt="card back" />
              <p className="absolute top-20 right-8 text-white text-sm">000</p>
            </div>
          </div>
          <div className="absolute top-1/4 left-1/3">
            <div className="relative mb-3 w-80">
              <img src="./bg-card-front.png" />
              <img
                src="./card-logo.svg"
                className="absolute top-5 left-5 w-16"
              />
              <h1 className="absolute top-1/2 left-6 text-white text-2xl min-w-full ">
                0000 0000 0000 0000
              </h1>
              <p className="absolute bottom-4 left-5 text-white">Jane Doe</p>
              <h3 className="absolute bottom-4 right-5 text-white">00/00</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 mb-3 h-screen grid place-items-center w-full">
          <form className="w-64 h-64 ">
            <div className="my-5">
              <label htmlFor="cardname" className="text-xs text-DarkerViolet ">
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                id="cardname"
                name="cardname"
                placeholder="e.g Jane Doe"
                className="block rounded-lg border-solid border-Grey border px-3 py-2 w-80 mt-1"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="cardnumber"
                className="text-xs text-DarkerViolet "
              >
                CARD NUMBER
              </label>
              <input
                type="number"
                id="cardnumber"
                name="cardnumber"
                placeholder="e.g 0000 0000 0000 0000"
                className="block rounded-lg border-solid border-Grey border px-3 py-2 w-80 mt-1"
              />
            </div>
            <div className="flex my-5">
              <div>
                <label
                  htmlFor="expirydate"
                  className="text-xs text-DarkerViolet "
                >
                  EXP. DATE (MM/YY)
                </label>
                <div className="flex ">
                  <input
                    type="text"
                    id="month"
                    name="month"
                    placeholder="MM"
                    className="block rounded-lg border-solid border-Grey border px-3 py-2 w-16 mr-2 mt-1"
                  />
                  <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="YY"
                    className="block rounded-lg border-solid border-Grey border px-3 py-2 w-16 mt-1"
                  />
                </div>
              </div>
              <div className="ml-6">
                <label htmlFor="cvc" className="text-xs text-DarkerViolet ">
                  CVC
                </label>
                <input
                  type="number"
                  id="cvc"
                  name="cvc"
                  placeholder="e.g 123"
                  className="block rounded-lg border-solid border-Grey border px-3 py-2 w-40 mt-1"
                />
              </div>
            </div>
            <button className="bg-DarkerViolet text-white w-80 rounded-md p-2 text-base my-3">
              Confirm
            </button>
          </form>
          <div className="p-5 text-center hidden">
            <img
              src="./icon-complete.svg"
              alt="complete icon"
              className="mx-auto w-16 mb-7"
            />
            <h1 className="text-DarkerViolet text-2xl mb-2 tracking-widest">
              THANK YOU!
            </h1>
            <h3 className="text-DarkGrayViolet tracking-normal mb-2">
              We`ve added your card details
            </h3>
            <button className="bg-DarkerViolet text-white w-80 rounded-md p-2 text-base mt-7">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="attribution bottom-0 text-xs text-center lg:mt-4 lg:text-White">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-attribution"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/BettyAfolabi" className="text-attribution">
          Betty
        </a>
        .
      </div>
    </>
  );
}
export default App;
