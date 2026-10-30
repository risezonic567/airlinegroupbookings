// QuoteConfirmationClient.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { QUOTE_STORAGE_KEY } from "@/lib/quoteStorage";

export default function QuoteConfirmationClient() {
  const router = useRouter();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(QUOTE_STORAGE_KEY);
      if (stored) {
        setDetails(JSON.parse(stored));
      } else {
        setDetails(null);
      }
    } catch (e) {
      console.error("Failed to read quote details from sessionStorage", e);
      setDetails(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleClearAndNavigate = (path) => {
    sessionStorage.removeItem(QUOTE_STORAGE_KEY);
    router.push(path);
  };

  if (loading) {
    return null; // or a small loader if desired
  }

  if (!details) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-blue-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md rounded-lg bg-white p-6 shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">No quote data found</h2>
          <p className="text-sm text-gray-600 mb-6">
            It looks like you arrived here directly. Please start a new quote.
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const {
    tripType,
    origin,
    destination,
    departure,
    returnDate,
    secondOrigin,
    secondDestination,
    secondDeparture,
    passengers,
    cabin,
    email,
    countryCode,
    phone,
  } = details;

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        {/* Details card */}
        <div className="border border-gray-200 rounded-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">Your Quote Request</h2>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="py-1 font-medium">Trip Type</td>
                <td className="py-1">{tripType}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 font-medium">Flying From</td>
                <td className="py-1">{origin}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 font-medium">Flying To</td>
                <td className="py-1">{destination}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 font-medium">Departure</td>
                <td className="py-1">{departure}</td>
              </tr>
              {tripType === "Round Trip" && (
                <tr className="border-b">
                  <td className="py-1 font-medium">Return Date</td>
                  <td className="py-1">{returnDate}</td>
                </tr>
              )}
              {tripType === "Multi City" && (
                <>
                  <tr className="border-b">
                    <td className="py-1 font-medium">Next Flight From</td>
                    <td className="py-1">{secondOrigin}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1 font-medium">Next Flight To</td>
                    <td className="py-1">{secondDestination}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1 font-medium">Next Flight Date</td>
                    <td className="py-1">{secondDeparture}</td>
                  </tr>
                </>
              )}
              <tr className="border-b">
                <td className="py-1 font-medium">Passengers</td>
                <td className="py-1">{passengers}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 font-medium">Class</td>
                <td className="py-1">{cabin}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 font-medium">Email</td>
                <td className="py-1">{email}</td>
              </tr>
              <tr>
                <td className="py-1 font-medium">Phone</td>
                <td className="py-1">{countryCode} {phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Success block */}
        <div className="flex items-center justify-center rounded-full bg-green-100 p-4 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Thank you!</h1>
        <p className="text-center text-gray-600 mb-6">
          Your request has been received. Our team will contact you shortly with the best group fares.
        </p>
        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleClearAndNavigate("/")}
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </button>
          <button
            onClick={() => handleClearAndNavigate("/")}
            className="inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <ArrowRight className="mr-2 h-4 w-4" /> Request Another Quote
          </button>
        </div>
      </div>
    </div>
  );
}
