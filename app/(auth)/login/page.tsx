"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ErrorMessage from "../components/ErrorMessage";
import Link from "next/link";


 
// ✅ Define Zod schema
const loginSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });
// ✅ Define TypeScript type from Zod schema
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);

  // ✅ Handle form submission
  const onSubmit = (data: LoginFormData) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Form Data:", data); // Replace with API call
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full flex justify-center">
     <div className="min-h-[80vh] w-auto bg-slate-50 xl:w-[1400px] sm:px-[50px] px-[5vw] sm:pt-[10vh] pt-[50px] w-full">
        <div className="flex flex-col gap-2 items-center mx-4 mb-[50px]">
          <h2 className="text-center text-xl font-bold">Log In</h2>
          <div className="h-[2px] w-[10vw] bg-primary" />
          <p className="text-center text-[0.9em] leading-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae itaque, dolorem laborum fugit repellat inventore.</p>    
        </div>
        
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <Label htmlFor="email" className="mb-2">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" {...register("email")} />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="mb-2">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" {...register("password")} />
              {errors.password && <ErrorMessage message={errors.password.message} />}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full mb-0" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </Button>

            <p className="text-center text-sm text-gray-600 mt-2">
              Don&apos;t have an account yet?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Register
              </Link>
            </p>

          </form>
        
    </div>
    </div>
  );
}

