// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid md:grid-cols-3 gap-10">


//           {/* Brand */}
//           <div>
//             <h2 className="text-3xl font-bold">
//               MindMate<span className="text-blue-400">AI</span>
//             </h2>

//             <p className="text-gray-400 mt-4">
//               Your AI-powered mental wellness companion for a healthier mind
//               and better lifestyle.
//             </p>
//           </div>



//           {/* Links */}
//           <div>

//             <h3 className="text-xl font-semibold mb-4">
//               Quick Links
//             </h3>

//             <ul className="space-y-3 text-gray-400">

//               <li className="hover:text-white cursor-pointer">
//                 Home
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Features
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Dashboard
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Contact
//               </li>

//             </ul>

//           </div>




//           {/* Contact */}
//           <div>

//             <h3 className="text-xl font-semibold mb-4">
//               Connect
//             </h3>


//             <div className="flex gap-4">

//               <div className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition">
//                 <FaGithub size={22} />
//               </div>


//               <div className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition">
//                 <FaLinkedin size={22} />
//               </div>


//               <div className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition">
//                 <FaEnvelope size={22} />
//               </div>

//             </div>

//           </div>


//         </div>



//         <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

//           © 2026 MindMate AI. All rights reserved.

//         </div>


//       </div>

//     </footer>
//   );
// };


// export default Footer;
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">


          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              MindMate<span className="text-blue-400">AI</span>
            </h2>

            <p className="text-gray-400 mt-4">
              Your AI-powered mental wellness companion for a healthier mind
              and better lifestyle.
            </p>
          </div>



          {/* Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Home
              </li>

              <li className="hover:text-white cursor-pointer">
                Features
              </li>

              <li className="hover:text-white cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

            </ul>

          </div>




          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Connect With Us
            </h3>


            <div className="flex gap-4">

              {/* Github */}
              <a
                href="https://github.com/riya9068"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition">
                  <FaGithub size={22} />
                </div>
              </a>



              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/riya-verma-9068"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition">
                  <FaLinkedin size={22} />
                </div>
              </a>



              {/* Email */}
              <a
                href="mailto:riyaverma9067@gmail.com"
              >
                <div className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition">
                  <FaEnvelope size={22} />
                </div>
              </a>


            </div>


            <div className="mt-5 text-gray-400">


              <p>
                College: Meerut Institute of Technology
              </p>

              <p className="mt-2">
                Email: riyaverma9067@gmail.com
              </p>

            </div>


          </div>


        </div>



        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 MindMate AI. All rights reserved.

        </div>


      </div>

    </footer>
  );
};


export default Footer;
