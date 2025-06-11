"use client";

import { createContext, useContext, useState } from "react";

const AnalyzerContext = createContext(null);

export const Analyzerprovider = ({ children }) => {
  const [analyzedData, setAnalyzedData] = useState({
    status: "success",
    analysis_metadata: {
      url: "https://blog.naver.com/prettydr/223881975188",
      analysis_timestamp: "2025-06-11T10:11:27.804084",
      sentence_count_parameter: 10,
      similarity_threshold_parameter: 0.8,
      kss_test_mode: false,
      enable_product_sentiment_analysis: false,
      raw_text_length: 2403,
      processed_text_length: 2371,
    },
    content_info: {
      crawling_status: "✅ Analysis completed",
      raw_text_preview:
        "뭘 발라도 푸석하고 각질이 많은 건성피부라\n속당김 속건조로 인한 스트레스가 많았거든요.\n데일리 관리 루틴으로 비건화장품 알아보다가\n프랑스 전통과 샤넬 출신 전문가의 기술이 담긴\n아이니 누아지 수분크림 추천 받았는데요.\n피부 타입 상관없이 데일리 보습케어가 가능한\n제품으로 패키지 디자인부터 고급스러워서\n선물하기에도 부담없는 제품이 아닐까 싶어요.\n\n\n샤넬의 과학, 150년 프랑스 귀족의 전통에\n비건 철학이 만난 저자극 수분크림으로 '구름'을\n뜻하는 불어 누아지라는 이름 처럼 구름 위를\n걷는 듯 포근하면서 편안한 감촉으로 푸석한\n건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.\n\n\n튜브형 타입으로 되어 있어서 적당량\n위생적으로 토출해 바르기도 편했구요.\n무엇보다 19세기 프랑스 약방에서 영감을 받은\n고급스러운 패키지 디자인이라 보기만 해도\n고급 에스테틱 샵에서 관리받는 느낌이에요.\n\n\n세월아 네월아 문지르면서 흡수시킬 필요 없이\n피부에 닿는 순간 구름처럼 사르륵 녹는\n멜팅 제형으로 빠르게 흡수가 되서 놀라웠는데요.\n번들거림이나 기름기가 올라오지 않고 끈적임\n없는 산뜻한 마무리감이 맘에 쏙 들었다는거!\n얼굴에 수분보호막을 씌워주는 느낌이 편안해요.\n\n\n그동안 속건조와 속당김이 해결되지 않아\n화장품추천 받은 제품들을 종류별로 꺼내놓고\n바르느라 시간도 오래 걸리고 번거로웠는데요.\n복잡한 스킨케어 대신 올인원 비건 수분크림 추천\n받은 이후로 간편하게 보습과 영양을 채울 수 있고\n은은하게  뿜어져 나오는 광채 덕분에 그동안\n본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?\n\n\n\n보통 계절의 변화에 따라 제품을 바꾸면서\n민감한 타입엔 자극이 될 수 밖에 없었는데\n유분기가 느껴지지 않는 촉촉함으로 4계절내내\n데일리 건성피부 관리템으로 딱이지 않나요?\n자연 유래 성분으로 만들어진 비건화장품 이라\n임신,수유중에도 안심하고 바를 수 있다고 하니\n출산을 앞두고 있는 친구에게 선물해보려구요.\n\n\n\n보통 건성수분크림 이라고 하면 유분기가\n함유되어 꿉꿉하고 끈적거린다는 생각이\n많았는데요. 얼...\n\n[이하 내용 생략]",
      processed_text_preview:
        "뭘 발라도 푸석하고 각질이 많은 건성피부라 속당김 속건조로 인한 스트레스가 많았거든요. 데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요. 피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요. 샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다. 튜브형 타입으로 되어 있어서 적당량 위생적으로 토출해 바르기도 편했구요. 무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요. 세월아 네월아 문지르면서 흡수시킬 필요 없이 피부에 닿는 순간 구름처럼 사르륵 녹는 멜팅 제형으로 빠르게 흡수가 되서 놀라웠는데요. 번들거림이나 기름기가 올라오지 않고 끈적임 없는 산뜻한 마무리감이 맘에 쏙 들었다는거! 얼굴에 수분보호막을 씌워주는 느낌이 편안해요. 그동안 속건조와 속당김이 해결되지 않아 화장품추천 받은 제품들을 종류별로 꺼내놓고 바르느라 시간도 오래 걸리고 번거로웠는데요. 복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠? 보통 계절의 변화에 따라 제품을 바꾸면서 민감한 타입엔 자극이 될 수 밖에 없었는데 유분기가 느껴지지 않는 촉촉함으로 4계절내내 데일리 건성피부 관리템으로 딱이지 않나요? 자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요. 보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요. 얼굴 전체적으로 발라주고 유난...\n\n[이하 내용 생략]",
      extracted_sentences: [
        "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
        "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
        "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
        "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
        "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
        "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
        "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
        "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
        "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
        "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
      ],
    },
    sentiment_analysis: {
      credibility_score: 5.0,
      credibility_details: ["건전한 비판 포함"],
      overall_sentiment_azure: {
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
            sentence_index: 1,
          },
          {
            sentence:
              "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
            sentiment: "positive",
            scores: {
              positive: 0.98,
              neutral: 0.02,
              negative: 0.0,
            },
            sentence_index: 2,
          },
          {
            sentence:
              "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
            sentiment: "neutral",
            scores: {
              positive: 0.49,
              neutral: 0.51,
              negative: 0.0,
            },
            sentence_index: 3,
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
            sentence_index: 4,
          },
          {
            sentence:
              "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
            sentiment: "positive",
            scores: {
              positive: 0.92,
              neutral: 0.07,
              negative: 0.0,
            },
            sentence_index: 5,
          },
          {
            sentence:
              "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
            sentiment: "positive",
            scores: {
              positive: 0.94,
              neutral: 0.05,
              negative: 0.0,
            },
            sentence_index: 6,
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
            sentence_index: 7,
          },
          {
            sentence:
              "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
            sentiment: "neutral",
            scores: {
              positive: 0.04,
              neutral: 0.96,
              negative: 0.0,
            },
            sentence_index: 8,
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
            sentence_index: 9,
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
            sentence_index: 10,
          },
        ],
        koelectra: [
          {
            sentiment: "중립",
            score: 0.3623846471309662,
            confidence: 0.5,
            raw_negative_prob: 0.3623846471309662,
            emoji: "🟠",
            sentence_index: 1,
            sentence:
              "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
          },
          {
            sentiment: "중립",
            score: 0.4166245758533478,
            confidence: 0.5,
            raw_negative_prob: 0.4166245758533478,
            emoji: "🟠",
            sentence_index: 2,
            sentence:
              "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
          },
          {
            sentiment: "중립",
            score: 0.469468891620636,
            confidence: 0.5,
            raw_negative_prob: 0.469468891620636,
            emoji: "🟠",
            sentence_index: 3,
            sentence:
              "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
          },
          {
            sentiment: "중립",
            score: 0.3871072232723236,
            confidence: 0.5,
            raw_negative_prob: 0.3871072232723236,
            emoji: "🟠",
            sentence_index: 4,
            sentence:
              "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
          },
          {
            sentiment: "중립",
            score: 0.383650541305542,
            confidence: 0.5,
            raw_negative_prob: 0.383650541305542,
            emoji: "🟠",
            sentence_index: 5,
            sentence:
              "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
          },
          {
            sentiment: "긍정",
            score: 0.3421146869659424,
            confidence: 0.6578853130340576,
            raw_negative_prob: 0.3421146869659424,
            emoji: "💚",
            sentence_index: 6,
            sentence:
              "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
          },
          {
            sentiment: "부정",
            score: 0.6736472249031067,
            confidence: 0.6736472249031067,
            raw_negative_prob: 0.6736472249031067,
            emoji: "❌",
            sentence_index: 7,
            sentence:
              "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
          },
          {
            sentiment: "긍정",
            score: 0.33847716450691223,
            confidence: 0.6615228354930878,
            raw_negative_prob: 0.33847716450691223,
            emoji: "💚",
            sentence_index: 8,
            sentence:
              "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
          },
          {
            sentiment: "중립",
            score: 0.4173847734928131,
            confidence: 0.5,
            raw_negative_prob: 0.4173847734928131,
            emoji: "🟠",
            sentence_index: 9,
            sentence:
              "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
          },
          {
            sentiment: "중립",
            score: 0.42882654070854187,
            confidence: 0.5,
            raw_negative_prob: 0.42882654070854187,
            emoji: "🟠",
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
            sentiment: "긍정",
            score: 0.20897597069053736,
            confidence: 0.313463956035806,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.34219999999999995,
              azure_neutral_weight: 0.59,
              koelectra_score: 0.07575194138107477,
              koelectra_neutral_weight: 0.2752307057380676,
              hybrid_calculation: "(0.34 * 0.5) + (0.08 * 0.5) = 0.21",
            },
          },
          {
            sentence_index: 2,
            sentence:
              "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
            sentiment: "긍정",
            score: 0.4941029227032683,
            confidence: 0.7411543840549024,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.9603999999999999,
              azure_neutral_weight: 0.98,
              koelectra_score: 0.027805845406536633,
              koelectra_neutral_weight: 0.16675084829330444,
              hybrid_calculation: "(0.96 * 0.5) + (0.03 * 0.5) = 0.49",
            },
          },
          {
            sentence_index: 3,
            sentence:
              "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
            sentiment: "중립",
            score: 0.12191429715774493,
            confidence: 0.1828714457366174,
            emoji: "🟠",
            calculation_details: {
              azure_score: 0.24009999999999998,
              azure_neutral_weight: 0.49,
              koelectra_score: 0.003728594315489886,
              koelectra_neutral_weight: 0.06106221675872803,
              hybrid_calculation: "(0.24 * 0.5) + (0.00 * 0.5) = 0.12",
            },
          },
          {
            sentence_index: 4,
            sentence:
              "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
            sentiment: "긍정",
            score: 0.39523955807456995,
            confidence: 0.5928593371118549,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.7394999999999999,
              azure_neutral_weight: 0.87,
              koelectra_score: 0.05097911614913997,
              koelectra_neutral_weight: 0.22578555345535278,
              hybrid_calculation: "(0.74 * 0.5) + (0.05 * 0.5) = 0.40",
            },
          },
          {
            sentence_index: 5,
            sentence:
              "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
            sentiment: "긍정",
            score: 0.4548743930769868,
            confidence: 0.6823115896154802,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.8556,
              azure_neutral_weight: 0.93,
              koelectra_score: 0.05414878615397356,
              koelectra_neutral_weight: 0.23269891738891602,
              hybrid_calculation: "(0.86 * 0.5) + (0.05 * 0.5) = 0.45",
            },
          },
          {
            sentence_index: 6,
            sentence:
              "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
            sentiment: "긍정",
            score: 0.4963555441437247,
            confidence: 0.744533316215587,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.8929999999999999,
              azure_neutral_weight: 0.95,
              koelectra_score: 0.09971108828744946,
              koelectra_neutral_weight: 0.31577062606811523,
              hybrid_calculation: "(0.89 * 0.5) + (0.10 * 0.5) = 0.50",
            },
          },
          {
            sentence_index: 7,
            sentence:
              "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
            sentiment: "부정",
            score: -0.3156067174331002,
            confidence: 0.4734100761496503,
            emoji: "❌",
            calculation_details: {
              azure_score: -0.5105999999999999,
              azure_neutral_weight: 0.74,
              koelectra_score: -0.12061343486620046,
              koelectra_neutral_weight: 0.3472944498062134,
              hybrid_calculation: "(-0.51 * 0.5) + (-0.12 * 0.5) = -0.32",
            },
          },
          {
            sentence_index: 8,
            sentence:
              "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
            sentiment: "중립",
            score: 0.05297925277145419,
            confidence: 0.07946887915718129,
            emoji: "🟠",
            calculation_details: {
              azure_score: 0.0016,
              azure_neutral_weight: 0.04,
              koelectra_score: 0.10435850554290838,
              koelectra_neutral_weight: 0.32304567098617554,
              hybrid_calculation: "(0.00 * 0.5) + (0.10 * 0.5) = 0.05",
            },
          },
          {
            sentence_index: 9,
            sentence:
              "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
            sentiment: "긍정",
            score: 0.34965055130166756,
            confidence: 0.5244758269525014,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.6719999999999999,
              azure_neutral_weight: 0.84,
              koelectra_score: 0.02730110260333518,
              koelectra_neutral_weight: 0.16523045301437378,
              hybrid_calculation: "(0.67 * 0.5) + (0.03 * 0.5) = 0.35",
            },
          },
          {
            sentence_index: 10,
            sentence:
              "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
            sentiment: "긍정",
            score: 0.20153132261502568,
            confidence: 0.3022969839225385,
            emoji: "💚",
            calculation_details: {
              azure_score: 0.3828,
              azure_neutral_weight: 0.66,
              koelectra_score: 0.02026264523005139,
              koelectra_neutral_weight: 0.14234691858291626,
              hybrid_calculation: "(0.38 * 0.5) + (0.02 * 0.5) = 0.20",
            },
          },
        ],
      },
      top_positive_sentences: [
        {
          sentence_index: 6,
          sentence:
            "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
          sentiment: "긍정",
          score: 0.4963555441437247,
          confidence: 0.744533316215587,
          emoji: "💚",
        },
        {
          sentence_index: 2,
          sentence:
            "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
          sentiment: "긍정",
          score: 0.4941029227032683,
          confidence: 0.7411543840549024,
          emoji: "💚",
        },
        {
          sentence_index: 5,
          sentence:
            "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
          sentiment: "긍정",
          score: 0.4548743930769868,
          confidence: 0.6823115896154802,
          emoji: "💚",
        },
      ],
      top_negative_sentences: [
        {
          sentence_index: 7,
          sentence:
            "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
          sentiment: "부정",
          score: -0.3156067174331002,
          confidence: 0.4734100761496503,
          emoji: "❌",
        },
      ],
      product_related_sentiment_analysis: {
        product_sentences: [],
        product_stats: {},
        total_sentences: 0,
        summary:
          "제품 감정분석이 비활성화되었습니다. 빠른 분석을 위해 기본적으로 꺼져있습니다.",
      },
      product_related_sentences_details: {
        product_sentences: [
          {
            sentence_index: 1,
            sentence:
              "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
            related_products: ["아이니 누아지 수분크림", "누아지 수분크림"],
            sentiment: {
              overall_sentiment: "중립",
              score: 0.3623846471309662,
              confidence: 0.5,
              emoji: "🟠",
            },
          },
          {
            sentence_index: 10,
            sentence:
              "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
            related_products: ["누아지 수분크림"],
            sentiment: {
              overall_sentiment: "중립",
              score: 0.42882654070854187,
              confidence: 0.5,
              emoji: "🟠",
            },
          },
        ],
        product_stats: {
          "아이니 누아지 수분크림": {
            positive: 0,
            negative: 0,
            neutral: 1,
            total: 1,
          },
          "누아지 수분크림": {
            positive: 0,
            negative: 0,
            neutral: 2,
            total: 2,
          },
        },
        total_sentences_analyzed: 10,
        summary:
          "총 2개의 제품 관련 문장이 발견되었습니다.\n- '아이니 누아지 수분크림': 긍정 0개 (0.0%), 부정 0개 (0.0%), 중립 1개 (100.0%)\n- '누아지 수분크림': 긍정 0개 (0.0%), 부정 0개 (0.0%), 중립 2개 (100.0%)",
      },
    },
    ad_style_analysis: {
      ad_score: 3,
      ad_percentage: 8.8,
      ad_details_by_criteria: {
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
      blog_summary_gpt:
        "1. 건성피부로 속당김과 각질로 고민하던 중 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 비건 수분크림 '아이니 누아지'를 추천받아 사용하게 되었습니다.  \n2. 구름처럼 부드럽고 빠르게 흡수되는 멜팅 제형으로 끈적임 없이 산뜻하게 마무리되며, 피부에 수분 보호막을 형성해 데일리 보습케어에 효과적입니다.  \n3. 10중 히알루론산과 자연 유래 성분, 식물성 PDRN 등이 함유되어 피부 장벽 강화, 안티에이징, 탄력 개선에 도움을 주고, 민감성 피부도 안심하고 사용할 수 있습니다.  \n4. 계절에 따라 다양한 사용법이 가능하며, 올인원 제품이라 복잡한 스킨케어 루틴 없이 간편하게 보습과 영양을 채울 수 있습니다.  \n5. 고급스러운 패키지와 비건 인증으로 선물용으로도 적합하며, 꾸준히 사용하면 매끈하고 촉촉한 피부로 관리할 수 있어 인생템으로 추천합니다.",
      products_extracted_full_details: [
        ["메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml", 1.0],
        ["아이니 누아지 수분크림", 0.9],
        ["누아지 수분크림", 0.8],
        ["누아지 올인원 크림", 0.7],
      ],
      ad_judgment_text:
        "아래는 해당 블로그 글에서 광고성으로 의심할 수 있는 부분들을 객관적으로 분석한 내용입니다. 브랜드명, 제품명, 특정 표현 등 관련 요소들을 중심으로 정리하였습니다.\n\n---\n\n### 1. 브랜드명 및 제품명 반복 노출\n\n- **아이니 누아지 수분크림**, **누아지 수분크림**, **메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml**, **아이니 스킨케어**, **아이니스킨케어**\n  - 제품명과 브랜드명이 글 전반에 걸쳐 반복적으로 언급되고 있습니다. 이는 자연스러운 사용 후기라기보다는 제품 인지도를 높이기 위한 의도가 있을 수 있습니다.\n\n---\n\n### 2. 특정 표현 및 문구\n\n- **프랑스 전통과 샤넬 출신 전문가의 기술**\n  - 유명 브랜드(",
      ad_conclusion_text: "✅ 광고성 게시글로 보이지 않음",
      gpt_detailed_ad_criteria_analysis_md:
        '**후원** (0/3점)\n- GPT 평가: 동의함\n- 근거: 본문 내에서 협찬, 후원, 원고료, 체험단 등 후원 관련 문구가 전혀 없음.\n- 예시문장: 해당 없음\n- GPT 추천점수: 0점\n\n**구매유도** (0/2점)\n- GPT 평가: 이견있음\n- 근거: 제품의 장점, 사용법, 추천, 선물 제안 등 구매를 유도하는 문구가 반복적으로 등장함. 직접적인 구매 요청은 없으나, "선물하기에도 부담없는 제품", "간편하게 관리할 수 있으니까 거울을 볼 때마다 흐뭇한 거 있죠?" 등 구매욕을 자극하는 표현이 다수 존재.\n- 예시문장: "선물하기에도 부담없는 제품이 아닐까 싶어요.", "누아지 수분크림 하나로 간편하게 관리할 수 있으니까 거울을 볼 때마다 흐뭇한 거 있죠?"\n- GPT 추천점수: 2점\n\n**관련링크** (0/2점)\n- GPT 평가: 이견있음\n- 근거: 글 하단에 제품 구매가 가능한 스마트스토어 링크가 명확히 포함되어 있음.\n- 예시문장: "메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml : 아이니 스킨케어 [아이니 스킨케어] 프랑스 프리미엄 스킨케어브랜드 아이니스킨케어 smartstore.naver.com"\n- GPT 추천점수: 2점\n\n**감정분석** (0/1점)\n- GPT 평가: 이견있음\n- 근거: 제품 사용 후 긍정적 감정(만족, 뿌듯함, 흐뭇함, 자신감 등)이 반복적으로 표현됨.\n- 예시문장: "뿌듯하답니다.", "거울을 볼 때마다 흐뭇한 거 있죠?", "인생의 터닝포인트가 될 것 같아요."\n- GPT 추천점수: 1점\n\n**노부정** (0/3점)\n- GPT 평가: 이견있음\n- 근거: 제품에 대한 부정적 언급 없이, 긍정적 효과만 강조. 단점, 아쉬운 점, 개선점 등은 전혀 언급되지 않음.\n- 예시문장: "굳이 이것 저것 바를 필요 없이 누아지 수분크림 하나로 촉촉하고 산뜻하게 관리가 된다니!"\n- GPT 추천점수: 3점\n\n**슬로건** (1/3점)\n- GPT 평가: 부분동의\n- 근거: 명확한 브랜드 슬로건은 없으나, "인생템", "인생의 터닝포인트", "화잘먹 루틴" 등 반복적이고 강조된 문구가 있음.\n- 예시문장: "평생을 함께하고픈 인생템이 되었는데요.", "인생의 터닝포인트가 될 것 같아요."\n- GPT 추천점수: 1점\n\n**기관인용** (1/2점)\n- GPT 평가: 부분동의\n- 근거: "프랑스 비건 인증의 엄격한 기준", "샤넬 출신 전문가", "프랑스 전통" 등 기관, 인증, 전문가 언급이 있으나 구체적 기관명, 인증번호 등은 없음.\n- 예시문장: "프랑스 비건 인증의 엄격한 기준을 통과하고"\n- GPT 추천점수: 1점\n\n**체험전후** (0/1점)\n- GPT 평가: 이견있음\n- 근거: 사용 전후의 피부 상태 변화(속건조, 각질, 들뜸 등 개선)를 비교하는 내용이 있으나, 명확한 Before/After 사진이나 수치 등은 없음.\n- 예시문장: "그동안 속건조와 속당김이 해결되지 않아... 누아지 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고"\n- GPT 추천점수: 1점\n\n**제품반복** (1/3점)\n- G',
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
      avg_repeat_count: 12.3,
    },
    similarity_analysis: {
      status: "success",
      analysis_metadata: {
        blog_title: "킴달의 100% 로맨틱 : 네이버 블로그",
        url: "https://blog.naver.com/prettydr/223881975188",
        content_length: 2434,
        analysis_timestamp: "2025-06-11T10:11:27.285197",
        similarity_threshold_used: 0.8,
        key_sentences_count: 10,
      },
      overall_summary: {
        overall_ad_score: 0.4,
        overall_ad_judgment: "원본 콘텐츠 (독창적인 콘텐츠로 광고성 없음)",
      },
      metrics_summary: {
        average_identical_sentence_ratio: 0.0,
        total_high_similarity_sentences: 0,
        average_similar_blogs_ratio: 0.0,
        calculation_formula:
          "overall_ad_score = (avg_sentence_ad_score_across_key_sentences) * 10",
      },
      key_sentences_analysis: [
        {
          sentence_text:
            "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
          sentence_rank_in_blog: 10,
          original_score_from_extraction: 1.0,
          search_results_count: 4,
          identical_sentences_count: 0,
          high_similarity_sentences_count: 0,
          similar_blogs_count: 0,
          identical_sentences_ratio: 0.0,
          similar_blogs_ratio: 0.0,
          sentence_ad_score: 0.0,
          identical_matches: [],
          high_similarity_matches: [],
          all_search_result_snippets: [
            {
              source: {
                title:
                  "민감성피부가 추천하는비건스킨케어 희류 에버라스팅 라인 세트",
                url: "https://blog.naver.com/sunnyya314/223885813715",
                blog_name: "쎄이지",
              },
              snippet:
                "비건 화장품희류 에버라스팅 라인은피부유해성분배제,프랑스 비건 인증을 받은 민감성피부스킨케어 추천 제품인데요. 전성분 EWG 그린등급으로 편안하게사용할 수 있는... 여러 가지 복합적인피부고민까지 동시에 케어해준다는 점인데요. 인체적용시험을 통한피부개선 임상 완료, 그리고 무자극 테스트까지 통과한 저자극화장품이라예민한 피부도 편안하게...",
              similarity: 0.7611473798751831,
            },
            {
              source: {
                title:
                  "아이와 함께 쓰는비건화장품글루카뮨 선물세트, 출산선물로 딱이에요",
                url: "https://cafe.naver.com/skybluezw4rh/13146992?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6InNreWJsdWV6dzRyaCIsImFydGljbGVJZCI6MTMxNDY5OTIsImlzc3VlZEF0IjoxNzQ5NjA0Mjg1MzQ1fQ.3cNVgY9LoCHsHocWjQfyP3tkPym4SGiABfxYIuf8t6I",
                blog_name: "맘이베베 (핫딜, 육아, 놀이)",
              },
              snippet:
                "빨갛게올라오는 예민한 피부위주로 아가들과 함께 바르고 있답니다 ! 토너로 산뜻하게 정리된피부위로 요 에센스가 듬뿍 스며드는 느낌이라서 너무 좋더라구요피부위로 겉도는... 맘에듬♥️비건&생분해인증리오셀 원단으로피부에 편안하게 밀착 랩핑되어사용감도 아쥬 좋아요 열감 가득했던 얼굴이라 마스크팩 하나 올려주니 전체적으로붉은기가많이...",
              similarity: 0.7176969051361084,
            },
            {
              source: {
                title: "온도 클로토 앰플 :: 온도코스메틱 저자극앰플비건화장품",
                url: "https://blog.naver.com/rhm8307/223865917473",
                blog_name: "취향을 가득담아",
              },
              snippet:
                "바탕으로다양한피부문제의 근본적인 해결에 초점을 맞춘비건저자극앰플 ✨️ 상세 정보 ❤️ 제품명 : 온도 스킨 클로토 앰플 용량 : 50ml 기능 : 2중 기능성화장품(미백... 제품 특장점 1️⃣ 전 공정비건 인증완료 동물성 원료를 배제한 클린 포뮬러사용2️⃣ 미백 • 주름개선 2중 기능성 앰플 맑은톤피부케어의 핵심 성분인 수레국화꽃추출물로붉은피부를...",
              similarity: 0.6539080142974854,
            },
            {
              source: {
                title: "아토리셋 스킨워시로피부장벽 진짜 좋아졌어요",
                url: "https://blog.naver.com/dudfks1909/223869682147",
                blog_name: "T와 함께하는 유쾌한 일상이야기",
              },
              snippet:
                "비건인증도 받은 제품이라!!! 가족모두 쓰기에도 좋아요 !! 성분도 꼼꼼히 한번 읽어봤는데요 . 소금이 41%나 들어있고 , 감자파우더 16% 함유되어 있더라구요 !!피부트러블 , 가려움... 스킨워시사용후 한결 편안해요 !!!붉은기도 많이 진정되고 , 건조함도 덜 느껴지더라구요 !!! 젤 중요한 !!! 보습도 꽤나 잘되는거 같아요 ~ 아직 몇일밖에 안써봤지만, 예민했던피부에 맞는...",
              similarity: 0.7120203971862793,
            },
          ],
        },
      ],
      performance_metrics: {
        total_analysis_time_seconds: 38.89,
      },
      debug_log: [
        "🧩 핵심 문장 추출 정보: 🔗 1번 탭 결과 재활용 (성능 최적화), 문장 개수: 10개",
        "🔍 네이버 검색 쿼리: 데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 ...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%EB%8D%B0%EC%9D%BC%EB%A6%AC+%EA%B4%80%EB%A6%AC+%EB%A3%A8%ED%8B%B4%EC%9C%BC%EB%A1%9C+%EB%B9%84%EA%B1%B4%ED%99%94%EC%9E%A5%ED%92%88+%EC%95%8C%EC%95%84%EB%B3%B4%EB%8B%A4%EA%B0%80+%ED%94%84%EB%9E%91%EC%8A%A4+%EC%A0%84%ED%86%B5%EA%B3%BC+%EC%83%A4%EB%84%AC+%EC%B6%9C%EC%8B%A0+%EC%A0%84%EB%AC%B8%EA%B0%80%EC%9D%98+%EA%B8%B0%EC%88%A0%EC%9D%B4+%EB%8B%B4%EA%B8%B4+%EC%95%84%EC%9D%B4%EB%8B%88+%EB%88%84%EC%95%84%EC%A7%80+%EC%88%98%EB%B6%84%ED%81%AC%EB%A6%BC+%EC%B6%94%EC%B2%9C+%EB%B0%9B%EC%95%98%EB%8A%94%EB%8D%B0%EC%9A%94.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%ED%94%BC%EB%B6%80+%ED%83%80%EC%9E%85+%EC%83%81%EA%B4%80%EC%97%86%EC%9D%B4+%EB%8D%B0%EC%9D%BC%EB%A6%AC+%EB%B3%B4%EC%8A%B5%EC%BC%80%EC%96%B4%EA%B0%80+%EA%B0%80%EB%8A%A5%ED%95%9C+%EC%A0%9C%ED%92%88%EC%9C%BC%EB%A1%9C+%ED%8C%A8%ED%82%A4%EC%A7%80+%EB%94%94%EC%9E%90%EC%9D%B8%EB%B6%80%ED%84%B0+%EA%B3%A0%EA%B8%89%EC%8A%A4%EB%9F%AC%EC%9B%8C%EC%84%9C+%EC%84%A0%EB%AC%BC%ED%95%98%EA%B8%B0%EC%97%90%EB%8F%84+%EB%B6%80%EB%8B%B4%EC%97%86%EB%8A%94+%EC%A0%9C%ED%92%88%EC%9D%B4+%EC%95%84%EB%8B%90%EA%B9%8C+%EC%8B%B6%EC%96%B4%EC%9A%94.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%EC%83%A4%EB%84%AC%EC%9D%98+%EA%B3%BC%ED%95%99%2C+150%EB%85%84+%ED%94%84%EB%9E%91%EC%8A%A4+%EA%B7%80%EC%A1%B1%EC%9D%98+%EC%A0%84%ED%86%B5%EC%97%90+%EB%B9%84%EA%B1%B4+%EC%B2%A0%ED%95%99%EC%9D%B4+%EB%A7%8C%EB%82%9C+%EC%A0%80%EC%9E%90%EA%B7%B9+%EC%88%98%EB%B6%84%ED%81%AC%EB%A6%BC%EC%9C%BC%EB%A1%9C+%27%EA%B5%AC%EB%A6%84%27%EC%9D%84+%EB%9C%BB%ED%95%98%EB%8A%94+%EB%B6%88%EC%96%B4+%EB%88%84%EC%95%84%EC%A7%80%EB%9D%BC%EB%8A%94+%EC%9D%B4%EB%A6%84+%EC%B2%98%EB%9F%BC+%EA%B5%AC%EB%A6%84+%EC%9C%84%EB%A5%BC+%EA%B1%B7%EB%8A%94+%EB%93%AF+%ED%8F%AC%EA%B7%BC%ED%95%98%EB%A9%B4%EC%84%9C+%ED%8E%B8%EC%95%88%ED%95%9C+%EA%B0%90%EC%B4%89%EC%9C%BC%EB%A1%9C+%ED%91%B8%EC%84%9D%ED%95%9C+%EA%B1%B4%EC%84%B1%ED%94%BC%EB%B6%80+%EB%8D%B0%EC%9D%BC%EB%A6%AC+%ED%99%88%EC%BC%80%EC%96%B4+%ED%95%A0+%EC%88%98+%EC%9E%88%EC%9C%BC%EB%8B%88+%EB%BF%8C%EB%93%AF%ED%95%98%EB%8B%B5%EB%8B%88%EB%8B%A4.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%EB%AC%B4%EC%97%87%EB%B3%B4%EB%8B%A4+19%EC%84%B8%EA%B8%B0+%ED%94%84%EB%9E%91%EC%8A%A4+%EC%95%BD%EB%B0%A9%EC%97%90%EC%84%9C+%EC%98%81%EA%B0%90%EC%9D%84+%EB%B0%9B%EC%9D%80+%EA%B3%A0%EA%B8%89%EC%8A%A4%EB%9F%AC%EC%9A%B4+%ED%8C%A8%ED%82%A4%EC%A7%80+%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%B4%EB%9D%BC+%EB%B3%B4%EA%B8%B0%EB%A7%8C+%ED%95%B4%EB%8F%84+%EA%B3%A0%EA%B8%89+%EC%97%90%EC%8A%A4%ED%85%8C%ED%8B%B1+%EC%83%B5%EC%97%90%EC%84%9C+%EA%B4%80%EB%A6%AC%EB%B0%9B%EB%8A%94+%EB%8A%90%EB%82%8C%EC%9D%B4%EC%97%90%EC%9A%94.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 5개",
        "🔍 검색 결과 필터링 후: 4개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 ...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%EB%B3%B5%EC%9E%A1%ED%95%9C+%EC%8A%A4%ED%82%A8%EC%BC%80%EC%96%B4+%EB%8C%80%EC%8B%A0+%EC%98%AC%EC%9D%B8%EC%9B%90+%EB%B9%84%EA%B1%B4+%EC%88%98%EB%B6%84%ED%81%AC%EB%A6%BC+%EC%B6%94%EC%B2%9C+%EB%B0%9B%EC%9D%80+%EC%9D%B4%ED%9B%84%EB%A1%9C+%EA%B0%84%ED%8E%B8%ED%95%98%EA%B2%8C+%EB%B3%B4%EC%8A%B5%EA%B3%BC+%EC%98%81%EC%96%91%EC%9D%84+%EC%B1%84%EC%9A%B8+%EC%88%98+%EC%9E%88%EA%B3%A0+%EC%9D%80%EC%9D%80%ED%95%98%EA%B2%8C+%EB%BF%9C%EC%96%B4%EC%A0%B8+%EB%82%98%EC%98%A4%EB%8A%94+%EA%B4%91%EC%B1%84+%EB%8D%95%EB%B6%84%EC%97%90+%EA%B7%B8%EB%8F%99%EC%95%88+%EB%B3%B8%EC%A0%81+%EC%97%86%EB%8D%98+%EC%8C%A9%EC%96%BC+%EC%9E%90%EC%8B%A0%EA%B0%90%EA%B9%8C%EC%A7%80+%EB%BF%9C%EB%BF%9C%ED%95%9C+%EA%B1%B0+%EC%9E%88%EC%A3%A0%3F&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%EC%9E%90%EC%97%B0+%EC%9C%A0%EB%9E%98+%EC%84%B1%EB%B6%84%EC%9C%BC%EB%A1%9C+%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%84+%EB%B9%84%EA%B1%B4%ED%99%94%EC%9E%A5%ED%92%88+%EC%9D%B4%EB%9D%BC+%EC%9E%84%EC%8B%A0%2C%EC%88%98%EC%9C%A0%EC%A4%91%EC%97%90%EB%8F%84+%EC%95%88%EC%8B%AC%ED%95%98%EA%B3%A0+%EB%B0%94%EB%A5%BC+%EC%88%98+%EC%9E%88%EB%8B%A4%EA%B3%A0+%ED%95%98%EB%8B%88+%EC%B6%9C%EC%82%B0%EC%9D%84+%EC%95%9E%EB%91%90%EA%B3%A0+%EC%9E%88%EB%8A%94+%EC%B9%9C%EA%B5%AC%EC%97%90%EA%B2%8C+%EC%84%A0%EB%AC%BC%ED%95%B4%EB%B3%B4%EB%A0%A4%EA%B5%AC%EC%9A%94.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요....",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%EB%B3%B4%ED%86%B5+%EA%B1%B4%EC%84%B1%EC%88%98%EB%B6%84%ED%81%AC%EB%A6%BC+%EC%9D%B4%EB%9D%BC%EA%B3%A0+%ED%95%98%EB%A9%B4+%EC%9C%A0%EB%B6%84%EA%B8%B0%EA%B0%80+%ED%95%A8%EC%9C%A0%EB%90%98%EC%96%B4+%EA%BF%89%EA%BF%89%ED%95%98%EA%B3%A0+%EB%81%88%EC%A0%81%EA%B1%B0%EB%A6%B0%EB%8B%A4%EB%8A%94+%EC%83%9D%EA%B0%81%EC%9D%B4+%EB%A7%8E%EC%95%98%EB%8A%94%EB%8D%B0%EC%9A%94.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=10-Layer+Hyaluronic+Acid+10%EC%A4%91+%ED%9E%88%EC%95%8C%EB%A3%A8%EB%A1%A0%EC%82%B0%EC%9D%B4+%ED%95%A8%EC%9C%A0%EB%90%98%EC%96%B4+%ED%94%BC%EB%B6%80+%EC%9E%A5%EB%B2%BD+%EC%82%AC%EC%9D%B4%EC%82%AC%EC%9D%B4%EC%97%90+%EC%88%98%EB%B6%84%EC%9D%84+%EA%B0%80%EB%93%9D+%EC%B1%84%EC%9B%8C+%EC%B4%89%EC%B4%89%ED%95%98%EA%B2%8C+%EA%B0%80%EA%BE%B8%EC%96%B4+%EC%A3%BC%EB%8A%94%EB%8D%B0%EC%9A%94.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 ...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%ED%94%BC%EB%B6%80+%EC%86%8D+%EA%B1%B4%EC%A1%B0%ED%95%A8%EC%9D%84+%EC%9E%A1%EC%95%84%EC%A3%BC%EB%8A%94+%EC%97%90%EB%B0%94+%EC%97%90%EC%84%BC%EC%8A%A4%EA%B0%80+%ED%95%A8%EC%9C%A0%EB%90%98%EC%96%B4+%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C+%EB%B3%B4%EC%8A%B5%EB%A7%89%EC%9D%B4+%ED%98%95%EC%84%B1%EB%90%98%EB%A9%B4%EC%84%9C+%EB%AA%A8%EA%B3%B5%EC%B6%95%EC%86%8C%EC%99%80+%EC%9E%94%EC%A3%BC%EB%A6%84%EC%97%90+%EB%8C%80%ED%95%AD+%EC%A0%80%ED%95%AD%EB%A0%A5%EC%9D%84+%EC%A6%9D%EA%B0%80+%EC%8B%9C%ED%82%A4%EB%8A%94+%EB%8D%94%EB%B8%94%EC%95%A1%EC%85%98+%ED%99%9C%EC%84%B1%ED%99%94+%EA%B3%BC%EC%A0%95%EC%9C%BC%EB%A1%9C+%EC%95%88%ED%8B%B0%EC%97%90%EC%9D%B4%EC%A7%95%EC%97%90+%EB%8F%84%EC%9B%80%EC%9D%B4+%EB%90%9C%EB%8B%A4%EA%B3%A0+%ED%95%98%EB%8B%88+%EB%B0%94%EB%A5%BC%EC%88%98%EB%A1%9D+%EB%BF%8C%EB%93%AF%ED%95%98%EB%84%A4%EC%9A%94.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "🔍 네이버 검색 쿼리: 평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑...",
        "🌐 네이버 검색 URL: https://search.naver.com/search.naver?where=blog&query=%ED%8F%89%EC%86%8C+%EC%86%90%EB%A7%8C+%EB%8B%BF%EC%95%84%EB%8F%84+%EB%B6%89%EC%9D%80%EA%B8%B0%EA%B0%80+%EC%98%AC%EB%9D%BC%EC%98%A4%EB%8A%94+%EC%98%88%EB%AF%BC%ED%95%9C+%ED%94%BC%EB%B6%80%EC%9D%B8%ED%84%B0%EB%9D%BC+%EB%B9%84%EA%B1%B4%ED%99%94%EC%9E%A5%ED%92%88+%EB%8B%A4%EC%96%91%ED%95%98%EA%B2%8C+%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B4%A4%EC%A7%80%EB%A7%8C+%ED%94%84%EB%9E%91%EC%8A%A4+%EB%B9%84%EA%B1%B4+%EC%9D%B8%EC%A6%9D%EC%9D%98+%EC%97%84%EA%B2%A9%ED%95%9C+%EA%B8%B0%EC%A4%80%EC%9D%84+%ED%86%B5%EA%B3%BC%ED%95%98%EA%B3%A0+99.6%25+%EC%9E%90%EC%97%B0+%EC%84%B1%EB%B6%84%EC%9D%84+%EB%8B%B4%EC%9D%80+%EB%88%84%EC%95%84%EC%A7%80+%EC%88%98%EB%B6%84%ED%81%AC%EB%A6%BC+%EC%B6%94%EC%B2%9C+%EB%B0%9B%EA%B3%A0+%EB%82%98%EB%8B%88+%ED%8F%89%EC%83%9D%EC%9D%84+%ED%95%A8%EA%BB%98%ED%95%98%EA%B3%A0%ED%94%88+%EC%9D%B8%EC%83%9D%ED%85%9C%EC%9D%B4+%EB%90%98%EC%97%88%EB%8A%94%EB%8D%B0%EC%9A%94.&start=1\n📡 페이지 1 응답 상태: 200\n📋 페이지 1에서 추출된 결과: 7개",
        "🔍 검색 결과 필터링 후: 4개 (자기 블로그 제외)",
        "⏱️ 총 유사도 분석 시간: 38.89초",
      ],
    },
    final_adbuster_score: {
      final_score: 66.75294117647059,
      grade: "🟡 신뢰",
      description: "일반적 블로그",
      is_product_enabled: false,
      sentiment_combined: 17.5,
      athena_normalized: 50.0,
      product_sentiment_normalized: 0.0,
      aurora_reversed: 91.17647058823529,
      tfidf_reversed: 18.0,
      similarity_normalized: 96.0,
      athena_original: 5.0,
      product_sentiment_original: 0.0,
      aurora_original: 3,
      tfidf_original: 12.3,
      similarity_original: 0.4,
    },
    performance_metrics: {
      log_entries: [
        {
          step: "Crawling",
          time_seconds: 0.8223271369934082,
          status: "✅ 본문 크롤링 성공",
        },
        {
          step: "Azure_Summarization",
          time_seconds: 4.981211423873901,
          sentence_count: 10,
        },
        {
          step: "Azure_Overall_Sentiment_Analysis",
          time_seconds: 1.7653610706329346,
        },
        {
          step: "Total_Processing_Time",
          time_seconds: 10.383970022201538,
        },
      ],
      total_processing_time_seconds: null,
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
