
// 1

// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Heart, Users, MessageCircle, Sparkles, ArrowRight } from "lucide-react"
// import Link from "next/link"

// export default function HomePage() {
//   const [email, setEmail] = useState("")

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
//             <Sparkles className="w-8 h-8 text-pink-500" />
//             <h1 className="text-6xl font-bold">FindAFriend</h1>
//           </div>
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//             Connect with amazing women for co-living spaces. Find your perfect roommate match through our AI-powered
//             compatibility system.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Link href="/survey">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
//               >
//                 Start Matching <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>
//             <Link href="/dashboard">
//               <Button variant="outline" size="lg" className="px-8 py-3 rounded-full bg-transparent">
//                 Go to Dashboard
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           <Card className="text-center hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
//               <CardTitle>Smart Matching</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Our AI analyzes compatibility based on lifestyle, interests, and living preferences.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card className="text-center hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//               <CardTitle>Safe Community</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Verified profiles and secure messaging for women seeking trusted roommates.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card className="text-center hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
//               <CardTitle>Easy Communication</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>Built-in chat system to get to know potential roommates before meeting.</CardDescription>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Newsletter Signup */}
//         <Card className="max-w-md mx-auto">
//           <CardHeader className="text-center">
//             <CardTitle>Stay Updated</CardTitle>
//             <CardDescription>Get notified about new matches and features</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex gap-2">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Button>Subscribe</Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }





// 3
 
// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Heart, Users, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function HomePage() {
//   const [email, setEmail] = useState("");

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
//       {/* Top Navbar */}
//       <div className="w-full flex justify-end px-6 py-4">
//         <Link href="/login">
//           <Button variant="outline" className="rounded-full px-6">
//             Login
//           </Button>
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
//             <Sparkles className="w-8 h-8 text-pink-500" />
//             <h1 className="text-6xl font-bold">FindAFriend</h1>
//           </div>
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//             Connect with amazing women for co-living spaces. Find your perfect roommate match through our AI-powered
//             compatibility system.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Link href="/survey">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
//               >
//                 Start Matching <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>
//             <Link href="/dashboard">
//               <Button variant="outline" size="lg" className="px-8 py-3 rounded-full bg-transparent">
//                 Go to Dashboard
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           <Card className="text-center hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
//               <CardTitle>Smart Matching</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Our AI analyzes compatibility based on lifestyle, interests, and living preferences.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card className="text-center hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//               <CardTitle>Safe Community</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Verified profiles and secure messaging for women seeking trusted roommates.
//               </CardDescription>
//             </CardContent>
//           </Card>

//           <Card className="text-center hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
//               <CardTitle>Easy Communication</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription>
//                 Built-in chat system to get to know potential roommates before meeting.
//               </CardDescription>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Newsletter Signup */}
//         <Card className="max-w-md mx-auto">
//           <CardHeader className="text-center">
//             <CardTitle>Stay Updated</CardTitle>
//             <CardDescription>Get notified about new matches and features</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex gap-2">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Button>Subscribe</Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }





// 3
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = () => {
//     // TODO: Replace with actual login logic (e.g., API call or auth service)
//     if (email && password) {
//       router.push("/dashboard");
//     } else {
//       alert("Please enter both email and password.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4">
//       <Card className="w-full max-w-md p-6 shadow-lg">
//         <CardHeader className="text-center">
//           <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
//             Login to FindAFriend
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <Input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" onClick={handleLogin}>
//             Login
//           </Button>
//           <div className="text-sm text-center text-muted-foreground">
//             Don’t have an account? <Link href="/signup" className="underline">Sign up</Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




// 4

// app/page.tsx (Home Page with Login Modal)
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardDescription,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Sparkles, Heart, Users, MessageCircle, ArrowRight, X } from "lucide-react";

// export default function HomePage() {
//   const [email, setEmail] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (loginEmail && loginPassword) {
//       setShowModal(false);
//       router.push("/dashboard");
//     } else {
//       alert("Please enter both email and password");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
//       <div className="container mx-auto px-4 py-6 flex justify-center items-center relative">
//         <div className="text-center">
//           <div className="text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//             FindAFriend
//           </div>
//         </div>
//         <div className="absolute right-6 top-6">
//           <Button onClick={() => setShowModal(true)} variant="outline">
//             Login
//           </Button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-12 text-center">
//         <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//           Find Your Perfect Roommate
//         </h1>
//         <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
//           Connect with amazing women for co-living spaces using AI-powered compatibility.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Link href="/survey">
//             <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
//               Start Matching <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//           </Link>
//           <Link href="/dashboard">
//             <Button variant="outline" size="lg">
//               Go to Dashboard
//             </Button>
//           </Link>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-sm relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
//               onClick={() => setShowModal(false)}
//             >
//               <X className="w-5 h-5" />
//             </button>
//             <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
//             <form onSubmit={handleLogin} className="space-y-4">
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//               />
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//               />
//               <Button type="submit" className="w-full">
//                 Login
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





//..........................................................new................//

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Sparkles } from "lucide-react";

// export default function AuthPage() {
//   const router = useRouter();
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleAuth = () => {
//     if (!email || !password || (!isLogin && (!username || !confirmPassword))) {
//       alert("Please fill all fields.");
//       return;
//     }
//     if (!isLogin && password !== confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }
//     router.push("/home");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4">
//       <Card className="w-full max-w-md p-6 shadow-xl">
//         <CardHeader className="text-center">
//           <div className="flex justify-center items-center gap-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
//             <Sparkles className="w-6 h-6" /> FindAFriend
//           </div>
//           <CardTitle className="text-2xl mt-4">
//             {isLogin ? "Login to your account" : "Create your account"}
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {!isLogin && (
//             <Input
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           )}
//           <Input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {!isLogin && (
//             <Input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           )}
//           {isLogin && (
//             <div className="text-right text-sm text-muted-foreground">
//               <a href="#" className="hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//           )}
//           <Button
//             className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
//             onClick={handleAuth}
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </Button>
//           <div className="text-sm text-center text-muted-foreground">
//             {isLogin ? (
//               <>
//                 Don’t have an account?{' '}
//                 <button
//                   className="underline"
//                   onClick={() => setIsLogin(false)}
//                 >
//                   Sign up
//                 </button>
//               </>
//             ) : (
//               <>
//                 Already have an account?{' '}
//                 <button
//                   className="underline"
//                   onClick={() => setIsLogin(true)}
//                 >
//                   Login
//                 </button>
//               </>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

///............................/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Users, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AuthAndHomePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleAuth = () => {
    if (!email || !password || (!isLogin && (!username || !confirmPassword))) {
      alert("Please fill all fields.");
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4">
        <Card className="w-full max-w-md p-6 shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              <Sparkles className="w-6 h-6" /> FindAFriend
            </div>
            <CardTitle className="text-2xl mt-4">
              {isLogin ? "Login to your account" : "Create your account"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isLogin && (
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isLogin && (
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            {isLogin && (
              <div className="text-right text-sm text-muted-foreground">
                <a href="#" className="hover:underline">
                  Forgot password?
                </a>
              </div>
            )}
            <Button
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              onClick={handleAuth}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            <div className="text-sm text-center text-muted-foreground">
              {isLogin ? (
                <>
                  Don’t have an account?{' '}
                  <button className="underline" onClick={() => setIsLogin(false)}>Sign up</button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button className="underline" onClick={() => setIsLogin(true)}>Login</button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            <Sparkles className="w-8 h-8 text-pink-500" />
            <h1 className="text-6xl font-bold">FindAFriend</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with amazing women for co-living spaces. Find your perfect roommate match through our AI-powered
            compatibility system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/survey">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
              >
                Start Matching <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-full bg-transparent">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <CardTitle>Smart Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our AI analyzes compatibility based on lifestyle, interests, and living preferences.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Safe Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Verified profiles and secure messaging for women seeking trusted roommates.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Easy Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built-in chat system to get to know potential roommates before meeting.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Stay Updated</CardTitle>
            <CardDescription>Get notified about new matches and features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
