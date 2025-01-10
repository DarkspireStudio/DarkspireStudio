import React from "react";

export default function Title({text, className}:{text:string, className?:string}) {
 return (
   <div className={className}>

      <div className="w-50 bg-purple-700 rounded-md text-center p-2">
        <h1 className="text-3x1 font-bold">
          {text}
        </h1>
      </div>
   </div>
 );
}