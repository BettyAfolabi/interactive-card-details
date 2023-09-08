import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[url('./bg-main-desktop.png')] bg-no-repeat bg-screen h-screen">
        <div className="pt-7">
          <div className="w-[18rem] h-[10rem] m-3 relative">
            <img src="./bg-card-back.png" alt="card back" />
            <p className="absolute top-16 right-8 text-white text-sm">000</p>
          </div>
          <div className="w-[18rem] h-[10rem] relative mb-3">
            <img src="./bg-card-front.png" className=" m-3" />
            <img src="./card-logo.svg" className="absolute top-5 left-7 w-16" />
            <h1 className="absolute top-1/2 left-6 text-white text-2xl min-w-full ">
              0000 0000 0000 0000
            </h1>
            <div className=" text-white">
              <p className="absolute bottom-3 left-5">Jane Doe</p>
              <h3 className="absolute bottom-3 right-5">00/00</h3>
            </div>
          </div>
        </div>
        <form className="bg-white p-5 mb-3 h-screen">
          <div>
            <label htmlFor="cardname">CARDHOLDER NAME</label>
            <input
              type="text"
              id="cardname"
              name="cardname"
              className="block rounded-lg border-solid border-Grey border p-1"
            />
          </div>
          <div>
            <label htmlFor="cardnumber">CARD NUMBER</label>
            <input
              type="number"
              id="cardnumber"
              name="cardnumber"
              className="block rounded-lg border-solid border-Grey border p-1"
            />
          </div>
          <div>
            <label htmlFor="expirydate">EXPIRY DATE (MM/YY)</label>
            <div className="flex ">
              <input
                type="text"
                id="month"
                name="month"
                placeholder="MM"
                className="block rounded-lg border-solid border-Grey border p-1 w-16 mr-2"
              />
              <input
                type="text"
                id="year"
                name="year"
                placeholder="YYYY"
                className="block rounded-lg border-solid border-Grey border p-1 w-16 ml-3"
              />
            </div>
          </div>
          <div>
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              id="cvc"
              name="cvc"
              className="block rounded-lg border-solid border-Grey border p-1"
            />
          </div>
        </form>
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
          <a
            href="https://github.com/BettyAfolabi"
            className="text-attribution"
          >
            Betty
          </a>
          .
        </div>
      </div>
    </>
  );
}
export default App;
