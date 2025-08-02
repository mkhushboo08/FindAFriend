// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Skeleton } from "@/components/ui/skeleton"
// import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
// import { Separator } from "@/components/ui/separator"

// export default function MatchesListLoading() {
//   return (
//     <SidebarInset>
//       <header className="flex h-16 shrink-0 items-center gap-2">
//         <div className="flex items-center gap-2 px-4">
//           <SidebarTrigger className="-ml-1" />
//           <Separator orientation="vertical" className="mr-2 h-4" />
//           <Skeleton className="h-4 w-32" />
//         </div>
//       </header>

//       <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//         <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
//           <div className="max-w-6xl mx-auto space-y-6">
//             <div className="flex items-center justify-between">
//               <div className="space-y-2">
//                 <Skeleton className="h-8 w-48" />
//                 <Skeleton className="h-4 w-64" />
//               </div>
//               <Skeleton className="h-8 w-24" />
//             </div>

//             <Card>
//               <CardContent className="p-4">
//                 <Skeleton className="h-10 w-full" />
//               </CardContent>
//             </Card>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <Card key={i}>
//                   <CardHeader>
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center gap-4">
//                         <Skeleton className="w-16 h-16 rounded-full" />
//                         <div className="space-y-2">
//                           <Skeleton className="h-6 w-32" />
//                           <Skeleton className="h-4 w-24" />
//                         </div>
//                       </div>
//                       <div className="space-y-2">
//                         <Skeleton className="h-6 w-20" />
//                         <Skeleton className="h-6 w-16" />
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <Skeleton className="h-4 w-full" />
//                     <Skeleton className="h-4 w-3/4" />
//                     <div className="flex gap-2">
//                       <Skeleton className="h-6 w-16" />
//                       <Skeleton className="h-6 w-20" />
//                       <Skeleton className="h-6 w-18" />
//                     </div>
//                     <Skeleton className="h-10 w-full" />
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </SidebarInset>
//   )
// }








"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, MessageCircle, TrendingUp, MapPin } from "lucide-react";
import Link from "next/link";

export default function DashboardSections() {
  const matches = [
    { name: "Sarah Chen", age: 24, location: "Mumbai", compatibility: 95 },
    { name: "Maya Patel", age: 26, location: "Delhi", compatibility: 88 },
    { name: "Emma Rodriguez", age: 23, location: "Bangalore", compatibility: 82 },
  ];

  return (
    <>
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Get started with these popular features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/survey">
              <Button className="w-full h-20 flex flex-col gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <Heart className="h-6 w-6" />
                Start Matching
              </Button>
            </Link>

            <Link href="/chats">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2 bg-transparent">
                <MessageCircle className="h-6 w-6" />
                View Chats
              </Button>
            </Link>

            <Link href="/profile">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2 bg-transparent">
                <Users className="h-6 w-6" />
                Edit Profile
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Profile Completion */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Completion</CardTitle>
          <CardDescription>Complete your profile to get better matches</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Profile Completion</span>
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Basic Info ✓</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Photos ✓</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Preferences ✓</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Verification Pending</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Matches */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Matches</CardTitle>
          <CardDescription>Your latest potential roommates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {matches.map((match, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow min-h-[100px]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {match.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {match.name}, {match.age}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {match.location}
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{match.compatibility}%</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="min-h-[160px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Success Stories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">89%</div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                "Found my perfect roommate in just 2 weeks!" - Jessica M.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="min-h-[160px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Upcoming Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Video Chat Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Roommate Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Group Living Options</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

