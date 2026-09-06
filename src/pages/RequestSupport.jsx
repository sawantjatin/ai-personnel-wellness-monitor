import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const RequestSupport = () => {
  const [supportType, setSupportType] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const supportOptions = [
    "Personal / Welfare",
    "Workload",
    "Family / Social",
    "Health",
    "Other",
  ];

  const contactOptions = ["Phone Call", "In-Person Meeting", "Secure Message"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!supportType || !message || !contactMethod) {
      return;
    }

    console.log({
      supportType,
      message,
      contactMethod,
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border p-10 text-center">
          <div className="flex justify-center mb-5">
            <div className="bg-emerald-100 p-4 rounded-full">
              <CheckCircle2 size={42} className="text-emerald-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Support Request Submitted
          </h1>

          <p className="text-gray-500 mt-2">
            Your request has been recorded confidentially. A designated support
            person will contact you through your selected method.
          </p>

          <Button
            onClick={() => {
              setSubmitted(false);
              setSupportType("");
              setMessage("");
              setContactMethod("");
            }}
            className="mt-6 bg-emerald-700 hover:bg-emerald-800"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Request Support</h1>

        <p className="text-gray-500 mt-1">
          Reach out for confidential welfare and support assistance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Support Type */}
        <div className="bg-white border rounded-2xl p-6">
          <h2 className="font-semibold text-gray-900 mb-4">
            What do you need support with?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {supportOptions.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => setSupportType(option)}
                className={`text-left p-4 rounded-xl border transition ${
                  supportType === option
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                <p className="font-medium text-gray-900">{option}</p>

                {supportType === option && (
                  <p className="text-xs text-emerald-700 mt-1">Selected</p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="bg-white border rounded-2xl p-6">
          <h2 className="font-semibold text-gray-900 mb-2">Tell us more</h2>

          <p className="text-sm text-gray-500 mb-4">
            Please describe what kind of assistance you need.
          </p>

          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="min-h-[140px]"
          />
        </div>

        {/* Contact Method */}
        <div className="bg-white border rounded-2xl p-6">
          <h2 className="font-semibold text-gray-900 mb-4">
            Preferred contact method
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {contactOptions.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => setContactMethod(option)}
                className={`p-4 rounded-xl border text-sm font-medium transition ${
                  contactMethod === option
                    ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <Button type="submit" className="bg-emerald-700 hover:bg-emerald-800">
            <Send size={17} className="mr-2" />
            Submit Support Request
          </Button>
        </div>
      </form>

      {/* Privacy */}
      <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-xl p-4">
        <p className="text-sm text-emerald-800">
          <strong>Your privacy matters.</strong> Support requests are intended
          for welfare assistance and should not be used for disciplinary
          decisions.
        </p>
      </div>
    </div>
  );
};

export default RequestSupport;
