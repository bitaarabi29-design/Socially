import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="dark:bg-white/10 backdrop-blur-3xl border dark:border-white/20 rounded-2xl w-100 h-130 md:w-120 md:h-140 flex flex-col gap-2 lg:w-140 lg:h-150 bg-black/10 border-black/40">
        <h3 className="dark:text-white text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center pt-8">
          Create your account
        </h3>
        <span className="dark:text-white/70 text-black/60 text-[14px] text-center">
          Enter your email below to create your account
        </span>
        <label className="dark:text-white text-[14px] pl-4 md:pl-6 pt-4 lg:text-[16px]">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="border outline-none dark:focus:border-white/40 focus:border-black/40 focus:ring-2 dark:focus:ring-white/10 focus:ring-black/10 transition-all duration-200 dark:border-white/20 border-black/20 w-90 md:w-110 ml-4 md:ml-5 rounded-lg h-10 md:h-12 pl-4 dark:bg-white/7 bg-white/40 text-[12px] md:text-[14px] lg:w-130 lg:rounded-xl"
        ></input>
        <label className="dark:text-white text-[14px] pl-4 md:pl-6 pt-4 lg:text-[16px]">
          Email
        </label>
        <input
          type="email"
          placeholder="m@example.com"
          className="border outline-none dark:focus:border-white/40 focus:border-black/40 focus:ring-2 dark:focus:ring-white/10 focus:ring-black/10 transition-all duration-200 dark:border-white/20 border-black/20 w-90 md:w-110 ml-4 md:ml-5 rounded-lg h-10 md:h-12 pl-4 dark:bg-white/7 bg-white/40 text-[12px] md:text-[14px] lg:w-130 lg:rounded-xl"
        ></input>
        <label className="dark:text-white text-[14px] pl-4 md:pl-6 pt-4 lg:text-[16px]">
          Password
        </label>
        <input
          type="text"
          placeholder=""
          className="border outline-none dark:focus:border-white/40 focus:border-black/40 focus:ring-2 dark:focus:ring-white/10 focus:ring-black/10 transition-all duration-200 dark:border-white/20 border-black/20 w-90 md:w-110 ml-4 md:ml-5 rounded-lg h-10 md:h-12 pl-4 dark:bg-white/7 bg-white/40 lg:w-130 lg:rounded-xl"
        ></input>
        <button className="border rounded-lg dark:bg-white/90 dark:text-black text-white text-[14px] w-90 md:w-110 md:ml-5 h-10 ml-4 mt-6 font-semibold cursor-pointer dark:hover:bg-white/70 bg-black hover:bg-black/80 md:h-12 lg:w-130 lg:rounded-xl lg:text-[16px] transition duration-300">
          Create Account
        </button>
        <div className="flex justify-center items-center gap-1 pt-4">
          <span className="text-[12px] md:text-[14px] dark:text-white/70 text-black/70">
            Already have an account?
          </span>
          <Link
            to="/login"
            className="dark:text-white/70 text-black/70 text-[12px] md:text-[14px] underline hover:text-black dark:hover:text-white"
          >
            Sign in
          </Link>
        </div>
      </div>
      <span className="text-[14px] dark:text-white/70 text-black/70 pt-4 w-80 text-center">
        By clicking continue, you agree to our{" "}
        <span className="underline hover:text-black dark:hover:text-white">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="underline hover:text-black dark:hover:text-white">
          Privacy Policy
        </span>
        .
      </span>
    </div>
  );
}

export default Register;
