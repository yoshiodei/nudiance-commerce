import React from 'react'

export default function VendorDisplay() {
  return (
    <div className="shadow-lg border border-slate-300 rounded p-5">
      <div className="flex gap-3">  
        <div className="w-[55px] h-[55px] rounded-full bg-slate-600">
        </div>
        <div>
          <h6 className="text-lg font-semibold">User Name</h6>
          <p className="text-[0.8em]">Joined 3 years ago</p>
        </div>
      </div>
    </div>
  )
}
