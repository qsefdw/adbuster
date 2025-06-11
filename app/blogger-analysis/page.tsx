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
  const [blogData, setBlogData] = useState({
    status: "success",
    message: "블로그 리서치 완료!",
    summary_report: {
      overview: {
        total_posts: 5,
        successful_analyses: 5,
        average_ad_score: 5.2,
      },
      brand_product_mentions: {
        unique_brands_count: 5,
        unique_categories_count: 5,
        top_brands: [
          "얼라이브지오",
          "조조모모",
          "넛세린",
          "바닐라코",
          "니들리",
        ],
        top_categories: [
          "화장품 (클렌징밤)",
          "화장품 (자외선차단제/선스틱)",
          "화장품 (세럼, 스킨케어)",
          "화장품 (토너패드)",
          "건강기능식품 (다이어트보조제)",
        ],
      },
    },
    score_summary: {
      per_post_scores: [
        {
          post_number: 1,
          title: "다이어트보조제 순위 효과 봤던 방법 추천",
          title_preview: "다이어트보조제 순위 효과 봤던 방법 추천",
          ad_score: 1,
          percentage: 2.9,
        },
        {
          post_number: 2,
          title: "피부속건조 수분세럼 추천 안티에이징 홈케어",
          title_preview: "피부속건조 수분세럼 추천 안티에이징 홈케어",
          ad_score: 2,
          percentage: 5.9,
        },
        {
          post_number: 3,
          title: "자외선차단제 추천 동상이몽 이모카세가 바르는 넛세린 선스틱",
          title_preview:
            "자외선차단제 추천 동상이몽 이모카세가 바르는 넛세린 선...",
          ad_score: 4,
          percentage: 11.8,
        },
        {
          post_number: 4,
          title: "6월 올리브영세일 니들리 토너패드 모공케어",
          title_preview: "6월 올리브영세일 니들리 토너패드 모공케어",
          ad_score: 3,
          percentage: 8.8,
        },
        {
          post_number: 5,
          title: "올인원 클렌징밤 바닐라코 클린잇제로 스누피에디션 소장각",
          title_preview:
            "올인원 클렌징밤 바닐라코 클린잇제로 스누피에디션 소장각",
          ad_score: 16,
          percentage: 47.1,
        },
      ],
      overall_statistics: {
        average_score: 5.2,
        average_percentage: 15.3,
        total_sum_score: 1,
        max_score: 16,
        max_score_post_title_preview: "올인원 클렌징밤 바닐라코 클린잇제로 ...",
        min_score: 1,
        min_score_post_title_preview: "다이어트보조제 순위 효과 봤던 방법 ...",
      },
      item_cumulative_scores: [
        {
          item_name: "명시광고",
          total_score: 12,
          post_count: 1,
        },
        {
          item_name: "노부정",
          total_score: 8,
          post_count: 4,
        },
        {
          item_name: "기관인용",
          total_score: 3,
          post_count: 3,
        },
        {
          item_name: "후원",
          total_score: 2,
          post_count: 2,
        },
        {
          item_name: "구매유도",
          total_score: 1,
          post_count: 1,
        },
      ],
      overall_ad_level: "🟡 낮음 (일반적인 블로그)",
      sponsored_posts_analysis: {
        count: 2,
        details: [
          {
            title: "자외선차단제 추천 동상이몽 이모카세가 바르는 넛세린 선스틱",
            title_preview:
              "자외선차단제 추천 동상이몽 이모카세가 바르는 넛세린 선...",
            type: "후원",
            score: 1,
          },
          {
            title: "올인원 클렌징밤 바닐라코 클린잇제로 스누피에디션 소장각",
            title_preview:
              "올인원 클렌징밤 바닐라코 클린잇제로 스누피에디션 소장각",
            type: "후원",
            score: 1,
          },
        ],
        note: "⚠️ 중요: 원고료/후원 받은 글은 100% 광고성 콘텐츠입니다.",
      },
    },
    detailed_report: [
      {
        post_number: 1,
        title: "다이어트보조제 순위 효과 봤던 방법 추천",
        url: "https://blog.naver.com/prettydr/223895758748?fromRss=true&trackingCode=rss",
        status: "success",
        date: "2시간 전",
        content_length: 2598,
        content_preview: "",
        ad_score: 1,
        ad_percentage: 2.9,
        detailed_ad_items: [
          {
            item: "기관인용",
            score: 1,
          },
        ],
        brand: "얼라이브지오",
        slogan: "없음",
        category: "건강기능식품 (다이어트보조제)",
      },
      {
        post_number: 2,
        title: "피부속건조 수분세럼 추천 안티에이징 홈케어",
        url: "https://blog.naver.com/prettydr/223893202050?fromRss=true&trackingCode=rss",
        status: "success",
        date: "2025. 6. 9. 12:50",
        content_length: 2016,
        content_preview: "",
        ad_score: 2,
        ad_percentage: 5.9,
        detailed_ad_items: [
          {
            item: "노부정",
            score: 2,
          },
        ],
        brand: "조조모모",
        slogan: "없음",
        category: "화장품 (세럼, 스킨케어)",
      },
      {
        post_number: 3,
        title: "자외선차단제 추천 동상이몽 이모카세가 바르는 넛세린 선스틱",
        url: "https://blog.naver.com/prettydr/223883015919?fromRss=true&trackingCode=rss",
        status: "success",
        date: "2025. 6. 2. 22:00",
        content_length: 2282,
        content_preview: "",
        ad_score: 4,
        ad_percentage: 11.8,
        detailed_ad_items: [
          {
            item: "후원",
            score: 1,
          },
          {
            item: "노부정",
            score: 2,
          },
          {
            item: "기관인용",
            score: 1,
          },
        ],
        brand: "넛세린",
        slogan: "없음",
        category: "화장품 (자외선차단제/선스틱)",
      },
      {
        post_number: 4,
        title: "6월 올리브영세일 니들리 토너패드 모공케어",
        url: "https://blog.naver.com/prettydr/223885980943?fromRss=true&trackingCode=rss",
        status: "success",
        date: "2025. 6. 2. 13:32",
        content_length: 1889,
        content_preview: "",
        ad_score: 3,
        ad_percentage: 8.8,
        detailed_ad_items: [
          {
            item: "노부정",
            score: 2,
          },
          {
            item: "기관인용",
            score: 1,
          },
        ],
        brand: "니들리",
        slogan: "없음",
        category: "화장품 (토너패드)",
      },
      {
        post_number: 5,
        title: "올인원 클렌징밤 바닐라코 클린잇제로 스누피에디션 소장각",
        url: "https://blog.naver.com/prettydr/223883022874?fromRss=true&trackingCode=rss",
        status: "success",
        date: "2025. 6. 1. 10:00",
        content_length: 2300,
        content_preview: "",
        ad_score: 16,
        ad_percentage: 47.1,
        detailed_ad_items: [
          {
            item: "후원",
            score: 1,
          },
          {
            item: "구매유도",
            score: 1,
          },
          {
            item: "노부정",
            score: 2,
          },
          {
            item: "명시광고",
            score: 12,
          },
        ],
        brand: "바닐라코",
        slogan: "없음",
        category: "화장품 (클렌징밤)",
      },
    ],
    charts: {
      bar_chart: {
        type: "bar",
        title: "포스트별 광고성 점수",
        x_axis_label: "포스트",
        y_axis_label: "광고성 점수",
        y_axis_range: [0, 34],
        data_points: [
          {
            label: "1. 다이어트보조제 순위 효과 봤던 방법 ...",
            value: 1,
            color: "#00C851",
            text: "1점 (🟢 매우 낮음)",
          },
          {
            label: "2. 피부속건조 수분세럼 추천 안티에이징 ...",
            value: 2,
            color: "#00C851",
            text: "2점 (🟢 매우 낮음)",
          },
          {
            label: "3. 자외선차단제 추천 동상이몽 이모카세가...",
            value: 4,
            color: "#00C851",
            text: "4점 (🟢 매우 낮음)",
          },
          {
            label: "4. 6월 올리브영세일 니들리 토너패드 모...",
            value: 3,
            color: "#00C851",
            text: "3점 (🟢 매우 낮음)",
          },
          {
            label: "5. 올인원 클렌징밤 바닐라코 클린잇제로 ...",
            value: 16,
            color: "#CC0000",
            text: "16점 (🔴 다소 높음)",
          },
        ],
      },
      donut_chart: {
        type: "donut",
        title: "항목별 누적 점수 분포",
        data_segments: [
          {
            label: "명시광고 (획득)",
            value: 12.0,
            color: "#FF0000",
          },
          {
            label: "명시광고 (여유)",
            value: 48.0,
            color: "#FF000015",
          },
          {
            label: "노부정 (획득)",
            value: 8.0,
            color: "#00CED1",
          },
          {
            label: "노부정 (여유)",
            value: 7.0,
            color: "#00CED115",
          },
          {
            label: "기관인용 (획득)",
            value: 3.0,
            color: "#0066FF",
          },
          {
            label: "기관인용 (여유)",
            value: 7.0,
            color: "#0066FF15",
          },
          {
            label: "후원 (획득)",
            value: 2.0,
            color: "#00CC00",
          },
          {
            label: "후원 (여유)",
            value: 13.0,
            color: "#00CC0015",
          },
          {
            label: "구매유도 (획득)",
            value: 1.0,
            color: "#FFD700",
          },
          {
            label: "구매유도 (여유)",
            value: 9.0,
            color: "#FFD70015",
          },
        ],
        subtitle: "총 26.0/170점 (15.3%)",
      },
      trend_chart: {
        type: "line",
        title: "시간순 광고성 점수 트렌드",
        x_axis_label: "날짜",
        y_axis_label: "광고성 점수",
        y_axis_range: [0, 34],
        data_points: [
          {
            date: "2025-06-01",
            score: 16,
            title: "올인원 클렌징밤 바닐라코 클린잇제로 스누피에디션 소장각",
          },
          {
            date: "2025-06-02",
            score: 4,
            title: "자외선차단제 추천 동상이몽 이모카세가 바르는 넛세린 선스틱",
          },
          {
            date: "2025-06-02",
            score: 3,
            title: "6월 올리브영세일 니들리 토너패드 모공케어",
          },
          {
            date: "2025-06-09",
            score: 2,
            title: "피부속건조 수분세럼 추천 안티에이징 홈케어",
          },
          {
            date: "2025-06-11",
            score: 1,
            title: "다이어트보조제 순위 효과 봤던 방법 추천",
          },
        ],
        average_line: {
          value: 5.2,
          label: "평균: 5.2점",
        },
      },
    },
    analysis_results: [
      {
        title: "다이어트보조제 순위 효과 봤던 방법 추천",
        url: "https://blog.naver.com/prettydr/223895758748?fromRss=true&trackingCode=rss",
        date: "2시간 전",
        content_length: 2598,
        content_text_preview:
          "항상 일에 쫒겨 사는 저는운동은 꿈도 못 꾸고 있는데요.밥시간도 제대로 지키지 못해한 끼만 먹는 날도 많아요.​그런데 이 정도면 살이 빠지는 게정상이라고 생각할 수 있는데도되려 체지방이 늘어나고 있다는 게항상 의문이더라고요.​그렇다 보니 관리는 숙제처럼계속하고 있는 일이기도 해요.보조제, 식이요법 등갖은 방법으로 동원했었죠.​​20대까지만 해도 굶는 방식을...",
        ad_score: 1,
        brand: "얼라이브지오",
        slogan: "없음",
        category: "건강기능식품 (다이어트보조제)",
        detailed: {
          후원: 0,
          구매유도: 0,
          관련링크: 0,
          감정분석: 0,
          노부정: 0,
          슬로건: 0,
          기관인용: 1,
          체험전후: 0,
          제품반복: 0,
          해시태그: 0,
          광고이모지: 0,
          명시광고: 0,
        },
        percentage: 2.9,
        ad_score_data: {
          scores: {
            sponsor: 0,
            purchase: 0,
            links: 0,
            sentiment: 0,
            no_negative: 0,
            slogan: 0,
            citation: 1,
            before_after: 0,
            repetition: 0,
            hashtags: 0,
            ad_emoji: 0,
            explicit_ad: 0,
          },
          items: [
            {
              id: "sponsor",
              name: "후원",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "purchase",
              name: "구매유도",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "links",
              name: "관련링크",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "sentiment",
              name: "감정분석",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "no_negative",
              name: "노부정",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "slogan",
              name: "슬로건",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "citation",
              name: "기관인용",
              score: 1,
              max_score: 2,
              status: "✓",
              percentage: 50,
            },
            {
              id: "before_after",
              name: "체험전후",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "repetition",
              name: "제품반복",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "hashtags",
              name: "해시태그",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "ad_emoji",
              name: "광고이모지",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "explicit_ad",
              name: "명시광고",
              score: 0,
              max_score: 12,
              status: "✗",
              percentage: 0,
            },
          ],
          total_score: 1,
          max_score: 34,
          percentage: 2.9,
          level: "low",
        },
        status: "success",
      },
      {
        title: "피부속건조 수분세럼 추천 안티에이징 홈케어",
        url: "https://blog.naver.com/prettydr/223893202050?fromRss=true&trackingCode=rss",
        date: "2025. 6. 9. 12:50",
        content_length: 2016,
        content_text_preview:
          "요즘 뭘 발라도 푸석거리고 아침마다 피부속건조때문에 스킨케어 루틴에 대한 고민이 많은데요.이젠 나이가 있다보니 안티에이징 케어도 신경을써야 되는 만큼 복잡한 홈케어 루틴이 아닌간편하게 하나만 발라도 보습,기미관리가 되는아이템이 필요했거든요. 기미없애는법 고민하다가조조모모 퍼펙트 아쿠아 세럼추천 받았어요.​​​지금까지 수분세럼 아무리 레이어링 해서발라주어도 ...",
        ad_score: 2,
        brand: "조조모모",
        slogan: "없음",
        category: "화장품 (세럼, 스킨케어)",
        detailed: {
          후원: 0,
          구매유도: 0,
          관련링크: 0,
          감정분석: 0,
          노부정: 2,
          슬로건: 0,
          기관인용: 0,
          체험전후: 0,
          제품반복: 0,
          해시태그: 0,
          광고이모지: 0,
          명시광고: 0,
        },
        percentage: 5.9,
        ad_score_data: {
          scores: {
            sponsor: 0,
            purchase: 0,
            links: 0,
            sentiment: 0,
            no_negative: 2,
            slogan: 0,
            citation: 0,
            before_after: 0,
            repetition: 0,
            hashtags: 0,
            ad_emoji: 0,
            explicit_ad: 0,
          },
          items: [
            {
              id: "sponsor",
              name: "후원",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "purchase",
              name: "구매유도",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "links",
              name: "관련링크",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "sentiment",
              name: "감정분석",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "no_negative",
              name: "노부정",
              score: 2,
              max_score: 3,
              status: "✓",
              percentage: 67,
            },
            {
              id: "slogan",
              name: "슬로건",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "citation",
              name: "기관인용",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "before_after",
              name: "체험전후",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "repetition",
              name: "제품반복",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "hashtags",
              name: "해시태그",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "ad_emoji",
              name: "광고이모지",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "explicit_ad",
              name: "명시광고",
              score: 0,
              max_score: 12,
              status: "✗",
              percentage: 0,
            },
          ],
          total_score: 2,
          max_score: 34,
          percentage: 5.9,
          level: "low",
        },
        status: "success",
      },
      {
        title: "자외선차단제 추천 동상이몽 이모카세가 바르는 넛세린 선스틱",
        url: "https://blog.naver.com/prettydr/223883015919?fromRss=true&trackingCode=rss",
        date: "2025. 6. 2. 22:00",
        content_length: 2282,
        content_text_preview:
          "브랜드로부터 제품과 원고료를 제공받아 직접 사용해보고 작성한 후기입니다.​​벌써 여름이 시작된 건지 한낮 기온이 30도를향해가면서 강렬히 내리쬐는 태양빛에조금만 걸어도 얼굴에서 땀이 줄줄 흐르는데요.아침에 자외선차단제 바르고 나왔어도 금새 땀으로지워져 버리고 틈틈히 발라주고 싶어도 손으로문지르고 흡수시키는 과정이 귀찮고 번거롭더라구요.​​​​간편하게 샤삭 ...",
        ad_score: 4,
        brand: "넛세린",
        slogan: "없음",
        category: "화장품 (자외선차단제/선스틱)",
        detailed: {
          후원: 1,
          구매유도: 0,
          관련링크: 0,
          감정분석: 0,
          노부정: 2,
          슬로건: 0,
          기관인용: 1,
          체험전후: 0,
          제품반복: 0,
          해시태그: 0,
          광고이모지: 0,
          명시광고: 0,
        },
        percentage: 11.8,
        ad_score_data: {
          scores: {
            sponsor: 1,
            purchase: 0,
            links: 0,
            sentiment: 0,
            no_negative: 2,
            slogan: 0,
            citation: 1,
            before_after: 0,
            repetition: 0,
            hashtags: 0,
            ad_emoji: 0,
            explicit_ad: 0,
          },
          items: [
            {
              id: "sponsor",
              name: "후원",
              score: 1,
              max_score: 3,
              status: "✓",
              percentage: 33,
            },
            {
              id: "purchase",
              name: "구매유도",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "links",
              name: "관련링크",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "sentiment",
              name: "감정분석",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "no_negative",
              name: "노부정",
              score: 2,
              max_score: 3,
              status: "✓",
              percentage: 67,
            },
            {
              id: "slogan",
              name: "슬로건",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "citation",
              name: "기관인용",
              score: 1,
              max_score: 2,
              status: "✓",
              percentage: 50,
            },
            {
              id: "before_after",
              name: "체험전후",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "repetition",
              name: "제품반복",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "hashtags",
              name: "해시태그",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "ad_emoji",
              name: "광고이모지",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "explicit_ad",
              name: "명시광고",
              score: 0,
              max_score: 12,
              status: "✗",
              percentage: 0,
            },
          ],
          total_score: 4,
          max_score: 34,
          percentage: 11.8,
          level: "low",
        },
        status: "success",
      },
      {
        title: "6월 올리브영세일 니들리 토너패드 모공케어",
        url: "https://blog.naver.com/prettydr/223885980943?fromRss=true&trackingCode=rss",
        date: "2025. 6. 2. 13:32",
        content_length: 1889,
        content_text_preview:
          "유분기 많고 속은 건조한 전형적인 수부지타입이라 날이 더워진 요즘 얼굴이 하루종일꿉꿉하고 모공도 늘어나기 시작했는데요.아침마다 느껴지는 속건조, 속당김은 물론뭘 발라도 흡수는 안되고 겉도니까 화장도들뜨고 각질도 많아져서 데일리 보습과 모공케어루틴을 위해 니들리 토너패드 준비했어요.​​6월 올리브영세일 기간에 에센스 용량이 증가된80매 기획구성을 최대 36%...",
        ad_score: 3,
        brand: "니들리",
        slogan: "없음",
        category: "화장품 (토너패드)",
        detailed: {
          후원: 0,
          구매유도: 0,
          관련링크: 0,
          감정분석: 0,
          노부정: 2,
          슬로건: 0,
          기관인용: 1,
          체험전후: 0,
          제품반복: 0,
          해시태그: 0,
          광고이모지: 0,
          명시광고: 0,
        },
        percentage: 8.8,
        ad_score_data: {
          scores: {
            sponsor: 0,
            purchase: 0,
            links: 0,
            sentiment: 0,
            no_negative: 2,
            slogan: 0,
            citation: 1,
            before_after: 0,
            repetition: 0,
            hashtags: 0,
            ad_emoji: 0,
            explicit_ad: 0,
          },
          items: [
            {
              id: "sponsor",
              name: "후원",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "purchase",
              name: "구매유도",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "links",
              name: "관련링크",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "sentiment",
              name: "감정분석",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "no_negative",
              name: "노부정",
              score: 2,
              max_score: 3,
              status: "✓",
              percentage: 67,
            },
            {
              id: "slogan",
              name: "슬로건",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "citation",
              name: "기관인용",
              score: 1,
              max_score: 2,
              status: "✓",
              percentage: 50,
            },
            {
              id: "before_after",
              name: "체험전후",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "repetition",
              name: "제품반복",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "hashtags",
              name: "해시태그",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "ad_emoji",
              name: "광고이모지",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "explicit_ad",
              name: "명시광고",
              score: 0,
              max_score: 12,
              status: "✗",
              percentage: 0,
            },
          ],
          total_score: 3,
          max_score: 34,
          percentage: 8.8,
          level: "low",
        },
        status: "success",
      },
      {
        title: "올인원 클렌징밤 바닐라코 클린잇제로 스누피에디션 소장각",
        url: "https://blog.naver.com/prettydr/223883022874?fromRss=true&trackingCode=rss",
        date: "2025. 6. 1. 10:00",
        content_length: 2300,
        content_text_preview:
          "“본 포스팅은 해당 브랜드로부터 소정의 원고료 및 제품 지원을 받아 직접 사용해 보고 작성되었습니다.​​날이 더워지면서 하루종일 꿉꿉함이느껴지는수부지 피부라 메이크업 지우는 과정이복잡한데요. 오일로 1차, 폼으로 2차 클렌징을해도 토너패드를 해보면 잔여물이 묻어나오고속건조 속당김이 느껴져서 고민이 많았어요.점점 피지와 각질이 쌓여 거칠어진 피부결을보면서 이...",
        ad_score: 16,
        brand: "바닐라코",
        slogan: "없음",
        category: "화장품 (클렌징밤)",
        detailed: {
          후원: 1,
          구매유도: 1,
          관련링크: 0,
          감정분석: 0,
          노부정: 2,
          슬로건: 0,
          기관인용: 0,
          체험전후: 0,
          제품반복: 0,
          해시태그: 0,
          광고이모지: 0,
          명시광고: 12,
        },
        percentage: 47.1,
        ad_score_data: {
          scores: {
            sponsor: 1,
            purchase: 1,
            links: 0,
            sentiment: 0,
            no_negative: 2,
            slogan: 0,
            citation: 0,
            before_after: 0,
            repetition: 0,
            hashtags: 0,
            ad_emoji: 0,
            explicit_ad: 12,
          },
          items: [
            {
              id: "sponsor",
              name: "후원",
              score: 1,
              max_score: 3,
              status: "✓",
              percentage: 33,
            },
            {
              id: "purchase",
              name: "구매유도",
              score: 1,
              max_score: 2,
              status: "✓",
              percentage: 50,
            },
            {
              id: "links",
              name: "관련링크",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "sentiment",
              name: "감정분석",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "no_negative",
              name: "노부정",
              score: 2,
              max_score: 3,
              status: "✓",
              percentage: 67,
            },
            {
              id: "slogan",
              name: "슬로건",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "citation",
              name: "기관인용",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "before_after",
              name: "체험전후",
              score: 0,
              max_score: 1,
              status: "✗",
              percentage: 0,
            },
            {
              id: "repetition",
              name: "제품반복",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "hashtags",
              name: "해시태그",
              score: 0,
              max_score: 3,
              status: "✗",
              percentage: 0,
            },
            {
              id: "ad_emoji",
              name: "광고이모지",
              score: 0,
              max_score: 2,
              status: "✗",
              percentage: 0,
            },
            {
              id: "explicit_ad",
              name: "명시광고",
              score: 12,
              max_score: 12,
              status: "✓",
              percentage: 100,
            },
          ],
          total_score: 16,
          max_score: 34,
          percentage: 47.1,
          level: "explicit",
        },
        status: "success",
      },
    ],
  });

  /*const postScoresData = [
  { title: "최신 스마트폰 리뷰", score: 18, level: "높음" },
  { title: "여름 화장품 추천", score: 15, level: "주의" },
  { title: "일상 브이로그", score: 3, level: "낮음" },
  { title: "맛집 탐방기", score: 8, level: "낮음" },
  { title: "패션 하울", score: 22, level: "높음" },
  { title: "홈카페 만들기", score: 12, level: "주의" },
  { title: "운동 루틴", score: 5, level: "낮음" },
  { title: "뷰티 제품 체험", score: 19, level: "높음" },
]; */

  const postScoresData =
    blogData?.charts?.bar_chart?.data_points
      .map(({ label, value, text }) => ({
        title: label,
        score: value,
      }))
      .sort((a, b) => b.score - a.score) || [];
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
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
                          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
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
                            fill="hsl(var(--chart-1))"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
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
                          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                        >
                          <XAxis dataKey="date" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="score"
                            stroke="hsl(var(--chart-1))"
                            strokeWidth={4}
                            dot={{
                              fill: "hsl(var(--chart-1))",
                              strokeWidth: 2,
                              r: 6,
                            }}
                            activeDot={{
                              r: 8,
                              stroke: "hsl(var(--chart-1))",
                              strokeWidth: 2,
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
                      {trendData.map((item, index) => (
                        <div
                          key={index}
                          className="text-center p-3 bg-gray-50 rounded-lg"
                        >
                          <p className="font-medium text-sm">{item.date}</p>
                          <p className="text-lg font-bold text-blue-600">
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
