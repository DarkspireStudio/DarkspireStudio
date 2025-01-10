import React from "react";
import { txtCyberpunk } from "../../data/data";

export default function TextCyberpunk() {

    
 return (
   <div>
        <div >
          <div className="text-justify text-lg mx-auto prose text-gray-300 pt-6 hyphens-auto indent-8">
              <p>{txtCyberpunk.text1}</p><br/>
              <p>{txtCyberpunk.text2}</p><br/>
              <p>{txtCyberpunk.text3}</p><br/>
              <p>{txtCyberpunk.text4}</p><br/>
              <p>{txtCyberpunk.text5}</p><br/>
          </div>
        </div>
   </div>
 );
}