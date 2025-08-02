// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Mic, MicOff, Volume2, VolumeX, ArrowRight, ArrowLeft } from "lucide-react"
// import { useRouter } from "next/navigation"

// const questions = [
//   "What's your ideal living situation? Describe your perfect home environment.",
//   "How do you like to spend your free time? What are your hobbies and interests?",
//   "What's your daily routine like? Are you a morning person or night owl?",
//   "How do you handle conflicts or disagreements with roommates?",
//   "What are your cleanliness and organization preferences for shared spaces?",
// ]

// export default function SurveyPage() {
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [isRecording, setIsRecording] = useState(false)
//   const [isSpeaking, setIsSpeaking] = useState(false)
//   const [responses, setResponses] = useState<string[]>([])
//   const [currentResponse, setCurrentResponse] = useState("")
//   const router = useRouter()

//   const progress = ((currentQuestion + 1) / questions.length) * 100

//   useEffect(() => {
//     // Speak the question when it changes
//     speakQuestion(questions[currentQuestion])
//   }, [currentQuestion])

//   const speakQuestion = (text: string) => {
//     if ("speechSynthesis" in window) {
//       setIsSpeaking(true)
//       const utterance = new SpeechSynthesisUtterance(text)
//       utterance.rate = 0.8
//       utterance.pitch = 1
//       utterance.onend = () => setIsSpeaking(false)
//       speechSynthesis.speak(utterance)
//     }
//   }

//   const stopSpeaking = () => {
//     if ("speechSynthesis" in window) {
//       speechSynthesis.cancel()
//       setIsSpeaking(false)
//     }
//   }

//   const startRecording = () => {
//     if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
//       const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
//       const recognition = new SpeechRecognition()

//       recognition.continuous = true
//       recognition.interimResults = true
//       recognition.lang = "en-US"

//       recognition.onstart = () => {
//         setIsRecording(true)
//       }

//       recognition.onresult = (event: any) => {
//         let finalTranscript = ""
//         for (let i = event.resultIndex; i < event.results.length; i++) {
//           if (event.results[i].isFinal) {
//             finalTranscript += event.results[i][0].transcript
//           }
//         }
//         if (finalTranscript) {
//           setCurrentResponse(finalTranscript)
//         }
//       }

//       recognition.onerror = () => {
//         setIsRecording(false)
//       }

//       recognition.onend = () => {
//         setIsRecording(false)
//       }

//       recognition.start()
//     } else {
//       alert("Speech recognition not supported in this browser")
//     }
//   }

//   const stopRecording = () => {
//     if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
//       setIsRecording(false)
//     }
//   }

//   const nextQuestion = () => {
//     const newResponses = [...responses]
//     newResponses[currentQuestion] = currentResponse
//     setResponses(newResponses)
//     setCurrentResponse("")

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1)
//     } else {
//       // Survey complete, go to results
//       router.push("/results")
//     }
//   }

//   const previousQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1)
//       setCurrentResponse(responses[currentQuestion - 1] || "")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4">
//       <div className="container mx-auto max-w-2xl py-8">
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//               Voice Survey
//             </h1>
//             <div className="text-sm text-gray-600 dark:text-gray-300">
//               {currentQuestion + 1} of {questions.length}
//             </div>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </div>

//         <Card className="mb-8">
//           <CardHeader>
//             <div className="flex items-center justify-between">
//               <CardTitle className="text-xl">Question {currentQuestion + 1}</CardTitle>
//               <div className="flex gap-2">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={isSpeaking ? stopSpeaking : () => speakQuestion(questions[currentQuestion])}
//                 >
//                   {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
//                 </Button>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <CardDescription className="text-lg mb-6">{questions[currentQuestion]}</CardDescription>

//             <div className="space-y-4">
//               <div className="flex justify-center">
//                 <Button
//                   size="lg"
//                   variant={isRecording ? "destructive" : "default"}
//                   onClick={isRecording ? stopRecording : startRecording}
//                   className="rounded-full w-20 h-20"
//                 >
//                   {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
//                 </Button>
//               </div>

//               {isRecording && (
//                 <div className="text-center">
//                   <div className="inline-flex items-center gap-2 text-red-500">
//                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                     Recording... Speak now
//                   </div>
//                 </div>
//               )}

//               {currentResponse && (
//                 <Card className="bg-gray-50 dark:bg-gray-800">
//                   <CardContent className="pt-4">
//                     <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Your response:</p>
//                     <p>{currentResponse}</p>
//                   </CardContent>
//                 </Card>
//               )}
//             </div>
//           </CardContent>
//         </Card>

//         <div className="flex justify-between">
//           <Button variant="outline" onClick={previousQuestion} disabled={currentQuestion === 0}>
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Previous
//           </Button>

//           <Button
//             onClick={nextQuestion}
//             disabled={!currentResponse}
//             className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
//           >
//             {currentQuestion === questions.length - 1 ? "Complete Survey" : "Next Question"}
//             <ArrowRight className="w-4 h-4 ml-2" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

/**** */

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Mic,
//   MicOff,
//   Volume2,
//   VolumeX,
//   ArrowRight,
//   ArrowLeft,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";

// const questions = [
//   "What's your ideal living situation? Describe your perfect home environment.",
//   "How do you like to spend your free time? What are your hobbies and interests?",
//   "What's your daily routine like? Are you a morning person or night owl?",
//   "How do you handle conflicts or disagreements with roommates?",
//   "What are your cleanliness and organization preferences for shared spaces?",
// ];

// export default function SurveyPage() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [isRecording, setIsRecording] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [responses, setResponses] = useState<string[]>([]);
//   const [currentResponse, setCurrentResponse] = useState("");
//   const router = useRouter();

//   const progress = ((currentQuestion + 1) / questions.length) * 100;

//   // ✅ Inject the Omnidimension script widget
//   useEffect(() => {
//     const scriptId = "omnidimension-web-widget";

//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.src =
//         "https://backend.omnidim.io/web_widget.js?secret_key=4acdcd7a77569c636de64cbff3e2ab0e";
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     return () => {
//       const script = document.getElementById(scriptId);
//       if (script) script.remove();
//     };
//   }, []);

//   useEffect(() => {
//     speakQuestion(questions[currentQuestion]);
//   }, [currentQuestion]);

//   const speakQuestion = (text: string) => {
//     if ("speechSynthesis" in window) {
//       setIsSpeaking(true);
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.rate = 0.8;
//       utterance.pitch = 1;
//       utterance.onend = () => setIsSpeaking(false);
//       speechSynthesis.speak(utterance);
//     }
//   };

//   const stopSpeaking = () => {
//     if ("speechSynthesis" in window) {
//       speechSynthesis.cancel();
//       setIsSpeaking(false);
//     }
//   };

//   const startRecording = () => {
//     if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
//       const SpeechRecognition =
//         (window as any).webkitSpeechRecognition ||
//         (window as any).SpeechRecognition;
//       const recognition = new SpeechRecognition();

//       recognition.continuous = true;
//       recognition.interimResults = true;
//       recognition.lang = "en-US";

//       recognition.onstart = () => setIsRecording(true);

//       recognition.onresult = (event: any) => {
//         let finalTranscript = "";
//         for (let i = event.resultIndex; i < event.results.length; i++) {
//           if (event.results[i].isFinal) {
//             finalTranscript += event.results[i][0].transcript;
//           }
//         }
//         if (finalTranscript) {
//           setCurrentResponse(finalTranscript);
//         }
//       };

//       recognition.onerror = () => setIsRecording(false);
//       recognition.onend = () => setIsRecording(false);

//       recognition.start();
//     } else {
//       alert("Speech recognition not supported in this browser");
//     }
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
//       const recognition = new (window as any).webkitSpeechRecognition(); // dummy instance to stop
//       recognition.abort();
//     }
//   };

//   const nextQuestion = () => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = currentResponse;
//     setResponses(newResponses);
//     setCurrentResponse("");

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       router.push("/results");
//     }
//   };

//   const previousQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setCurrentResponse(responses[currentQuestion - 1] || "");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4">
//       <div className="container mx-auto max-w-2xl py-8">
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//               Voice Survey
//             </h1>
//             <div className="text-sm text-gray-600 dark:text-gray-300">
//               {currentQuestion + 1} of {questions.length}
//             </div>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </div>

//         <Card className="mb-8">
//           <CardHeader>
//             <div className="flex items-center justify-between">
//               <CardTitle className="text-xl">
//                 Question {currentQuestion + 1}
//               </CardTitle>
//               <div className="flex gap-2">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={
//                     isSpeaking
//                       ? stopSpeaking
//                       : () => speakQuestion(questions[currentQuestion])
//                   }
//                 >
//                   {isSpeaking ? (
//                     <VolumeX className="w-4 h-4" />
//                   ) : (
//                     <Volume2 className="w-4 h-4" />
//                   )}
//                 </Button>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <CardDescription className="text-lg mb-6">
//               {questions[currentQuestion]}
//             </CardDescription>

//             <div className="space-y-4">
//               <div className="flex justify-center">
//                 <Button
//                   size="lg"
//                   variant={isRecording ? "destructive" : "default"}
//                   onClick={isRecording ? stopRecording : startRecording}
//                   className="rounded-full w-20 h-20"
//                 >
//                   {isRecording ? (
//                     <MicOff className="w-8 h-8" />
//                   ) : (
//                     <Mic className="w-8 h-8" />
//                   )}
//                 </Button>
//               </div>

//               {isRecording && (
//                 <div className="text-center">
//                   <div className="inline-flex items-center gap-2 text-red-500">
//                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                     Recording... Speak now
//                   </div>
//                 </div>
//               )}

//               {currentResponse && (
//                 <Card className="bg-gray-50 dark:bg-gray-800">
//                   <CardContent className="pt-4">
//                     <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
//                       Your response:
//                     </p>
//                     <p>{currentResponse}</p>
//                   </CardContent>
//                 </Card>
//               )}
//             </div>
//           </CardContent>
//         </Card>

//         <div className="flex justify-between">
//           <Button
//             variant="outline"
//             onClick={previousQuestion}
//             disabled={currentQuestion === 0}
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Previous
//           </Button>

//           <Button
//             onClick={nextQuestion}
//             disabled={!currentResponse}
//             className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
//           >
//             {currentQuestion === questions.length - 1
//               ? "Complete Survey"
//               : "Next Question"}
//             <ArrowRight className="w-4 h-4 ml-2" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

//..........................//
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { ArrowRight, ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";

// const questions = [
//   "What's your ideal living situation? Describe your perfect home environment.",
//   "How do you like to spend your free time? What are your hobbies and interests?",
//   "What's your daily routine like? Are you a morning person or night owl?",
//   "How do you handle conflicts or disagreements with roommates?",
//   "What are your cleanliness and organization preferences for shared spaces?",
// ];

// export default function SurveyPage() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [responses, setResponses] = useState<string[]>([]);
//   const [currentResponse, setCurrentResponse] = useState("");
//   const router = useRouter();

//   const progress = ((currentQuestion + 1) / questions.length) * 100;

//   // ✅ Inject Omnidimension Widget Script
//   useEffect(() => {
//     const scriptId = "omnidimension-web-widget";
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.async = true;
//       script.src =
//         "https://backend.omnidim.io/web_widget.js?secret_key=4acdcd7a77569c636de64cbff3e2ab0e";
//       document.body.appendChild(script);
//     }
//   }, []);

//   const nextQuestion = () => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = currentResponse;
//     setResponses(newResponses);
//     setCurrentResponse("");

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       router.push("/results");
//     }
//   };

//   const previousQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setCurrentResponse(responses[currentQuestion - 1] || "");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4">
//       <div className="container mx-auto max-w-2xl py-8">
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//               Survey
//             </h1>
//             <div className="text-sm text-gray-600 dark:text-gray-300">
//               {currentQuestion + 1} of {questions.length}
//             </div>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </div>

//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle className="text-xl">
//               Question {currentQuestion + 1}
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <CardDescription className="text-lg mb-6">
//               {questions[currentQuestion]}
//             </CardDescription>
//             <textarea
//               className="w-full h-28 p-3 rounded-md border dark:bg-gray-800 dark:text-white"
//               placeholder="Type your answer here..."
//               value={currentResponse}
//               onChange={(e) => setCurrentResponse(e.target.value)}
//             />
//           </CardContent>
//         </Card>

//         <div className="flex justify-between">
//           <Button
//             variant="outline"
//             onClick={previousQuestion}
//             disabled={currentQuestion === 0}
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Previous
//           </Button>

//           <Button
//             onClick={nextQuestion}
//             disabled={!currentResponse}
//             className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
//           >
//             {currentQuestion === questions.length - 1
//               ? "Complete Survey"
//               : "Next Question"}
//             <ArrowRight className="w-4 h-4 ml-2" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Heart } from "lucide-react";

// // Define the questions as global context
// const questions = [
//   "What's your ideal living situation?",
//   "How do you like to spend your free time?",
//   "What's your daily routine like?",
//   "How do you handle conflicts with roommates?",
//   "What are your cleanliness preferences for shared spaces?",
// ];

// // Extend the global Window type (TypeScript fix)
// declare global {
//   interface Window {
//     OmnidimensionWidget?: {
//       open: () => void;
//     };
//     omnidim_questions?: string[];
//   }
// }

// export default function FindAFriendStartPage() {
//   useEffect(() => {
//     const scriptId = "omnidimension-web-widget";

//     // Inject Omnidimension widget script only once
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.async = true;
//       script.src =
//         "https://backend.omnidim.io/web_widget.js?secret_key=4acdcd7a77569c636de64cbff3e2ab0e";
//       document.body.appendChild(script);
//     }

//     // Set global context for the voice agent
//     window.omnidim_questions = questions;
//   }, []);

//   const handleStart = () => {
//     if (window.OmnidimensionWidget?.open) {
//       window.OmnidimensionWidget.open();
//     } else {
//       alert("Voice agent not loaded. Please wait a moment or refresh.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-50 to-purple-100 dark:from-gray-900 dark:to-black p-4">
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-bold text-pink-600 mb-2">FindAFriend</h1>
//         <p className="text-gray-700 dark:text-gray-300">
//           Click below to start your roommate compatibility test.
//         </p>
//       </div>

//       <Button
//         onClick={handleStart}
//         size="lg"
//         className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg"
//       >
//         <Heart className="w-5 h-5 mr-2" />
//         Start FindAFriend Test
//       </Button>
//     </div>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Heart } from "lucide-react";

// // Define the questions as global context
// const questions = [
//   "What's your ideal living situation?",
//   "How do you like to spend your free time?",
//   "What's your daily routine like?",
//   "How do you handle conflicts with roommates?",
//   "What are your cleanliness preferences for shared spaces?",
// ];

// // Extend the global Window type (TypeScript fix)
// declare global {
//   interface Window {
//     OmnidimensionWidget?: {
//       open: () => void;
//     };
//     omnidim_questions?: string[];
//   }
// }

// export default function FindAFriendStartPage() {
//   useEffect(() => {
//     const scriptId = "omnidimension-web-widget";

//     // Inject Omnidimension widget script only once
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.async = true;
//       script.src =
//         "https://backend.omnidim.io/web_widget.js?secret_key=4acdcd7a77569c636de64cbff3e2ab0e";
//       document.body.appendChild(script);
//     }

//     // Set global context for the voice agent
//     window.omnidim_questions = questions;
//   }, []);

//   const handleStart = () => {
//     if (window.OmnidimensionWidget?.open) {
//       window.OmnidimensionWidget.open();
//     } else {
//       alert("Voice agent not loaded. Please wait a moment or refresh.");
//     }
//   };

//   return (
//     <div
//       className="relative flex items-end justify-end w-full h-screen bg-no-repeat bg-cover bg-center"
//       //style={{ backgroundImage: 'url("/background.jpg")' }}
//       style={{
//         backgroundImage: 'url("/background.jpg")',
//         backgroundSize: "1500px 700px",
//         backgroundColor: "black",// 🎯 Width x Height
//       }}
//     >
//       <div className="m-6">
//         {/* <Button
//           onClick={handleStart}
//           size="lg"
//           className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg"
//         >
//           <Heart className="w-5 h-5 mr-2" />
//           Start FindAFriend Test
//         </Button> */}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Define the questions as global context
const questions = [
  "What's your ideal living situation?",
  "How do you like to spend your free time?",
  "What's your daily routine like?",
  "How do you handle conflicts with roommates?",
  "What are your cleanliness preferences for shared spaces?",
];

// Extend the global Window type (TypeScript fix)
declare global {
  interface Window {
    OmnidimensionWidget?: {
      open: () => void;
    };
    omnidim_questions?: string[];
  }
}

export default function FindAFriendStartPage() {
  useEffect(() => {
    const scriptId = "omnidimension-web-widget";

    // Inject updated Omnidimension widget script only once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src =
        "https://backend.omnidim.io/web_widget.js?secret_key=361e3981b914315017114222bb406ec9"; // ✅ Updated secret key
      document.body.appendChild(script);
    }

    // Set global questions for widget
    window.omnidim_questions = questions;
  }, []);

  const handleStart = () => {
    if (window.OmnidimensionWidget?.open) {
      window.OmnidimensionWidget.open();
    } else {
      alert("Voice agent not loaded. Please wait a moment or refresh.");
    }
  };

  return (
    <div
      className="relative flex items-end justify-end w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "1800px 850px",
        backgroundColor: "black",
      }}
    >
      <div className="m-6">
        {/* <Button
          onClick={handleStart}
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg"
        >
          <Heart className="w-5 h-5 mr-2" />
          Start FindAFriend Test
        </Button> */}
      </div>
    </div>
  );
}
