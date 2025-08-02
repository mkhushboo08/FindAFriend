// "use client";

// import type * as React from "react";
// import {
//   Home,
//   MessageCircle,
//   Brain,
//   User,
//   Heart,
//   MapPin,
//   Bell,
//   Shield,
//   Palette,
//   UserX,
//   LogOut,
// } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar";
// import { ThemeToggle } from "@/components/theme-toggle";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { ChevronRight } from "lucide-react";

// const data = {
//   navMain: [
//     {
//       title: "Home",
//       url: "/dashboard",
//       icon: Home,
//     },
//     {
//       title: "Matches",
//       url: "/matches-list",
//       icon: Heart,
//     },
//     {
//       title: "Chats",
//       url: "/chats",
//       icon: MessageCircle,
//     },
//     {
//       title: "Know U",
//       //url: "/personality-test",
//       url: "https://debarsh1.github.io/personality-test/",
//       icon: Brain,
//     },
//     {
//       title: "Profile",
//       url: "/profile",
//       icon: User,
//     },
//   ],
//   settings: [
//     {
//       title: "Notifications",
//       icon: Bell,
//     },
//     {
//       title: "Location",
//       icon: MapPin,
//     },
//     {
//       title: "Permissions",
//       icon: Shield,
//     },
//     {
//       title: "Theme",
//       icon: Palette,
//     },
//     {
//       title: "Deactivate Account",
//       icon: UserX,
//     },
//     {
//       title: "Logout",
//       icon: LogOut,
//     },
//   ],
// };

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar variant="inset" {...props}>
//       <SidebarHeader>
//         <div className="flex items-center gap-2 px-4 py-2">
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
//             <Heart className="h-4 w-4 text-white" />
//           </div>
//           <div className="grid flex-1 text-left text-sm leading-tight">
//             <span className="truncate font-semibold">FindAFriend</span>
//             <span className="truncate text-xs text-muted-foreground">
//               Find Your Perfect Match
//             </span>
//           </div>
//           <ThemeToggle />
//         </div>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Navigation</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {data.navMain.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>

//         <SidebarGroup>
//           <Collapsible defaultOpen className="group/collapsible">
//             <SidebarGroupLabel asChild>
//               <CollapsibleTrigger className="flex w-full items-center justify-between">
//                 Settings
//                 <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
//               </CollapsibleTrigger>
//             </SidebarGroupLabel>
//             <CollapsibleContent>
//               <SidebarGroupContent>
//                 <SidebarMenu>
//                   {data.settings.map((item) => (
//                     <SidebarMenuItem key={item.title}>
//                       <SidebarMenuButton>
//                         <item.icon />
//                         <span>{item.title}</span>
//                       </SidebarMenuButton>
//                     </SidebarMenuItem>
//                   ))}
//                 </SidebarMenu>
//               </SidebarGroupContent>
//             </CollapsibleContent>
//           </Collapsible>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter>
//         <div className="p-4 text-center text-xs text-muted-foreground">
//           © 2024 FindAFriend
//         </div>
//       </SidebarFooter>
//       <SidebarRail />
//     </Sidebar>
//   );
// }

"use client";

import type * as React from "react";
import {
  Home,
  MessageCircle,
  Brain,
  User,
  Heart,
  MapPin,
  Bell,
  Shield,
  Palette,
  UserX,
  LogOut,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Sidebar item data
const data = {
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Compatibility",
      //url: "/matches-list",
      icon: Heart,
    },
    {
      title: "Chats",
      url: "https://demo.chatscope.io/chat",
      icon: MessageCircle,
    },
    {
      title: "Know U",
      url: "https://jordanr2m.github.io/sweet-personality-quiz/",
      icon: Brain,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: User,
    },
  ],
  settings: [
    {
      title: "Notifications",
      icon: Bell,
    },
    {
      title: "Location",
      icon: MapPin,
    },
    {
      title: "Permissions",
      icon: Shield,
    },
    {
      title: "Theme",
      icon: Palette,
    },
    {
      title: "Deactivate Account",
      icon: UserX,
    },
    {
      title: "Logout",
      icon: LogOut,
      key: "logout", // Used to detect logout action
      url: "/login",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      {/* Header */}
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
            <Heart className="h-4 w-4 text-white" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">FindAFriend</span>
            <span className="truncate text-xs text-muted-foreground">
              Find Your Perfect Match
            </span>
          </div>
          <ThemeToggle />
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings with collapsible */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                Settings
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {data.settings.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild={!!item.url}
                        onClick={() => {
                          if (item.key === "logout") {
                            // Example logout logic
                            localStorage.removeItem("auth_token");
                            sessionStorage.clear();
                            window.location.href = item.url || "/login";
                          }
                        }}
                      >
                        {item.url ? (
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        ) : (
                          <>
                            <item.icon />
                            <span>{item.title}</span>
                          </>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <div className="p-4 text-center text-xs text-muted-foreground">
          © 2024 FindAFriend
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
