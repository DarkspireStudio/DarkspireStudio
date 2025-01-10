import { txtTimeless } from "../../data/data";

export default function TextTimeless() {

    
 return (
   <div>
        <div >
          <div className="text-justify text-lg mx-auto prose text-gray-300 pt-6 hyphens-auto indent-8">
              <p>{txtTimeless.text1}</p><br/>
              <p>{txtTimeless.text2}</p><br/>
              <p>{txtTimeless.text3}</p><br/>
              <p>{txtTimeless.text4}</p><br/>
              <p>{txtTimeless.text5}</p><br/>
              <p>{txtTimeless.text6}</p><br/>
          </div>
        </div>
   </div>
 );
}