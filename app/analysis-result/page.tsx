"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircularProgress } from "@/components/circular-progress";
import {
  AlertTriangle,
  ArrowLeft,
  Home,
  Info,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAnalyzer } from "@/contexts/AnalyzerContext";

export default function AnalysisResultPage() {
  const { analyzedData, analyzedUrl } = useAnalyzer();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  const handleDetailedAnalysis = () => {
    router.push("/detailed-analysis");
  };

  console.log(analyzedData);
  console.log(analyzedUrl);

  const getPositiveExpression = (positive_score) => {
    if (isNaN(positive_score)) return "API를 불러오는 중 에러가 발생했습니다.";

    if (positive_score > 80) return "과도한 긍정적 표현";

    if (positive_score > 50) return "높은 긍정적 표현";

    return "적당한 긍정적 표현";
  };

  const getPositiveColor = (positive_score) => {
    if (isNaN(positive_score)) return "gray";

    if (positive_score > 80) return "red";

    if (positive_score > 50) return "orange";

    return "yellow";
  };

  const getRecommnedationExpression = (credibility_score) => {
    if (credibility_score == null)
      return "API를 불러오는 중 에러가 발생했습니다.";

    if (credibility_score >= 7) return "높음";

    if (credibility_score >= 4) return "보통";

    return "낮음";
  };

  const getRecommnedationColor = (credibility_score) => {
    if (credibility_score == null) return "gray";

    if (credibility_score >= 7) return "red";

    if (credibility_score >= 4) return "orange";

    return "yello";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* 네이버 스타일 헤더 */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">분석 결과</h1>
            </div>
            <div className="flex items-center gap-2">
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

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 브레드크럼 */}
        <div className="mb-6 text-sm text-gray-500">
          <span
            className="hover:text-green-600 cursor-pointer"
            onClick={handleHome}
          >
            홈
          </span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-800">분석 결과</span>
        </div>

        {/* 분석 URL 표시 - 네이버 스타일 초록색으로 변경 */}
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>분석 대상:</strong> {analyzedUrl}
          </p>
        </div>

        {/* 최종 판단 - 가장 크게 표시 */}
        <Card className="mb-8 shadow-xl border-0 bg-white">
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              {analyzedData?.adbuster_final_score_analysis?.grade ==
              "🟡 신뢰" ? (
                <>
                  <div className="inline-flex items-center gap-4 px-10 py-6 bg-yellow-100 border-3 border-yellow-300 rounded-2xl shadow-lg">
                    <div className="text-6xl">🟡</div>
                    <div className="text-left">
                      <div className="text-3xl font-bold text-yellow-800 mb-1">
                        신뢰
                      </div>
                      <div className="text-lg text-yellow-700">
                        신뢰할 수 있는 글입니다.
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center gap-4 px-10 py-6 bg-red-100 border-3 border-red-300 rounded-2xl shadow-lg">
                    <div className="text-6xl">🔴</div>
                    <div className="text-left">
                      <div className="text-3xl font-bold text-red-800 mb-1">
                        광고 의심
                      </div>
                      <div className="text-lg text-red-700">
                        광고성 요소가 다수 발견되어 주의가 필요합니다
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 종합 점수 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                종합 광고 가능성
              </h3>
              <CircularProgress
                percentage={(
                  analyzedData?.adbuster_final_score_analysis?.final_score ?? 0
                ).toFixed(1)}
              />
            </div>
          </CardContent>
        </Card>

        {/* 핵심 분석 지표 - 네이버 스타일 초록색으로 변경 */}
        <Card className="mb-8 shadow-lg border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Info className="w-6 h-6" />
              주요 분석 지표
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 긍정적 표현 비율 */}
              <div
                className={`bg-${getPositiveColor(
                  analyzedData?.athena_analysis?.azure_overall_sentiment
                    ?.positive_score * 100
                )}-50 p-6 rounded-lg border-2 border-${getPositiveColor(
                  analyzedData?.athena_analysis?.azure_overall_sentiment
                    ?.positive_score * 100
                )}-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {getPositiveExpression(
                      analyzedData?.athena_analysis?.azure_overall_sentiment
                        ?.positive_score * 100
                    )}
                  </h4>
                  <span
                    className={`text-2xl font-bold text-${getPositiveColor(
                      analyzedData?.athena_analysis?.azure_overall_sentiment
                        ?.positive_score * 100
                    )}-600`}
                  >
                    {(
                      (analyzedData?.athena_analysis?.azure_overall_sentiment
                        ?.positive_score ?? 0) * 100
                    ).toFixed(0)}
                    %
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div
                    className={`bg-${getPositiveColor(
                      analyzedData?.athena_analysis?.azure_overall_sentiment
                        ?.positive_score * 100
                    )}-500 h-3 rounded-full transition-all duration-1000`}
                    style={{
                      width: `${
                        (analyzedData?.athena_analysis?.azure_overall_sentiment
                          ?.positive_score ?? 0) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <p
                  className={`text-sm text-${getPositiveColor(
                    analyzedData?.athena_analysis?.azure_overall_sentiment
                      ?.positive_score * 100
                  )}-700`}
                >
                  일반적인 리뷰보다 긍정적 표현이 현저히 높습니다
                </p>
              </div>

              {/* 광고성 키워드 빈도 */}
              <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    광고성 키워드 빈도
                  </h4>
                  <span className="text-2xl font-bold text-orange-600">
                    높음
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="text-sm text-orange-700">
                  '추천', '협찬' 등 광고 관련 키워드가 22회 발견되었습니다
                </p>
              </div>

              {/* 객관성 수준 */}
              <div
                className={`bg-${getRecommnedationColor(
                  analyzedData?.athena_analysis?.credibility_score
                )}-50 p-6 rounded-lg border-2 border-${getRecommnedationColor(
                  analyzedData?.athena_analysis?.credibility_score
                )}-200 md:col-span-2`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    객관성 수준
                  </h4>
                  <span
                    className={`text-2xl font-bold text-${getRecommnedationColor(
                      analyzedData?.athena_analysis?.credibility_score
                    )}-600`}
                  >
                    {getRecommnedationExpression(
                      analyzedData?.athena_analysis?.credibility_score
                    )}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div
                    className={`bg-${getRecommnedationColor(
                      analyzedData?.athena_analysis?.credibility_score
                    )}-500 h-3 rounded-full transition-all duration-1000`}
                    style={{
                      width: `${
                        (analyzedData?.athena_analysis?.credibility_score ??
                          0) * 10
                      }%`,
                    }}
                  ></div>
                </div>
                <p
                  className={`text-sm text-${getRecommnedationColor(
                    analyzedData?.athena_analysis?.credibility_score
                  )}-700`}
                >
                  균형잡힌 시각이 부족하고 주관적인 표현이 많습니다
                </p>
              </div>
            </div>

            {/* 하단 상세 분석 버튼 */}
            <div className="mt-8 text-center">
              <Button
                onClick={handleDetailedAnalysis}
                variant="outline"
                className="border-green-200 text-green-700 hover:bg-green-50 px-6 py-3 text-base font-medium"
              >
                <BarChart3 className="w-5 h-5 mr-2" />더 자세한 분석 결과 보기
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 최종 안내 - 네이버 스타일 초록색으로 변경 */}
        <Alert className="border-green-200 bg-green-50 shadow-lg">
          <Info className="w-6 h-6 text-green-600" />
          <div className="ml-3">
            <h3 className="font-bold text-lg text-green-800 mb-2">
              💡 이 분석 결과는 참고용입니다
            </h3>
            <AlertDescription className="text-green-700 leading-relaxed text-base">
              AI 기반 자동 분석 결과이며, 최종 판단은 사용자의 몫입니다.
            </AlertDescription>
          </div>
        </Alert>
      </div>
    </div>
  );
}
