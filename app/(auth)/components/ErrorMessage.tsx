import { AlertCircle } from "lucide-react";

export default function ErrorMessage({ message }: { message?: string }) {
    return (
      <p className="flex items-center text-red-600 text-sm mt-1">
        <AlertCircle className="w-4 h-4 mr-1" /> {message}
      </p>
    );
  }