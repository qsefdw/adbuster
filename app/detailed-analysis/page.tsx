"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ArrowLeft,
  Share2,
  Home,
  AlertTriangle,
  TrendingUp,
  Heart,
  Search,
  Shield,
  BarChart3,
  FileText,
  FileCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAnalyzer } from "@/contexts/AnalyzerContext";
import { RadialProgress } from "@/components/radial-progress";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function DetailedAnalysisPage() {
  const router = useRouter();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { analyzedData, analyzedUrl } = useAnalyzer();

  const getPositiveText = (positive_score) => {
    if (positive_score > 80)
      return "일반적인 리뷰(50-60%)보다 많이 높은 수준입니다.";

    if (positive_score > 50)
      return "일반적인 리뷰(50-60%)보다 현저히 높은 수준입니다.";

    return "일반적인 리뷰(50-60%)보다 적당한 수준입니다.";
  };

  const getadtext = (average_ad_score) => {
    if (isNaN(average_ad_score)) return "API를 불러오는 중 에러가 발생했습니다.";
    if (average_ad_score >= 80) return "명백한 광고성 콘텐츠입니다.";
    if (average_ad_score >= 50) return "광고성 의심됩니다.";
    if (average_ad_score >= 30) return "약간의 광고성이 의심됩니다.";
    return "독창적인 콘텐츠로 광고성이 없습니다.";
  };

  const getadmainColor = (average_ad_score) => {
    if (average_ad_score >= 80) return "red";
    if (average_ad_score >= 50) return "orange";
    if (average_ad_score >= 30) return "yellow";
    return "green";
  };

  const getRecommnedationword = (ad_percentage) => {
    if (ad_percentage == null) return "오류입니다.";
    if (ad_percentage >= 58.8) return "광고성 가능성 매우 높음.";
    if (ad_percentage >= 29.4) return "광고성 가능성 있음.";
    if (ad_percentage >= 14.7) return "광고성 가능성 낮음.";
    return "광고성 게시글로 보이지 않음.";
  };

  const getRecommnedationColor = (ad_percentage) => {
    if (ad_percentage == null) return "gray";

    if (ad_percentage >= 58.8) return "red";

    if (ad_percentage >= 29.4) return "orange";

    if (ad_percentage >= 14.7) return "yellow";

    return "green";
  };

  // 감성 분석 데이터 (실제 백엔드 데이터 기반)
  const sentimentData = [
    {
      name: "긍정",
      value: Number(
        (
          (analyzedData?.sentiment_analysis?.overall_sentiment
            ?.positive_score ?? 0) * 100
        ).toFixed(0)
      ),
      color: "#22c55e",
      description: "만족감, 추천 등 긍정적 표현",
    },
    {
      name: "부정",
      value: Number(
        (
          (analyzedData?.sentiment_analysis?.overall_sentiment
            ?.negative_score ?? 0) * 100
        ).toFixed(0)
      ),
      color: "#ef4444",
      description: "불만, 단점 등 부정적 표현",
    },
    {
      name: "중립",
      value: Number(
        (
          (analyzedData?.sentiment_analysis?.overall_sentiment
            ?.neutral_score ?? 0) * 100
        ).toFixed(0)
      ),
      color: "#6b7280",
      description: "객관적 사실, 정보 전달",
    },
  ];

  // 키워드 분석 데이터 (실제 백엔드 데이터 기반)
  const keywordRepetitionData = {
    mainProductName: "○○ 미백크림",
    repetitionScore: ((analyzedData?.keyword_analysis?.percentage ?? 0)).toFixed(1),
    topKeywordsAverage: 15.4,
    detailsTable: [
      { keyword: "추천", count: 22, sourceProduct: "○○ 미백크림" },
      { keyword: "협찬", count: 18, sourceProduct: "○○ 미백크림" },
      { keyword: "리뷰", count: 15, sourceProduct: "○○ 미백크림" },
      { keyword: "할인", count: 12, sourceProduct: "△△ 세럼" },
      { keyword: "특가", count: 10, sourceProduct: "△△ 세럼" },
      { keyword: "만족", count: 8, sourceProduct: "○○ 미백크림" },
      { keyword: "효과", count: 7, sourceProduct: "○○ 미백크림" },
      { keyword: "사용", count: 6, sourceProduct: "일반 용어" },
      { keyword: "제품", count: 5, sourceProduct: "일반 용어" },
      { keyword: "피부", count: 4, sourceProduct: "일반 용어" },
    ],
  };

  // 문장별 분석 데이터 (이미지 기반으로 업데이트)
  const sentenceAnalysisData = [
    {
      id: 3,
      text: "그동안 속건조와 속당김이 해결되지 않아 화장품추천 받은 제품들을 중구난방 껴내놓고 바르느라 시간도 오래 걸리고 번거로웠는데요.",
      duplicateRatio: "0.00 (0/4)",
      similarSentences: "0개",
      similarBlogRatio: "0.00 (0/4)",
      adScore: "0.00/1.0",
      similarBlogs: [], // 유사한 블로그 없음
    },
    {
      id: 4,
      text: "보통 계절의 변화에 따라 제품을 바꿔먹서 민감한 타입인 자극이 될 수 밖에 없었는데 유분기가 느껴지지 않는 촉촉함으로 4계절내내 데일리 건...",
      duplicateRatio: "0.00 (0/6)",
      similarSentences: "1개",
      similarBlogRatio: "0.17 (1/6)",
      adScore: "0.06/1.0",
      similarBlogs: [
        {
          name: "추억속으로",
          similarity: 0.9,
          quote:
            "촉촉하고 산뜻한타입이라서 흡수가 빠르며 끈적함이 없어 넘치들이 쓰기 정말 좋은데요. 남성화장품으로 쓰기 정말 좋은것은보남자들의 경우유분기과하게 많은제품을... 남자 기초제...",
        },
      ],
    },
  ];

  // 레이더 차트 데이터 (백엔드 실제 데이터 기반, 가독성 제외)
  const radarData = [
    {
      subject: "감정분석",
      score: 78,
      description: "광고 관련 키워드와 표현의 집중도",
    },
    {
      subject: "광고성",
      score: 45,
      description: "정보의 균형성과 객관적 서술 정도",
    },
    {
      subject: "유사도분석",
      score: 72,
      description: "특정 키워드의 반복 사용 빈도",
    },
    {
      subject: "키워드반복",
      score: 35,
      description: "광고 표시 및 정보 공개의 투명성",
    },
  ];

  // 객관성 분석 데이터
  const objectivityMetrics = [
    {
      name: "정보 투명성",
      score: 35,
      description: "광고 및 협찬 관계의 명시적 공개 정도",
    },
    {
      name: "균형잡힌 시각",
      score: 40,
      description: "장단점을 균형있게 다루는 정도",
    },
    {
      name: "사실 기반 서술",
      score: 55,
      description: "주관적 의견보다 사실에 기반한 정도",
    },
    {
      name: "다양한 관점",
      score: 30,
      description: "여러 시각에서 주제를 다루는 정도",
    },
  ];

  // 2. objectivityMetrics 데이터 아래에 객관성 분석 그래프 데이터 추가
  const objectivityBarData = [
    { name: "후원", value: 3, color: "#e5e7eb", ratio: null },
    { name: "구매유도", value: 2, color: "#e5e7eb", ratio: null },
    { name: "관련링크", value: 2, color: "#e5e7eb", ratio: null },
    { name: "감정분석", value: 1, color: "#e5e7eb", ratio: null },
    { name: "노부정", value: 3, color: "#e5e7eb", ratio: null },
    { name: "슬로건", value: 3, color: "#e5e7eb", ratio: null },
    { name: "기관인용", value: 2, color: "#e5e7eb", ratio: null },
    { name: "체험전후", value: 1, color: "#f59e0b", ratio: "1/3\n33%" },
    { name: "제품반복", value: 3, color: "#e5e7eb", ratio: null },
    { name: "해시태그", value: 3, color: "#ef4444", ratio: "2/3\n67%" },
    { name: "광고이모지", value: 2, color: "#f59e0b", ratio: "3/6\n50%" },
    { name: "명시광고", value: 2, color: "#e5e7eb", ratio: null },
  ];

  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  const handleBloggerAnalysis= () => {
    router.push("/blogger-analysis");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* 네이버 스타일 헤더 */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">상세 분석</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={handleBloggerAnalysis}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                블로거 분석
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                <Share2 className="w-4 h-4 mr-2" />
                공유
              </Button>
              <Button
                variant="ghost"
                onClick={handleHome}
                className="text-gray-600 hover:text-gray-900"
              >
                <Home className="w-4 h-4 mr-2" />홈
              </Button>
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 브레드크럼 */}
        <div className="mb-6 text-sm text-gray-500">
          <span
            className="hover:text-green-600 cursor-pointer"
            onClick={handleHome}
          >
            홈
          </span>
          <span className="mx-2">{">"}</span>
          <span
            className="hover:text-green-600 cursor-pointer"
            onClick={handleBack}
          >
            분석 결과
          </span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-800">상세 분석</span>
        </div>

        {/* 분석 대상 정보 */}
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-800">
              분석 대상 게시글
            </span>
          </div>
          <p className="text-sm text-green-700 mb-2">
            <strong>URL:</strong> {analyzedUrl}
          </p>
          <p className="text-sm text-green-700">
            <strong>카테고리: </strong>
            {analyzedData?.ad_style_analysis?.category}
          </p>
        </div>

        {/* 탭 기반 상세 분석 */}
        <Card className="mb-8 shadow-lg border-0 bg-white">
          <CardContent className="p-6">
            <Tabs defaultValue="emotion" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 bg-green-50 border border-green-200">
                <TabsTrigger
                  value="emotion"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-100"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  감정 분석
                </TabsTrigger>
                <TabsTrigger
                  value="keywords"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-100"
                >
                  <Search className="w-4 h-4 mr-2" />
                  키워드 분석
                </TabsTrigger>
                <TabsTrigger
                  value="advertisement"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-100"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  유사도 분석
                </TabsTrigger>
                <TabsTrigger
                  value="credibility"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-100"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  블로그 평가
                </TabsTrigger>
                <TabsTrigger
                  value="comprehensive"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-100"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  종합 분석
                </TabsTrigger>
              </TabsList>

              {/* 감정 분석 탭 */}
              <TabsContent value="emotion" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-6">
                      <Heart className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-green-800">
                        이 글, 어떤 느낌일까?
                      </h3>
                    </div>
                    <div className="h-64 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sentimentData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {sentimentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <RechartsTooltip
                            formatter={(value) => [`${value}%`, "비율"]}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-2">
                      {sentimentData.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-3 h-3 rounded-full`}
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-sm font-medium">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-sm font-bold">
                            {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        📊 감정 분석 해석
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                          <h5 className="font-semibold text-green-800 mb-2">
                            긍정적인 내용이{" "}
                            {Number(
                              (
                                (analyzedData?.sentiment_analysis
                                    ?.overall_sentiment?.positive_score ??
                                  0) * 100
                              ).toFixed(0)
                            )}
                            %로 가장 많아요
                          </h5>
                          <p className="text-sm text-green-700">
                            {getPositiveText(
                              Number(
                                (
                                  (analyzedData?.sentiment_analysis
                                    ?.overall_sentiment?.positive_score ??
                                    0) * 100
                                ).toFixed(0)
                              )
                            )}
                          </p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                          <h5 className="font-semibold text-yellow-800 mb-2">
                            균형잡힌 시각이 부족해요
                          </h5>
                          <p className="text-sm text-yellow-700">
                            부정적 의견이 10%미만으로 매우 낮아 객관적인 평가가
                            부족할 수 있어요.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800 mb-2">
                        💬 대표적인 문장 예시
                      </h5>
                      <div className="space-y-2 text-sm">
                        <div className="bg-white p-3 rounded border-l-4 border-green-500">
                          <span className="text-green-700">
                            "정말 만족스러운 제품이에요! 강력 추천합니다"
                          </span>
                          <Badge className="ml-2 bg-green-100 text-green-800">
                            긍정
                          </Badge>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-gray-500">
                          <span className="text-gray-700">
                            "제품 용량은 50ml이고 가격은 29,000원입니다"
                          </span>
                          <Badge className="ml-2 bg-gray-100 text-gray-800">
                            중립
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 키워드 분석 탭 */}
              <TabsContent value="keywords" className="mt-0">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  {/* 상단 요약 - 2열 레이아웃 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* 왼쪽 - Radial Progress Chart */}
                    <div className="flex items-center justify-center">
                      <RadialProgress
                        percentage={keywordRepetitionData.repetitionScore}
                        size={140}
                        strokeWidth={12}
                        color="#47C83E"
                      />
                    </div>

                    {/* 오른쪽 - 주요 지표 */}
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                          제품명
                        </h4>
                        <p className="text-lg font-semibold text-gray-800">
                          {keywordRepetitionData.mainProductName}
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                          반복점수
                        </h4>
                        <p className="text-lg font-semibold text-green-700">
                          {keywordRepetitionData.repetitionScore}%
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">
                          최다 반복 횟수
                        </h4>
                        <p className="text-lg font-semibold text-gray-800">
                          {keywordRepetitionData.topKeywordsAverage} mentions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 접을 수 있는 상세 정보 섹션 */}
                  <Collapsible
                    open={isDetailsOpen}
                    onOpenChange={setIsDetailsOpen}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          View Details
                        </span>
                        {isDetailsOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="mt-4">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-gray-50">
                              <TableHead className="font-semibold text-gray-700">
                                Keyword
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700">
                                Repetition Count
                              </TableHead>
                              <TableHead className="font-semibold text-gray-700">
                                Source Product Name
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {keywordRepetitionData.detailsTable.map(
                              (row, index) => (
                                <TableRow
                                  key={index}
                                  className="hover:bg-gray-50"
                                >
                                  <TableCell className="font-medium">
                                    {row.keyword}
                                  </TableCell>
                                  <TableCell>
                                    <Badge
                                      variant="secondary"
                                      className="bg-blue-100 text-blue-800"
                                    >
                                      {row.count}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-gray-600">
                                    {row.sourceProduct}
                                  </TableCell>
                                </TableRow>
                              )
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </TabsContent>

              {/* 광고성 분석 탭 - 새로운 디자인 */}
              <TabsContent value="advertisement" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 왼쪽 열 - 기본 정보 및 광고성 점수 */}
                  <div className="space-y-6">
                    {/* 기본 정보 카드 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <FileCheck className="w-5 h-5 text-orange-500" />
                        <h4 className="text-lg font-semibold text-gray-800">
                          기본 정보
                        </h4>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-gray-600 min-w-0 flex-shrink-0">
                            블로그 제목:
                          </span>
                          <span className="text-gray-800">
                            김달의 100% 로맨틱, 네이버 블로그
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-gray-600 min-w-0 flex-shrink-0">
                            URL:
                          </span>
                          <a
                            href={analyzedUrl}
                            className="text-green-700 hover:underline break-all"
                          >
                            https://blog.naver.com/prettydr/223881975188
                          </a>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-gray-600 min-w-0 flex-shrink-0">
                            콘텐츠 길이:
                          </span>
                          <span className="text-gray-800">2,434자</span>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-gray-600 min-w-0 flex-shrink-0">
                            분석 시간:
                          </span>
                          <span className="text-gray-800">
                            2025-06-06 22:08:31
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 광고성 점수 카드 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          광고성 점수
                        </h4>
                      </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          {(
                      (analyzedData?.similarity_analysis?.average_ad_score ?? 0)
                    ).toFixed(1)}/10
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                          <div
                            className="bg-green-600 h-3 rounded-full"
                            style={{ width: "4%" }}
                          ></div>
                        </div>
                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          매우 낮음
                        </div>
                      </div>
                    </div>

                    {/* 판정 결과 카드 */}
                    <div className={`bg-${getadmainColor(analyzedData?.similarity_analysis?.average_ad_score)}-50 p-6 rounded-lg border border-${getadmainColor(analyzedData?.similarity_analysis?.average_ad_score)}-200`} >
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className={`w-5 h-5 text-${getadmainColor(analyzedData?.similarity_analysis?.average_ad_score)}-600`} />
                        <h4 className={`text-lg font-semibold text-${getadmainColor(analyzedData?.similarity_analysis?.average_ad_score)}-800`}>
                          판정
                        </h4>
                      </div>
                      <p className="text-green-700 font-medium">
                        {getadtext(analyzedData?.similarity_analysis?.average_ad_score)}
                      </p>
                    </div>
                  </div>

                  {/* 오른쪽 열 - 문장별 상세 분석 결과 */}
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-800 mb-6">
                        핵심 문장별 유사도 분석
                      </h4>

                      <div className="space-y-8">
                        {sentenceAnalysisData.map((sentence) => (
                          <div
                            key={sentence.id}
                            className="border-b border-gray-100 pb-6 last:border-b-0"
                          >
                            <div className="mb-4">
                              <span className="text-sm font-medium text-gray-600">
                                {sentence.id}.
                              </span>
                              <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                                "{sentence.text}"
                              </p>
                            </div>

                            <div className="space-y-2 text-xs mb-4">
                              <div className="flex items-center">
                                <span className="text-gray-500 w-20">
                                  동일 문장 비율:
                                </span>
                                <span className="font-medium">
                                  {sentence.duplicateRatio}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-gray-500 w-20">
                                  높은 유사도 문장 수:
                                </span>
                                <span className="font-medium">
                                  {sentence.similarSentences}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-gray-500 w-20">
                                  유사 블로그 비율:
                                </span>
                                <span className="font-medium">
                                  {sentence.similarBlogRatio}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-gray-500 w-20">
                                  문장 광고성 점수:
                                </span>
                                <span className="font-medium">
                                  {sentence.adScore}
                                </span>
                              </div>
                            </div>

                            {/* 유사한 블로그가 있는 경우에만 표시 */}
                            {sentence.similarBlogs &&
                              sentence.similarBlogs.length > 0 && (
                                <div className="mt-4">
                                  <h5 className="text-sm font-semibold text-gray-800 mb-3">
                                    유사한 블로그 발견:
                                  </h5>
                                  {sentence.similarBlogs.map((blog, index) => (
                                    <div key={index} className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">
                                          {index + 1}. {blog.name}
                                        </span>
                                        <span className="text-sm text-gray-600">
                                          (유사도: {blog.similarity})
                                        </span>
                                      </div>
                                      <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-green-500">
                                        <p className="text-xs text-gray-700 leading-relaxed italic">
                                          "{blog.quote}"
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 3. 객관성 분석 탭의 내용 수정 - TabsContent value="credibility" 부분을 찾아 수정 */}
              {/* 객관성 분석 탭 - 새로운 미니멀 디자인 */}
              <TabsContent value="credibility" className="mt-0">
                {/* 상단 정보 배너 */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
                  <p className="text-sm text-green-700">
                    해당 블로그 글에서 광고성으로 의심할 수 있는 부분들을
                    객관적으로 분석한 내용입니다. 브랜드명, 제품명, 특정 표현 등
                    관련 요소들을 중심으로 정리하였습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* 왼쪽 열 - 객관성 점수 및 태그 */}
                  <div className="space-y-6">
                    {/* 객관성 점수 카드 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
                      <div className="text-5xl font-bold text-gray-800 mb-2">
                        {(analyzedData?.ad_style_analysis?.ad_score)}/34 ({(analyzedData?.ad_style_analysis?.ad_percentage)}%)
                      </div>
                      <div className="text-sm text-gray-500 mb-4">
                        광고 확률
                      </div>
                      <div className={`inline-block bg-${getRecommnedationColor(analyzedData?.ad_style_analysis?.ad_percentage)}-100 text-${getRecommnedationColor(analyzedData?.ad_style_analysis?.ad_percentage)}-800 px-3 py-1 rounded-full text-sm font-medium`}>
                        {getRecommnedationword(analyzedData?.ad_style_analysis?.ad_percentage)}
                      </div>
                    </div>

                    {/* 브랜드/제품명 태그 */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h5 className="text-sm font-medium text-gray-500 mb-3">
                        주요 브랜드/제품명
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-100 text-green-800 font-normal">
                          {analyzedData?.ad_style_analysis?.brand}
                        </Badge>
                      </div>
                    </div>

                    {/* 카테고리 태그 */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h5 className="text-sm font-medium text-gray-500 mb-3">
                        카테고리
                      </h5>
                      <Badge className="bg-green-100 text-green-800 font-normal">
                        {analyzedData?.ad_style_analysis?.category}
                      </Badge>
                    </div>
                  </div>

                  {/* 오른쪽 열 - 객관성 그래프 */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* 객관성 그래프 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-base font-medium text-gray-700 mb-5">
                        객관성 키워드 분석
                      </h4>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={objectivityBarData}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 60,
                            }}
                          >
                            <CartesianGrid
                              strokeDasharray="3 3"
                              horizontal={true}
                              vertical={false}
                            />
                            <XAxis
                              dataKey="name"
                              tick={{ fontSize: 11 }}
                              interval={0}
                              angle={-45}
                              textAnchor="end"
                            />
                            <YAxis domain={[0, 12]} />
                            <Tooltip
                              formatter={(value, name, props) => {
                                const item = props.payload;
                                return [
                                  `${value}`,
                                  item.ratio
                                    ? `비율: ${item.ratio.replace("\n", " ")}`
                                    : "수치",
                                ];
                              }}
                            />
                            <Bar dataKey="value" fill="#e5e7eb">
                              {objectivityBarData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={entry.color}
                                />
                              ))}
                              {objectivityBarData.map((entry, index) => {
                                if (entry.ratio) {
                                  return (
                                    <text
                                      key={`text-${index}`}
                                      x={
                                        index *
                                          (500 / objectivityBarData.length) +
                                        500 / objectivityBarData.length / 2
                                      }
                                      y={entry.value * 20 - 15}
                                      textAnchor="middle"
                                      fill="#fff"
                                      fontSize={10}
                                      fontWeight="bold"
                                    >
                                      {entry.ratio.split("\n")[0]}
                                    </text>
                                  );
                                }
                                return null;
                              })}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
                          <span>주의 필요 (33-50%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                          <span>높은 광고성 (67% 이상)</span>
                        </div>
                      </div>
                    </div>

                    {/* 게시글 요약 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-base font-medium text-gray-700 mb-4">
                        게시글 주요 내용 요약
                      </h4>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {analyzedData?.ad_style_analysis?.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 종합 분석 탭 */}
              <TabsContent value="comprehensive" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-green-800">
                        한눈에 종합 비교!
                      </h3>
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={radarData}>
                          <PolarGrid />
                          <PolarAngleAxis
                            dataKey="subject"
                            tick={{ fontSize: 11 }}
                          />
                          <PolarRadiusAxis
                            angle={90}
                            domain={[0, 100]}
                            tick={{ fontSize: 10 }}
                          />
                          <Radar
                            name="점수"
                            dataKey="score"
                            stroke="#ef4444"
                            fill="#ef4444"
                            fillOpacity={0.3}
                            strokeWidth={2}
                          />
                          <RechartsTooltip
                            formatter={(value, name, props) => [
                              `${value}점`,
                              props.payload.description,
                            ]}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-600">
                      점수가 높을수록 해당 특성이 강함을 의미합니다
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        📈 지표별 상세 해석
                      </h4>
                      <div className="space-y-4">
                        {radarData.map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-800">
                                {item.subject}
                              </span>
                              <span className="text-lg font-bold text-green-600">
                                {item.score}/100
                              </span>
                            </div>
                            <Progress value={item.score} className="h-2 mb-2" />
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h5 className="font-semibold text-red-800 mb-2">
                        ⚠️ 종합 평가
                      </h5>
                      <p className="text-sm text-red-700 leading-relaxed">
                        광고성 지수와 키워드 집중도가 높고, 내용 객관성과 정보
                        투명성이 낮아
                        <strong> 광고성 콘텐츠로 판단</strong>됩니다. 특히 협찬
                        관련 키워드와 과도한 긍정적 표현이 주요 판단 근거입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
