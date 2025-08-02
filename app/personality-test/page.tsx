"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
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
import { Brain, ArrowRight, ArrowLeft, Sparkles } from "lucide-react"

const personalityQuestions = [
  {
    id: 1,
    question: "How do you prefer to spend your free time?",
    options: [
      { value: "social", label: "Hanging out with friends and meeting new people" },
      { value: "quiet", label: "Reading, watching movies, or enjoying quiet activities" },
      { value: "active", label: "Working out, hiking, or doing outdoor activities" },
      { value: "creative", label: "Pursuing hobbies like art, music, or writing" },
    ],
  },
  {
    id: 2,
    question: "What's your ideal living environment?",
    options: [
      { value: "lively", label: "Lively and social with frequent gatherings" },
      { value: "peaceful", label: "Peaceful and quiet for relaxation" },
      { value: "organized", label: "Highly organized and structured" },
      { value: "flexible", label: "Flexible and adaptable to different situations" },
    ],
  },
  {
    id: 3,
    question: "How do you handle conflicts?",
    options: [
      { value: "direct", label: "Address issues directly and immediately" },
      { value: "diplomatic", label: "Find diplomatic solutions through discussion" },
      { value: "avoid", label: "Prefer to avoid confrontation when possible" },
      { value: "mediate", label: "Seek help from others to mediate" },
    ],
  },
  {
    id: 4,
    question: "What's your approach to cleanliness?",
    options: [
      { value: "spotless", label: "Everything must be spotless and organized" },
      { value: "tidy", label: "Generally tidy with occasional deep cleaning" },
      { value: "lived-in", label: "Comfortable with a 'lived-in' feel" },
      { value: "flexible", label: "Flexible depending on the situation" },
    ],
  },
  {
    id: 5,
    question: "How important is personal space to you?",
    options: [
      { value: "essential", label: "Essential - I need plenty of alone time" },
      { value: "important", label: "Important but I enjoy some social interaction" },
      { value: "moderate", label: "Moderate - I like a good balance" },
      { value: "minimal", label: "Not very important - I love being around people" },
    ],
  },
  {
    id: 6,
    question: "What's your communication style?",
    options: [
      { value: "expressive", label: "Very expressive and open about feelings" },
      { value: "thoughtful", label: "Thoughtful and measured in responses" },
      { value: "casual", label: "Casual and easy-going" },
      { value: "reserved", label: "More reserved and private" },
    ],
  },
  {
    id: 7,
    question: "How do you make decisions?",
    options: [
      { value: "analytical", label: "Analyze all options carefully" },
      { value: "intuitive", label: "Go with my gut feeling" },
      { value: "collaborative", label: "Discuss with others before deciding" },
      { value: "quick", label: "Make quick decisions and adapt as needed" },
    ],
  },
  {
    id: 8,
    question: "What motivates you most?",
    options: [
      { value: "achievement", label: "Achieving personal and professional goals" },
      { value: "relationships", label: "Building meaningful relationships" },
      { value: "experiences", label: "Having new and exciting experiences" },
      { value: "stability", label: "Creating stability and security" },
    ],
  },
]

const personalityTypes = {
  "social-organizer": {
    title: "The Social Organizer",
    description: "You love bringing people together and creating organized, lively living spaces.",
    traits: ["Social", "Organized", "Direct", "Expressive"],
    compatibility: ["The Supportive Friend", "The Creative Explorer"],
  },
  "peaceful-thinker": {
    title: "The Peaceful Thinker",
    description: "You value quiet, thoughtful environments and meaningful connections.",
    traits: ["Thoughtful", "Peaceful", "Reserved", "Analytical"],
    compatibility: ["The Balanced Companion", "The Quiet Achiever"],
  },
  "creative-explorer": {
    title: "The Creative Explorer",
    description: "You're artistic, flexible, and love exploring new experiences.",
    traits: ["Creative", "Flexible", "Intuitive", "Expressive"],
    compatibility: ["The Social Organizer", "The Supportive Friend"],
  },
  "balanced-companion": {
    title: "The Balanced Companion",
    description: "You seek harmony and balance in all aspects of life.",
    traits: ["Balanced", "Diplomatic", "Moderate", "Collaborative"],
    compatibility: ["The Peaceful Thinker", "The Quiet Achiever"],
  },
  "supportive-friend": {
    title: "The Supportive Friend",
    description: "You're caring, relationship-focused, and create warm environments.",
    traits: ["Supportive", "Relationship-focused", "Flexible", "Collaborative"],
    compatibility: ["The Social Organizer", "The Creative Explorer"],
  },
  "quiet-achiever": {
    title: "The Quiet Achiever",
    description: "You're goal-oriented, organized, and value personal space.",
    traits: ["Achievement-focused", "Organized", "Reserved", "Analytical"],
    compatibility: ["The Peaceful Thinker", "The Balanced Companion"],
  },
}

export default function PersonalityTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [personalityType, setPersonalityType] = useState<string>("")

  const progress = ((currentQuestion + 1) / personalityQuestions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [personalityQuestions[currentQuestion].id]: value }))
  }

  const nextQuestion = () => {
    if (currentQuestion < personalityQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculatePersonalityType()
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculatePersonalityType = () => {
    // Simple personality type calculation based on answers
    const answerValues = Object.values(answers)

    // This is a simplified calculation - in a real app, you'd have more sophisticated logic
    if (answerValues.includes("social") && answerValues.includes("organized")) {
      setPersonalityType("social-organizer")
    } else if (answerValues.includes("quiet") && answerValues.includes("peaceful")) {
      setPersonalityType("peaceful-thinker")
    } else if (answerValues.includes("creative") && answerValues.includes("flexible")) {
      setPersonalityType("creative-explorer")
    } else if (answerValues.includes("diplomatic") && answerValues.includes("moderate")) {
      setPersonalityType("balanced-companion")
    } else if (answerValues.includes("relationships") && answerValues.includes("collaborative")) {
      setPersonalityType("supportive-friend")
    } else {
      setPersonalityType("quiet-achiever")
    }

    setShowResults(true)
  }

  if (showResults) {
    const result = personalityTypes[personalityType as keyof typeof personalityTypes]

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
                  <BreadcrumbPage>Know U Results</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎉</div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Your Personality Type
                </h1>
              </div>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-3xl">{result.title}</CardTitle>
                  <CardDescription className="text-lg">{result.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Your Key Traits</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {result.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Most Compatible With</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.compatibility.map((type, index) => (
                        <div key={index} className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium">{type}</h4>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button
                      onClick={() => {
                        setShowResults(false)
                        setCurrentQuestion(0)
                        setAnswers({})
                      }}
                      variant="outline"
                    >
                      Retake Test
                    </Button>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      Find Compatible Matches
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    )
  }

  const currentQ = personalityQuestions[currentQuestion]
  const currentAnswer = answers[currentQ.id]

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
                <BreadcrumbPage>Know U</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Brain className="w-8 h-8 text-purple-600" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Know U Personality Test
                </h1>
              </div>
              <p className="text-muted-foreground">
                Discover your personality type to find the most compatible roommates
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {currentQuestion + 1} of {personalityQuestions.length}
                </span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{currentQ.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={currentAnswer} onValueChange={handleAnswer}>
                  <div className="space-y-4">
                    {currentQ.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="flex-1 cursor-pointer text-sm leading-relaxed">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={previousQuestion} disabled={currentQuestion === 0}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={nextQuestion}
                disabled={!currentAnswer}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              >
                {currentQuestion === personalityQuestions.length - 1 ? "See Results" : "Next Question"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
