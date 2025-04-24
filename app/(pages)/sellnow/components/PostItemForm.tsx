"use client"

import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form"
import { FaCheck } from "react-icons/fa"
import axios from 'axios'
import { X } from "lucide-react"
import { topBrands } from "@/lib/topBrandsArray"

type StateOption = {
    id: number;
    name: string;
    iso2: string;
  };

type CityOption = {
  id: number;
  latitude: string;
  longitude: string;
  name: string;
  };

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.string().min(1, "Price is required"),
  condition: z.enum(["new", "slightly-used", "used"], {
    errorMap: () => ({ message: "Select a condition" }),
  }),
  brand: z.string().min(1, "Brand is required"),
  details: z.string().min(1, "Product detail is required"),
  other: z.string().min(1, "Other brand name is required"),
})

type ProductFormValues = z.infer<typeof formSchema>

type CategoryKey = keyof typeof topBrands

export default function ProductForm({category}: {category: CategoryKey}) {
  
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      condition: undefined,
      brand: "",
      details: "",
    },
  })
  
   
  const config = (endpoint: string) => {
    return {
      method: 'get',
      url: endpoint,
      headers: {
        'X-CSCAPI-KEY': 'WHVaNlJPQlQ4YXVYZTdYV3o0bDl5Z3VMUllCc2NISDJtVFNrZVJ6Nw=='
      }
  }}

  // const config = {
  //   method: 'get',
  //   url: 'https://api.countrystatecity.in/v1/countries/US/states',
  //   headers: {
  //     'X-CSCAPI-KEY': 'WHVaNlJPQlQ4YXVYZTdYV3o0bDl5Z3VMUllCc2NISDJtVFNrZVJ6Nw=='
  //   }
  // };
  
    const [images, setImages] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [promoteItem, setPromoteItem] = useState(false)
  const [states, setStates] = useState<StateOption[]>([]);
  const [cities, setCities] = useState<CityOption[]>([]);
  const [selectedState, setSelectedState] = useState("");
  const [location, setLocation] = useState("");
  console.log(location);
  

  useEffect(() => {
    axios(config('https://api.countrystatecity.in/v1/countries/US/states')) // replace with your actual endpoint
      .then((res) => { 
        console.log(res.data)
        setStates(res.data) 
      }
      )
      .catch((err) => console.error("Error fetching states:", err));
  }, []); 

  useEffect(() => {
    if(selectedState){
    axios(config(`https://api.countrystatecity.in/v1/countries/US/states/${selectedState.split(', ')[0]}/cities`)) // replace with your actual endpoint
      .then((res) => { 
        console.log(res.data)
        setCities(res.data) 
      }
      )
      .catch((err) => console.error("Error fetching states:", err));
    } 
  }, [selectedState]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setImages((prev) => {
      const newImages = [...prev, ...files]
      return newImages.slice(0, 4) // ensure only 4 images max
    })
  }

  const handleImageRemove = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const onSubmit = (values: ProductFormValues) => {
    console.log("Submitted form values:", values)
    console.log("Images:", images)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="border border-slate-700 rounded" placeholder="Enter product name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input className="border border-slate-700 rounded" placeholder="Enter price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Condition */}
        <FormField
          control={form.control}
          name="condition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Condition</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="slightly-used">Slightly Used</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    topBrands[category].map((brand: string) => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                     )
                    )
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Brand */}
        {form.watch("brand") === 'Other' && (<FormField
          control={form.control}
          name="other"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other</FormLabel>
              <FormControl>
                <Input className="border border-slate-700 rounded" placeholder="Enter brand name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />)}

        {/* Product Detail */}
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Product Detail</FormLabel>
              <FormControl>
                <Textarea className="border border-slate-700 rounded h-[120px]" placeholder="Enter product description..." rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* State Dropdown */}
<div>
  <Label className="mb-2">State</Label>
  <Select 
    onValueChange={(val) => setSelectedState(val)}
  >
    <SelectTrigger>
      <SelectValue placeholder="Select a state" />
    </SelectTrigger>
    <SelectContent>
      {states.map((state) => (
        <SelectItem key={state.id} value={`${state.iso2}, ${state.name}`}>
          {state.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

{/* City Dropdown */}
<div>
  <Label className="mb-2">City</Label>
  <Select disabled={!selectedState} onValueChange={(val) => setLocation(`${val}, ${selectedState.split(', ')[1]}`)}>
    <SelectTrigger>
      <SelectValue placeholder={selectedState ? "Select a city" : "Select a state first"} />
    </SelectTrigger>
    <SelectContent>
      {cities.map((city) => (
        <SelectItem key={city.id} value={city.name}>
          {city.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

       {/* Image Upload */}
       <div className="md:col-span-2">
         <div className="flex items-center gap-3">
           <Label>Product Images</Label>
           <span className="text-sm text-gray-500">({images.length}/4)</span>
         </div>

         <div className="flex gap-4 mt-2 flex-wrap">
         {/* Show upload box only if less than 4 images */}
         {images.length < 4 && (
         <div
          className="w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer rounded-md"
          onClick={() => fileInputRef.current?.click()}
         >
           <span className="text-3xl text-gray-400">+</span>
           <input
             type="file"
             accept="image/*"
             multiple
             ref={fileInputRef}
             onChange={handleImageChange}
             className="hidden"
          />
      </div>
    )}

    {/* Display Selected Images */}
    {images.map((image, index) => (
      <div key={index} className="relative w-32 h-32 rounded-md overflow-hidden border">
        <img
          src={URL.createObjectURL(image)}
          alt={`Selected ${index}`}
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          onClick={() => handleImageRemove(index)}
          className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md"
        >
          <X className="w-4 h-4 text-red-500" />
        </button>
      </div>
    ))}
  </div>
    </div>

    <div className="md:col-span-2">
      <div className="flex gap-5">
        <button type="button" onClick={() => setPromoteItem(false)} className={`w-[200px] px-5 py-3 border-2 ${promoteItem ? 'border-slate-300': 'border-primary'}  rounded-md relative`}>
          <h6 className="text-sm font-semibold text-start">Do not promote item</h6>
          <h3 className="text-[1.5em] text-start">Post For Free</h3>
          {!promoteItem && (<div className="absolute w-[20px] h-[20px] rounded-full bg-primary flex justify-center items-center top-[-10px] left-[-10px]">
            <FaCheck className="text-white text-[0.7em]" />
          </div>)}
        </button>

        <button type="button" onClick={() => setPromoteItem(true)} className={`w-[200px] px-5 py-3 border-2 ${promoteItem ? 'border-primary' : 'border-slate-300'} rounded-md relative`}>
          <h6 className="text-sm font-semibold text-start">Promote item</h6>
          <h3 className="text-[1.5em] text-start">$8 For 15 days</h3>
          {promoteItem && (<div className="absolute w-[20px] h-[20px] rounded-full bg-primary flex justify-center items-center top-[-10px] left-[-10px]">
            <FaCheck className="text-white text-[0.7em]" />
          </div>)}
        </button>
      </div>
    </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <Button className="sm:w-[250px] w-full" type="submit">
            Post Product
          </Button>
        </div>
      </form>
    </Form>
  )
}
