"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 샘플 데이터
const sampleAnalysisData = {
  blogUrl: "https://blog.naver.com/example_blog",
  analyzedPosts: 8,
  totalPosts: 10,
  averageScore: 12.5,
  averagePercentage: 36.8,
  adLevel: "🟡 주의 필요한 블로그",
  topBrands: ["삼성", "LG", "애플"],
  topCategories: ["전자제품", "뷰티", "패션"],
  topAdItems: ["구매유도", "슬로건", "후원"],
  sponsoredPosts: 3,
};

const postScoresData = [
  { title: "최신 스마트폰 리뷰", score: 18, level: "높음" },
  { title: "여름 화장품 추천", score: 15, level: "주의" },
  { title: "일상 브이로그", score: 3, level: "낮음" },
  { title: "맛집 탐방기", score: 8, level: "낮음" },
  { title: "패션 하울", score: 22, level: "높음" },
  { title: "홈카페 만들기", score: 12, level: "주의" },
  { title: "운동 루틴", score: 5, level: "낮음" },
  { title: "뷰티 제품 체험", score: 19, level: "높음" },
];

const adItemsData = [
  { name: "구매유도", value: 35, fill: "hsl(var(--chart-1))" },
  { name: "슬로건", value: 28, fill: "hsl(var(--chart-2))" },
  { name: "후원", value: 22, fill: "hsl(var(--chart-3))" },
  { name: "브랜드언급", value: 15, fill: "hsl(var(--chart-4))" },
];

const trendData = [
  { date: "2024-01", score: 8 },
  { date: "2024-02", score: 12 },
  { date: "2024-03", score: 15 },
  { date: "2024-04", score: 18 },
  { date: "2024-05", score: 14 },
  { date: "2024-06", score: 20 },
];

const detailedPosts = [
  {
    title: "최신 스마트폰 완벽 리뷰 - 이것만 보면 끝!",
    date: "2024-06-15",
    score: 18,
    url: "https://blog.naver.com/example_blog/post1",
    brand: "삼성, 애플",
    slogan: "혁신적인 기술의 만남",
    adItems: ["후원: 3점", "구매유도: 2점", "슬로건: 1점"],
  },
  {
    title: "여름 필수템! 화장품 추천 BEST 5",
    date: "2024-06-10",
    score: 15,
    url: "https://blog.naver.com/example_blog/post2",
    brand: "랑콤, 에스티로더",
    slogan: "완벽한 여름 메이크업",
    adItems: ["구매유도: 2점", "브랜드언급: 1점"],
  },
  {
    title: "일상 브이로그 - 평범한 하루",
    date: "2024-06-05",
    score: 3,
    url: "https://blog.naver.com/example_blog/post3",
    brand: "-",
    slogan: "-",
    adItems: ["자연스러운 언급: 1점"],
  },
];

export default function Component() {
  const [blogUrl, setBlogUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // 실제로는 여기서 API 호출
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const getScoreColor = (level: string) => {
    switch (level) {
      case "높음":
        return "hsl(var(--destructive))";
      case "주의":
        return "hsl(var(--warning))";
      default:
        return "hsl(var(--primary))";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* 헤더 */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">
            📝 블로그 종합 분석
          </h1>
          <p className="text-lg text-gray-600">
            네이버 블로그의 광고성향과 패턴을 자동으로 분석합니다
          </p>
        </div>

        {/* 입력 영역 */}
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              블로그 URL 입력
            </CardTitle>
            <CardDescription>
              분석하고 싶은 네이버 블로그의 메인 URL을 입력해 주세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="https://blog.naver.com/example_blog"
              value={blogUrl}
              onChange={(e) => setBlogUrl(e.target.value)}
              className="text-lg"
            />
            <Button
              onClick={handleAnalyze}
              disabled={!blogUrl || isAnalyzing}
              className="w-full text-lg py-6"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  분석 중...
                </>
              ) : (
                <>🔍 분석 시작</>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* 분석 결과 */}
        {showResults && (
          <div className="space-y-6">
            {/* 종합 분석 요약 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📊 종합 분석 요약
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">분석 대상</p>
                    <p className="font-medium break-all">
                      {sampleAnalysisData.blogUrl}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">분석 게시물 수</p>
                    <p className="font-medium">
                      {sampleAnalysisData.analyzedPosts} /{" "}
                      {sampleAnalysisData.totalPosts}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">평균 광고성 점수</p>
                    <p className="font-medium">
                      {sampleAnalysisData.averageScore} / 34점 (
                      {sampleAnalysisData.averagePercentage}%)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">블로그 광고성 수준</p>
                    <Badge variant="secondary" className="text-sm">
                      {sampleAnalysisData.adLevel}
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      가장 자주 언급된 브랜드
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {sampleAnalysisData.topBrands.map((brand, index) => (
                        <Badge key={index} variant="outline">
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      가장 자주 다룬 카테고리
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {sampleAnalysisData.topCategories.map(
                        (category, index) => (
                          <Badge key={index} variant="outline">
                            {category}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      가장 점수가 높은 광고 항목
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {sampleAnalysisData.topAdItems.map((item, index) => (
                        <Badge key={index} variant="destructive">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">🚨 후원/원고료 분석</p>
                    <p className="font-medium text-red-600">
                      {sampleAnalysisData.sponsoredPosts}개 게시물 의심
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 시각화 리포트 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📈 시각화 리포트
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* 포스트별 광고성 점수 */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      포스트별 광고성 점수
                    </h3>
                    <ChartContainer
                      config={{
                        score: {
                          label: "광고성 점수",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={postScoresData}>
                          <XAxis
                            dataKey="title"
                            tick={{ fontSize: 10 }}
                            angle={-45}
                            textAnchor="end"
                            height={80}
                          />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar
                            dataKey="score"
                            fill={(entry) => getScoreColor(entry.level)}
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  {/* 광고성 항목별 누적 점수 */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      광고성 항목별 누적 점수
                    </h3>
                    <ChartContainer
                      config={{
                        구매유도: {
                          label: "구매유도",
                          color: "hsl(var(--chart-1))",
                        },
                        슬로건: {
                          label: "슬로건",
                          color: "hsl(var(--chart-2))",
                        },
                        후원: { label: "후원", color: "hsl(var(--chart-3))" },
                        브랜드언급: {
                          label: "브랜드언급",
                          color: "hsl(var(--chart-4))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={adItemsData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {adItemsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  {/* 시간순 광고성 점수 트렌드 */}
                  <div className="space-y-4 lg:col-span-2">
                    <h3 className="text-lg font-semibold">
                      시간순 광고성 점수 트렌드
                    </h3>
                    <ChartContainer
                      config={{
                        score: {
                          label: "광고성 점수",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[200px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trendData}>
                          <XAxis dataKey="date" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="score"
                            stroke="hsl(var(--chart-1))"
                            strokeWidth={3}
                            dot={{
                              fill: "hsl(var(--chart-1))",
                              strokeWidth: 2,
                              r: 4,
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 포스트별 상세 분석 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📋 포스트별 상세 분석
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full">
                  <div className="space-y-4">
                    {detailedPosts.map((post, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-lg">
                            {index + 1}. {post.title}
                          </h4>
                          <Badge
                            variant={
                              post.score > 15
                                ? "destructive"
                                : post.score > 10
                                ? "secondary"
                                : "default"
                            }
                          >
                            {post.score}/34점
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p>
                              <span className="font-medium">작성일:</span>{" "}
                              {post.date}
                            </p>
                            <p>
                              <span className="font-medium">URL:</span>
                              <a
                                href={post.url}
                                className="text-blue-600 hover:underline ml-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {post.url}
                              </a>
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="font-medium">브랜드:</span>{" "}
                              {post.brand}
                            </p>
                            <p>
                              <span className="font-medium">슬로건:</span>{" "}
                              {post.slogan}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium text-sm mb-2">
                            광고 점수 항목:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {post.adItems.map((item, itemIndex) => (
                              <Badge
                                key={itemIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
