"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Globe, ExternalLink, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()
  const [url, setUrl] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const validateUrl = (inputUrl: string) => {
    try {
      new URL(inputUrl)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!url.trim()) {
      setIsValid(false)
      return
    }

    const valid = validateUrl(url)
    setIsValid(valid)

    if (valid) {
      setSubmitted(true)
      // 여기에 URL 처리 로직을 추가할 수 있습니다
      console.log("제출된 URL:", url)
      setTimeout(() => {
        router.push("/analysis-result")
      }, 1000)
    }
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUrl(value)
    setSubmitted(false)

    if (value.trim()) {
      setIsValid(validateUrl(value))
    } else {
      setIsValid(true)
    }
  }

  const handleVisitUrl = () => {
    if (url && isValid) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* 네이버 스타일 헤더 */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">블로그 광고성 분석기</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="text-center bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
            <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">URL 분석 시작</CardTitle>
            <CardDescription className="text-green-100">분석하고 싶은 블로그 글의 URL을 입력해주세요</CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-3">
                <Label htmlFor="url" className="text-lg font-semibold text-gray-700">
                  블로그 URL
                </Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://blog.naver.com/example/123456789"
                  value={url}
                  onChange={handleUrlChange}
                  className={`h-14 text-lg border-2 transition-all duration-200 ${
                    !isValid
                      ? "border-red-400 focus-visible:ring-red-400 bg-red-50"
                      : "border-green-200 focus-visible:ring-green-400 hover:border-green-300"
                  }`}
                />
                {!isValid && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">올바른 URL 형식을 입력해주세요</span>
                  </div>
                )}
              </div>

              {submitted && isValid && (
                <Alert className="border-green-200 bg-green-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <AlertDescription className="text-green-800 font-medium">URL 분석을 시작합니다...</AlertDescription>
                  </div>
                </Alert>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">💡 분석 항목</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 광고성 문구 및 키워드 감지</li>
                  <li>• 감정 분석 (긍정/부정/중립)</li>
                  <li>• 내용 객관성 평가</li>
                  <li>• 종합 신뢰도 점수</li>
                </ul>
              </div>
            </CardContent>

            <CardFooter className="flex gap-3 p-8 pt-0">
              <Button
                type="submit"
                disabled={!url.trim()}
                className="flex-1 h-14 text-lg font-semibold bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
              >
                {submitted ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    분석 중...
                  </div>
                ) : (
                  "분석 시작"
                )}
              </Button>
              {submitted && isValid && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleVisitUrl}
                  className="h-14 px-6 border-green-200 text-green-700 hover:bg-green-50"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  원문 보기
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>

        {/* 네이버 스타일 푸터 정보 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>안전하고 정확한 블로그 분석 서비스</p>
          <p className="mt-1">개인정보는 수집하지 않으며, 분석 결과만 제공됩니다.</p>
        </div>
      </div>
    </div>
  )
}
