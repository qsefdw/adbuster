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
import { useEffect } from "react";

export default function AnalysisResultPage() {
  const { analyzedData, analyzedUrl } = useAnalyzer();
  const router = useRouter();

  useEffect(() => {
    if (!analyzedData || !analyzedUrl) {
      router.push("/");
    }
  }, [analyzedData, analyzedUrl]);

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

    if (positive_score > 60) return "높은 긍정적 표현";

    return "적당한 긍정적 표현";
  };

  const getPositiveword = (positive_score) => {
    if (isNaN(positive_score)) return "API를 불러오는 중 에러가 발생했습니다.";

    if (positive_score > 80) return "긍정적인 표현이 과하게 높습니다.";

    if (positive_score > 60) return "긍정적인 표현이 상당히 높습니다.";

    return "긍정적인 표현이 적당하게 되어있습니다.";
  };

  const getkeywordExpression = (percentage) => {
    if (isNaN(percentage)) return "API를 불러오는 중 에러가 발생했습니다.";

    if (percentage > 80) return " 키워드 반복이 과하게 나타납니다.";

    if (percentage > 60) return "키워드 반복 횟수가 높습니다.";

    return "일반적은 글입니다.";
  };

  const getkeywordColor = (percentage) => {
    if (isNaN(percentage)) return "gray";

    if (percentage >= 80) return "red";

    if (percentage >= 60) return "orange";

    if (percentage >= 40) return "yellow";

    return "green";
  };

  const getPositiveColor = (positive_score) => {
    if (isNaN(positive_score)) return "gray";

    if (positive_score >= 80) return "red";

    if (positive_score >= 60) return "orange";

    if (positive_score >= 40) return "yellow";

    return "green";
  };

  const getRecommnedationExpression = (ad_percentage) => {
    if (ad_percentage == null) return "API를 불러오는 중 에러가 발생했습니다.";

    if (ad_percentage >= 58.8) return "매우 높음";

    if (ad_percentage >= 29.4) return "주의";

    if (ad_percentage >= 14.7) return "신뢰";

    return "매우신뢰";
  };

  const getRecommnedationColor = (ad_percentage) => {
    if (ad_percentage == null) return "gray";

    if (ad_percentage >= 58.8) return "red";

    if (ad_percentage >= 29.4) return "orange";

    if (ad_percentage >= 14.7) return "yellow";

    return "green";
  };

  const getRecommnedationword = (ad_percentage) => {
    if (ad_percentage == null) return "오류입니다.";
    if (ad_percentage >= 58.8) return "명백한 광고글입니다.";
    if (ad_percentage >= 29.4) return "광고글로 의심됩니다.";
    if (ad_percentage >= 14.7) return "약간의 광고글일 확률이 있습니다.";
    return "광고글이 아닙니다.";
  };

  const getGradeIcon = (final_score) => {
    if (final_score >= 80) return "🟢";
    if (final_score >= 60) return "🟡";
    if (final_score >= 40) return "🟠";
    return "🔴";
  };

  const getGradeExpression = (final_score) => {
    if (final_score >= 80) return "매우 신뢰";
    if (final_score >= 60) return "신뢰";
    if (final_score >= 40) return "주의";
    return "경고";
  };

  const getGradeColor = (final_score) => {
    if (final_score >= 80) return "green";
    if (final_score >= 60) return "yellow";
    if (final_score >= 40) return "orange";
    return "red";
  };

  const getadColor = (average_ad_score) => {
    if (average_ad_score >= 80) return "red";
    if (average_ad_score >= 50) return "orange";
    if (average_ad_score >= 30) return "yellow";
    return "green";
  };

  const getadword = (average_ad_score) => {
    if (isNaN(average_ad_score))
      return "API를 불러오는 중 에러가 발생했습니다.";
    if (average_ad_score >= 80) return "명백한 광고성 콘텐츠입니다.";
    if (average_ad_score >= 50) return "광고성 의심됩니다.";
    if (average_ad_score >= 30) return "약간의 광고성이 의심됩니다.";
    return "독창적인 콘텐츠로 광고성이 없습니다.";
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
              <div
                className={`inline-flex items-center gap-4 px-10 py-6 bg-${getGradeColor(
                  analyzedData?.final_adbuster_score?.final_score ?? 0
                )}-100 border-3 border-${getGradeColor(
                  analyzedData?.final_adbuster_score?.final_score ?? 0
                )}-300 rounded-2xl shadow-lg`}
              >
                <div className="text-6xl">
                  {getGradeIcon(
                    analyzedData?.final_adbuster_score?.final_score ?? 0
                  )}
                </div>
                <div className="text-left">
                  <div
                    className={`text-3xl font-bold text-${getGradeColor(
                      analyzedData?.final_adbuster_score?.final_score ?? 0
                    )}-800 mb-1`}
                  >
                    {getGradeExpression(
                      analyzedData?.final_adbuster_score?.final_score ?? 0
                    )}
                  </div>
                  <div className="text-lg text-yellow-700">
                    신뢰할 수 있는 글입니다.
                  </div>
                </div>
              </div>
            </div>

            {/* 종합 점수 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                종합 신뢰 가능성
              </h3>
              <CircularProgress
                percentage={(
                  analyzedData?.final_adbuster_score?.final_score ?? 0
                ).toFixed(0)}
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
                  analyzedData?.sentiment_analysis?.overall_sentiment_azure
                    ?.positive_score * 100
                )}-50 p-6 rounded-lg border-2 border-${getPositiveColor(
                  analyzedData?.sentiment_analysis?.overall_sentiment_azure
                    ?.positive_score * 100
                )}-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {getPositiveExpression(
                      analyzedData?.sentiment_analysis?.overall_sentiment_azure
                        ?.positive_score * 100
                    )}
                  </h4>
                  <span
                    className={`text-2xl font-bold text-${getPositiveColor(
                      analyzedData?.sentiment_analysis?.overall_sentiment_azure
                        ?.positive_score * 100
                    )}-600`}
                  >
                    {(
                      (analyzedData?.sentiment_analysis?.overall_sentiment_azure
                        ?.positive_score ?? 0) * 100
                    ).toFixed(0)}
                    %
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div
                    className={`bg-${getPositiveColor(
                      analyzedData?.sentiment_analysis?.overall_sentiment_azure
                        ?.positive_score * 100
                    )}-500 h-3 rounded-full transition-all duration-1000`}
                    style={{
                      width: `${
                        (analyzedData?.sentiment_analysis
                          ?.overall_sentiment_azure?.positive_score ?? 0) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <p
                  className={`text-sm text-${getPositiveColor(
                    analyzedData?.sentiment_analysis?.overall_sentiment_azure
                      ?.positive_score * 100
                  )}-700`}
                >
                  {getPositiveword(
                    analyzedData?.sentiment_analysis?.overall_sentiment_azure
                      ?.positive_score * 100
                  )}
                </p>
              </div>

              {/* 광고 점수 */}
              <div
                className={`bg-${getadColor(
                  analyzedData?.similarity_analysis?.overall_summary
                    ?.overall_ad_score
                )}-50 p-6 rounded-lg border-2 border-${getadColor(
                  analyzedData?.similarity_analysis?.overall_summary
                    ?.overall_ad_score
                )}-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    광고성 점수
                  </h4>
                  <span
                    className={`text-2xl font-bold text-${getadColor(
                      analyzedData?.similarity_analysis?.overall_summary
                        ?.overall_ad_score
                    )}-600`}
                  >
                    {(
                      analyzedData?.similarity_analysis?.overall_summary
                        ?.overall_ad_score ?? 0
                    ).toFixed(1)}
                    /10
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div
                    className={`bg-${getadColor(
                      analyzedData?.similarity_analysis?.overall_summary
                        ?.overall_ad_score
                    )}-500 h-3 rounded-full transition-all duration-1000`}
                    style={{
                      width: `${
                        analyzedData?.similarity_analysis?.overall_summary
                          ?.overall_ad_score * 10 ?? 0
                      }%`,
                    }}
                  ></div>
                </div>
                <p
                  className={`text-sm text-${getadColor(
                    analyzedData?.similarity_analysis?.overall_summary
                      ?.overall_ad_score
                  )}-700`}
                >
                  {getadword(
                    analyzedData?.similarity_analysis?.overall_summary
                      ?.overall_ad_score
                  )}
                </p>
              </div>

              {/* 광고성 키워드 빈도 */}
              <div
                className={`bg-${getkeywordColor(
                  analyzedData?.keyword_analysis?.percentage
                )}-50 p-6 rounded-lg border-2 border-${getkeywordColor(
                  analyzedData?.keyword_analysis?.percentage
                )}-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    키워드 반복 점수
                  </h4>
                  <span
                    className={`text-2xl font-bold text-${getkeywordColor(
                      analyzedData?.keyword_analysis?.percentage
                    )}-600`}
                  >
                    {(analyzedData?.keyword_analysis?.percentage ?? 0).toFixed(
                      1
                    )}
                    %
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div
                    className={`bg-${getkeywordColor(
                      analyzedData?.keyword_analysis?.percentage
                    )}-500 h-3 rounded-full transition-all duration-1000`}
                    style={{
                      width: `${
                        analyzedData?.keyword_analysis?.percentage ?? 0
                      }%`,
                    }}
                  ></div>
                </div>
                <p
                  className={`text-sm text-${getkeywordColor(
                    analyzedData?.keyword_analysis?.percentage
                  )}-700`}
                >
                  {getkeywordExpression(
                    analyzedData?.keyword_analysis?.percentage
                  )}
                </p>
              </div>

              {/* 광고확률 */}
              <div
                className={`bg-${getRecommnedationColor(
                  analyzedData?.ad_style_analysis?.ad_percentage
                )}-50 p-6 rounded-lg border-2 border-${getRecommnedationColor(
                  analyzedData?.ad_style_analysis?.ad_percentage
                )}-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    광고확률
                  </h4>
                  <span
                    className={`text-2xl font-bold text-${getRecommnedationColor(
                      analyzedData?.ad_style_analysis?.ad_percentage
                    )}-600`}
                  >
                    {getRecommnedationExpression(
                      analyzedData?.ad_style_analysis?.ad_percentage
                    )}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div
                    className={`bg-${getRecommnedationColor(
                      analyzedData?.ad_style_analysis?.ad_percentage
                    )}-500 h-3 rounded-full transition-all duration-1000`}
                    style={{
                      width: `${
                        analyzedData?.ad_style_analysis?.ad_percentage ?? 0
                      }%`,
                    }}
                  ></div>
                </div>
                <p
                  className={`text-sm text-${getRecommnedationColor(
                    analyzedData?.ad_style_analysis?.ad_percentage
                  )}-700`}
                >
                  {getRecommnedationword(
                    analyzedData?.ad_style_analysis?.ad_percentage
                  )}
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
