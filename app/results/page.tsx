"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, X, MapPin, Briefcase, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const mockProfiles = [
  {
    id: 1,
    name: "Sarah Chen",
    age: 24,
    occupation: "Software Engineer",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=400&width=300",
    compatibility: 95,
    interests: ["Yoga", "Cooking", "Reading", "Hiking"],
    bio: "Love creating a cozy home environment. I'm clean, respectful, and enjoy having meaningful conversations over coffee.",
    lifestyle: "Early bird, non-smoker, social but values quiet time",
  },
  {
    id: 2,
    name: "Maya Patel",
    age: 26,
    occupation: "Marketing Manager",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=400&width=300",
    compatibility: 88,
    interests: ["Fitness", "Travel", "Photography", "Wine tasting"],
    bio: "Looking for a roommate who's career-focused but knows how to have fun. I love hosting small gatherings and exploring the city.",
    lifestyle: "Night owl, social butterfly, organized and clean",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    age: 23,
    occupation: "Graphic Designer",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=400&width=300",
    compatibility: 82,
    interests: ["Art", "Music", "Sustainable living", "Meditation"],
    bio: "Creative soul seeking a peaceful living space. I'm into sustainable living and love decorating our shared spaces beautifully.",
    lifestyle: "Flexible schedule, mindful living, plant lover",
  },
]

export default function ResultsPage() {
  const [currentProfile, setCurrentProfile] = useState(0)
  const [matches, setMatches] = useState<number[]>([])
  const [passes, setPasses] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()

  const profile = mockProfiles[currentProfile]

  const handleLike = () => {
    setMatches([...matches, profile.id])
    nextProfile()
  }

  const handlePass = () => {
    setPasses([...passes, profile.id])
    nextProfile()
  }

  const nextProfile = () => {
    if (currentProfile < mockProfiles.length - 1) {
      setCurrentProfile(currentProfile + 1)
    } else {
      setShowResults(true)
    }
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4">
        <div className="container mx-auto max-w-2xl py-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                🎉 Matching Complete!
              </CardTitle>
              <CardDescription className="text-lg">You've liked {matches.length} potential roommates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl">💕</div>
              <p className="text-gray-600 dark:text-gray-300">
                Great choices! Your matches have been notified and you can start chatting with mutual matches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push("/dashboard")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  View Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" onClick={() => router.push("/matches-list")}>
                  See All Matches
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4">
      <div className="container mx-auto max-w-md py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Your Matches
            </h1>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {currentProfile + 1} of {mockProfiles.length}
            </div>
          </div>
          <Progress value={((currentProfile + 1) / mockProfiles.length) * 100} className="h-2" />
        </div>

        <div className="relative">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative">
              <img src={profile.image || "/placeholder.svg"} alt={profile.name} className="w-full h-96 object-cover" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500 text-white">{profile.compatibility}% Match</Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    {profile.name}, {profile.age}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mt-2">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{profile.occupation}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{profile.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300">{profile.bio}</p>

                <div>
                  <h3 className="font-semibold mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Lifestyle</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{profile.lifestyle}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-6 mt-8">
            <Button
              size="lg"
              variant="outline"
              onClick={handlePass}
              className="rounded-full w-16 h-16 border-2 border-gray-300 hover:border-red-400 hover:bg-red-50 bg-transparent"
            >
              <X className="w-8 h-8 text-gray-600 hover:text-red-500" />
            </Button>

            <Button
              size="lg"
              onClick={handleLike}
              className="rounded-full w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              <Heart className="w-8 h-8 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
