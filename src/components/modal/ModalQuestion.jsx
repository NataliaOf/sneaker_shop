import React, { useState } from "react";

import FormQuestion from "../FormQuestion";



export default function ModalQuestion () {

  

   return (
<>
         <div id="myModal2" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close">×</span>
              <h2>Ask a Question</h2>
            </div>
            <div className="modal-body">
           <FormQuestion/>
            
            </div>
             </div>
       </div>
 
          </>
   )
}

