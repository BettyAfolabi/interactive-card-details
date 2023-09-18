import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [showDiv, setShowDiv] = useState(false);
  const [hideDiv, setHideDiv] = useState(true);

  const form = useForm({
    defaultValues: {
      cardname: "",
      cardnumber: "",
      expirydate: {
        month: "",
        year: "",
      },
      cvc: "",
    },
    mode: "all",
  });

  const { register, handleSubmit, reset, formState, watch } = form;
  const { errors, isSubmitting } = formState;

  const onError = (errors) => {
    console.log("Form Errors", errors);
    setShowDiv(!showDiv);
    setHideDiv(false);
  };

  const handleContinue = () => {
    setHideDiv(true);
    setShowDiv(false);
    reset();
  };

  const watchCardname = watch("cardname");
  const watchCardnumber = watch("cardnumber");
  const watchCvc = watch("cvc");
  const watchMonth = watch("expirydate.month");
  const watchYear = watch("expirydate.year");

  return (
    <>
      <div className="border-box flex flex-col md:flex-row font-SpaceGrotesk tracking-wider">
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
          <div className="absolute top-14 right-7 md:top-1/2 md:left-2/3">
            <div className="relative md:w-80">
              <img src="./bg-card-back.png" alt="card back" />
              <p className="absolute top-28 md:top-20 right-12 md:right-8 text-white text-sm">
                {watchCvc || "000"}
              </p>
            </div>
          </div>
          <div className="absolute -bottom-11 left-3 md:top-1/4 md:left-1/2 md:mr-3">
            <div className="relative md:w-80 ">
              <img src="./bg-card-front.png" />
              <img
                src="./card-logo.svg"
                className="absolute top-3 left-10 md:left-5 w-16"
              />
              <h1 className="absolute top-1/2 left-9 md:left-6 text-white text-xl md:min-w-full ">
                {watchCardnumber || "0000 0000 0000 0000"}
              </h1>
              <p className="absolute bottom-4 left-11 md:left-5 text-white text-md">
                {watchCardname || "Jane Doe"}
              </p>
              <div className="absolute bottom-4 right-2 md:right-5 text-white flex text-md">
                <h3>{watchMonth || "00"}</h3> /<h3>{watchYear || "00"}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-9 px-9 md:mt-0 md:h-screen md:grid md:place-items-center md:w-screen">
          {hideDiv && (
            <form
              onSubmit={handleSubmit(onError)}
              noValidate
              className="block mt-5 md:w-64"
            >
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
                  className={`w-full block rounded-md border ${
                    errors.cardname ? "border-Red" : "border-LightGrayViolet"
                  } hover:border-Violet focus:outline-none focus:border-Violet px-4 py-3 md:py-2 w-full md:w-80 p-4 mt-1 text-md md:text-sm`}
                  {...register("cardname", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,

                      message: "Letters Only",
                    },
                  })}
                />

                <p className="text-Red text-xs tracking-normal">
                  {errors.cardname?.message}
                </p>
              </div>
              <div className=" my-6 md:my-5">
                <label
                  htmlFor="cardnumber"
                  className=" text-md md:text-xs text-DarkerViolet "
                >
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  id="cardnumber"
                  name="cardnumber"
                  placeholder="e.g 0000 0000 0000 0000"
                  className={`w-full block rounded-md border ${
                    errors.cardnumber ? "border-Red" : "border-LightGrayViolet"
                  } hover:border-Violet focus:outline-none focus:border-Violet px-4 py-3 md:py-2 w-full md:w-80 p-4 mt-1 text-md md:text-sm`}
                  {...register("cardnumber", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
                      message:
                        "Wrong Format, numbers only (16 digits with space between)",
                    },
                  })}
                />
                <p className="text-Red text-xs tracking-normal">
                  {errors.cardnumber?.message}
                </p>
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
                    <div className="flex flex-col">
                      <input
                        type="number"
                        id="month"
                        name="month"
                        placeholder="MM"
                        className={`block rounded-md border ${
                          errors.expirydate?.month
                            ? "border-Red"
                            : "border-LightGrayViolet"
                        } hover:border-Violet focus:outline-none focus:border-Violet px-4 py-3 md:py-2 w-2/5 md:w-20 mr-4 md:mr-2 mt-1 text-md md:text-sm`}
                        {...register("expirydate.month", {
                          required: "Can't be blank",
                          pattern: {
                            value: /^(0[1-9]|1[0-2])$/,
                            message: "enter 2 digits from 01-12",
                          },
                        })}
                      />
                      <p className="text-Red text-xs tracking-normal">
                        {errors.expirydate?.month?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="number"
                        id="year"
                        name="year"
                        placeholder="YY"
                        className={`block rounded-md border ${
                          errors.expirydate?.year
                            ? "border-Red"
                            : "border-LightGrayViolet"
                        } hover:border-Violet focus:outline-none focus:border-Violet px-4 py-3 md:py-2 w-2/5 md:w-20 mr-4 md:mr-2 mt-1 text-md md:text-sm`}
                        {...register("expirydate.year", {
                          required: "Can't be blank",
                          pattern: {
                            value: /^\d{2}$/,
                            message: "only 2 digits allowed",
                          },
                        })}
                      />
                      <p className="text-Red text-xs tracking-normal">
                        {errors.expirydate?.year?.message}
                      </p>
                    </div>
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
                    className={`block rounded-md border ${
                      errors.cvc ? "border-Red" : "border-LightGrayViolet"
                    } hover:border-Violet focus:outline-none focus:border-Violet text-md md:text-sm p-4 md:py-2 w-full md:w-32 mt-1`}
                    {...register("cvc", {
                      required: "Can't be blank",
                      pattern: {
                        value: /^\d{3}$/,
                        message: "3 digits only",
                      },
                    })}
                  />
                  <p className="text-Red text-xs tracking-normal">
                    {errors.cvc?.message}
                  </p>
                </div>
              </div>
              <button
                disabled={isSubmitting}
                className="bg-DarkerViolet hover:bg-Violet text-white w-full md:w-80 rounded-md p-4 md:p-2 text-md md:text-base my-3"
              >
                Confirm
              </button>
            </form>
          )}
          {showDiv && (
            <div className="p-5 text-center">
              <img
                src="./icon-complete.svg"
                alt="complete icon"
                className="mx-auto w-28 mt-5 md:mt-1 md:w-16 mb-12 md:mb-7"
              />
              <h1 className="text-DarkerViolet text-4xl md:text-2xl mb-7 md:mb-3 tracking-widest">
                THANK YOU!
              </h1>
              <h3 className="text-DarkGrayViolet text-xl md:text-md tracking-normal mb-6 md:mb-2">
                We`ve added your card details
              </h3>
              <button
                className="bg-DarkerViolet hover:bg-Violet text-white w-96 md:w-80 rounded-md py-4 md:p-2 text-md md:text-base mt-7"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          )}
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
