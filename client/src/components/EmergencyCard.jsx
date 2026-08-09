// const EmergencyCard = () => {


//   const callSupport = () => {
//     window.location.href = "tel:112";
//   };


//   return (

//     <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl shadow-lg p-6 mt-8">

//       <h2 className="text-2xl font-bold text-red-600">
//         🚨 Emergency Support
//       </h2>


//       <p className="mt-3 text-gray-700">
//         Feeling overwhelmed? You are not alone.
//         Reach out for immediate support.
//       </p>



//       <div className="flex flex-wrap gap-4 mt-5">


//         <button
//           onClick={callSupport}
//           className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
//         >
//           📞 Call Emergency
//         </button>



//         <button
//           className="bg-purple-600 text-white px-6 py-3 rounded-xl"
//           onClick={()=>
//             alert(
//               "Try this:\n\n🧘 Deep breathing\n💧 Drink water\n🚶 Take a short walk"
//             )
//           }
//         >
//           🧘 Calm Down
//         </button>



//         <button
//           className="bg-blue-600 text-white px-6 py-3 rounded-xl"
//           onClick={()=>
//             alert(
//               "Support Resources:\n\n📞 Emergency: 112\n❤️ Talk to a trusted person"
//             )
//           }
//         >
//           🆘 Get Help
//         </button>


//       </div>


//     </div>

//   );

// };


// export default EmergencyCard;
import { useState } from "react";

const EmergencyCard = () => {

  const [contact, setContact] = useState("");

  const emergencyCall = () => {
    window.location.href = "tel:112";
  };


  const mentalHealthCall = () => {
    window.location.href = "tel:14416";
  };


  const trustedCall = () => {

    if(!contact){
      alert("Please enter trusted contact number");
      return;
    }

    window.location.href = `tel:${contact}`;

  };


  return (

    <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 rounded-3xl shadow-lg p-6 mt-8">


      <h2 className="text-2xl font-bold text-red-600">
        🚨 Emergency Support
      </h2>


      <p className="text-gray-700 mt-2">
        If you feel overwhelmed, reach out for immediate support.
      </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl mb-5">

<h2 className="text-red-700 font-bold">
⚠️ High Stress Detected
</h2>

<p className="text-gray-700 mt-2">
Based on your recent mood entries, you may be experiencing significant stress or burnout.
If you're feeling overwhelmed, consider reaching out to someone you trust.
</p>

</div>

      <div className="mt-5">

        <input

          type="tel"

          placeholder="Enter trusted person's number"

          value={contact}

          onChange={(e)=>setContact(e.target.value)}

          className="border rounded-xl p-3 w-full"

        />


      </div>



      <div className="flex flex-wrap gap-4 mt-5">


        <button

          onClick={emergencyCall}

          className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"

        >

          📞 Emergency 112

        </button>




        <button

          onClick={mentalHealthCall}

          className="bg-purple-600 text-white px-6 py-3 rounded-xl"

        >

          🧠 Mental Health Help

        </button>




        <button

          onClick={trustedCall}

          className="bg-blue-600 text-white px-6 py-3 rounded-xl"

        >

          ❤️ Call Trusted Person

        </button>


      </div>


    </div>

  );

};


export default EmergencyCard;