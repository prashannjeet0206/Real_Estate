import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center mt-5">Sign Up</h1>
      <form className="flex flex-col gap-5 items-center mt-5">
        <input
          type="text"
          placeholder="name"
          className="border p-3 rounded-lg w-96"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 w-96 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 w-96 rounded-lg"
        />
        <button className="bg-slate-700 w-96 text-white uppercase p-3 rounded-lg hover:bg-slate-500">
          Sign up
        </button>
      </form>
      <div className="flex justify-center gap-2 mt-3">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign-in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
