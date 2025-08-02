// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
// import { Separator } from "@/components/ui/separator"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Heart, MapPin, Briefcase, Phone, Mail, MessageCircle, Search } from "lucide-react"

// const mockMatches = [
//   {
//     id: 1,
//     name: "Sarah Chen",
//     age: 24,
//     occupation: "Software Engineer",
//     location: "Downtown San Francisco, CA",
//     phone: "+1 (555) 234-5678",
//     email: "sarah.chen@email.com",
//     compatibility: 95,
//     interests: ["Yoga", "Cooking", "Reading", "Hiking"],
//     bio: "Love creating a cozy home environment. I'm clean, respectful, and enjoy having meaningful conversations over coffee.",
//     matchedDate: "2024-01-15",
//     status: "mutual",
//   },
//   {
//     id: 2,
//     name: "Maya Patel",
//     age: 26,
//     occupation: "Marketing Manager",
//     location: "Mission District, San Francisco, CA",
//     phone: "+1 (555) 345-6789",
//     email: "maya.patel@email.com",
//     compatibility: 88,
//     interests: ["Fitness", "Travel", "Photography", "Wine tasting"],
//     bio: "Looking for a roommate who's career-focused but knows how to have fun. I love hosting small gatherings.",
//     matchedDate: "2024-01-12",
//     status: "mutual",
//   },
//   {
//     id: 3,
//     name: "Emma Rodriguez",
//     age: 23,
//     occupation: "Graphic Designer",
//     location: "Castro District, San Francisco, CA",
//     phone: "+1 (555) 456-7890",
//     email: "emma.rodriguez@email.com",
//     compatibility: 82,
//     interests: ["Art", "Music", "Sustainable living", "Meditation"],
//     bio: "Creative soul seeking a peaceful living space. I'm into sustainable living and love decorating our shared spaces beautifully.",
//     matchedDate: "2024-01-10",
//     status: "mutual",
//   },
//   {
//     id: 4,
//     name: "Zoe Kim",
//     age: 27,
//     occupation: "Data Scientist",
//     location: "SOMA, San Francisco, CA",
//     phone: "+1 (555) 567-8901",
//     email: "zoe.kim@email.com",
//     compatibility: 79,
//     interests: ["Tech", "Board games", "Coffee", "Running"],
//     bio: "Tech professional who values work-life balance. I'm organized, quiet during work hours, but love weekend adventures.",
//     matchedDate: "2024-01-08",
//     status: "liked",
//   },
//   {
//     id: 5,
//     name: "Lily Thompson",
//     age: 25,
//     occupation: "Teacher",
//     location: "Richmond District, San Francisco, CA",
//     phone: "+1 (555) 678-9012",
//     email: "lily.thompson@email.com",
//     compatibility: 76,
//     interests: ["Books", "Gardening", "Baking", "Movies"],
//     bio: "Elementary school teacher who loves creating a warm, welcoming home. I enjoy quiet evenings and weekend brunches.",
//     matchedDate: "2024-01-05",
//     status: "mutual",
//   },
// ]

// export default function MatchesListPage() {
//   const [matches, setMatches] = useState(mockMatches)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterStatus, setFilterStatus] = useState("all")

//   const filteredMatches = matches.filter((match) => {
//     const matchesSearch =
//       match.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       match.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       match.location.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesFilter = filterStatus === "all" || match.status === filterStatus

//     return matchesSearch && matchesFilter
//   })

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "mutual":
//         return "bg-green-100 text-green-800"
//       case "liked":
//         return "bg-blue-100 text-blue-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   const getStatusText = (status: string) => {
//     switch (status) {
//       case "mutual":
//         return "Mutual Match"
//       case "liked":
//         return "You Liked"
//       default:
//         return "Pending"
//     }
//   }

//   return (
//     <SidebarInset>
//       <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
//         <div className="flex items-center gap-2 px-4">
//           <SidebarTrigger className="-ml-1" />
//           <Separator orientation="vertical" className="mr-2 h-4" />
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem className="hidden md:block">
//                 <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator className="hidden md:block" />
//               <BreadcrumbItem>
//                 <BreadcrumbPage>Matches</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </header>

//       <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//         <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
//           <div className="max-w-6xl mx-auto space-y-6">
//             {/* Header */}
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//                   Your Matches
//                 </h1>
//                 <p className="text-muted-foreground">Connect with potential roommates you've liked</p>
//               </div>
//               <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">{filteredMatches.length} Matches</Badge>
//             </div>

//             {/* Search and Filter */}
//             <Card>
//               <CardContent className="p-4">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <div className="flex-1 relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
//                     <Input
//                       placeholder="Search by name, occupation, or location..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="pl-10"
//                     />
//                   </div>
//                   <div className="flex gap-2">
//                     <Button
//                       variant={filterStatus === "all" ? "default" : "outline"}
//                       onClick={() => setFilterStatus("all")}
//                       size="sm"
//                     >
//                       All
//                     </Button>
//                     <Button
//                       variant={filterStatus === "mutual" ? "default" : "outline"}
//                       onClick={() => setFilterStatus("mutual")}
//                       size="sm"
//                     >
//                       Mutual
//                     </Button>
//                     <Button
//                       variant={filterStatus === "liked" ? "default" : "outline"}
//                       onClick={() => setFilterStatus("liked")}
//                       size="sm"
//                     >
//                       Liked
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Matches Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {filteredMatches.map((match) => (
//                 <Card key={match.id} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center gap-4">
//                         <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
//                           {match.name
//                             .split(" ")
//                             .map((n) => n[0])
//                             .join("")}
//                         </div>
//                         <div>
//                           <CardTitle className="text-xl">
//                             {match.name}, {match.age}
//                           </CardTitle>
//                           <div className="flex items-center gap-2 text-muted-foreground">
//                             <Briefcase className="w-4 h-4" />
//                             <span className="text-sm">{match.occupation}</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex flex-col items-end gap-2">
//                         <Badge className={getStatusColor(match.status)}>{getStatusText(match.status)}</Badge>
//                         <Badge className="bg-blue-100 text-blue-800">{match.compatibility}% Match</Badge>
//                       </div>
//                     </div>
//                   </CardHeader>

//                   <CardContent className="space-y-4">
//                     <div className="flex items-center gap-2 text-muted-foreground">
//                       <MapPin className="w-4 h-4" />
//                       <span className="text-sm">{match.location}</span>
//                     </div>

//                     <p className="text-sm text-muted-foreground">{match.bio}</p>

//                     <div>
//                       <h4 className="font-medium mb-2">Interests</h4>
//                       <div className="flex flex-wrap gap-1">
//                         {match.interests.map((interest, index) => (
//                           <Badge key={index} variant="secondary" className="text-xs">
//                             {interest}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>

//                     {match.status === "mutual" && (
//                       <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
//                         <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Contact Information</h4>
//                         <div className="space-y-1 text-sm">
//                           <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
//                             <Phone className="w-3 h-3" />
//                             <span>{match.phone}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
//                             <Mail className="w-3 h-3" />
//                             <span>{match.email}</span>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     <div className="flex gap-2 pt-2">
//                       {match.status === "mutual" ? (
//                         <Button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
//                           <MessageCircle className="w-4 h-4 mr-2" />
//                           Start Chat
//                         </Button>
//                       ) : (
//                         <Button variant="outline" className="flex-1 bg-transparent" disabled>
//                           <Heart className="w-4 h-4 mr-2" />
//                           Waiting for Response
//                         </Button>
//                       )}
//                       <Button variant="outline" size="sm">
//                         View Profile
//                       </Button>
//                     </div>

//                     <div className="text-xs text-muted-foreground text-center">
//                       Matched on {new Date(match.matchedDate).toLocaleDateString()}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {filteredMatches.length === 0 && (
//               <Card>
//                 <CardContent className="text-center py-12">
//                   <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold mb-2">No matches found</h3>
//                   <p className="text-muted-foreground mb-4">
//                     {searchTerm ? "Try adjusting your search terms" : "Start swiping to find your perfect roommate!"}
//                   </p>
//                   <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
//                     Start Matching
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </SidebarInset>
//   )
// }












"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BestieMatchPage() {
  const [showReport, setShowReport] = useState(false);

  if (!showReport) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">FindAFriend Match</h1>
        <p className="text-gray-600 mb-6 text-lg max-w-xl">
          Click below to generate your Bestie Vibes compatibility result based on your roommate test.
        </p>
        <Button onClick={() => setShowReport(true)} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg">
          Show Match Result
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-center text-[#5c2a4a] font-comic p-6" >
      <div className="backdrop-blur-md bg-pink-200/50 rounded-xl p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">💖 Bestie Vibes Report</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-pink-100 p-4 rounded-xl">
            <h4 className="font-bold mb-2">Your Vibe</h4>
            <p><strong>Name:</strong> You</p>
            <p><strong>Wake Time:</strong> Early Bird ☀</p>
            <p><strong>Cleanliness:</strong> Tidy Queen 🫼</p>
            <p><strong>Social Preference:</strong> Soft Introvert</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-xl">
            <h4 className="font-bold mb-2">Roomie Match</h4>
            <p><strong>Name:</strong> Aanya Sharma</p>
            <p><strong>Wake Time:</strong> Early Bird</p>
            <p><strong>Cleanliness:</strong> Neat & Balanced</p>
            <p><strong>Social Preference:</strong> Friendly Ambivert</p>
          </div>
        </div>

        <div className="bg-pink-300 p-4 rounded-xl mb-6">
          <h4 className="font-bold mb-2">Compatibility Score</h4>
          <div className="w-full bg-pink-100 rounded-full h-4">
            <div className="bg-pink-500 h-4 rounded-full text-white text-sm text-center" style={{ width: "86%" }}>
              86% - Roomie Goals 💕
            </div>
          </div>
        </div>

        <div className="bg-pink-100 p-4 rounded-xl">
          <h4 className="font-bold mb-2">What You Both Slay At</h4>
          <ul className="list-disc list-inside">
            <li>Early riser energy</li>
            <li>Keeping it cute and clean</li>
          </ul>

          <h4 className="mt-4 font-bold mb-2">Tiny Differences (But Cute!)</h4>
          <ul className="list-disc list-inside">
            <li>You’re introverted and she’s a friendly floof — perfect balance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}