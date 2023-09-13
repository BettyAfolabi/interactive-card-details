function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row font-SpaceGrotesk tracking-wider">
        <div className="relative mb-8 md:mb-0 w-full md:w-3/6">
          <img
            src="./bg-main-desktop.png"
            alt="background image"
            className="hidden md:block h-full"
          />
          <img
            src="./bg-main-mobile.png"
            alt="mobile background"
            className="md:hidden w-full"
          />
          <div className="absolute top-14 right-7 md:top-1/2 md:left-1/2">
            <div className="relative md:w-80 md:mt-4">
              <img src="./bg-card-back.png" alt="card back" />
              <p className="absolute top-28 md:top-20 right-12 md:right-8 text-white text-sm">
                000
              </p>
            </div>
          </div>
          <div className="absolute -bottom-11 left-3 md:top-1/4 md:left-1/3">
            <div className="relative md:w-80 md:mb-3">
              <img src="./bg-card-front.png" />
              <img
                src="./card-logo.svg"
                className="absolute top-3 left-10 md:left-5 w-16"
              />
              <h1 className="absolute top-1/2 left-9 md:left-6 text-white text-2xl md:min-w-full ">
                0000 0000 0000 0000
              </h1>
              <p className="absolute bottom-4 left-11 md:left-5 text-white">
                Jane Doe
              </p>
              <h3 className="absolute bottom-4 right-2 md:right-5 text-white">
                00/00
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white mt-9 px-9 md:mt-5 md:h-screen md:grid md:place-items-center md:w-screen ">
          <form className="block mt-5 md:w-64 md:h-64">
            <div className="my-6 md:my-5">
              <label
                htmlFor="cardname"
                className="text-md md:text-xs text-DarkerViolet "
              >
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                id="cardname"
                name="cardname"
                placeholder="e.g Jane Doe"
                className="block rounded-md border-solid border-Grey border px-4 py-3 md:py-2 md:w-80 mt-1 text-md md:text-sm p-4 w-full"
              />
            </div>
            <div className=" my-6 md:my-5">
              <label
                htmlFor="cardnumber"
                className=" text-md md:text-xs text-DarkerViolet "
              >
                CARD NUMBER
              </label>
              <input
                type="number"
                id="cardnumber"
                name="cardnumber"
                placeholder="e.g 0000 0000 0000 0000"
                className="block rounded-md border-solid border-Grey border px-4 py-3 md:py-2 w-full md:w-80 p-4 mt-1 text-md md:text-sm"
              />
            </div>
            <div className="flex my-5">
              <div>
                <label
                  htmlFor="expirydate"
                  className="text-md md:text-xs text-DarkerViolet "
                >
                  EXP. DATE (MM/YY)
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="month"
                    name="month"
                    placeholder="MM"
                    className="block rounded-md border-solid border-Grey border px-4 py-3 md:py-2 w-2/5 md:w-16 mr-4 md:mr-2 mt-1 text-md md:text-sm"
                  />
                  <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="YY"
                    className="block rounded-md border-solid border-Grey border text-md md:text-sm px-4 py-3 md:py-2 w-2/5 md:w-16 mt-1"
                  />
                </div>
              </div>
              <div className="md:ml-6">
                <label
                  htmlFor="cvc"
                  className="text-md md:text-xs text-DarkerViolet "
                >
                  CVC
                </label>
                <input
                  type="number"
                  id="cvc"
                  name="cvc"
                  placeholder="e.g 123"
                  className="block rounded-md border-solid border-Grey border text-md md:text-sm p-4 md:py-2 w-full md:w-40 mt-1"
                />
              </div>
            </div>
            <button className="bg-DarkerViolet text-white w-full md:w-80 rounded-md p-4 md:p-2 text-md md:text-base my-3">
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
            <button className="bg-DarkerViolet text-white w-96 md:w-80 rounded-md py-4 md:p-2 text-md md:text-base mt-7">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="attribution bottom-0 text-xs text-center md:mt-4 ">
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
