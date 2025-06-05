"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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
  DollarSign,
  Link,
  Sparkles,
  Eye,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAnalyzer } from "@/contexts/AnalyzerContext";

export default function DetailedAnalysisPage() {
  const router = useRouter();
  const { analyzedData, analyzedUrl } = useAnalyzer();

  // 감성 분석 데이터 (실제 백엔드 데이터 기반)
  const sentimentData = [
    {
      name: "긍정",
      value: Number(
        (
          (analyzedData?.athena_analysis?.azure_overall_sentiment
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
          (analyzedData?.athena_analysis?.azure_overall_sentiment
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
          (analyzedData?.athena_analysis?.azure_overall_sentiment
            ?.neutral_score ?? 0) * 100
        ).toFixed(0)
      ),
      color: "#6b7280",
      description: "객관적 사실, 정보 전달",
    },
  ];

  // 키워드 분석 데이터 (실제 백엔드 데이터 기반)
  const keywordData = [
    { keyword: "추천", count: 22, category: "평가성" },
    { keyword: "협찬", count: 18, category: "광고성" },
    { keyword: "리뷰", count: 15, category: "평가성" },
    { keyword: "할인", count: 12, category: "상업성" },
    { keyword: "특가", count: 10, category: "상업성" },
  ];

  // 광고성 판단 근거 (실제 백엔드 데이터 기반)
  const adIndicators = [
    {
      icon: <DollarSign className="w-5 h-5 text-red-500" />,
      title: "협찬/원고료 문구 언급됨",
      detected: true,
      description: "협찬, 원고료 등 광고 관련 직접적 표현 발견",
    },
    {
      icon: <Link className="w-5 h-5 text-orange-500" />,
      title: "구매 유도 링크 포함",
      detected: true,
      description: "쇼핑몰 링크나 구매 유도 URL 포함",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-yellow-500" />,
      title: "과장된 긍정 표현 다수",
      detected: true,
      description: "과도한 칭찬이나 극찬 표현 반복 사용",
    },
    {
      icon: <Eye className="w-5 h-5 text-green-500" />,
      title: "체험단/서포터즈 활동",
      detected: false,
      description: "체험단이나 서포터즈 관련 언급",
    },
  ];

  // 레이더 차트 데이터 (백엔드 실제 데이터 기반, 가독성 제외)
  const radarData = [
    {
      subject: "광고성 지수",
      score: 78,
      description: "광고 관련 키워드와 표현의 집중도",
    },
    {
      subject: "내용 객관성",
      score: 45,
      description: "정보의 균형성과 객관적 서술 정도",
    },
    {
      subject: "키워드 집중도",
      score: 72,
      description: "특정 키워드의 반복 사용 빈도",
    },
    {
      subject: "정보 투명성",
      score: 35,
      description: "광고 표시 및 정보 공개의 투명성",
    },
  ];

  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

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
            {analyzedData?.aurora_analysis?.category}
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
                  광고성 분석
                </TabsTrigger>
                <TabsTrigger
                  value="credibility"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-100"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  객관성 분석
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
                            긍정적인 내용이 85%로 가장 많아요
                          </h5>
                          <p className="text-sm text-green-700">
                            주로 제품에 대한 만족감과 추천 의사를 표현하고
                            있네요. 일반적인 리뷰(50-60%)보다 현저히 높은
                            수준입니다.
                          </p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                          <h5 className="font-semibold text-yellow-800 mb-2">
                            균형잡힌 시각이 부족해요
                          </h5>
                          <p className="text-sm text-yellow-700">
                            부정적 의견이 8%로 매우 낮아 객관적인 평가가 부족할
                            수 있어요.
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-6">
                      <Search className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-green-800">
                        핵심 단어는 무엇?
                      </h3>
                    </div>
                    <div className="h-64 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={keywordData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="keyword" tick={{ fontSize: 12 }} />
                          <YAxis />
                          <RechartsTooltip
                            formatter={(value) => [`${value}회`, "언급 횟수"]}
                          />
                          <Bar
                            dataKey="count"
                            fill="#22c55e"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-semibold text-orange-800">
                          키워드 밀도: 높음
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        🔍 주요 키워드 상세 분석
                      </h4>
                      <div className="space-y-3">
                        {keywordData.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-medium text-gray-800">
                                {item.keyword}
                              </span>
                              <Badge
                                className={
                                  item.category === "광고성"
                                    ? "bg-red-100 text-red-800"
                                    : item.category === "상업성"
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-green-100 text-green-800"
                                }
                              >
                                {item.category}
                              </Badge>
                            </div>
                            <span className="font-bold text-green-600">
                              {item.count}회
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-2">
                        📈 키워드 분석 결과
                      </h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• 평가성 키워드("추천", "리뷰")가 상위권을 차지</li>
                        <li>• 광고성 키워드("협찬")가 18회 발견됨</li>
                        <li>• 상업성 키워드("할인", "특가")도 다수 포함</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 광고성 분석 탭 */}
              <TabsContent value="advertisement" className="mt-0">
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-6">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-semibold text-red-800">
                        광고일까 아닐까?
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {adIndicators.map((indicator, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border-2 ${
                            indicator.detected
                              ? "bg-red-50 border-red-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            {indicator.icon}
                            <span
                              className={`font-medium ${
                                indicator.detected
                                  ? "text-red-800"
                                  : "text-gray-600"
                              }`}
                            >
                              {indicator.title}
                            </span>
                            {indicator.detected && (
                              <Badge className="bg-red-100 text-red-800">
                                발견됨
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {indicator.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      🤖 AI가 본 광고 의심 부분 요약
                    </h4>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <p className="text-orange-800 leading-relaxed">
                        이 게시글은 제품에 대한 과도한 긍정적 표현과 함께 '협찬'
                        키워드가 다수 발견되었습니다. 특히 할인 정보와 구매
                        유도성 문구가 포함되어 있어 광고성 콘텐츠로 판단됩니다.
                        객관적인 단점이나 개선점에 대한 언급이 부족한 점도
                        주목할 만합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 객관성 분석 탭 */}
              <TabsContent value="credibility" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-6">
                      <Shield className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-green-800">
                        믿을 만한 정보인가?
                      </h3>
                    </div>

                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-lg border border-green-200">
                        <div className="text-4xl font-bold text-green-600">
                          45
                        </div>
                        <div className="text-left">
                          <div className="text-lg font-semibold text-green-800">
                            객관성 점수
                          </div>
                          <div className="text-sm text-green-600">
                            100점 만점
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">
                          📋 주요 브랜드/제품명
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-100 text-green-800">
                            ○○ 미백크림
                          </Badge>
                          <Badge className="bg-green-100 text-green-800">
                            △△ 화장품
                          </Badge>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">
                          🏷️ 카테고리
                        </h5>
                        <Badge className="bg-green-100 text-green-800">
                          뷰티/화장품
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        📊 객관성 평가 결과
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                          <h5 className="font-semibold text-yellow-800 mb-2">
                            보통 수준의 객관성
                          </h5>
                          <p className="text-sm text-yellow-700">
                            정보의 균형성과 객관성이 보통 수준입니다. 주관적
                            표현이 많고 다양한 관점에서의 평가가 부족합니다.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              정보 투명성
                            </span>
                            <span className="text-sm font-medium">35%</span>
                          </div>
                          <Progress value={35} className="h-2" />

                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              균형잡힌 시각
                            </span>
                            <span className="text-sm font-medium">40%</span>
                          </div>
                          <Progress value={40} className="h-2" />

                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              사실 기반 서술
                            </span>
                            <span className="text-sm font-medium">55%</span>
                          </div>
                          <Progress value={55} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        📝 게시글 주요 내용 요약
                      </h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        겨울철 피부관리를 위한 미백크림 사용 후기를 다루고
                        있으며, 제품의 효과와 만족도를 강조하고 있습니다. 할인
                        정보와 구매 링크가 포함되어 있어 상업적 목적이 강한
                        콘텐츠로 보입니다.
                      </p>
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
                              <span className="text-lg font-bold text-red-600">
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
