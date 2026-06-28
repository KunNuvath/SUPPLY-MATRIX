"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Globe,
  Lock,
  Mail,
  Phone,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  return (
    <div className="flex min-h-screen flex-col justify-center bg-white px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-md">
        <header>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to your SUPPY-MATRIX account
          </p>
        </header>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <Globe className="h-4 w-4 text-gray-500" />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <Phone className="h-4 w-4 text-gray-500" />
            Phone
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs font-medium uppercase tracking-wide text-gray-400">
              or sign in with email
            </span>
          </div>
        </div>

        <form
          className="space-y-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="relative mt-1.5">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                defaultValue="you@example.com"
                className="w-full rounded-lg border-0 bg-gray-100 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative mt-1.5">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                defaultValue="password123"
                className="w-full rounded-lg border-0 bg-gray-100 py-3 pl-10 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex flex-1 gap-1">
                {[0, 1, 2, 3].map((segment) => (
                  <div
                    key={segment}
                    className={`h-1 flex-1 rounded-full ${
                      segment < 3 ? "bg-emerald-700" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-emerald-700">
                Strong
              </span>
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-2.5">
            <button
              type="button"
              role="checkbox"
              aria-checked={keepSignedIn}
              onClick={() => setKeepSignedIn((value) => !value)}
              className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                keepSignedIn
                  ? "border-emerald-700 bg-emerald-700"
                  : "border-gray-300 bg-white"
              }`}
            >
              {keepSignedIn && (
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              )}
            </button>
            <span className="text-sm text-gray-700">Keep me signed in</span>
          </label>

          <Link href="/home" className="flex items-center justify-center gap-2">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-800 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
            >
              Sign In
            </button>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </form>

        <div className="mt-8">
          <p className="text-center text-sm text-gray-500">
            New to SUPPY-MATRIX?
          </p>
          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <UserPlus className="h-4 w-4" />
            Create an Account
          </button>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-gray-400">
          By signing in you agree to our{" "}
          <a href="#" className="text-emerald-700 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-emerald-700 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
