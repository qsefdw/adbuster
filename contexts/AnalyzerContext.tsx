"use client";

import { createContext, useContext, useState } from "react";

const AnalyzerContext = createContext(null);

export const Analyzerprovider = ({ children }) => {
  const [analyzedData, setAnalyzedData] = useState({
    sentiment_analysis: {
      credibility_score: 5,
      credibility_details: ["건전한 비판 포함"],
      overall_sentiment: {
        overall_sentiment: "mixed",
        positive_score: 0.67,
        neutral_score: 0.09,
        negative_score: 0.24,
      },
      sentence_sentiments: {
        azure: [
          {
            sentence:
              "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
            sentiment: "positive",
            scores: {
              positive: 0.59,
              neutral: 0.41,
              negative: 0.01,
            },
          },
          {
            sentence:
              "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
            sentiment: "positive",
            scores: {
              positive: 0.98,
              neutral: 0.02,
              negative: 0,
            },
          },
          {
            sentence:
              "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
            sentiment: "neutral",
            scores: {
              positive: 0.49,
              neutral: 0.51,
              negative: 0,
            },
          },
          {
            sentence:
              "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
            sentiment: "positive",
            scores: {
              positive: 0.86,
              neutral: 0.13,
              negative: 0.01,
            },
          },
          {
            sentence:
              "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
            sentiment: "positive",
            scores: {
              positive: 0.92,
              neutral: 0.07,
              negative: 0,
            },
          },
          {
            sentence:
              "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
            sentiment: "positive",
            scores: {
              positive: 0.94,
              neutral: 0.05,
              negative: 0,
            },
          },
          {
            sentence:
              "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
            sentiment: "negative",
            scores: {
              positive: 0.02,
              neutral: 0.26,
              negative: 0.71,
            },
          },
          {
            sentence:
              "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
            sentiment: "neutral",
            scores: {
              positive: 0.04,
              neutral: 0.96,
              negative: 0,
            },
          },
          {
            sentence:
              "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
            sentiment: "positive",
            scores: {
              positive: 0.82,
              neutral: 0.16,
              negative: 0.02,
            },
          },
          {
            sentence:
              "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
            sentiment: "positive",
            scores: {
              positive: 0.62,
              neutral: 0.34,
              negative: 0.04,
            },
          },
        ],
        koelectra: [
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 1,
            sentence:
              "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 2,
            sentence:
              "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 3,
            sentence:
              "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 4,
            sentence:
              "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 5,
            sentence:
              "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 6,
            sentence:
              "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 7,
            sentence:
              "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 8,
            sentence:
              "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 9,
            sentence:
              "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0,
            error:
              "Model load failed: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 10,
            sentence:
              "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
          },
        ],
        hybrid: [
          {
            sentence_index: 1,
            sentence:
              "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
            sentiment: "중립",
            score: 0.17109999999999997,
            confidence: 0.25664999999999993,
            emoji: "🟠",
            calculation_details: {
              azure_score: 0.34219999999999995,
              azure_neutral_weight: 0.59,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.34 * 0.5) + (0.00 * 0.5) = 0.17",
            },
          },
          {
            sentence_index: 2,
            sentence:
              "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
            sentiment: "긍정",
            score: 0.48019999999999996,
            confidence: 0.7202999999999999,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.9603999999999999,
              azure_neutral_weight: 0.98,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.96 * 0.5) + (0.00 * 0.5) = 0.48",
            },
          },
          {
            sentence_index: 3,
            sentence:
              "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
            sentiment: "중립",
            score: 0.12004999999999999,
            confidence: 0.18007499999999999,
            emoji: "🟠",
            calculation_details: {
              azure_score: 0.24009999999999998,
              azure_neutral_weight: 0.49,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.24 * 0.5) + (0.00 * 0.5) = 0.12",
            },
          },
          {
            sentence_index: 4,
            sentence:
              "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
            sentiment: "긍정",
            score: 0.36974999999999997,
            confidence: 0.5546249999999999,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.7394999999999999,
              azure_neutral_weight: 0.87,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.74 * 0.5) + (0.00 * 0.5) = 0.37",
            },
          },
          {
            sentence_index: 5,
            sentence:
              "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
            sentiment: "긍정",
            score: 0.4278,
            confidence: 0.6417,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.8556,
              azure_neutral_weight: 0.93,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.86 * 0.5) + (0.00 * 0.5) = 0.43",
            },
          },
          {
            sentence_index: 6,
            sentence:
              "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
            sentiment: "긍정",
            score: 0.44649999999999995,
            confidence: 0.66975,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.8929999999999999,
              azure_neutral_weight: 0.95,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.89 * 0.5) + (0.00 * 0.5) = 0.45",
            },
          },
          {
            sentence_index: 7,
            sentence:
              "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
            sentiment: "부정",
            score: -0.25529999999999997,
            confidence: 0.38294999999999996,
            emoji: "❌",
            calculation_details: {
              azure_score: -0.5105999999999999,
              azure_neutral_weight: 0.74,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(-0.51 * 0.5) + (0.00 * 0.5) = -0.26",
            },
          },
          {
            sentence_index: 8,
            sentence:
              "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
            sentiment: "중립",
            score: 0.0008,
            confidence: 0.0012000000000000001,
            emoji: "🟠",
            calculation_details: {
              azure_score: 0.0016,
              azure_neutral_weight: 0.04,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.00 * 0.5) + (0.00 * 0.5) = 0.00",
            },
          },
          {
            sentence_index: 9,
            sentence:
              "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
            sentiment: "긍정",
            score: 0.33599999999999997,
            confidence: 0.504,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.6719999999999999,
              azure_neutral_weight: 0.84,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.67 * 0.5) + (0.00 * 0.5) = 0.34",
            },
          },
          {
            sentence_index: 10,
            sentence:
              "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
            sentiment: "중립",
            score: 0.1914,
            confidence: 0.28709999999999997,
            emoji: "🟠",
            calculation_details: {
              azure_score: 0.3828,
              azure_neutral_weight: 0.66,
              koelectra_score: 0,
              koelectra_neutral_weight: 0,
              hybrid_calculation: "(0.38 * 0.5) + (0.00 * 0.5) = 0.19",
            },
          },
        ],
      },
    },
    ad_style_analysis: {
      ad_score: 3,
      ad_percentage: 8.8,
      ad_details: {
        후원: 0,
        구매유도: 0,
        관련링크: 0,
        감정분석: 0,
        노부정: 0,
        슬로건: 1,
        기관인용: 1,
        체험전후: 0,
        제품반복: 1,
        해시태그: 0,
        광고이모지: 0,
        명시광고: 0,
      },
      brand: "아이니 스킨케어 (아이니스킨케어)",
      slogan: "구름 위를 걷는 듯 포근하면서 편안한 감촉",
      category: "화장품 (스킨케어/수분크림)",
      summary:
        "1. 건성피부로 속당김과 각질 고민이 많아 비건 화장품을 찾다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 ‘아이니 누아지 수분크림’을 추천받아 사용하게 되었다.\n2. 이 크림은 튜브형으로 위생적이고, 구름처럼 부드럽게 녹는 멜팅 제형이라 빠르게 흡수되며 끈적임 없이 산뜻하게 마무리된다.\n3. 10중 히알루론산과 식물성 PDRN 등 자연 유래 성분이 피부 보습, 탄력, 안티에이징에 도움을 주고, 비건 인증을 받아 임산부도 안심하고 사용할 수 있다.\n4. 계절에 따라 다양한 방식으로 활용할 수 있고, 올인원 제품이라 복잡한 스킨케어 루틴을 간소화해 간편하게 데일리 보습과 영양을 챙길 수 있다.\n5. 꾸준히 사용하면 피부결이 매끄러워지고 속건조와 속당김이 개선되어, 건성·민감성 피부의 데일리 홈케어 및 선물용으로도 추천할 만한 제품이다.",
      products: [
        ["메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml", 1],
        ["아이니 누아지 수분크림", 0.9],
        ["누아지 수분크림", 0.8],
        ["누아지 올인원 크림", 0.7],
      ],
      product_sentiment_analysis: {
        product_sentences: [],
        product_stats: {},
        total_sentences: 0,
        summary: "비활성화",
      },
    },
    keyword_analysis: {
      repeat_score: 12.3,
      percentage: 82.2,
      keyword_details: [
        {
          keyword: "수분",
          count: 13,
          rank: 1,
          product: "메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml",
          score: 13,
        },
        {
          keyword: "크림",
          count: 12,
          rank: 1,
          product: "메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml",
          score: 12,
        },
        {
          keyword: "크림",
          count: 12,
          rank: 4,
          product: "누아지 올인원 크림",
          score: 12,
        },
        {
          keyword: "누아지",
          count: 9,
          rank: 1,
          product: "메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml",
          score: 9,
        },
        {
          keyword: "누아지",
          count: 9,
          rank: 2,
          product: "아이니 누아지 수분크림",
          score: 9,
        },
        {
          keyword: "수분크림",
          count: 9,
          rank: 2,
          product: "아이니 누아지 수분크림",
          score: 9,
        },
        {
          keyword: "누아지",
          count: 9,
          rank: 3,
          product: "누아지 수분크림",
          score: 9,
        },
        {
          keyword: "수분크림",
          count: 9,
          rank: 3,
          product: "누아지 수분크림",
          score: 9,
        },
        {
          keyword: "누아지",
          count: 9,
          rank: 4,
          product: "누아지 올인원 크림",
          score: 9,
        },
        {
          keyword: "비건",
          count: 8,
          rank: 1,
          product: "메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml",
          score: 8,
        },
      ],
      top_keywords: [
        {
          keyword: "수분",
          count: 13,
          rank: 1,
          product: "메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml",
          score: 13,
        },
        {
          keyword: "크림",
          count: 12,
          rank: 1,
          product: "메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml",
          score: 12,
        },
        {
          keyword: "크림",
          count: 12,
          rank: 4,
          product: "누아지 올인원 크림",
          score: 12,
        },
      ],
      avg_repeat: 12.3,
    },
    similarity_analysis: {
      average_ad_score: 0.48571428571428577,
      results: [
        {
          original_sentence:
            "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
          ad_score: 0.075,
          identical_matches: [],
          similar_matches: [
            {
              snippet:
                "추천아이니 누아지크림이랍니다.아이니메르베이유누아지크림 70ml 오늘 수분크림 추천 드리는아이니 누아지크림은프랑스에서 온 럭셔리비건스킨케어 브랜드의 프리미엄 올인원... 특히 단순한비건화장품을 넘어프랑스 전통과 샤넬 출신 전문가의 기술이 담긴프리미엄비건크림으로 피부 타입 관계없이 사용이 가능한 고급데일리수분크림이니 참고하세요...",
              similarity: 0.8066108226776123,
              url: "https://blog.naver.com/tree242900/223881554251",
            },
            {
              snippet:
                "메르베이유누아지크림 ! 건성, 악건성인 제가 최애 크림을 찾았어요 ~아이니스킨케어의 메르베이유누아지수분 진정비건올인원 보습 크림이에요.프랑스비건인증! 자연 유래 성분과샤넬 출신 전문가의 기술이만나 완성된 프리미엄비건크림, ‘누아지크림’✨ 모든 피부 타입이 안심하고 쓸 수 있는 고급데일리케어! 올인원 제품이라 그런지 바쁠 때도 하나만...",
              similarity: 0.8024322986602783,
              url: "https://blog.naver.com/rkdud7472/223887778992",
            },
            {
              snippet:
                "친구가비건 화장품을 추천해 주더라고요 그 중에서 크림추천 받았는데요프랑스 전통/샤넬 출신 전문가의 기술이쏙쏙 들어간아이니 누아지수분크림 한 번 후기 남겨보겠습니다... 불어누아지메르베이유누아지페이스 크림 (!00%프랑스비건) 불어누아지는 구름 위를 걷는 듯 포근하며 편안한 감촉입니다 건성피부 홈데일리케어할 수 있으니 뿌듯해요...",
              similarity: 0.8295614123344421,
              url: "https://blog.naver.com/dalalalal/223885285177",
            },
          ],
        },
        {
          original_sentence:
            "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
          ad_score: 0,
          identical_matches: [],
          similar_matches: [],
        },
        {
          original_sentence:
            "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
          ad_score: 0.1357142857142857,
          identical_matches: [
            {
              snippet:
                "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다. 튜브형 타입으로 되어 있어서 적당량 위생적으로 토출해 바르기도 편했구요. 무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운...",
              similarity: 0.9573966264724731,
              url: "https://blog.naver.com/prettydr/223881975188",
            },
          ],
          similar_matches: [
            {
              snippet:
                "요즘 피지도 많이 올라오는데 건조한 수부지 피부 때문에 고민이 너무 많은데 친구가비건화장품을 추천해 주더라고요 그 중에서크림추천 받았는데요프랑스전통/샤넬출신... 추천합니다150년의프랑스전통에 비건 철학이들어간저자극 수분크림으로일명'구름'을 뜻하는 불어 누아지 메르베이유누아지 페이스크림(!00%프랑스비건)불어 누아지는구름위를...",
              similarity: 0.8076056838035583,
              url: "https://blog.naver.com/dalalalal/223885285177",
            },
            {
              snippet:
                "'누아지(Nuage)'는프랑스어로'구름'이라는 뜻이에요. 이름부터 너무 감성적이지 않나요? 마치구름위를 걷는 듯한 부드럽고 가벼운 텍스처가 인상적인 이크림은,프랑스150년전통의 피부과학과비건 철학이만나 탄생한 진정한 럭셔리크림이에요.샤넬의기술력과프랑스 귀족뷰티의 정수를 담고 있어서 더 신뢰가 가더라고요. 무엇보다 가장 좋았던 점은 하나의...",
              similarity: 0.8471050262451172,
              url: "https://blog.naver.com/istj57life/223877182081",
            },
          ],
        },
        {
          original_sentence:
            "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
          ad_score: 0,
          identical_matches: [],
          similar_matches: [],
        },
        {
          original_sentence:
            "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
          ad_score: 0,
          identical_matches: [],
          similar_matches: [],
        },
        {
          original_sentence:
            "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
          ad_score: 0.025,
          identical_matches: [],
          similar_matches: [
            {
              snippet:
                "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고있는 친구에게 선물해보려구요. 보통 건성수분크림 이라고 하면... 된다고 하니 바를수록 뿌듯하네요. 평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을...",
              similarity: 0.8446412086486816,
              url: "https://blog.naver.com/prettydr/223881975188",
            },
          ],
        },
        {
          original_sentence:
            "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
          ad_score: 0.05,
          identical_matches: [],
          similar_matches: [
            {
              snippet:
                "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.얼굴 전체적으로 발라주고 유난히 건조함이 느껴지는 부위나 각질이많은 곳에는 한번... 활용하면 누아지 수분크림 하나로 4계절내내 건성피부 관리 루틴으로 부족함이 없는데요. 유분기 많은 크림이 아니라 빠르게 흡수되고 산뜻하게 마무리되는 제형이라서 든든하네요....",
              similarity: 0.8481693863868713,
              url: "https://blog.naver.com/prettydr/223881975188",
            },
            {
              snippet:
                "일반적인수분크림의 제형인데 유분감이 좀 더 느껴지더라구요. 피부에 펴바를 때 부드럽고 고르게 바를 수 있었어요 제형이 부드러워서 얼굴에도 바를 수 있는데 무향이라서 편하게 사용할 수 있었습니다! ✔️유수분밸런스 유수분밸런스가 꽤 좋다는생각이들었어요.보통이런 보습제는 유분감이 높아서 얼굴에 발랐을 때 번들거리는 느낌이 들잖아요? 이건 그런것...",
              similarity: 0.8207713961601257,
              url: "https://blog.naver.com/magic101291/223880974189",
            },
          ],
        },
        {
          original_sentence:
            "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
          ad_score: 0.075,
          identical_matches: [],
          similar_matches: [
            {
              snippet:
                "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어주는데요. 피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요. 평소 손만 닿아도 붉은기가...",
              similarity: 0.8933805823326111,
              url: "https://blog.naver.com/prettydr/223881975188",
            },
            {
              snippet:
                "히알루론산(Hyaluronic Acid) ▶크기와 구조가 다른 다양한히알루론산이피부에 빠르게수분을공급해 주고, 장시간 촉촉함을 유지시켜 줘요 ▶수분자석이라고도 불리는 이 성분은, 피부 표면뿐만 아니라 각질층사이사이까지수분을끌어당겨 저장해 줘요 세라마이드 NP ▶피부 장벽을 튼튼하게 지켜주는 성분이에요 ▶외부 자극으로부터 피부를 보호해 주고,수분...",
              similarity: 0.8541900515556335,
              url: "https://blog.naver.com/chaehas/223890487408",
            },
            {
              snippet:
                "약해진피부 장벽을 강화하는데 도움을 줄 수 있음.수분증발 방지 및 보습력 향상에 도움을 줄 수 있음. 2.10종히알루론산(Hyaluronic acid) : 초저분자, 저분자, 중분자, 고분자 등등 입자 크기를 다양하게 쪼개 피부층에 단계별로수분공급을 해주는데 도움이 될 수 있는 성분. 디퍼앤디퍼 세라루로닉 워터 코어 크림 50g. 또한,수분폭탄크림에함유되어있는 성분중피부...",
              similarity: 0.8498351573944092,
              url: "https://blog.naver.com/1616sm/223868296271",
            },
          ],
        },
        {
          original_sentence:
            "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
          ad_score: 0.1,
          identical_matches: [],
          similar_matches: [
            {
              snippet:
                "보습크림추천 으로 추천해요피부에 닿는 순간 흡수하는 구름크림피부 속 건조함을 잡아주는 에바 에센스에바에센스는 빠르게 흡수되며,피부에 살짝 조이는 느낌과 함께 미세한보습막을형성합니다. 이를 통해모공을축소하고잔주름에대한피부의 저항력을 높이는 효과를 선사합니다. 이러한 반응은 더블액션 활성화 과정에서 비롯된 결과입니다. 1.매일 바르는...",
              similarity: 0.9040437936782837,
              url: "https://blog.naver.com/lllshlovelll/223877314389",
            },
            {
              snippet:
                "히알루론산함유로피부표면과 속까지 수분을 전달해속건조를 해결하고 촉촉함을 채워 보습효과가 있습니다. 필오프팩은 시간이 지나면에센스가피부에 흡수되고, 자연스럽게 굳어 크림막을형성해 수분 손실을 막아주며 간편하게 떼어낼수 있어피부관리가 편리합니다. 첨이라 좀 얇게 발랐었는데 담부턴 양을 더 늘리고 주름부위와모공이 넓은 곳에 더...",
              similarity: 0.8261466026306152,
              url: "https://cafe.naver.com/miznett/4548011?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6Im1pem5ldHQiLCJhcnRpY2xlSWQiOjQ1NDgwMTEsImlzc3VlZEF0IjoxNzQ5NDYzMzQ1MTM3fQ.3fZPT0Adv9TKE8HExPOKQP-jR3TxjwmbFU6GjkaLKCU",
            },
            {
              snippet:
                "건조한피부에 속보습을 깊이 채워주는독자성분인 세라놀을함유하였는데요. 초저분자 올리고 히알루론산과 5종 세라마이드, D-판테놀로 설계된 하이드로 세라놀 성분이피부진정... 콜라겐으로피부 속탄력을 채우고 히알루론산으로 수분 충전까지 완료하여모공케어에 정말 도움을 줄 수 있어요. 바이오던스 마스크팩은 눈과 입 모양으로 된 자투리도 있는데요....",
              similarity: 0.8322534561157227,
              url: "https://blog.naver.com/seojy8353/223880939582",
            },
            {
              snippet:
                "피부모공보다 작은 200nm 캡슐화로 주요 핵심성분을 더 효과적으로 전달하여피부깊숙이 수분과 영양을 채워준답니다. 디어로렌 인텐시브 리퀴드 크림 하나로 빠르고 깊게피부10층까지 속보습을 켜켜이 채워주는데요~ 나노 사이즈의 3중 캡슐 비타민E가 20,000ppm함유되어피부 속10층까지 깊은 보습을 채워준답니다. 또 환절기나피부가 예민하신 분들은 각질이...",
              similarity: 0.8021929264068604,
              url: "https://cafe.naver.com/feko/9284946?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6ImZla28iLCJhcnRpY2xlSWQiOjkyODQ5NDYsImlzc3VlZEF0IjoxNzQ5NDYzMzQ1MTM4fQ.04Sdn-DNoQhHUpFYSiAfuXPgMQvIruDZ5gpetQTVzig",
            },
          ],
        },
        {
          original_sentence:
            "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
          ad_score: 0.025,
          identical_matches: [],
          similar_matches: [
            {
              snippet:
                "뭘 발라도 푸석하고 각질이 많은 건성피부라 속당김 속건조로 인한 스트레스가 많았거든요. 데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이...평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천...",
              similarity: 0.9176252484321594,
              url: "https://blog.naver.com/prettydr/223881975188",
            },
          ],
        },
      ],
    },
    final_score: {
      final_score: 66.58151260504202,
      grade: "🟡 신뢰",
      description: "일반적 블로그",
      is_product_enabled: false,
      sentiment_combined: 17.5,
      athena_normalized: 50,
      product_sentiment_normalized: 0,
      aurora_reversed: 91.17647058823529,
      tfidf_reversed: 18,
      similarity_normalized: 95.14285714285714,
      athena_original: 5,
      product_sentiment_original: 0,
      aurora_original: 3,
      tfidf_original: 12.3,
      similarity_original: 0.48571428571428577,
    },
    charts: {
      ad_score_bar_chart:
        '{"data":[{"hoverinfo":"none","marker":{"color":"#F5F5F5"},"name":"최대 점수","opacity":0.3,"x":["후원","구매유도","관련링크","감정분석","노부정","슬로건","기관인용","체험전후","제품반복","해시태그","광고이모지","명시광고"],"y":[3,2,2,1,3,3,2,1,3,3,2,3],"type":"bar"},{"hovertemplate":"%{x}: %{y}\\u002f%{text}\\u003cextra\\u003e\\u003c\\u002fextra\\u003e","marker":{"color":["#E0E0E0","#E0E0E0","#E0E0E0","#E0E0E0","#E0E0E0","#87CEEB","#87CEEB","#E0E0E0","#87CEEB","#E0E0E0","#E0E0E0","#E0E0E0"]},"name":"획득 점수","text":["0\\u002f3\\u003cbr\\u003e0%","0\\u002f2\\u003cbr\\u003e0%","0\\u002f2\\u003cbr\\u003e0%","0\\u002f1\\u003cbr\\u003e0%","0\\u002f3\\u003cbr\\u003e0%","1\\u002f3\\u003cbr\\u003e33%","1\\u002f2\\u003cbr\\u003e50%","0\\u002f1\\u003cbr\\u003e0%","1\\u002f3\\u003cbr\\u003e33%","0\\u002f3\\u003cbr\\u003e0%","0\\u002f2\\u003cbr\\u003e0%","0.0\\u002f3\\u003cbr\\u003e0%"],"textposition":"auto","x":["후원","구매유도","관련링크","감정분석","노부정","슬로건","기관인용","체험전후","제품반복","해시태그","광고이모지","명시광고"],"y":[0,0,0,0,0,1,1,0,1,0,0,0.0],"type":"bar"}],"layout":{"template":{"data":{"barpolar":[{"marker":{"line":{"color":"white","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"barpolar"}],"bar":[{"error_x":{"color":"#2a3f5f"},"error_y":{"color":"#2a3f5f"},"marker":{"line":{"color":"white","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"bar"}],"carpet":[{"aaxis":{"endlinecolor":"#2a3f5f","gridcolor":"#C8D4E3","linecolor":"#C8D4E3","minorgridcolor":"#C8D4E3","startlinecolor":"#2a3f5f"},"baxis":{"endlinecolor":"#2a3f5f","gridcolor":"#C8D4E3","linecolor":"#C8D4E3","minorgridcolor":"#C8D4E3","startlinecolor":"#2a3f5f"},"type":"carpet"}],"choropleth":[{"colorbar":{"outlinewidth":0,"ticks":""},"type":"choropleth"}],"contourcarpet":[{"colorbar":{"outlinewidth":0,"ticks":""},"type":"contourcarpet"}],"contour":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"contour"}],"heatmap":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"heatmap"}],"histogram2dcontour":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"histogram2dcontour"}],"histogram2d":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"histogram2d"}],"histogram":[{"marker":{"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"histogram"}],"mesh3d":[{"colorbar":{"outlinewidth":0,"ticks":""},"type":"mesh3d"}],"parcoords":[{"line":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"parcoords"}],"pie":[{"automargin":true,"type":"pie"}],"scatter3d":[{"line":{"colorbar":{"outlinewidth":0,"ticks":""}},"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scatter3d"}],"scattercarpet":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattercarpet"}],"scattergeo":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattergeo"}],"scattergl":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattergl"}],"scattermapbox":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattermapbox"}],"scattermap":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scattermap"}],"scatterpolargl":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scatterpolargl"}],"scatterpolar":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scatterpolar"}],"scatter":[{"fillpattern":{"fillmode":"overlay","size":10,"solidity":0.2},"type":"scatter"}],"scatterternary":[{"marker":{"colorbar":{"outlinewidth":0,"ticks":""}},"type":"scatterternary"}],"surface":[{"colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"type":"surface"}],"table":[{"cells":{"fill":{"color":"#EBF0F8"},"line":{"color":"white"}},"header":{"fill":{"color":"#C8D4E3"},"line":{"color":"white"}},"type":"table"}]},"layout":{"annotationdefaults":{"arrowcolor":"#2a3f5f","arrowhead":0,"arrowwidth":1},"autotypenumbers":"strict","coloraxis":{"colorbar":{"outlinewidth":0,"ticks":""}},"colorscale":{"diverging":[[0,"#8e0152"],[0.1,"#c51b7d"],[0.2,"#de77ae"],[0.3,"#f1b6da"],[0.4,"#fde0ef"],[0.5,"#f7f7f7"],[0.6,"#e6f5d0"],[0.7,"#b8e186"],[0.8,"#7fbc41"],[0.9,"#4d9221"],[1,"#276419"]],"sequential":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"sequentialminus":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]},"colorway":["#636efa","#EF553B","#00cc96","#ab63fa","#FFA15A","#19d3f3","#FF6692","#B6E880","#FF97FF","#FECB52"],"font":{"color":"#2a3f5f"},"geo":{"bgcolor":"white","lakecolor":"white","landcolor":"white","showlakes":true,"showland":true,"subunitcolor":"#C8D4E3"},"hoverlabel":{"align":"left"},"hovermode":"closest","mapbox":{"style":"light"},"paper_bgcolor":"white","plot_bgcolor":"white","polar":{"angularaxis":{"gridcolor":"#EBF0F8","linecolor":"#EBF0F8","ticks":""},"bgcolor":"white","radialaxis":{"gridcolor":"#EBF0F8","linecolor":"#EBF0F8","ticks":""}},"scene":{"xaxis":{"backgroundcolor":"white","gridcolor":"#DFE8F3","gridwidth":2,"linecolor":"#EBF0F8","showbackground":true,"ticks":"","zerolinecolor":"#EBF0F8"},"yaxis":{"backgroundcolor":"white","gridcolor":"#DFE8F3","gridwidth":2,"linecolor":"#EBF0F8","showbackground":true,"ticks":"","zerolinecolor":"#EBF0F8"},"zaxis":{"backgroundcolor":"white","gridcolor":"#DFE8F3","gridwidth":2,"linecolor":"#EBF0F8","showbackground":true,"ticks":"","zerolinecolor":"#EBF0F8"}},"shapedefaults":{"line":{"color":"#2a3f5f"}},"ternary":{"aaxis":{"gridcolor":"#DFE8F3","linecolor":"#A2B1C6","ticks":""},"baxis":{"gridcolor":"#DFE8F3","linecolor":"#A2B1C6","ticks":""},"bgcolor":"white","caxis":{"gridcolor":"#DFE8F3","linecolor":"#A2B1C6","ticks":""}},"title":{"x":0.05},"xaxis":{"automargin":true,"gridcolor":"#EBF0F8","linecolor":"#EBF0F8","ticks":"","title":{"standoff":15},"zerolinecolor":"#EBF0F8","zerolinewidth":2},"yaxis":{"automargin":true,"gridcolor":"#EBF0F8","linecolor":"#EBF0F8","ticks":"","title":{"standoff":15},"zerolinecolor":"#EBF0F8","zerolinewidth":2}}},"title":{"text":"광고성 항목별 점수"},"xaxis":{"title":{"text":"항목"}},"yaxis":{"title":{"text":"점수"}},"barmode":"overlay","height":500}}',
      final_score_gauge:
        '{"data":[{"domain":{"x":[0,1],"y":[0,1]},"gauge":{"axis":{"range":[0,100]},"bar":{"color":"rgb(241, 196, 15)"},"steps":[{"color":"rgba(231, 76, 60, 0.2)","range":[0,40]},{"color":"rgba(230, 126, 34, 0.2)","range":[40,60]},{"color":"rgba(241, 196, 15, 0.2)","range":[60,80]},{"color":"rgba(46, 204, 113, 0.2)","range":[80,100]}],"threshold":{"line":{"color":"black","width":4},"thickness":0.75,"value":66.58151260504202}},"mode":"gauge+number","number":{"font":{"color":"rgb(241, 196, 15)","size":30},"suffix":"\\u002f100"},"title":{"font":{"size":24},"text":"최종 신뢰도 점수"},"value":66.58151260504202,"type":"indicator"}],"layout":{"template":{"data":{"histogram2dcontour":[{"type":"histogram2dcontour","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"choropleth":[{"type":"choropleth","colorbar":{"outlinewidth":0,"ticks":""}}],"histogram2d":[{"type":"histogram2d","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"heatmap":[{"type":"heatmap","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"contourcarpet":[{"type":"contourcarpet","colorbar":{"outlinewidth":0,"ticks":""}}],"contour":[{"type":"contour","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"surface":[{"type":"surface","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"mesh3d":[{"type":"mesh3d","colorbar":{"outlinewidth":0,"ticks":""}}],"scatter":[{"fillpattern":{"fillmode":"overlay","size":10,"solidity":0.2},"type":"scatter"}],"parcoords":[{"type":"parcoords","line":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterpolargl":[{"type":"scatterpolargl","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"bar":[{"error_x":{"color":"#2a3f5f"},"error_y":{"color":"#2a3f5f"},"marker":{"line":{"color":"#E5ECF6","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"bar"}],"scattergeo":[{"type":"scattergeo","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterpolar":[{"type":"scatterpolar","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"histogram":[{"marker":{"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"histogram"}],"scattergl":[{"type":"scattergl","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatter3d":[{"type":"scatter3d","line":{"colorbar":{"outlinewidth":0,"ticks":""}},"marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattermap":[{"type":"scattermap","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattermapbox":[{"type":"scattermapbox","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterternary":[{"type":"scatterternary","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattercarpet":[{"type":"scattercarpet","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"carpet":[{"aaxis":{"endlinecolor":"#2a3f5f","gridcolor":"white","linecolor":"white","minorgridcolor":"white","startlinecolor":"#2a3f5f"},"baxis":{"endlinecolor":"#2a3f5f","gridcolor":"white","linecolor":"white","minorgridcolor":"white","startlinecolor":"#2a3f5f"},"type":"carpet"}],"table":[{"cells":{"fill":{"color":"#EBF0F8"},"line":{"color":"white"}},"header":{"fill":{"color":"#C8D4E3"},"line":{"color":"white"}},"type":"table"}],"barpolar":[{"marker":{"line":{"color":"#E5ECF6","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"barpolar"}],"pie":[{"automargin":true,"type":"pie"}]},"layout":{"autotypenumbers":"strict","colorway":["#636efa","#EF553B","#00cc96","#ab63fa","#FFA15A","#19d3f3","#FF6692","#B6E880","#FF97FF","#FECB52"],"font":{"color":"#2a3f5f"},"hovermode":"closest","hoverlabel":{"align":"left"},"paper_bgcolor":"white","plot_bgcolor":"#E5ECF6","polar":{"bgcolor":"#E5ECF6","angularaxis":{"gridcolor":"white","linecolor":"white","ticks":""},"radialaxis":{"gridcolor":"white","linecolor":"white","ticks":""}},"ternary":{"bgcolor":"#E5ECF6","aaxis":{"gridcolor":"white","linecolor":"white","ticks":""},"baxis":{"gridcolor":"white","linecolor":"white","ticks":""},"caxis":{"gridcolor":"white","linecolor":"white","ticks":""}},"coloraxis":{"colorbar":{"outlinewidth":0,"ticks":""}},"colorscale":{"sequential":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"sequentialminus":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"diverging":[[0,"#8e0152"],[0.1,"#c51b7d"],[0.2,"#de77ae"],[0.3,"#f1b6da"],[0.4,"#fde0ef"],[0.5,"#f7f7f7"],[0.6,"#e6f5d0"],[0.7,"#b8e186"],[0.8,"#7fbc41"],[0.9,"#4d9221"],[1,"#276419"]]},"xaxis":{"gridcolor":"white","linecolor":"white","ticks":"","title":{"standoff":15},"zerolinecolor":"white","automargin":true,"zerolinewidth":2},"yaxis":{"gridcolor":"white","linecolor":"white","ticks":"","title":{"standoff":15},"zerolinecolor":"white","automargin":true,"zerolinewidth":2},"scene":{"xaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2},"yaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2},"zaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2}},"shapedefaults":{"line":{"color":"#2a3f5f"}},"annotationdefaults":{"arrowcolor":"#2a3f5f","arrowhead":0,"arrowwidth":1},"geo":{"bgcolor":"white","landcolor":"#E5ECF6","subunitcolor":"white","showland":true,"showlakes":true,"lakecolor":"white"},"title":{"x":0.05},"mapbox":{"style":"light"}}},"height":350,"annotations":[{"font":{"size":20},"showarrow":false,"text":"🟡 신뢰","x":0.5,"y":0.2}]}}',
      score_contribution_chart:
        '{"data":[{"hole":0.4,"hoverinfo":"text","hovertext":["감정분석: 17.5점 (35%)","광고성 분석: 27.4점 (30%)","키워드 분석: 2.7점 (15%)","유사도 분석: 19.0점 (20%)"],"labels":["감정분석","광고성 분석","키워드 분석","유사도 분석"],"marker":{"colors":["#FF6B6B","#4ECDC4","#FFD166","#06D6A0"]},"textinfo":"label+percent","values":[17.5,27.352941176470587,2.6999999999999997,19.02857142857143],"type":"pie"}],"layout":{"template":{"data":{"histogram2dcontour":[{"type":"histogram2dcontour","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"choropleth":[{"type":"choropleth","colorbar":{"outlinewidth":0,"ticks":""}}],"histogram2d":[{"type":"histogram2d","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"heatmap":[{"type":"heatmap","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"contourcarpet":[{"type":"contourcarpet","colorbar":{"outlinewidth":0,"ticks":""}}],"contour":[{"type":"contour","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"surface":[{"type":"surface","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"mesh3d":[{"type":"mesh3d","colorbar":{"outlinewidth":0,"ticks":""}}],"scatter":[{"fillpattern":{"fillmode":"overlay","size":10,"solidity":0.2},"type":"scatter"}],"parcoords":[{"type":"parcoords","line":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterpolargl":[{"type":"scatterpolargl","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"bar":[{"error_x":{"color":"#2a3f5f"},"error_y":{"color":"#2a3f5f"},"marker":{"line":{"color":"#E5ECF6","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"bar"}],"scattergeo":[{"type":"scattergeo","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterpolar":[{"type":"scatterpolar","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"histogram":[{"marker":{"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"histogram"}],"scattergl":[{"type":"scattergl","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatter3d":[{"type":"scatter3d","line":{"colorbar":{"outlinewidth":0,"ticks":""}},"marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattermap":[{"type":"scattermap","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattermapbox":[{"type":"scattermapbox","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterternary":[{"type":"scatterternary","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattercarpet":[{"type":"scattercarpet","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"carpet":[{"aaxis":{"endlinecolor":"#2a3f5f","gridcolor":"white","linecolor":"white","minorgridcolor":"white","startlinecolor":"#2a3f5f"},"baxis":{"endlinecolor":"#2a3f5f","gridcolor":"white","linecolor":"white","minorgridcolor":"white","startlinecolor":"#2a3f5f"},"type":"carpet"}],"table":[{"cells":{"fill":{"color":"#EBF0F8"},"line":{"color":"white"}},"header":{"fill":{"color":"#C8D4E3"},"line":{"color":"white"}},"type":"table"}],"barpolar":[{"marker":{"line":{"color":"#E5ECF6","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"barpolar"}],"pie":[{"automargin":true,"type":"pie"}]},"layout":{"autotypenumbers":"strict","colorway":["#636efa","#EF553B","#00cc96","#ab63fa","#FFA15A","#19d3f3","#FF6692","#B6E880","#FF97FF","#FECB52"],"font":{"color":"#2a3f5f"},"hovermode":"closest","hoverlabel":{"align":"left"},"paper_bgcolor":"white","plot_bgcolor":"#E5ECF6","polar":{"bgcolor":"#E5ECF6","angularaxis":{"gridcolor":"white","linecolor":"white","ticks":""},"radialaxis":{"gridcolor":"white","linecolor":"white","ticks":""}},"ternary":{"bgcolor":"#E5ECF6","aaxis":{"gridcolor":"white","linecolor":"white","ticks":""},"baxis":{"gridcolor":"white","linecolor":"white","ticks":""},"caxis":{"gridcolor":"white","linecolor":"white","ticks":""}},"coloraxis":{"colorbar":{"outlinewidth":0,"ticks":""}},"colorscale":{"sequential":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"sequentialminus":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"diverging":[[0,"#8e0152"],[0.1,"#c51b7d"],[0.2,"#de77ae"],[0.3,"#f1b6da"],[0.4,"#fde0ef"],[0.5,"#f7f7f7"],[0.6,"#e6f5d0"],[0.7,"#b8e186"],[0.8,"#7fbc41"],[0.9,"#4d9221"],[1,"#276419"]]},"xaxis":{"gridcolor":"white","linecolor":"white","ticks":"","title":{"standoff":15},"zerolinecolor":"white","automargin":true,"zerolinewidth":2},"yaxis":{"gridcolor":"white","linecolor":"white","ticks":"","title":{"standoff":15},"zerolinecolor":"white","automargin":true,"zerolinewidth":2},"scene":{"xaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2},"yaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2},"zaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2}},"shapedefaults":{"line":{"color":"#2a3f5f"}},"annotationdefaults":{"arrowcolor":"#2a3f5f","arrowhead":0,"arrowwidth":1},"geo":{"bgcolor":"white","landcolor":"#E5ECF6","subunitcolor":"white","showland":true,"showlakes":true,"lakecolor":"white"},"title":{"x":0.05},"mapbox":{"style":"light"}}},"title":{"text":"항목별 기여도"},"height":350,"annotations":[{"showarrow":false,"text":"총점\\u003cbr\\u003e66.6점","x":0.5,"y":0.5,"font":{"size":16}}]}}',
      sentiment_trend_chart:
        '{"data":[{"line":{"color":"#87CEEB","width":2},"mode":"lines+markers","name":"Azure 감정","x":[1,2,3,4,5,6,7,8,9,10],"y":[0.58,0.98,0.49,0.85,0.92,0.94,-0.69,0.04,0.7999999999999999,0.58],"type":"scatter"},{"line":{"color":"#A8E6CF","width":2},"mode":"lines+markers","name":"하이브리드 감정","x":[1,2,3,4,5,6,7,8,9,10],"y":[0.17109999999999997,0.48019999999999996,0.12004999999999999,0.36974999999999997,0.4278,0.44649999999999995,-0.25529999999999997,0.0008,0.33599999999999997,0.1914],"type":"scatter"}],"layout":{"template":{"data":{"histogram2dcontour":[{"type":"histogram2dcontour","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"choropleth":[{"type":"choropleth","colorbar":{"outlinewidth":0,"ticks":""}}],"histogram2d":[{"type":"histogram2d","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"heatmap":[{"type":"heatmap","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"contourcarpet":[{"type":"contourcarpet","colorbar":{"outlinewidth":0,"ticks":""}}],"contour":[{"type":"contour","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"surface":[{"type":"surface","colorbar":{"outlinewidth":0,"ticks":""},"colorscale":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]]}],"mesh3d":[{"type":"mesh3d","colorbar":{"outlinewidth":0,"ticks":""}}],"scatter":[{"fillpattern":{"fillmode":"overlay","size":10,"solidity":0.2},"type":"scatter"}],"parcoords":[{"type":"parcoords","line":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterpolargl":[{"type":"scatterpolargl","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"bar":[{"error_x":{"color":"#2a3f5f"},"error_y":{"color":"#2a3f5f"},"marker":{"line":{"color":"#E5ECF6","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"bar"}],"scattergeo":[{"type":"scattergeo","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterpolar":[{"type":"scatterpolar","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"histogram":[{"marker":{"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"histogram"}],"scattergl":[{"type":"scattergl","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatter3d":[{"type":"scatter3d","line":{"colorbar":{"outlinewidth":0,"ticks":""}},"marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattermap":[{"type":"scattermap","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattermapbox":[{"type":"scattermapbox","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scatterternary":[{"type":"scatterternary","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"scattercarpet":[{"type":"scattercarpet","marker":{"colorbar":{"outlinewidth":0,"ticks":""}}}],"carpet":[{"aaxis":{"endlinecolor":"#2a3f5f","gridcolor":"white","linecolor":"white","minorgridcolor":"white","startlinecolor":"#2a3f5f"},"baxis":{"endlinecolor":"#2a3f5f","gridcolor":"white","linecolor":"white","minorgridcolor":"white","startlinecolor":"#2a3f5f"},"type":"carpet"}],"table":[{"cells":{"fill":{"color":"#EBF0F8"},"line":{"color":"white"}},"header":{"fill":{"color":"#C8D4E3"},"line":{"color":"white"}},"type":"table"}],"barpolar":[{"marker":{"line":{"color":"#E5ECF6","width":0.5},"pattern":{"fillmode":"overlay","size":10,"solidity":0.2}},"type":"barpolar"}],"pie":[{"automargin":true,"type":"pie"}]},"layout":{"autotypenumbers":"strict","colorway":["#636efa","#EF553B","#00cc96","#ab63fa","#FFA15A","#19d3f3","#FF6692","#B6E880","#FF97FF","#FECB52"],"font":{"color":"#2a3f5f"},"hovermode":"closest","hoverlabel":{"align":"left"},"paper_bgcolor":"white","plot_bgcolor":"#E5ECF6","polar":{"bgcolor":"#E5ECF6","angularaxis":{"gridcolor":"white","linecolor":"white","ticks":""},"radialaxis":{"gridcolor":"white","linecolor":"white","ticks":""}},"ternary":{"bgcolor":"#E5ECF6","aaxis":{"gridcolor":"white","linecolor":"white","ticks":""},"baxis":{"gridcolor":"white","linecolor":"white","ticks":""},"caxis":{"gridcolor":"white","linecolor":"white","ticks":""}},"coloraxis":{"colorbar":{"outlinewidth":0,"ticks":""}},"colorscale":{"sequential":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"sequentialminus":[[0.0,"#0d0887"],[0.1111111111111111,"#46039f"],[0.2222222222222222,"#7201a8"],[0.3333333333333333,"#9c179e"],[0.4444444444444444,"#bd3786"],[0.5555555555555556,"#d8576b"],[0.6666666666666666,"#ed7953"],[0.7777777777777778,"#fb9f3a"],[0.8888888888888888,"#fdca26"],[1.0,"#f0f921"]],"diverging":[[0,"#8e0152"],[0.1,"#c51b7d"],[0.2,"#de77ae"],[0.3,"#f1b6da"],[0.4,"#fde0ef"],[0.5,"#f7f7f7"],[0.6,"#e6f5d0"],[0.7,"#b8e186"],[0.8,"#7fbc41"],[0.9,"#4d9221"],[1,"#276419"]]},"xaxis":{"gridcolor":"white","linecolor":"white","ticks":"","title":{"standoff":15},"zerolinecolor":"white","automargin":true,"zerolinewidth":2},"yaxis":{"gridcolor":"white","linecolor":"white","ticks":"","title":{"standoff":15},"zerolinecolor":"white","automargin":true,"zerolinewidth":2},"scene":{"xaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2},"yaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2},"zaxis":{"backgroundcolor":"#E5ECF6","gridcolor":"white","linecolor":"white","showbackground":true,"ticks":"","zerolinecolor":"white","gridwidth":2}},"shapedefaults":{"line":{"color":"#2a3f5f"}},"annotationdefaults":{"arrowcolor":"#2a3f5f","arrowhead":0,"arrowwidth":1},"geo":{"bgcolor":"white","landcolor":"#E5ECF6","subunitcolor":"white","showland":true,"showlakes":true,"lakecolor":"white"},"title":{"x":0.05},"mapbox":{"style":"light"}}},"shapes":[{"line":{"color":"gray","dash":"dash"},"opacity":0.5,"type":"line","x0":0,"x1":1,"xref":"x domain","y0":0,"y1":0,"yref":"y"}],"yaxis":{"title":{"text":"감정 점수"},"range":[-1,1]},"title":{"text":"문장별 감정 변화 트렌드"},"xaxis":{"title":{"text":"문장 번호"}},"height":400}}',
    },
  });
  const [analyzedUrl, setAnalyzedUrl] = useState(
    "https://blog.naver.com/prettydr/223881975188"
  );

  const value = {
    analyzedData,
    analyzedUrl,
    setAnalyzedData,
    setAnalyzedUrl,
  };

  return (
    <AnalyzerContext.Provider value={value}>
      {children}
    </AnalyzerContext.Provider>
  );
};

export const useAnalyzer = () => {
  const context = useContext(AnalyzerContext);
  if (!context) {
    throw new Error("useAnalyzer must be used within on AnalyzerProvider");
  }

  return context;
};
