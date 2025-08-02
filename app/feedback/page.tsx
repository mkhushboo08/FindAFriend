"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
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
import { Star, Send, CheckCircle } from "lucide-react"

const feedbackQuestions = [
  {
    id: "cleanliness",
    label: "How would you rate their cleanliness?",
    type: "slider",
    min: 1,
    max: 10,
  },
  {
    id: "communication",
    label: "How was their communication?",
    type: "slider",
    min: 1,
    max: 10,
  },
  {
    id: "respect",
    label: "How respectful were they of shared spaces?",
    type: "slider",
    min: 1,
    max: 10,
  },
  {
    id: "noise",
    label: "How considerate were they about noise levels?",
    type: "slider",
    min: 1,
    max: 10,
  },
  {
    id: "reliability",
    label: "How reliable were they with bills and responsibilities?",
    type: "slider",
    min: 1,
    max: 10,
  },
  {
    id: "overall",
    label: "Overall, how was your experience living with them?",
    type: "slider",
    min: 1,
    max: 10,
  },
]

export default function FeedbackPage() {
  const [selectedRoommate, setSelectedRoommate] = useState("")
  const [ratings, setRatings] = useState<Record<string, number>>({})
  const [wouldRecommend, setWouldRecommend] = useState("")
  const [additionalComments, setAdditionalComments] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const previousRoommates = [
    { id: "1", name: "Sarah Chen", period: "Jan 2023 - Dec 2023" },
    { id: "2", name: "Maya Patel", period: "Jun 2022 - Dec 2022" },
    { id: "3", name: "Emma Rodriguez", period: "Jan 2022 - May 2022" },
  ]

  const handleRatingChange = (questionId: string, value: number[]) => {
    setRatings((prev) => ({ ...prev, [questionId]: value[0] }))
  }

  const handleSubmit = () => {
    // Here you would typically submit to a backend
    console.log("Feedback submitted:", {
      roommate: selectedRoommate,
      ratings,
      wouldRecommend,
      additionalComments,
    })
    setIsSubmitted(true)
  }

  const isFormComplete = selectedRoommate && Object.keys(ratings).length === feedbackQuestions.length && wouldRecommend

  if (isSubmitted) {
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
                  <BreadcrumbPage>Feedback</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-muted-foreground mb-6">
                    Your feedback has been submitted successfully. This helps us maintain a trusted community.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Submit Another Review
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    )
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
                <BreadcrumbPage>Feedback</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Roommate Feedback
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Help us maintain a trusted community by sharing your experience with previous roommates. Your honest
                feedback helps others make better decisions.
              </p>
            </div>

            {/* Select Roommate */}
            <Card>
              <CardHeader>
                <CardTitle>Select Previous Roommate</CardTitle>
                <CardDescription>Choose the roommate you'd like to provide feedback for</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedRoommate} onValueChange={setSelectedRoommate}>
                  <div className="space-y-3">
                    {previousRoommates.map((roommate) => (
                      <div key={roommate.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={roommate.id} id={roommate.id} />
                        <Label htmlFor={roommate.id} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{roommate.name}</span>
                            <span className="text-sm text-muted-foreground">{roommate.period}</span>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {selectedRoommate && (
              <>
                {/* Rating Questions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Rate Your Experience</CardTitle>
                    <CardDescription>Please rate the following aspects on a scale of 1-10</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {feedbackQuestions.map((question) => (
                      <div key={question.id} className="space-y-4">
                        <div className="flex justify-between items-center">
                          <Label className="text-base font-medium">{question.label}</Label>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-bold text-lg">{ratings[question.id] || question.min}</span>
                          </div>
                        </div>
                        <div className="px-4">
                          <Slider
                            value={[ratings[question.id] || question.min]}
                            onValueChange={(value) => handleRatingChange(question.id, value)}
                            max={question.max}
                            min={question.min}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Poor ({question.min})</span>
                            <span>Excellent ({question.max})</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recommendation */}
                <Card>
                  <CardHeader>
                    <CardTitle>Would you recommend them as a roommate?</CardTitle>
                    <CardDescription>This helps others in the community make informed decisions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={wouldRecommend} onValueChange={setWouldRecommend}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes" className="cursor-pointer">
                            Yes, I would recommend them
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maybe" id="maybe" />
                          <Label htmlFor="maybe" className="cursor-pointer">
                            Maybe, with some reservations
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no" className="cursor-pointer">
                            No, I would not recommend them
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Additional Comments */}
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Comments (Optional)</CardTitle>
                    <CardDescription>Share any specific details about your experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Share any specific experiences, both positive and negative, that might help others..."
                      value={additionalComments}
                      onChange={(e) => setAdditionalComments(e.target.value)}
                      rows={4}
                    />
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    onClick={handleSubmit}
                    disabled={!isFormComplete}
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Feedback
                  </Button>
                  {!isFormComplete && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Please complete all required fields to submit your feedback
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
