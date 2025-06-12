"use client";

import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default function Component() {
  const router = useRouter();
  const [blogUrl, setBlogUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [blogData, setBlogData] = useState({});

  const postScoresData =
    blogData?.charts?.bar_chart?.data_points
      .map(({ label, value, text }) => ({
        title: label,
        score: value,
      }))
      .sort((a, b) => b.score - a.score) || [];

  const detailedPosts = blogData?.analysis_results;

  const adItemsData = blogData?.charts?.donut_chart?.data_segments?.map(
    ({ label, value, color }) => ({
      name: label,
      value,
      fill: color,
    })
  );

  const trendData = blogData?.charts?.trend_chart?.data_points;

  console.log(blogData);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // 실제로는 여기서 API 호출
    const res = await fetch(process.env.NEXT_PUBLIC_BLOG_URL, {
      method: "POST",
      body: JSON.stringify({
        blog_url: blogUrl,
      }),
    });
    const resJson = await res.json();
    setBlogData(resJson);
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

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"></div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            뒤로
          </Button>
        </div>
      </div>
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
                    <p className="font-medium break-all">{blogUrl}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">분석 게시물 수</p>
                    <p className="font-medium">
                      {blogData?.summary_report?.overview?.successful_analyses}{" "}
                      / {blogData?.summary_report?.overview?.total_posts}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">평균 광고성 점수</p>
                    <p className="font-medium">
                      {blogData?.summary_report?.overview?.average_ad_score} /
                      34점
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">블로그 광고성 수준</p>
                    <Badge variant="secondary" className="text-sm">
                      {blogData?.score_summary?.overall_ad_level}
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
                      {blogData?.summary_report?.brand_product_mentions?.top_brands
                        ?.map((brand, index) => (
                          <Badge key={index} variant="outline">
                            {brand}
                          </Badge>
                        ))
                        .slice(0, 3)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      가장 자주 다룬 카테고리
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {blogData?.summary_report?.brand_product_mentions?.top_categories
                        ?.map((category, index) => (
                          <Badge key={index} variant="outline">
                            {category}
                          </Badge>
                        ))
                        .slice(0, 3)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      가장 점수가 높은 광고성 점수
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
                      {blogData?.score_summary?.sponsored_posts_analysis?.count}
                      개 게시물 의심
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
                <CardDescription>
                  차트를 클릭하여 상세 분석 결과를 확인하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="post-scores" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="post-scores">포스트별 점수</TabsTrigger>
                    <TabsTrigger value="ad-items">광고성 항목</TabsTrigger>
                    <TabsTrigger value="trend">시간별 트렌드</TabsTrigger>
                  </TabsList>

                  <TabsContent value="post-scores" className="space-y-4 mt-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-semibold">
                        포스트별 광고성 점수
                      </h3>
                      <p className="text-sm text-gray-600">
                        분석된 각 게시물의 광고성 점수를 비교하여 어떤 글이 가장
                        광고성이 높은지 직관적으로 보여줍니다
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <ChartContainer
                        config={{
                          score: {
                            label: "광고성 점수",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                        className="h-[400px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={postScoresData}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 80,
                            }}
                          >
                            <XAxis
                              dataKey="title"
                              tick={{ fontSize: 12 }}
                              angle={-45}
                              textAnchor="end"
                              height={100}
                              interval={0}
                            />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                              dataKey="score"
                              fill="#86E57F"
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </TabsContent>

                  <TabsContent value="ad-items" className="space-y-4 mt-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-semibold">
                        광고성 항목별 누적 점수
                      </h3>
                      <p className="text-sm text-gray-600">
                        전체 분석에서 어떤 광고성 지표가 가장 높은 점수를
                        차지했는지 분포를 보여줍니다
                      </p>
                      <p className="text-sm text-gray-600">
                        {blogData?.charts?.donut_chart?.subtitle}
                      </p>
                    </div>
                    <div className="flex justify-center">
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
                        className="h-[400px] w-[400px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={adItemsData}
                              cx="50%"
                              cy="50%"
                              innerRadius={80}
                              outerRadius={140}
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {adItemsData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                        >
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.fill }}
                          />
                          <div>
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">
                              {item.value}점
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="trend" className="space-y-4 mt-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-semibold">
                        시간순 광고성 점수 트렌드
                      </h3>
                      <p className="text-sm text-gray-600">
                        게시물 작성 날짜에 따른 광고성 점수의 변화를 추적하여
                        블로그의 광고성 패턴 변화를 파악합니다
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <ChartContainer
                        config={{
                          score: {
                            label: "광고성 점수",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                        className="h-[400px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={trendData}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 20,
                            }}
                          >
                            <XAxis dataKey="date" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Line
                              type="monotone"
                              dataKey="score"
                              stroke="#86E57F"
                              strokeWidth={4}
                              dot={{
                                fill: "#86E57F",
                                strokeWidth: 2,
                                r: 6,
                              }}
                              activeDot={{
                                r: 8,
                                stroke: "#86E57F",
                                strokeWidth: 2,
                              }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
                      {trendData.map((item, index) => (
                        <div
                          key={index}
                          className="text-center p-3 bg-gray-50 rounded-lg"
                        >
                          <p className="font-medium text-sm">{item.date}</p>
                          <p className="text-lg font-bold text-green-600">
                            {item.score}점
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
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
                              post.ad_score > 15
                                ? "destructive"
                                : post.ad_score > 10
                                ? "secondary"
                                : "default"
                            }
                          >
                            {post.ad_score}/34점
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
                            {post.ad_score_data.items
                              .filter((item) => item.score > 0)
                              .map((item, itemIndex) => (
                                <Badge
                                  key={itemIndex}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {item.name}
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
