import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const {signUp}= useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Registration Data:", data);

    signUp(data.email, data.password)
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })

  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-inter bg-[#F9E4CB] relative lg:w-[100vw] lg:right-[9.05vw]">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-6xl text-[#000000] mb-4">Create your account</h1>
        <p className="text-[25px] text-[#00000090]">
          Or
          <a
            href="#"
            className="font-semibold text-gray-900 hover:text-gray-700 ml-1 transition duration-200 border-b border-dotted border-gray-900"
          >
            sign in to your existing account
          </a>
        </p>
      </div>

      {/* Form Box */}
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              {...register("fullName", { required: "Full name is required" })}
              className={`w-full p-3 border-2 rounded-lg text-base outline-none focus:border-black transition duration-200 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
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

          {/* Password */}
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
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className={`w-full p-3 border-2 rounded-lg text-base outline-none focus:border-black transition duration-200 ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } pr-10`}
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-center text-sm">
            <input
              id="terms"
              type="checkbox"
              {...register("terms", { required: "You must agree to continue" })}
              className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-gray-700 cursor-pointer select-none"
            >
              I agree to the{" "}
              <a href="#" className="font-bold text-gray-900">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="font-bold text-gray-900">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="mt-1 text-sm text-red-500">
              {errors.terms.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition duration-300 shadow-md"
          >
            Create Account
          </button>
        </form>
      </div>

      {/* Bottom Text */}
      <p className="mt-10 text-center text-[20px] text-gray-600">
        Already have an account?{" "}
        <a
          href="#"
          className="font-bold text-gray-900 hover:text-black transition duration-200"
        >
          Sign in
        </a>
      </p>
    </div>
  );
};

export default Register;
