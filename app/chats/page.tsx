"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Send, Search, Phone, Video, MoreVertical } from "lucide-react"

const mockChats = [
  {
    id: 1,
    name: "Sarah Chen",
    lastMessage: "That sounds perfect! When would be a good time to meet?",
    timestamp: "2 min ago",
    unread: 2,
    online: true,
    avatar: "SC",
  },
  {
    id: 2,
    name: "Maya Patel",
    lastMessage: "I love the location! Is parking included?",
    timestamp: "1 hour ago",
    unread: 0,
    online: true,
    avatar: "MP",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    lastMessage: "Thanks for sharing the photos of the apartment!",
    timestamp: "3 hours ago",
    unread: 1,
    online: false,
    avatar: "ER",
  },
  {
    id: 4,
    name: "Zoe Kim",
    lastMessage: "Are you still looking for a roommate?",
    timestamp: "1 day ago",
    unread: 0,
    online: false,
    avatar: "ZK",
  },
]

const mockMessages = [
  {
    id: 1,
    sender: "Sarah Chen",
    message: "Hi! I saw your profile and we seem like a great match!",
    timestamp: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Me",
    message: "Hi Sarah! Thanks for reaching out. I'd love to learn more about you!",
    timestamp: "10:35 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Sarah Chen",
    message:
      "I'm a software engineer, love cooking and yoga. I'm looking for someone clean and respectful to share a 2BR in SOMA.",
    timestamp: "10:37 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "Me",
    message: "That sounds perfect! I'm also very clean and love cooking. What's your budget range?",
    timestamp: "10:40 AM",
    isMe: true,
  },
  {
    id: 5,
    sender: "Sarah Chen",
    message:
      "I'm thinking around $2000-2500 per person. The apartment has a great kitchen and is close to public transport.",
    timestamp: "10:42 AM",
    isMe: false,
  },
  {
    id: 6,
    sender: "Me",
    message: "That works perfectly with my budget! Would you like to schedule a video call to chat more?",
    timestamp: "10:45 AM",
    isMe: true,
  },
  {
    id: 7,
    sender: "Sarah Chen",
    message: "That sounds perfect! When would be a good time to meet?",
    timestamp: "Just now",
    isMe: false,
  },
]

export default function ChatsPage() {
  const [selectedChat, setSelectedChat] = useState(mockChats[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredChats = mockChats.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to a backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Chats</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <div className="h-full flex">
            {/* Chat List */}
            <div className="w-1/3 border-r bg-background">
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold mb-4">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="overflow-y-auto">
                {filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                      selectedChat.id === chat.id ? "bg-muted" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {chat.avatar}
                        </div>
                        {chat.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold truncate">{chat.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                            {chat.unread > 0 && (
                              <Badge className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground truncate mt-1">{chat.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b bg-background flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {selectedChat.avatar}
                    </div>
                    {selectedChat.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedChat.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedChat.online ? "Online" : "Last seen 2 hours ago"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {mockMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isMe ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <p className={`text-xs mt-1 ${message.isMe ? "text-pink-100" : "text-muted-foreground"}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t bg-background">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
