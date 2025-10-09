import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ✅ react-icons added

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    console.log("Email:", data.email);
    console.log("Password:", data.password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-inter bg-[#F9E4CB] relative  lg:w-[100vw] lg:right-[9.05vw]">
      <div className="text-center mb-8">
        <h1 className="text-6xl text-[#000000] mb-4">
          Sign in to your account
        </h1>
        <p className="text-[25px] text-[#00000090]">
          Or
          <a
            href="#"
            className="font-semibold text-gray-900 hover:text-gray-700 ml-1 transition duration-200 border-b border-dotted border-gray-900"
          >
            create a new account
          </a>
        </p>
      </div>

      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="user@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className={`w-full p-3 border-2 rounded-lg text-base outline-none focus:border-black transition duration-200 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full p-3 border-2 rounded-lg text-base outline-none focus:border-black transition duration-200 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } pr-10`}
              />
              {/* Eye Toggle Icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Checkbox + Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <input
                id="showPasswords"
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black cursor-pointer"
              />
              <label
                htmlFor="showPasswords"
                className="ml-2 text-gray-700 cursor-pointer select-none"
              >
                Show password
              </label>
            </div>

            <a
              href="#"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>
      </div>

      <p className="mt-10 text-center text-[20px] text-gray-600 max-w-lg px-4">
        By signing in, you agree to our
        <a
          href="#"
          className="font-bold text-gray-900 hover:text-black ml-1 transition duration-200"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="font-bold text-gray-900 hover:text-black transition duration-200"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default Login;
