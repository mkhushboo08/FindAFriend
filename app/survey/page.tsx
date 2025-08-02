// // "use client";

// // import { useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Heart } from "lucide-react";

// // // Define the questions as global context
// // const questions = [
// //   "What's your ideal living situation?",
// //   "How do you like to spend your free time?",
// //   "What's your daily routine like?",
// //   "How do you handle conflicts with roommates?",
// //   "What are your cleanliness preferences for shared spaces?",
// // ];

// // // Extend the global Window type (TypeScript fix)
// // declare global {
// //   interface Window {
// //     OmnidimensionWidget?: {
// //       open: () => void;
// //     };
// //     omnidim_questions?: string[];
// //   }
// // }

// // export default function FindAFriendStartPage() {
// //   useEffect(() => {
// //     const scriptId = "omnidimension-web-widget";

// //     // Inject updated Omnidimension widget script only once
// //     if (!document.getElementById(scriptId)) {
// //       const script = document.createElement("script");
// //       script.id = scriptId;
// //       script.async = true;
// //       script.src =
// //         "https://backend.omnidim.io/web_widget.js?secret_key=361e3981b914315017114222bb406ec9"; // ✅ Updated secret key
// //       document.body.appendChild(script);
// //     }

// //     // Set global questions for widget
// //     window.omnidim_questions = questions;
// //   }, []);

// //   const handleStart = () => {
// //     if (window.OmnidimensionWidget?.open) {
// //       window.OmnidimensionWidget.open();
// //     } else {
// //       alert("Voice agent not loaded. Please wait a moment or refresh.");
// //     }
// //   };

// //   return (
    // <div
    //   className="relative flex items-end justify-end w-full h-screen bg-no-repeat bg-cover bg-center"
    //   style={{
    //     backgroundImage: 'url("/background.jpg")',
    //     backgroundSize: "1800px 850px",
    //     backgroundColor: "black",
    //   }}
    // >
// //       <div className="m-6">
// //         {/* <Button
// //           onClick={handleStart}
// //           size="lg"
// //           className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg"
// //         >
// //           <Heart className="w-5 h-5 mr-2" />
// //           Start FindAFriend Test
// //         </Button> */}
// //       </div>
// //     </div>
// //   );
// // }



// //2

// // "use client";

// // import { useEffect } from "react";

// // // Questions to be passed to Omnidimension widget
// // const questions = [
// //   "What's your ideal living situation?",
// //   "How do you like to spend your free time?",
// //   "What's your daily routine like?",
// //   "How do you handle conflicts with roommates?",
// //   "What are your cleanliness preferences for shared spaces?",
// // ];

// // // TypeScript global extension
// // declare global {
// //   interface Window {
// //     OmnidimensionWidget?: {
// //       open: () => void;
// //     };
// //     omnidim_questions?: string[];
// //   }
// // }

// // export default function FindAFriendStartPage() {
// //   useEffect(() => {
// //     // Load widget script only once
// //     if (!document.getElementById("omnidimension-web-widget")) {
// //       const script = document.createElement("script");
// //       script.id = "omnidimension-web-widget";
// //       script.src =
// //         "https://backend.omnidim.io/web_widget.js?secret_key=361e3981b914315017114222bb406ec9";
// //       script.async = true;
// //       document.body.appendChild(script);
// //     }

// //     // Send questions to global window
// //     window.omnidim_questions = questions;
// //   }, []);

// //   const startTest = () => {
// //     if (window.OmnidimensionWidget?.open) {
// //       window.OmnidimensionWidget.open();
// //     } else {
// //       alert("Widget not ready yet. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <button
// //         onClick={startTest}
// //         className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700"
// //       >
// //         Start FindAFriend Test
// //       </button>
// //     </div>
// //   );
// // }


// "use client"; // must be the first line

// import { useEffect, useState } from "react";
// import { findMatches } from "./matchUtils";

// // Define the quiz questions
// const questions = [
//   "What's your ideal living situation?",
//   "How do you like to spend your free time?",
//   "What's your daily routine like?",
//   "How do you handle conflicts with roommates?",
//   "What are your cleanliness preferences for shared spaces?",
// ];

// // Extend the global window object (for Omnidimension)
// declare global {
//   interface Window {
//     OmnidimensionWidget?: {
//       open: () => void;
//     };
//     omnidim_questions?: string[];
//     onOmnidimFinish?: (answers: string[]) => void;
//   }
// }

// export default function SurveyPage() {
//   const [saved, setSaved] = useState(false);
//   const [matches, setMatches] = useState<any[]>([]);

//   useEffect(() => {
//     // Inject widget script once
//     if (!document.getElementById("omnidimension-web-widget")) {
//       const script = document.createElement("script");
//       script.id = "omnidimension-web-widget";
//       script.async = true;
//       script.src =
//         "https://backend.omnidim.io/web_widget.js?secret_key=361e3981b914315017114222bb406ec9";
//       document.body.appendChild(script);
//     }

//     // Provide the questions to the widget
//     window.omnidim_questions = questions;

//     // Handle quiz completion
//     window.onOmnidimFinish = (answers: string[]) => {
//       const userData = {
//         id: "user_" + Date.now(),
//         name: "Anonymous",
//         preferences: answers,
//         submittedAt: new Date().toISOString(),
//       };

//       localStorage.setItem("findAFriendUser", JSON.stringify(userData));
//       setSaved(true);

//       const matched = findMatches(userData);
//       setMatches(matched);
//       console.log("✅ Matches found:", matched);
//     };
//   }, []);

//   const startQuiz = () => {
//     if (window.OmnidimensionWidget?.open) {
//       window.OmnidimensionWidget.open();
//     } else {
//       alert("Voice agent not loaded. Please wait or refresh.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 space-y-6 bg-white">
//       <h1 className="text-2xl font-semibold text-gray-800">
//         FindAFriend Voice Quiz
//       </h1>

//       <button
//         onClick={startQuiz}
//         className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
//       >
//         Start Voice Quiz
//       </button>

//       {saved && <p className="text-green-600">✅ Your answers were saved!</p>}

//       {matches.length > 0 && (
//         <div className="w-full max-w-md mt-6 space-y-4">
//           <h2 className="text-lg font-bold text-gray-700">Top Matches:</h2>
//           <ul className="space-y-2">
//             {matches.map((match) => (
//               <li
//                 key={match.id}
//                 className="p-4 bg-gray-100 rounded shadow-sm flex justify-between items-center"
//               >
//                 <span>{match.name}</span>
//                 <span className="text-blue-600 font-semibold">
//                   {match.matchScore}/5
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { findMatches } from "./matchUtils";

// // Define quiz questions
// const questions = [
//   "What's your ideal living situation?",
//   "How do you like to spend your free time?",
//   "What's your daily routine like?",
//   "How do you handle conflicts with roommates?",
//   "What are your cleanliness preferences for shared spaces?",
// ];

// declare global {
//   interface Window {
//     OmnidimensionWidget?: {
//       open: () => void;
//     };
//     omnidim_questions?: string[];
//     onOmnidimFinish?: (answers: string[]) => void;
//   }
// }

// export default function SurveyPage() {
//   const [matches, setMatches] = useState<any[]>([]);
//   const [quizDone, setQuizDone] = useState(false);

//   useEffect(() => {
//     if (!document.getElementById("omnidimension-web-widget")) {
//       const script = document.createElement("script");
//       script.id = "omnidimension-web-widget";
//       script.async = true;
//       script.src =
//         "https://backend.omnidim.io/web_widget.js?secret_key=daaa166c43f0e3793365b6f9891fc8d6"
//       document.body.appendChild(script);
//     }

//     window.omnidim_questions = questions;

//     // 🎯 On quiz complete → match with dataset
//     window.onOmnidimFinish = (answers: string[]) => {
//       const currentUser = {
//         id: "user_" + Date.now(),
//         preferences: answers,
//       };

//       const matchedUsers = findMatches(currentUser);
//       setMatches(matchedUsers);
//       setQuizDone(true);
//     };
//   }, []);

//   const handleStart = () => {
//     if (window.OmnidimensionWidget?.open) {
//       window.OmnidimensionWidget.open();
//     } else {
//       alert("Voice agent not loaded. Try again in a moment.");
//     }
//   };

//   return (
    
//     <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white space-y-6">
     
    

//       {quizDone && matches.length > 0 && (
//         <div className="mt-8 w-full max-w-lg space-y-4">
//           <h2 className="text-xl font-semibold text-gray-800">
//             🧬 Your Best Roommate Matches:
//           </h2>
//           {matches.map((match) => (
//             <div
//               key={match.id}
//               className="p-4 rounded shadow bg-gray-100 flex justify-between items-center"
//             >
//               <span className="font-medium">{match.name}</span>
//               <span className="text-blue-600 font-semibold">
//                 {match.matchScore}/5
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import { findMatches } from "./matchUtils";

// Define quiz questions
const questions = [
  "What's your ideal living situation?",
  "How do you like to spend your free time?",
  "What's your daily routine like?",
  "How do you handle conflicts with roommates?",
  "What are your cleanliness preferences for shared spaces?",
];

declare global {
  interface Window {
    OmnidimensionWidget?: {
      open: () => void;
    };
    omnidim_questions?: string[];
    onOmnidimFinish?: (answers: string[]) => void;
  }
}

export default function SurveyPage() {
  const [matches, setMatches] = useState<any[]>([]);
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    if (!document.getElementById("omnidimension-web-widget")) {
      const script = document.createElement("script");
      script.id = "omnidimension-web-widget";
      script.async = true;
      script.src =
        "https://backend.omnidim.io/web_widget.js?secret_key=daaa166c43f0e3793365b6f9891fc8d6";
      document.body.appendChild(script);
    }

    window.omnidim_questions = questions;

    window.onOmnidimFinish = (answers: string[]) => {
      const currentUser = {
        id: "user_" + Date.now(),
        preferences: answers,
      };

      const matchedUsers = findMatches(currentUser);
      setMatches(matchedUsers);
      setQuizDone(true);
    };
  }, []);

  const handleStart = () => {
    if (window.OmnidimensionWidget?.open) {
      window.OmnidimensionWidget.open();
    } else {
      alert("Voice agent not loaded. Try again in a moment.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-cover bg-center bg-no-repeat space-y-6"
      style={{
        backgroundImage: `url("/background.jpg")`, // ✅ your background image path
        backgroundPosition: "center",
        backgroundSize: "1800px 850px",
        backgroundColor: "black",
      }}
    >
    

      {quizDone && matches.length > 0 && (
        <div className="mt-8 w-full max-w-lg space-y-4 bg-white bg-opacity-90 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-800">
            🧬 Your Best Roommate Matches:
          </h2>
          {matches.map((match) => (
            <div
              key={match.id}
              className="p-4 rounded bg-gray-100 flex justify-between items-center"
            >
              <span className="font-medium">{match.name}</span>
              <span className="text-blue-600 font-semibold">
                {match.matchScore}/5
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

