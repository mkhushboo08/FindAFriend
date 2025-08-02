// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
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
// import { User, MapPin, Briefcase, Phone, Mail, Plus, X, Save } from "lucide-react"

// export default function ProfilePage() {
//   const [profile, setProfile] = useState({
//     name: "Jessica Smith",
//     age: "25",
//     occupation: "UX Designer",
//     city: "San Francisco, CA",
//     phone: "+1 (555) 123-4567",
//     email: "jessica.smith@email.com",
//     bio: "Creative professional looking for a clean, friendly roommate to share a beautiful apartment in the city. I love cooking, yoga, and exploring new neighborhoods.",
//     hobbies: ["Yoga", "Cooking", "Photography", "Hiking", "Reading"],
//   })

//   const [newHobby, setNewHobby] = useState("")
//   const [isEditing, setIsEditing] = useState(false)

//   const handleInputChange = (field: string, value: string) => {
//     setProfile((prev) => ({ ...prev, [field]: value }))
//   }

//   const addHobby = () => {
//     if (newHobby.trim() && !profile.hobbies.includes(newHobby.trim())) {
//       setProfile((prev) => ({
//         ...prev,
//         hobbies: [...prev.hobbies, newHobby.trim()],
//       }))
//       setNewHobby("")
//     }
//   }

//   const removeHobby = (hobby: string) => {
//     setProfile((prev) => ({
//       ...prev,
//       hobbies: prev.hobbies.filter((h) => h !== hobby),
//     }))
//   }

//   const handleSave = () => {
//     setIsEditing(false)
//     // Here you would typically save to a backend
//     console.log("Profile saved:", profile)
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
//                 <BreadcrumbPage>Profile</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </header>

//       <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//         <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
//           <div className="max-w-4xl mx-auto space-y-8">
//             {/* Header */}
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//                   My Profile
//                 </h1>
//                 <p className="text-muted-foreground">Manage your personal information and preferences</p>
//               </div>
//               <div className="flex gap-2">
//                 {isEditing ? (
//                   <>
//                     <Button onClick={handleSave} className="bg-gradient-to-r from-pink-500 to-purple-600">
//                       <Save className="w-4 h-4 mr-2" />
//                       Save Changes
//                     </Button>
//                     <Button variant="outline" onClick={() => setIsEditing(false)}>
//                       Cancel
//                     </Button>
//                   </>
//                 ) : (
//                   <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
//                 )}
//               </div>
//             </div>

//             {/* Profile Photo */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <User className="w-5 h-5" />
//                   Profile Photo
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center gap-6">
//                   <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
//                     {profile.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </div>
//                   <div className="space-y-2">
//                     <p className="text-sm text-muted-foreground">
//                       Upload a clear photo of yourself to help others recognize you
//                     </p>
//                     <Button variant="outline" size="sm">
//                       Upload Photo
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Basic Information */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Basic Information</CardTitle>
//                 <CardDescription>Your personal details and contact information</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name">Full Name</Label>
//                     <Input
//                       id="name"
//                       value={profile.name}
//                       onChange={(e) => handleInputChange("name", e.target.value)}
//                       disabled={!isEditing}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="age">Age</Label>
//                     <Input
//                       id="age"
//                       value={profile.age}
//                       onChange={(e) => handleInputChange("age", e.target.value)}
//                       disabled={!isEditing}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="occupation">Occupation</Label>
//                     <div className="flex items-center gap-2">
//                       <Briefcase className="w-4 h-4 text-muted-foreground" />
//                       <Input
//                         id="occupation"
//                         value={profile.occupation}
//                         onChange={(e) => handleInputChange("occupation", e.target.value)}
//                         disabled={!isEditing}
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="city">City</Label>
//                     <div className="flex items-center gap-2">
//                       <MapPin className="w-4 h-4 text-muted-foreground" />
//                       <Input
//                         id="city"
//                         value={profile.city}
//                         onChange={(e) => handleInputChange("city", e.target.value)}
//                         disabled={!isEditing}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="bio">Bio</Label>
//                   <Textarea
//                     id="bio"
//                     value={profile.bio}
//                     onChange={(e) => handleInputChange("bio", e.target.value)}
//                     disabled={!isEditing}
//                     rows={4}
//                     placeholder="Tell others about yourself, your lifestyle, and what you're looking for in a roommate..."
//                   />
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Contact Information */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Contact Information</CardTitle>
//                 <CardDescription>How potential roommates can reach you</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <div className="flex items-center gap-2">
//                       <Phone className="w-4 h-4 text-muted-foreground" />
//                       <Input
//                         id="phone"
//                         value={profile.phone}
//                         onChange={(e) => handleInputChange("phone", e.target.value)}
//                         disabled={!isEditing}
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email Address</Label>
//                     <div className="flex items-center gap-2">
//                       <Mail className="w-4 h-4 text-muted-foreground" />
//                       <Input
//                         id="email"
//                         value={profile.email}
//                         onChange={(e) => handleInputChange("email", e.target.value)}
//                         disabled={!isEditing}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Hobbies & Interests */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Hobbies & Interests</CardTitle>
//                 <CardDescription>Share your interests to find compatible roommates</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex flex-wrap gap-2">
//                   {profile.hobbies.map((hobby, index) => (
//                     <Badge key={index} variant="secondary" className="flex items-center gap-1">
//                       {hobby}
//                       {isEditing && (
//                         <button onClick={() => removeHobby(hobby)} className="ml-1 hover:text-red-500">
//                           <X className="w-3 h-3" />
//                         </button>
//                       )}
//                     </Badge>
//                   ))}
//                 </div>

//                 {isEditing && (
//                   <div className="flex gap-2">
//                     <Input
//                       placeholder="Add a hobby or interest"
//                       value={newHobby}
//                       onChange={(e) => setNewHobby(e.target.value)}
//                       onKeyPress={(e) => e.key === "Enter" && addHobby()}
//                     />
//                     <Button onClick={addHobby} size="sm">
//                       <Plus className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>

//             {/* Profile Visibility */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Profile Visibility</CardTitle>
//                 <CardDescription>Control who can see your profile</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-medium">Profile Status</h4>
//                       <p className="text-sm text-muted-foreground">
//                         Your profile is currently active and visible to potential matches
//                       </p>
//                     </div>
//                     <Badge className="bg-green-100 text-green-800">Active</Badge>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-medium">Contact Information</h4>
//                       <p className="text-sm text-muted-foreground">Only shown to mutual matches</p>
//                     </div>
//                     <Badge variant="outline">Protected</Badge>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </SidebarInset>
//   )
// }

// src/pages/Profile.tsx
"use client";

import { useState } from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Save } from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Jessica Smith",
    age: "25",
    occupation: "UX Designer",
    city: "San Francisco",
    phone: "+1 234 567 890",
    email: "jessica@example.com",
    bio: "Hi! I'm a creative professional who loves yoga, cooking, and photography.",
    hobbies: ["Yoga", "Cooking", "Photography"],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newHobby, setNewHobby] = useState("");

  const handleChange = (field: string, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  const addHobby = () => {
    const hobby = newHobby.trim();
    if (hobby && !profile.hobbies.includes(hobby)) {
      setProfile({ ...profile, hobbies: [...profile.hobbies, hobby] });
      setNewHobby("");
    }
  };

  const removeHobby = (hobby: string) => {
    setProfile({
      ...profile,
      hobbies: profile.hobbies.filter((h) => h !== hobby),
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved profile:", profile);
  };

  return (
    <SidebarInset>
      <div className="p-4 space-y-4 bg-pink-100 min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-900">My Profile</h1>
          <Button onClick={isEditing ? handleSave : () => setIsEditing(true)}>
            {isEditing ? (
              <>
                <Save className="w-4 h-4 mr-1" /> Save
              </>
            ) : (
              "Edit"
            )}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-2xl font-bold text-pink-400">
                Basic Information
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Name</Label>
              <Input
                disabled={!isEditing}
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <Label>Age</Label>
              <Input
                disabled={!isEditing}
                value={profile.age}
                onChange={(e) => handleChange("age", e.target.value)}
              />
            </div>
            <div>
              <Label>Occupation</Label>
              <Input
                disabled={!isEditing}
                value={profile.occupation}
                onChange={(e) => handleChange("occupation", e.target.value)}
              />
            </div>
            <div>
              <Label>City</Label>
              <Input
                disabled={!isEditing}
                value={profile.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle><h1 className="text-2xl font-bold text-pink-400">
                Contact
              </h1></CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Phone</Label>
              <Input
                disabled={!isEditing}
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                disabled={!isEditing}
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle><h1 className="text-2xl font-bold text-pink-400">
                About
              </h1></CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              disabled={!isEditing}
              rows={4}
              value={profile.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle><h1 className="text-2xl font-bold text-pink-400">
                Hobbies
              </h1></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-2">
              {profile.hobbies.map((hobby, index) => (
                <Badge key={index} variant="secondary">
                  {hobby}
                  {isEditing && (
                    <button onClick={() => removeHobby(hobby)}>
                      <X className="ml-1 h-3 w-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>
            {isEditing && (
              <div className="flex gap-2">
                <Input
                  value={newHobby}
                  onChange={(e) => setNewHobby(e.target.value)}
                  placeholder="Add a hobby"
                  onKeyDown={(e) => e.key === "Enter" && addHobby()}
                />
                <Button onClick={addHobby} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  );
}
