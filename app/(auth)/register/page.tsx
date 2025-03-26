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
const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z
      .string()
      .optional()
      .refine((val) => !val || /^[0-9]+$/.test(val), {
        message: "Phone number must contain only numbers",
    }),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ✅ Define TypeScript type from Zod schema
type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [loading, setLoading] = useState(false);

  // ✅ Handle form submission
  const onSubmit = (data: RegisterFormData) => {
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
          <h2 className="text-center text-xl font-bold">Register</h2>
          <div className="h-[2px] w-[10vw] bg-primary" />
          <p className="text-center text-[0.9em] leading-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae itaque, dolorem laborum fugit repellat inventore.</p>    
        </div>
        
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="mb-2">Name</Label>
              <Input id="name" placeholder="Enter your name" {...register("name")} />
              {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="mb-2">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" {...register("email")} />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>

            {/* Phone Number (Optional) */}
            <div>
              <Label htmlFor="phone" className="mb-2">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" {...register("phone")} />
              {errors.phone && <ErrorMessage message={errors.phone.message} />}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="mb-2">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" {...register("password")} />
              {errors.password && <ErrorMessage message={errors.password.message} />}
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="mb-2">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm password" {...register("confirmPassword")} />
              {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword.message} />}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full mb-0" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>

            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>

          </form>
        
    </div>
    </div>
  );
}


















































// "use client"
 
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
 
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// const formSchema = z.object({
//     username: z.string().min(2, {
//       message: "Username must be at least 2 characters.",
//     }),
// })

// export default function Register() {

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   })
   
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }

//   return (
//     <div className="w-full flex justify-center">
//       <div className="min-h-[80vh] w-auto bg-slate-50 xl:w-[1400px] sm:p-[50px] p-[5vw] w-full">
//         <div className="flex flex-col gap-2 items-center mx-4 mb-[50px]">
//           <h2 className="text-center text-xl font-bold">Register</h2>
//           <div className="h-[2px] w-[10vw] bg-primary" />
//           <p className="text-center text-[0.9em] leading-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae itaque, dolorem laborum fugit repellat inventore.</p>    
//         </div>
//         <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//             control={form.control}
//             name="username"
//             render={({ field }) => (
//                 <FormItem>
//                 <FormLabel>Name <span className="text-primary">*</span></FormLabel>
//                 <FormControl>
//                     <Input placeholder="please enter name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//                 </FormItem>
//             )}
//             />
//             <FormField
//             control={form.control}
//             name="username"
//             render={({ field }) => (
//                 <FormItem>
//                 <FormLabel>Email <span className="text-primary">*</span></FormLabel>
//                 <FormControl>
//                     <Input placeholder="please enter name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//                 </FormItem>
//             )}
//             />
//             <FormField
//             control={form.control}
//             name="username"
//             render={({ field }) => (
//                 <FormItem>
//                 <FormLabel>Phone</FormLabel>
//                 <FormControl>
//                     <Input placeholder="please enter phone" {...field} />
//                 </FormControl>
//                 <FormMessage />
//                 </FormItem>
//             )}
//             />
//             <FormField
//             control={form.control}
//             name="username"
//             render={({ field }) => (
//                 <FormItem>
//                 <FormLabel>Password <span className="text-primary">*</span></FormLabel>
//                 <FormControl>
//                     <Input type="password" placeholder="please enter password" {...field} />
//                 </FormControl>
//                 <FormMessage />
//                 </FormItem>
//             )}
//             />
//             <FormField
//             control={form.control}
//             name="username"
//             render={({ field }) => (
//                 <FormItem>
//                 <FormLabel>Confirm Password <span className="text-primary">*</span></FormLabel>
//                 <FormControl>
//                     <Input type="password" placeholder="please re-enter password" {...field} />
//                 </FormControl>
//                 <FormMessage />
//                 </FormItem>
//             )}
//             />

//             <Button className="w-full m-1" type="submit">Register</Button>
//             <div className="flex justify-center items-center">
//               I already have an account. <Button className="text-primary" variant="ghost">Log In</Button>  
//             </div>
//         </form>
//         </Form>
//       </div>
//     </div>
//   )
// }
