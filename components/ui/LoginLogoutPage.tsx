"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginLogoutPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "password") {
      setIsLoggedIn(true)
    } else {
      alert("Invalid credentials")
    }
  }

  const handleLogout = () => {
    setEmail("")
    setPassword("")
    setIsLoggedIn(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{isLoggedIn ? "Welcome Back!" : "Login"}</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoggedIn ? (
            <div className="space-y-4">
              <p className="text-sm">You are logged in as <strong>{email}</strong></p>
              <Button onClick={handleLogout} className="w-full">
                Logout
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
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
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
