"use client";

import { createContext, useContext, useState } from "react";

const AnalyzerContext = createContext(null);

export const Analyzerprovider = ({ children }) => {
  const [analyzedData, setAnalyzedData] = useState({
    status: "success",
    analysis_metadata: {
      url: "https://blog.naver.com/prettydr/223881975188",
      analysis_timestamp: "2025-06-11T10:54:26.148344",
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
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 1,
            sentence:
              "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 2,
            sentence:
              "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 3,
            sentence:
              "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 4,
            sentence:
              "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 5,
            sentence:
              "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 6,
            sentence:
              "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 7,
            sentence:
              "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 8,
            sentence:
              "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
            sentence_index: 9,
            sentence:
              "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
          },
          {
            sentiment: "중립",
            score: 0.5,
            confidence: 0.0,
            error:
              "모델 로드 불가: Incorrect path_or_model_id: 'C:\\Users\\USER\\Desktop\\func\\models\\koelectra'. Please provide either the path to a local folder or the repo_id of a model on the Hub.",
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
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
              koelectra_score: 0.0,
              koelectra_neutral_weight: 0.0,
              hybrid_calculation: "(0.38 * 0.5) + (0.00 * 0.5) = 0.19",
            },
          },
        ],
      },
      top_positive_sentences: [
        {
          sentence_index: 2,
          sentence:
            "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
          sentiment: "긍정",
          score: 0.48019999999999996,
          confidence: 0.7202999999999999,
          emoji: "💚",
        },
        {
          sentence_index: 6,
          sentence:
            "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
          sentiment: "긍정",
          score: 0.44649999999999995,
          confidence: 0.66975,
          emoji: "💚",
        },
        {
          sentence_index: 5,
          sentence:
            "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
          sentiment: "긍정",
          score: 0.4278,
          confidence: 0.6417,
          emoji: "💚",
        },
      ],
      top_negative_sentences: [
        {
          sentence_index: 7,
          sentence:
            "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
          sentiment: "부정",
          score: -0.25529999999999997,
          confidence: 0.38294999999999996,
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
              score: 0.5,
              confidence: 0.0,
              emoji: null,
            },
          },
          {
            sentence_index: 10,
            sentence:
              "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
            related_products: ["누아지 수분크림"],
            sentiment: {
              overall_sentiment: "중립",
              score: 0.5,
              confidence: 0.0,
              emoji: null,
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
      brand: "아이니 스킨케어",
      slogan: "구름 위를 걷는 듯 포근하면서 편안한 감촉",
      category: "화장품 (스킨케어/수분크림)",
      blog_summary_gpt:
        "1. 건성피부로 속당김과 각질에 시달리던 경험에서 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 비건 수분크림 ‘아이니 누아지’를 추천받아 사용하게 되었다.\n2. 이 크림은 고급스러운 패키지와 위생적인 튜브형, 빠른 흡수력과 산뜻한 마무리감, 그리고 끈적임 없는 멜팅 제형이 특징이다.\n3. 10중 히알루론산과 식물성 PDRN 등 자연 유래 성분이 함유되어 피부 보습, 탄력, 안티에이징에 도움을 주며, 민감한 피부도 안심하고 사용할 수 있다.\n4. 올인원 제품으로 복잡한 스킨케어 루틴을 간소화할 수 있고, 사계절 내내 건성피부 관리에 효과적이며 임산부도 사용할 수 있다.\n5. 꾸준히 사용하면 피부결이 매끄러워지고 속건조와 각질이 개선되어, 화장도 잘 먹고 자신감 있는 피부를 유지할 수 있다고 강조한다.",
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
        '**후원** (0/3점)\n- GPT 평가: 동의함\n- 근거: 본문 어디에도 협찬, 후원, 원고료, 체험단 등 후원 관련 명시가 없음.\n- 예시문장: 해당 없음\n- GPT 추천점수: 0점\n\n**구매유도** (0/2점)\n- GPT 평가: 이견있음\n- 근거: 제품의 장점을 반복적으로 강조하고, "추천", "선물하기에도 부담없는 제품", "인생템", "간편하게 관리할 수 있으니까" 등 구매를 유도하는 표현이 다수 존재함.\n- 예시문장: "선물하기에도 부담없는 제품이 아닐까 싶어요.", "누아지 수분크림 하나로 간편하게 관리할 수 있으니까 거울을 볼 때마다 흐뭇한 거 있죠?"\n- GPT 추천점수: 2점\n\n**관련링크** (0/2점)\n- GPT 평가: 이견있음\n- 근거: 글 마지막에 제품 구매가 가능한 스마트스토어 링크가 명확히 삽입되어 있음.\n- 예시문장: "메르베이유 누아지 수분 진정 비건 올인원 보습 크림 70ml : 아이니 스킨케어 ... smartstore.naver.com"\n- GPT 추천점수: 2점\n\n**감정분석** (0/1점)\n- GPT 평가: 이견있음\n- 근거: 제품 사용 후 긍정적 감정(뿌듯, 흐뭇, 인생템, 자신감 등)을 반복적으로 표현함.\n- 예시문장: "뿌듯하답니다.", "인생의 터닝포인트가 될 것 같아요."\n- GPT 추천점수: 1점\n\n**노부정** (0/3점)\n- GPT 평가: 이견있음\n- 근거: 제품에 대한 부정적 언급이 전혀 없고, 오히려 기존 제품의 단점과 비교해 본 제품의 우수성만 강조함.\n- 예시문장: "더이상 아침마다 속건조 속당김으로 고생을 하지 않아도 되니까 인생의 터닝포인트가 될 것 같아요."\n- GPT 추천점수: 3점\n\n**슬로건** (1/3점)\n- GPT 평가: 부분동의\n- 근거: 명확한 브랜드 슬로건은 없으나, "구름 위를 걷는 듯 포근하면서 편안한 감촉", "인생템", "터닝포인트" 등 슬로건성 문구가 반복적으로 사용됨.\n- 예시문장: "구름 위를 걷는 듯 포근하면서 편안한 감촉"\n- GPT 추천점수: 2점\n\n**기관인용** (1/2점)\n- GPT 평가: 부분동의\n- 근거: "프랑스 비건 인증의 엄격한 기준", "샤넬 출신 전문가", "프랑스 전통" 등 기관이나 권위자 언급이 있으나, 구체적 기관명이나 공식 인증서 등은 없음.\n- 예시문장: "프랑스 비건 인증의 엄격한 기준을 통과하고"\n- GPT 추천점수: 1점\n\n**체험전후** (0/1점)\n- GPT 평가: 이견있음\n- 근거: 제품 사용 전후의 피부 상태 변화(속당김, 각질, 자신감 등)를 비교하며 체험 효과를 강조함.\n- 예시문장: "그동안 속건조와 속당김이 해결되지 않아 ... 누아지 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 ... 쌩얼 자신감까지 뿜뿜한 거 있죠?"\n- GPT 추천점수: 1점\n\n**제품반복** (1/3점)\n- GPT 평가: 이견있음\n- 근거: "누아지 수분크림", "비건 수분크림", "올인원 크림" 등 제품명 및 변형명이 10회 이상 반복적으로 등장함.\n- 예시문장: "누아지 수분크림", "누아지 올인원 크림"\n- GPT 추천점수: 3점\n\n**해시태그** (0/3점)\n- GPT 평가: 동의함\n- 근거: 본문 및 하단에 해시태그(#) 표기가 전혀 없음.\n- 예시문장: 해당 없음\n- GPT 추천점수: 0점\n\n**광고이모지** (0/2점)\n- GPT 평가: 동의함\n- 근거: 광고성 이모지(예: ⭐️, 🎁, 💧 등) 사용이 없음.\n- 예시문장: 해당 없음\n- GPT 추천점수: 0점\n\n**명시광고** (0/12점)\n- GPT 평가: 동의함\n- 근거: "광고", "협찬", "체험단", "AD" 등 명시적 광고 표기가 없음.\n- 예시문장: 해당 없음\n- GPT 추천점수: 0점\n\n---\n\n**🎯 종합의견**:  \n이 블로그 글은 명시적 광고 표기나 해시태그, 이모지 등 직접적인 광고 표시 요소는 없으나, 제품의 반복적 언급, 구매 유도성 문구, 긍정적 체험담, 관련 링크 삽입 등 간접적 광고성이 매우 강하게 드러납니다. 특히 제품의 장점만을 강조하고, 부정적 의견은 전혀 없으며, 체험 전후 효과와 권위자/기관 언급까지 포함되어 있어 상업적 목적의 글로 판단됩니다. 명시광고 표기가 없다는 점만 제외하면, 전형적인 블로그형 간접 광고 콘텐츠로 볼 수 있습니다.',
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
        analysis_timestamp: "2025-06-11T10:54:26.146212",
        similarity_threshold_used: 0.8,
        key_sentences_count: 10,
      },
      overall_summary: {
        overall_ad_score: 0.4,
        overall_ad_judgment: "원본 콘텐츠 (독창적인 콘텐츠로 광고성 없음)",
      },
      metrics_summary: {
        average_identical_sentence_ratio: 0.0,
        total_high_similarity_sentences: 9,
        average_similar_blogs_ratio: 0.15,
        calculation_formula:
          "overall_ad_score = (avg_sentence_ad_score_across_key_sentences) * 10",
      },
      key_sentences_analysis: [
        {
          sentence_text:
            "데일리 관리 루틴으로 비건화장품 알아보다가 프랑스 전통과 샤넬 출신 전문가의 기술이 담긴 아이니 누아지 수분크림 추천 받았는데요.",
          sentence_rank_in_blog: 1,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
          identical_sentences_count: 0,
          high_similarity_sentences_count: 3,
          similar_blogs_count: 3,
          identical_sentences_ratio: 0.0,
          similar_blogs_ratio: 0.5,
          sentence_ad_score: 0.15,
          identical_matches: [],
          high_similarity_matches: [
            {
              source: {
                title: "비건화장품아이니 누아지크림 촉촉한 수분크림 추천",
                url: "https://blog.naver.com/tree242900/223881554251",
                blog_name: "메이제이",
              },
              snippet:
                "추천아이니 누아지크림이랍니다.아이니메르베이유누아지크림 70ml 오늘 수분크림 추천 드리는아이니 누아지크림은프랑스에서 온 럭셔리비건스킨케어 브랜드의 프리미엄 올인원... 특히 단순한비건화장품을 넘어프랑스 전통과 샤넬 출신 전문가의 기술이 담긴프리미엄비건크림으로 피부 타입 관계없이 사용이 가능한 고급데일리수분크림이니 참고하세요...",
              similarity: 0.8066108226776123,
            },
            {
              source: {
                title:
                  "프랑스아이니스킨케어 ‘메르베이유누아지’ 수분 진정비건올인원 보습누아지크림 리뷰",
                url: "https://blog.naver.com/rkdud7472/223887778992",
                blog_name: "가온잔향",
              },
              snippet:
                "메르베이유누아지크림 ! 건성, 악건성인 제가 최애 크림을 찾았어요 ~아이니스킨케어의 메르베이유누아지수분 진정비건올인원 보습 크림이에요.프랑스비건인증! 자연 유래 성분과샤넬 출신 전문가의 기술이만나 완성된 프리미엄비건크림, ‘누아지크림’✨ 모든 피부 타입이 안심하고 쓸 수 있는 고급데일리케어! 올인원 제품이라 그런지 바쁠 때도 하나만...",
              similarity: 0.8024322986602783,
            },
            {
              source: {
                title:
                  "[비건수분크림추천] 속건조 없이 완벽한 올인원 보습 크림 ㅣ 메리베이유누아지크림 추천 ㅣ비건화장품추",
                url: "https://blog.naver.com/dalalalal/223885285177",
                blog_name: "빛나는 검정콩국수",
              },
              snippet:
                "친구가비건 화장품을 추천해 주더라고요 그 중에서 크림추천 받았는데요프랑스 전통/샤넬 출신 전문가의 기술이쏙쏙 들어간아이니 누아지수분크림 한 번 후기 남겨보겠습니다... 불어누아지메르베이유누아지페이스 크림 (!00%프랑스비건) 불어누아지는 구름 위를 걷는 듯 포근하며 편안한 감촉입니다 건성피부 홈데일리케어할 수 있으니 뿌듯해요...",
              similarity: 0.8295614123344421,
            },
          ],
          all_search_result_snippets: [
            {
              source: {
                title:
                  "촉촉함이 오래가는 수분크림 찾는다면?아이니메르베이유누아지크림 추천",
                url: "https://blog.naver.com/lllshlovelll/223877314389",
                blog_name: "소소한일상",
              },
              snippet:
                "혁신누아지크림. 150년전통의프랑스피부 비법을 현대적으로 재해석한,비건스킨케어 브랜드아이니(AINI) 단순한 '비건'을 넘어프랑스 전통과 샤넬 출신 전문가의 기술이 담긴... 수분크림아이니메르베이유누아지크림 리뷰였습니다. #아이니#누아지크림 #구름크림 #수분크림 #보습크림 #비건화장품#고급크림 #임산부화장품#건성크림 #크림추천 #수분크림추천...",
              similarity: 0.7521473169326782,
            },
            {
              source: {
                title: "비건화장품아이니 누아지크림 촉촉한 수분크림 추천",
                url: "https://blog.naver.com/tree242900/223881554251",
                blog_name: "메이제이",
              },
              snippet:
                "추천아이니 누아지크림이랍니다.아이니메르베이유누아지크림 70ml 오늘 수분크림 추천 드리는아이니 누아지크림은프랑스에서 온 럭셔리비건스킨케어 브랜드의 프리미엄 올인원... 특히 단순한비건화장품을 넘어프랑스 전통과 샤넬 출신 전문가의 기술이 담긴프리미엄비건크림으로 피부 타입 관계없이 사용이 가능한 고급데일리수분크림이니 참고하세요...",
              similarity: 0.8066108226776123,
            },
            {
              source: {
                title:
                  "비건화장품추천아이니 누아지크림 촉촉한 수분가득 구름크림 탄탄한 피부장벽강화!",
                url: "https://blog.naver.com/piano9979/223877735909",
                blog_name: "로라",
              },
              snippet:
                "여러 세대를 거쳐 연구 개발되면서 자연이 주는 활성 성분과프랑스바이오테크놀로지를 결합해 탄생했다는누아지크림! 특히 단순한비건을 넘어프랑스 전통과 샤넬 출신 전문가의 기술이 담긴프리미엄비건크림으로 피부 타입 관계없이 사용 가능한 고급데일리크림이라는 점! 여기서 잠깐,아이니브랜드에 대해서도 간단히 설명하자면요, 150년전통의프랑스피부...",
              similarity: 0.7001813054084778,
            },
            {
              source: {
                title: "프리미엄프랑스비건수분크림 추천누아지크림",
                url: "https://blog.naver.com/happygirl223/223885339936",
                blog_name: "햇찌의 기록♥",
              },
              snippet:
                "메르베유누아지크림 70ml누아지아 크림은프랑스럭셔리비건스킨케어 브랜드에서 제조된 100%비건 화장품이에요.샤넬 출신 전문가의 기술이 담긴프리미엄비건수분크림으로 피부 타입에 상관없이 믿고 쓸 수 있는데일리수분크림이에요. 150년전통의프랑스브랜드고 민감성, 건성, 탄력 고민 등 전 연령층 사용 가능하도록 동물 실험을 하지 않고, 유해 성분을...",
              similarity: 0.6590283513069153,
            },
            {
              source: {
                title:
                  "프랑스아이니스킨케어 ‘메르베이유누아지’ 수분 진정비건올인원 보습누아지크림 리뷰",
                url: "https://blog.naver.com/rkdud7472/223887778992",
                blog_name: "가온잔향",
              },
              snippet:
                "메르베이유누아지크림 ! 건성, 악건성인 제가 최애 크림을 찾았어요 ~아이니스킨케어의 메르베이유누아지수분 진정비건올인원 보습 크림이에요.프랑스비건인증! 자연 유래 성분과샤넬 출신 전문가의 기술이만나 완성된 프리미엄비건크림, ‘누아지크림’✨ 모든 피부 타입이 안심하고 쓸 수 있는 고급데일리케어! 올인원 제품이라 그런지 바쁠 때도 하나만...",
              similarity: 0.8024322986602783,
            },
            {
              source: {
                title:
                  "[비건수분크림추천] 속건조 없이 완벽한 올인원 보습 크림 ㅣ 메리베이유누아지크림 추천 ㅣ비건화장품추",
                url: "https://blog.naver.com/dalalalal/223885285177",
                blog_name: "빛나는 검정콩국수",
              },
              snippet:
                "친구가비건 화장품을 추천해 주더라고요 그 중에서 크림추천 받았는데요프랑스 전통/샤넬 출신 전문가의 기술이쏙쏙 들어간아이니 누아지수분크림 한 번 후기 남겨보겠습니다... 불어누아지메르베이유누아지페이스 크림 (!00%프랑스비건) 불어누아지는 구름 위를 걷는 듯 포근하며 편안한 감촉입니다 건성피부 홈데일리케어할 수 있으니 뿌듯해요...",
              similarity: 0.8295614123344421,
            },
          ],
        },
        {
          sentence_text:
            "피부 타입 상관없이 데일리 보습케어가 가능한 제품으로 패키지 디자인부터 고급스러워서 선물하기에도 부담없는 제품이 아닐까 싶어요.",
          sentence_rank_in_blog: 2,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
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
                  "더루체 저분자 콜라겐으로데일리스킨케어제품을 탄력 미백보습크림으로",
                url: "https://blog.naver.com/l2cache/223881328367",
                blog_name: "해외 신규 거래처 발굴 전문가 Ace Park의 블로그",
              },
              snippet:
                "5월 감사의 달 프로모션 5월 감사의 달을 맞아고급쇼핑백까지 함께 증정하는 프로모션을 진행하고 있습니다. 소중한 가족이나 친구에게선물용으로도 충분한 가치를 가진제품입니다. 겉보기에는 단순한 파우더처럼 보일 수 있지만,피부깊숙한 곳까지케어해주는 이 작은 한 스푼의 기적. 이제 여러분의 화장대 위에서도 충분히가능하다는 것을 경험해보세요. 더루체...",
              similarity: 0.6420815587043762,
            },
            {
              source: {
                title: "덱스판테놀 크림 손상된피부장벽 살리는 방법",
                url: "https://blog.naver.com/yulmm/223894807439",
                blog_name: "장장",
              },
              snippet:
                "피부가 특히 예민한 얼굴에는 비판톨 리플레니싱데일리모이스처 페이스 크림 을 사용해봤어요. 가볍지만 깊이 있게 흡수되는 제형이라 무겁지 않고 산뜻하게보습이가능했어요. 여드름이 가끔 올라오는 민감성피부라서 성분을 따지는 편인데, 덱스판테놀 외에도 나이아신아마이드 같은 진정 성분이 들어 있어서부담없이사용할 수 있었어요. 특히 자기 전 스킨케어...",
              similarity: 0.6970551609992981,
            },
            {
              source: {
                title: "아기 귀 습진 다시 시작보습 케어",
                url: "https://blog.naver.com/as8771/223885808006",
                blog_name: "디자이너 애가",
              },
              snippet:
                "자극없는바스와보습력 좋은 크림, 집중 관리가능한스팟까지 함께 쓰니 트러블 진정에도 꾸준한 개선 효과 있었어요. 트러블 증상 반복되다 보니 자연스레피부에 사용하는제품...케어도 편하고 개선도 더 빠른 느낌이에요. 엄마 입장에서도제품여러 번 덧바르지 않아도 돼서 시간 아끼는 데도 도움 되고요. 아이피부에부담없이쓰기 좋으니 자연스럽게데일리...",
              similarity: 0.6874901056289673,
            },
            {
              source: {
                title:
                  "[피부과 기미앰플/미백앰플] 블루밍셀 트라믹스 앰플로 기미없이맑아지는 홈케어피부루틴 | 트라넥삼산 성분 리뷰",
                url: "https://blog.naver.com/yesleism/223892733020",
                blog_name: "예슬리즘",
              },
              snippet:
                "케어가부담스러울 때 홈케어로 이 앰플 하나만 잘 챙겨도 기초를 꽉 잡아주는 느낌이었어요. 예슬리즘이 사용해본 블루밍셀 트라믹스 앰플은요– 성분, 효능, 사용감까지 믿고 사용할 수 있는피부과 전문 앰플 트라넥삼산+나이아신아마이드+글루타치온 조합이 탁월 비포&에프터로 입증된 수분감 & 맑은피부톤 무향, 무자극이라 예민피부도데일리사용가능피부...",
              similarity: 0.6889334917068481,
            },
            {
              source: {
                title: "50대 남자선물고급진 스킨케어챙겨주기",
                url: "https://blog.naver.com/hhj991006/223895070577",
                blog_name: "::호듀셰키::",
              },
              snippet:
                "실제로 사용 후기도 좋았고, 성분도 무난해서데일리로 쓰기에부담 없는조합이었어요. 패키지를 열어보는 순간 그 묵직한 무게감과 깔끔한 배치에 딱 좋은 인상을 남기더라고요.... 분들도부담없이쓰실 수 있을 거예요. 50대 남자선물로 딱인 이유죠 이것도 ㅎㅎ 평소엔 관리에 소홀하던 분이셨는데 이제품은 꾸준히 쓰시게 되다고 하시더라고요 ㅎㅎ피부결이 정돈된...",
              similarity: 0.7112258672714233,
            },
            {
              source: {
                title:
                  "올리브영 토너패드 속건조 수분크림,피부열감케어수부지 추천",
                url: "https://blog.naver.com/rain930814/223890121747",
                blog_name: "은지새나",
              },
              snippet:
                "구달 토너패드 이건 정말 말이 필요없는패드인데요.데일리로 사용하기 너무 좋아요. 올영추천템 구달 토너패드는 안에 집게가 내장되어 있어서 위생적으로 사용 할 수 있습니다!... 남녀노소피부 타입 상관 없이진정케어가필요하신 분 6/16 ~ 6/22 구달 올영세일 기획전 기간에 기획세트로 만나보시는 거 추천드려요. 리필 증정이나 추가 패드가 넉넉하게 구성돼...",
              similarity: 0.6136494278907776,
            },
          ],
        },
        {
          sentence_text:
            "샤넬의 과학, 150년 프랑스 귀족의 전통에 비건 철학이 만난 저자극 수분크림으로 '구름'을 뜻하는 불어 누아지라는 이름 처럼 구름 위를 걷는 듯 포근하면서 편안한 감촉으로 푸석한 건성피부 데일리 홈케어 할 수 있으니 뿌듯하답니다.",
          sentence_rank_in_blog: 3,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
          identical_sentences_count: 0,
          high_similarity_sentences_count: 2,
          similar_blogs_count: 2,
          identical_sentences_ratio: 0.0,
          similar_blogs_ratio: 0.3333333333333333,
          sentence_ad_score: 0.1,
          identical_matches: [],
          high_similarity_matches: [
            {
              source: {
                title:
                  "[비건수분크림추천] 속건조 없이 완벽한 올인원 보습크림ㅣ 메리베이유누아지크림추천 ㅣ비건화장품 추",
                url: "https://blog.naver.com/dalalalal/223885285177",
                blog_name: "빛나는 검정콩국수",
              },
              snippet:
                "요즘 피지도 많이 올라오는데 건조한 수부지 피부 때문에 고민이 너무 많은데 친구가비건화장품을 추천해 주더라고요 그 중에서크림추천 받았는데요프랑스전통/샤넬출신... 추천합니다150년의프랑스전통에 비건 철학이들어간저자극 수분크림으로일명'구름'을 뜻하는 불어 누아지 메르베이유누아지 페이스크림(!00%프랑스비건)불어 누아지는구름위를...",
              similarity: 0.8076056838035583,
            },
            {
              source: {
                title: "수분크림추천프랑스비건크림아이니 메르베이유누아지크림",
                url: "https://blog.naver.com/istj57life/223877182081",
                blog_name: "ISTJ 직장인 일상 맛집 공유",
              },
              snippet:
                "'누아지(Nuage)'는프랑스어로'구름'이라는 뜻이에요. 이름부터 너무 감성적이지 않나요? 마치구름위를 걷는 듯한 부드럽고 가벼운 텍스처가 인상적인 이크림은,프랑스150년전통의 피부과학과비건 철학이만나 탄생한 진정한 럭셔리크림이에요.샤넬의기술력과프랑스 귀족뷰티의 정수를 담고 있어서 더 신뢰가 가더라고요. 무엇보다 가장 좋았던 점은 하나의...",
              similarity: 0.8471050262451172,
            },
          ],
          all_search_result_snippets: [
            {
              source: {
                title:
                  "촉촉함이 오래가는수분크림찾는다면? 아이니 메르베이유누아지크림추천",
                url: "https://blog.naver.com/lllshlovelll/223877314389",
                blog_name: "소소한일상",
              },
              snippet:
                "누아지크림(Nuage Cream)누아지는불어로구름이라는 뜻입니다. 마치구름위를 걷는 듯한 감촉프랑스바이오테크놀로지와 자연의 활성 성분이 만나, 피부에 선물하는비건혁신누아지크림.150년전통의프랑스피부 비법을 현대적으로 재해석한,비건스킨케어 브랜드 아이니(AINI) 단순한 '비건'을 넘어프랑스전통과샤넬출신 전문가의 기술이 담긴 프리미엄비건크림...",
              similarity: 0.782909631729126,
            },
            {
              source: {
                title:
                  "프랑스비건화장품 아이지누아니크림, 피부속건조 위한수분크림추천해요~",
                url: "https://blog.naver.com/una216/223882536027",
                blog_name: "유나설",
              },
              snippet:
                "받은비건화장품으로,프랑스전통과샤넬출신 전문가의 기술이 담긴 '프리미엄비건크림'이에요~ 뚜껑에 뾰족한 부분을 이용해서 개봉 후 구멍을 낸 후 원하는 적당량을 덜어 사용하시면 된답니다~150년전통의누아지크림은 자연주의철학을 담고 있어 식물성 원료로 더 건강한 케어를 도와줄 수 있어요~ 그래서 남다른 깊은 보습감을 느끼게 해주는수분크림추천...",
              similarity: 0.7492103576660156,
            },
            {
              source: {
                title: "이번 주 책들",
                url: "https://blog.naver.com/etum/223626564709",
                blog_name: "헬로부끄",
              },
              snippet:
                "1. 고양이처럼 생각하기 시작하며. 고양이처럼 생각하는 법을 배울 시간 004 기쁘게 그지 없었다. 보는 관점을 바꾸고 고양이처럼 생각하는 능력을 키우는 것만으로도 행동 문제를 없앨 수 있다니 놀랍지 않은가? 이 책을 쓴 이유는 처음 고양이를 키우게 된 사람들이 당장 필요한 물 건들을 구비할 수 있게 하고, 고양이가 보호자에게 무엇을 전달하려 하는 지 몰라 헤매거나...",
              similarity: 0.24594660103321075,
            },
            {
              source: {
                title:
                  "[비건수분크림추천] 속건조 없이 완벽한 올인원 보습크림ㅣ 메리베이유누아지크림추천 ㅣ비건화장품 추",
                url: "https://blog.naver.com/dalalalal/223885285177",
                blog_name: "빛나는 검정콩국수",
              },
              snippet:
                "요즘 피지도 많이 올라오는데 건조한 수부지 피부 때문에 고민이 너무 많은데 친구가비건화장품을 추천해 주더라고요 그 중에서크림추천 받았는데요프랑스전통/샤넬출신... 추천합니다150년의프랑스전통에 비건 철학이들어간저자극 수분크림으로일명'구름'을 뜻하는 불어 누아지 메르베이유누아지 페이스크림(!00%프랑스비건)불어 누아지는구름위를...",
              similarity: 0.8076056838035583,
            },
            {
              source: {
                title: "술기로운 세계사 (명욱)",
                url: "https://blog.naver.com/jianghe/223203665764",
                blog_name: "블루의 독서갤러리",
              },
              snippet:
                "이것은 포도가 익기 위해서 태양열이 필요하고, 그와 함께수분이 필요하단 의미로 귀결된다. 후에 아리아드네는 디오니소스와의 사이에서 12명의 자식을 낳아 잘 살았다. ① 민주주의 사상과 이어지는 디오니소스 세계관 디오니소스의 존재는 크레타문명, 나아가 페니키아까지 연결된다. 그의 어머니 세멜레는 테베의 공주이며, 그녀의 아버지는 에우로파의 오빠이자...",
              similarity: 0.3386901319026947,
            },
            {
              source: {
                title: "수분크림추천프랑스비건크림아이니 메르베이유누아지크림",
                url: "https://blog.naver.com/istj57life/223877182081",
                blog_name: "ISTJ 직장인 일상 맛집 공유",
              },
              snippet:
                "'누아지(Nuage)'는프랑스어로'구름'이라는 뜻이에요. 이름부터 너무 감성적이지 않나요? 마치구름위를 걷는 듯한 부드럽고 가벼운 텍스처가 인상적인 이크림은,프랑스150년전통의 피부과학과비건 철학이만나 탄생한 진정한 럭셔리크림이에요.샤넬의기술력과프랑스 귀족뷰티의 정수를 담고 있어서 더 신뢰가 가더라고요. 무엇보다 가장 좋았던 점은 하나의...",
              similarity: 0.8471050262451172,
            },
          ],
        },
        {
          sentence_text:
            "무엇보다 19세기 프랑스 약방에서 영감을 받은 고급스러운 패키지 디자인이라 보기만 해도 고급 에스테틱 샵에서 관리받는 느낌이에요.",
          sentence_rank_in_blog: 4,
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
                  "서울근교 가족나들이 경기도 가볼만한곳 동두천 일본마을 니지모리스튜디오",
                url: "https://blog.naver.com/yonseiqueen/223892889760",
                blog_name: "행복한 엄마되기",
              },
              snippet:
                "디자인이 한가지라서 지나다니다 같은 학교친구들 만날수 있음 주의ㅋㅋ 의상 정말 많죠? 의외로 남자분들도 많이 입으시고, 가족단위로 복장을 착용하고 서울근교 가족나들이 니지모리스튜디오를 즐기시는 분들도 많더라구요. 지나다니면서 봐도 엄마랑 딸, 아빠랑 아들 이렇게 셋트로 입으니까보기가 좋았어요. 이용방법은 역시 키오스크! 입고자 하는 복장을...",
              similarity: 0.26515993475914,
            },
            {
              source: {
                title: "고급부모님선물 세트 상림원 홍삼정선단진액고",
                url: "https://blog.naver.com/eyeslock1/223851374069",
                blog_name: "골든LEE 생생한 삶의 체험현장",
              },
              snippet:
                "궁중 왕좌의영감을받아 디자인한 패키지를 들고 가만히 살펴보니 왕을 모시는 마음으로 최상의 제품과 서비스 를 선보이는 상림원의 모토가 그대로 녹아있는 듯 했다.고급지다는 말이 절로 나온다. 상림원 홍삼정선단진액고는 GMP, 건강식품 인증받은것으로 다른 것이 전혀 들어가지 않은 국내산 홍삼 농축액 100%이다. 첨가물이 들어가 있지 않아서 진짜 Real 홍삼...",
              similarity: 0.4121880829334259,
            },
            {
              source: {
                title: "30대 여자친구 생일선물 아로마오일 괄사세트 아로망",
                url: "https://blog.naver.com/wnfusmlekd/223864275969",
                blog_name: "함께 살아가기",
              },
              snippet:
                "내가받은것은 페이스오일과 괄사로 카밍 오일과 FM괄사 세트다. 둘다 상자를 열어봤다. 괄사와 오일이 같이 포함되어 있는 세트제품이다무엇보다이렇게 받으면 너무너무 기분이 좋을 것 같다 20대~30대 여자 생일 선물로 좋을 것 같고 친구 결혼 선물로도 괜찮을 것 같은 생각이 들었다 정말고급스럽고 섬세하게 포장되어 있었다. 페이스 괄사 여자친구 생일선물 추천...",
              similarity: 0.4107336401939392,
            },
            {
              source: {
                title:
                  "뷰티템 | 천연화장품 기반 홈에스테틱가능한 카이피 페이셜 3종세트",
                url: "https://blog.naver.com/myy0uthisyours/223849232479",
                blog_name: "노아의 서랍.",
              },
              snippet:
                "요렇게 카이피 특유의 디자인 무드가 담긴 매트한 패키지와함께 도착했답니다보기만 해도홈에스테틱제품답게 구성이 탄탄하죠?! 페이셜 3종구성은 엘릭서 앰플 / 리부팅 에멀전...무엇보다제품 디자인이 넘 예쁘지않나요!?고급화장품으로 선물하기도 좋은 디자인인것같아요 뚜껑 열어보시면 에멀전은 요렇게 펌프타입이랍니당 제형에 맞게 편하게 짜서 쓸수있고...",
              similarity: 0.5542951822280884,
            },
          ],
        },
        {
          sentence_text:
            "복잡한 스킨케어 대신 올인원 비건 수분크림 추천 받은 이후로 간편하게 보습과 영양을 채울 수 있고 은은하게 뿜어져 나오는 광채 덕분에 그동안 본적 없던 쌩얼 자신감까지 뿜뿜한 거 있죠?",
          sentence_rank_in_blog: 5,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
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
                  "라에젤 스피큘 앰플 장벽크림사용 후기 | 피부진정·보습이 필요한 민감피부스킨케어추천템!",
                url: "https://blog.naver.com/mynamekang/223890339310",
                blog_name: "한국탐험 국제부부",
              },
              snippet:
                "게다가비건인증을받은앰플이라 성분 걱정 없이 순하게 사용할수있었고, 흡수도 정말 빠르고 사용 후 흡수가 빠르고 잔여감 없어 아침에도 부담 없었어요. 시카 앰플 STEP 3.... official #스킨케어#라에젤 #스피큘 #앰플추천#크림추천#피부관리템 #스킨케어#식물성줄기세포 #비건화장품 #장벽크림#비건#보습크림#시카화장품",
              similarity: 0.7249781489372253,
            },
            {
              source: {
                title:
                  "환절기스킨케어추천달바 미스트 더블세럼 더블크림2주 사용 리뷰",
                url: "https://blog.naver.com/cha_23/223800362063",
                blog_name: "차수리미",
              },
              snippet:
                "제스킨케어필수,크림 추천템이에요!! 여러 어워즈에서도 무려 10관왕을 차지한 어마어마한크림이라는 것! 촉촉한수분/진정* 아쿠아 세럼과 쫀쫀한영양/탄력** 인텐스크림2가지로 구성되어 있는데요. 내 피부 타입에 따라서 그때그때 내 피부 상태에 따라 황금비율로 믹스해서 쓸수있어서 활용도가 정말 만점 그 자체랍니다 :) 그래서 계절 상관없이 사계절 내내...",
              similarity: 0.6516203284263611,
            },
            {
              source: {
                title: "속건조수분크림 추천평생 정착 가능",
                url: "https://blog.naver.com/juhee960123/223893394682",
                blog_name: "주주로그",
              },
              snippet:
                "수분공급, 진정, 트러블 예방 및 완화 장벽강화,보습등 전체적인올인원제품으로 써도 좋을 듯해요! 일단 요크림이 좋았던 이유는 USDA 인증마크가 떡하니 박혀있고동물성 성분이나 동물실험을 일체 하지 않는다는 leaping bunny비건인증도 받았다는 점이에요. 저나 친구나 민감성 타입이고 피부가 많이 얇은 편이라 자극이 있으면 못 쓰는데 자극에 대한 걱정은 1도 없이...",
              similarity: 0.6842492818832397,
            },
            {
              source: {
                title: "비건스킨케어깊은영양보습쥬이르 져니 컬렉션 트래블키트",
                url: "https://blog.naver.com/michaelhoi/223773912683",
                blog_name: "황두앵두",
              },
              snippet:
                "사용하고있고요, 토너, 에센스,크림각각 발림성이 좋고 깊은영양보습감을 전달해주어 사용감 역시 만족하며 사용하고 있답니다:) - 리커버리 글로우 토너 밀크워터 제형으로 토너 단계부터수분보호막이 생기는 느낌이랄까요?수분감이 가득해서스킨케어첫 단계에서부터 풍부산수분감을 채워준답니다. - 리커버리 미라클 에센스 이 에센스에는 녹차수 64%가...",
              similarity: 0.6827449202537537,
            },
            {
              source: {
                title:
                  "올리브영크림 추천달바 2주 잡티케어 3종스킨케어올영추천템 후기",
                url: "https://blog.naver.com/hanbitnuri/223817663416",
                blog_name: "멜로래빗",
              },
              snippet:
                "자신있고솔직한 후기 남기고 있거든요. 이탈리아 브이라벨비건인증을받은프리미엄비건뷰티 브랜드 달바의 비타 토닝 라인은 안티에이징(주름, 리프팅, 피부톤) 개선... 올리브영스킨케어추천3가지 기억해두셨다가 장바구니에 담아보세요! 마침 캡슐 세럼 55mg +크림블리스터 미니 1.5g*4ea 로 구성된 달바 캡슐크림기획세트를 구입할수있어서 저도 아직 공병은...",
              similarity: 0.6259723901748657,
            },
            {
              source: {
                title:
                  "달바 환절기비건3종스킨케어추천! 미스트 더블세럼 더블크림2주 사용기",
                url: "https://blog.naver.com/lovely951003/223793341813",
                blog_name: "버니",
              },
              snippet:
                "오늘 소개해드린비건3종 제품은 지금 네이버 기획전에서 합리적인 가격으로 만나보실수있다고 해요! 이번 환절기스킨케어고민이 있으신 분들은 이번 기회에 달바스킨케어제품 사용해보세요 #달바 #dAlba #수분크림#세럼 #보습크림#크림추천#미스트추천#달바미스트 #달바세럼 #달바크림#10관왕크림#비건스킨케어",
              similarity: 0.605426013469696,
            },
          ],
        },
        {
          sentence_text:
            "자연 유래 성분으로 만들어진 비건화장품 이라 임신,수유중에도 안심하고 바를 수 있다고 하니 출산을 앞두고 있는 친구에게 선물해보려구요.",
          sentence_rank_in_blog: 6,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
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
                title: "임산부화장품안심하며 쓸수있어요",
                url: "https://blog.naver.com/ovnmd333w/223874065089",
                blog_name: "내 나이만큼 배고파",
              },
              snippet:
                "체크하고,자연 유래 성분을 찾아보기도 했어요 그럼에도 불구하고화장품을바를때마다 불안한 마음이 들어서 사실 초반에는화장품을 사용하기가 좀 두려웠어요ㅜ 하지만 점차 자극이 적고 순한 제품들을 찾게 되면서, 이제는 임산부도안심하고사용할수있는화장품을 찾게 되었답니다 저는 특히 피부가 예민하고 건조해지기 쉬운 시점에, 보습이 중요한화장품을...",
              similarity: 0.6303247809410095,
            },
            {
              source: {
                title: "임산부샴푸임신선물,출산선물 1순위 저자극비건샴푸",
                url: "https://blog.naver.com/stay-es/223842903420",
                blog_name: "미니 해그리드의 행복 기록",
              },
              snippet:
                "자꾸만안심하지 말라는 말을 들으니, 이제부터라도 대비를 해야겠다는 생각이 들었어요. 또 저는 완모를 생각하고 있는데, 고민 끝에 모유수유가 끝날때까지 미용실에서 매직이나 염색 등도 하지 않기로 마음먹은 상태에요. 그래서 임산부샴푸의성분이나 사용감이 더욱 중요해졌어요. 튼튼맘스비건임산부샴푸는임신초기에서부터출산후 때까지 쭉 사용할수있어서...",
              similarity: 0.5854009389877319,
            },
            {
              source: {
                title: "출산후 튼살 크림으로 예방하기",
                url: "https://blog.naver.com/griffey80/223893817124",
                blog_name: "그리핀의 소소한 이야기",
              },
              snippet:
                "임신했을 때 예방차원으로 사용하기에도 좋지만출산후 튼살을 케어하기 위해 바르기에도 참 좋은데요, 기본적으로성분이 순하기 때문에 따가움 같은게 전혀 느껴지지 않고 또 보습... 다양한자연유래보습성분이 들어있어요! 우선 그것만으로도 오랫동안 촉촉하겠구나 생각할수있겠죠? 근데 거기에다가 건강한자연성분들이 또 더해지니 좋을수밖에 없는 것 같아요...",
              similarity: 0.6801327466964722,
            },
            {
              source: {
                title: "오아르 선크림 향과 발림성이 좋은 제품후기",
                url: "https://blog.naver.com/iqeqamy/223893996762",
                blog_name: "[구르미]",
              },
              snippet:
                "자극없는성분으로만 구성되어 있다 보니 누구나 편하게바를 수있다는 장점이 있어요. 저 역시 예민보스 끝판왕인데 트러블 전혀 생기지 않았거든요. 무기자차 유기자차 혼합형이고 EWG 그린 등급이기 때문에 안전하다고 볼수있죠.자연유래성분듬뿍 들어있어 순하니까 믿고 써도 될 듯해요. 그런데 얼마 전부터 쓰고 있는 오에르 선크림에는 유해광선인 블루라이트...",
              similarity: 0.5440584421157837,
            },
            {
              source: {
                title:
                  "셀프치아미백 후기 :출산후 치아 관리는 라울루 미백 치약으로!",
                url: "https://blog.naver.com/cksal0778/223893355825",
                blog_name: "찬미식가",
              },
              snippet:
                "식물유래계면활성제가 들어가 구강 건조증 예방에 도움을 준다고 해요! 유해성분9종 불검출로 EWG 그린등급을 획득한 안전한 치약입니다 :)임신중에그리고출산후에도 치은염으로 고생하는 분들이 많다고 해요! 라울루 미백치약은 미백효과 뿐 아니라 치주염, 치은염에 효과가있다고 하니1석 3조 잖아요~ 디자인도 너무 예쁘고 임산부,출산모에게 선물하기 너무 좋은...",
              similarity: 0.6727535724639893,
            },
            {
              source: {
                title: "100% 천연유래, 유기농성분으로만든비건 화장품율립",
                url: "https://cafe.naver.com/2008bunsamo/2409571?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6IjIwMDhidW5zYW1vIiwiYXJ0aWNsZUlkIjoyNDA5NTcxLCJpc3N1ZWRBdCI6MTc0OTYwNjM3ODYwNn0.4OH8Z_es65D_rf1wKRd0loyHmB1rblv1kW6QLfytSuE",
                blog_name: "분따 - 분당.판교.위례 따라잡기",
              },
              snippet:
                "2017년부터 클린 뷰티와비건뷰티를 를 선도해 온 율립은 2021년 국내 최초로 생분해가 되는 소재로 립스틱 케이스 및 리필 디자인을 리브랜딩해 함께 선보였다고 합니다. 율립의 시그니쳐 라인인 ‘립 제품' 으로 예민하고 민감한 입술을 가진 사람뿐 아니라임신을 준비중인 임산부나출산후 어린 아가를 둔 엄마들도 사용할수있도록안심성분으로만 이뤄져 있는...",
              similarity: 0.5194985270500183,
            },
          ],
        },
        {
          sentence_text:
            "보통 건성수분크림 이라고 하면 유분기가 함유되어 꿉꿉하고 끈적거린다는 생각이 많았는데요.",
          sentence_rank_in_blog: 7,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
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
                title: "에스테틱수분크림찐템 공유",
                url: "https://blog.naver.com/c_c_f_7010/223879236258",
                blog_name: "찰떡모찌의 오늘 모모찌 모바르찌♥",
              },
              snippet:
                "생각보다 엄청 까다로워서 조금이라도 끈적거리면 절대 안쓰거등요? 유일하게 쓰는수분크림이 요거랄까..^^ 저희 남편이 좋다고하면말다한거에요 열허분ㅋㅋㅋ 제가 사실 이거 쓰기전엔 속에서 올라오는 광이라는걸 전~혀 공감하지 못했거든요ㅋㅋㅋ 이건 딱 흡수되면 속광이 싸악 올라오는데 너무 이쁜거 있죠ㅋㅋㅋㅋㅋ건성이라 항상 푸석푸석 메말라있다가 이렇게...",
              similarity: 0.42233060500056474,
            },
            {
              source: {
                title: "여드름수분크림놓쳐서는 안될 루틴",
                url: "https://blog.naver.com/5ivecolors/223894331466",
                blog_name: "재스민의 ♥예뻐지는 뷰티이야기",
              },
              snippet:
                "여드름수분크림과 잘 맞는 궁합으로는 시카토너가 있는데 제형은 완전 반대로 물처럼 흐르는 워터타입입니다:-) 웬만하면스킨의 경우 워터타입으로 쓰면 좋은게 솜에 적셔서 쓰기 좋고 결에 따라 바르면 되다보니까 톤정리와 각질정리를 동시에 해줄 수 있어요. 예전에는 그냥 바르는거 하고 솜에 적셔서 바르는거 하고 별차이 없다고생각했는데 보다보니까 꽤 많은...",
              similarity: 0.4218142107129097,
            },
            {
              source: {
                title:
                  "디퍼 DPPR 히알루론산수분크림진정 보습 챙기는 슬러시크림히알큐브 플러딩크림추천",
                url: "https://blog.naver.com/actor_korea/223878143155",
                blog_name: "배우의 길",
              },
              snippet:
                "사실 여러 제품을 봤지만 성분을 살펴보면 화학성분이 많이함유되어있어서 피부에수분을 충전해 주기는 커녕유분기가가득한 게 많더라고요. 이번에 구입한수분진정크림은 직접 발라봤을 때 이제까지 사용했던 진정크림제품들보다 뭔가 더 느낌이 좋았던 것 같아요. 부드러운 발림감이 너무 마음에 들어서 이렇게건성수분크림추천을 드리고 있기도 하구요....",
              similarity: 0.48726719585969486,
            },
            {
              source: {
                title: "이지듀 egf 재생크림저속노화템 효과 훅이",
                url: "https://blog.naver.com/ddubbi0506/223879246606",
                blog_name: "뚜비의 뚜비뚜바",
              },
              snippet:
                "홈케어도 열심히 하곤 있지만 역시 의술의 힘이 약간 곁들여(?)져야 확실히 태가 남^^ 그래서 이번에 레이저 후에 바를크림하나 장만했어요 !! 요게 대웅제약에서 독자성분 egf를함유...하면서도 부들부들유분기가있지만 발랐을 때 기름지다는 느낌은 그닥 안들었어요! 참고로 제가 수부지건성이라 그럴 수도...? 지성들은 약간 기름지다고생각할 수도^^ 연고와크림의...",
              similarity: 0.44278520551221123,
            },
            {
              source: {
                title: "다이소 아이패치 소미썸 궁금해서 사봤어요",
                url: "https://blog.naver.com/closer75/223893108300",
                blog_name: "썸머의 일상다반사",
              },
              snippet:
                "해용보통이런 기능성화장품들은 진짜 엄청 꾸덕하고 기름진거아시쥬? 요 아이는 기능성화장품이라고 말안하면모를정도로 가벼우면서 엄청 촉촉해서 호불호가 없을 타입이에요 ! 예전에 쓰던 탄력크림은 유분감이 너무 심해서 쓸때마다 모공을 막는듯한 답답함이 계속해서 들었거든요 ...? 너무 번들거리다보니까 오히려 트러블이 하나둘씩 올라왔는데 이건 그럴일이...",
              similarity: 0.4837862130292912,
            },
            {
              source: {
                title:
                  "아토베리어 365크림올리브영 보습크림1등 민감피부 사용후기",
                url: "https://blog.naver.com/magic101291/223880974189",
                blog_name: "새롬이의 뷰티놀이터",
              },
              snippet:
                "일반적인수분크림의 제형인데 유분감이 좀 더 느껴지더라구요. 피부에 펴바를 때 부드럽고 고르게 바를 수 있었어요 제형이 부드러워서 얼굴에도 바를 수 있는데 무향이라서 편하게 사용할 수 있었습니다! ✔️유수분밸런스 유수분밸런스가 꽤 좋다는생각이들었어요.보통이런 보습제는 유분감이 높아서 얼굴에 발랐을 때 번들거리는 느낌이 들잖아요? 이건 그런것...",
              similarity: 0.5145768856755193,
            },
          ],
        },
        {
          sentence_text:
            "10-Layer Hyaluronic Acid 10중 히알루론산이 함유되어 피부 장벽 사이사이에 수분을 가득 채워 촉촉하게 가꾸어 주는데요.",
          sentence_rank_in_blog: 8,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
          identical_sentences_count: 0,
          high_similarity_sentences_count: 2,
          similar_blogs_count: 2,
          identical_sentences_ratio: 0.0,
          similar_blogs_ratio: 0.3333333333333333,
          sentence_ad_score: 0.1,
          identical_matches: [],
          high_similarity_matches: [
            {
              source: {
                title: "피부 열오를때, 열감 토너, 아줄렌 수더토너",
                url: "https://blog.naver.com/chaehas/223890487408",
                blog_name: "당신의 몸과 피부를 간호하는 트리버",
              },
              snippet:
                "히알루론산(Hyaluronic Acid) ▶크기와 구조가 다른 다양한히알루론산이피부에 빠르게수분을공급해 주고, 장시간 촉촉함을 유지시켜 줘요 ▶수분자석이라고도 불리는 이 성분은, 피부 표면뿐만 아니라 각질층사이사이까지수분을끌어당겨 저장해 줘요 세라마이드 NP ▶피부 장벽을 튼튼하게 지켜주는 성분이에요 ▶외부 자극으로부터 피부를 보호해 주고,수분...",
              similarity: 0.8541900515556335,
            },
            {
              source: {
                title: "촉촉한수분폭탄크림 디퍼앤디퍼 워터코어크림",
                url: "https://blog.naver.com/1616sm/223868296271",
                blog_name: "박로우 : 천천히 걸어가기",
              },
              snippet:
                "약해진피부 장벽을 강화하는데 도움을 줄 수 있음.수분증발 방지 및 보습력 향상에 도움을 줄 수 있음. 2.10종히알루론산(Hyaluronic acid) : 초저분자, 저분자, 중분자, 고분자 등등 입자 크기를 다양하게 쪼개 피부층에 단계별로수분공급을 해주는데 도움이 될 수 있는 성분. 디퍼앤디퍼 세라루로닉 워터 코어 크림 50g. 또한,수분폭탄크림에함유되어있는 성분중피부...",
              similarity: 0.8498351573944092,
            },
          ],
          all_search_result_snippets: [
            {
              source: {
                title: "피부 열오를때, 열감 토너, 아줄렌 수더토너",
                url: "https://blog.naver.com/chaehas/223890487408",
                blog_name: "당신의 몸과 피부를 간호하는 트리버",
              },
              snippet:
                "히알루론산(Hyaluronic Acid) ▶크기와 구조가 다른 다양한히알루론산이피부에 빠르게수분을공급해 주고, 장시간 촉촉함을 유지시켜 줘요 ▶수분자석이라고도 불리는 이 성분은, 피부 표면뿐만 아니라 각질층사이사이까지수분을끌어당겨 저장해 줘요 세라마이드 NP ▶피부 장벽을 튼튼하게 지켜주는 성분이에요 ▶외부 자극으로부터 피부를 보호해 주고,수분...",
              similarity: 0.8541900515556335,
            },
            {
              source: {
                title: "올영세일 올리브영 앰플 속보습 남다른 나인위시스",
                url: "https://blog.naver.com/dmsqneod/223882223721",
                blog_name: "뷰스타 제니",
              },
              snippet:
                "스며들어 피부 깊숙이촉촉하게수분을채워주는 차세대수분앰플로 3세대 나노히알루론산이 함유되어있어 남다른 속보습 자신감을 선사하는 스킨케어에요~ *원료적 특성에 한함... 흐르는수분앰플 제형으로 더욱 깊고 빠르게 피부에수분을공급해 주는 느낌이에요! 진정과 보습을채워주며 건조한 피부피부 장벽강화에 제격이라 느껴졌어요~ 실제로 사용 후...",
              similarity: 0.7502294182777405,
            },
            {
              source: {
                title: "촉촉한수분폭탄크림 디퍼앤디퍼 워터코어크림",
                url: "https://blog.naver.com/1616sm/223868296271",
                blog_name: "박로우 : 천천히 걸어가기",
              },
              snippet:
                "약해진피부 장벽을 강화하는데 도움을 줄 수 있음.수분증발 방지 및 보습력 향상에 도움을 줄 수 있음. 2.10종히알루론산(Hyaluronic acid) : 초저분자, 저분자, 중분자, 고분자 등등 입자 크기를 다양하게 쪼개 피부층에 단계별로수분공급을 해주는데 도움이 될 수 있는 성분. 디퍼앤디퍼 세라루로닉 워터 코어 크림 50g. 또한,수분폭탄크림에함유되어있는 성분중피부...",
              similarity: 0.8498351573944092,
            },
            {
              source: {
                title: "6월 올영세일 Ready For Summer 기SUN제압 선크림 추천",
                url: "https://blog.naver.com/mirang1227/223882985425",
                blog_name: "뷰스타 네온바니",
              },
              snippet:
                "무너진피부 장벽을 케어하고요 비타민C유도체가함유되어칙칙한 피부톤과 잡티를 개선한답니다. 7일만에10%, 2주만에 21% 잡티개선이라니 자외선에 쉽게 칙칙해지는 민감피부의 기SUN제압 아이템으로 딱일 듯합니다. 자외선차단제라는 걸 모르고 사용했다면수분크림이라고 생각했을지도 모르겠어요 그만큼수분감이 풍부하게 느껴졌고요 부드럽고촉촉하게...",
              similarity: 0.6655162572860718,
            },
            {
              source: {
                title:
                  "[비건수분크림추천] 속건조 없이 완벽한 올인원 보습 크림 ㅣ 메리베이유 누아지크림 추천 ㅣ 비건화장품 추",
                url: "https://blog.naver.com/dalalalal/223885285177",
                blog_name: "빛나는 검정콩국수",
              },
              snippet:
                "사진 찰 칵 찰 칵 백만 장10-layer Hyaluronic Acid 10중 히알루론산이 함유되어있어수분가득하고촉촉하게 가꾸어준답니다! 마이크로 보습 막으로 인해 모공 축소와 더불어 아주 효과적인 안티에이징까지 챙길 수 있었어요! 패키지 자체가 너어어어무 고급 지고 예뻐요 저는 피부 마사지만 받아도 트러블이 많이 올라오고 피부가 굉장히 얇은데도 건조해서 고생을 많이...",
              similarity: 0.7609255313873291,
            },
            {
              source: {
                title:
                  "올영세일때 꼭 사야하는 바이오던스 토너패드와 겔마스크팩 찐추천",
                url: "https://blog.naver.com/welove284/223881539839",
                blog_name: "하이듀",
              },
              snippet:
                "D-판테놀과10중 히알루론산, 5중 세라마이드가함유되어피부에수분은 꽉채워주고, 장벽도 튼튼하게 관리할 수 있답니다. 그런 에센스가 토너패드에가득들어있어 끝까지 촉촉... 초저분자히알루론산에 D-판테놀, 5중 세라마이드가함유되어 피부 장벽이 약해진 민감 피부도 부담 없이 쓸 수 있는 제품이에요. 게다가 빙하수가 5만ppm 들어있어서, 피부 열감과 진정을 한...",
              similarity: 0.7959499955177307,
            },
          ],
        },
        {
          sentence_text:
            "피부 속 건조함을 잡아주는 에바 에센스가 함유되어 마이크로 보습막이 형성되면서 모공축소와 잔주름에 대항 저항력을 증가 시키는 더블액션 활성화 과정으로 안티에이징에 도움이 된다고 하니 바를수록 뿌듯하네요.",
          sentence_rank_in_blog: 9,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
          identical_sentences_count: 0,
          high_similarity_sentences_count: 2,
          similar_blogs_count: 2,
          identical_sentences_ratio: 0.0,
          similar_blogs_ratio: 0.3333333333333333,
          sentence_ad_score: 0.1,
          identical_matches: [],
          high_similarity_matches: [
            {
              source: {
                title:
                  "촉촉함이 오래가는 수분크림 찾는다면? 아이니 메르베이유 누아지크림 추천",
                url: "https://blog.naver.com/lllshlovelll/223877314389",
                blog_name: "소소한일상",
              },
              snippet:
                "보습크림추천 으로 추천해요피부에 닿는 순간 흡수하는 구름크림피부 속 건조함을 잡아주는 에바 에센스에바에센스는 빠르게 흡수되며,피부에 살짝 조이는 느낌과 함께 미세한보습막을형성합니다. 이를 통해모공을축소하고잔주름에대한피부의 저항력을 높이는 효과를 선사합니다. 이러한 반응은 더블액션 활성화 과정에서 비롯된 결과입니다. 1.매일 바르는...",
              similarity: 0.9040437936782837,
            },
            {
              source: {
                title:
                  "효과좋은 홈에스테틱 마스크팩 - 미스테틱 시카 PDRN 백만샷마이크로스피큘 필오프팩",
                url: "https://cafe.naver.com/miznett/4548011?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6Im1pem5ldHQiLCJhcnRpY2xlSWQiOjQ1NDgwMTEsImlzc3VlZEF0IjoxNzQ5NjA2Mzg3MjExfQ.Tq0opxLd-g7EWbPdfP9X2EwPqBzWqLhxWmxHQqr60N4",
                blog_name:
                  "미즈넷-임신 육아 임산부 교육 뷰티 아기용품 핫딜 리뷰 체험단",
              },
              snippet:
                "히알루론산함유로피부표면과 속까지 수분을 전달해속건조를 해결하고 촉촉함을 채워 보습효과가 있습니다. 필오프팩은 시간이 지나면에센스가피부에 흡수되고, 자연스럽게 굳어 크림막을형성해 수분 손실을 막아주며 간편하게 떼어낼수 있어피부관리가 편리합니다. 첨이라 좀 얇게 발랐었는데 담부턴 양을 더 늘리고 주름부위와모공이 넓은 곳에 더...",
              similarity: 0.8261466026306152,
            },
          ],
          all_search_result_snippets: [
            {
              source: {
                title:
                  "촉촉함이 오래가는 수분크림 찾는다면? 아이니 메르베이유 누아지크림 추천",
                url: "https://blog.naver.com/lllshlovelll/223877314389",
                blog_name: "소소한일상",
              },
              snippet:
                "보습크림추천 으로 추천해요피부에 닿는 순간 흡수하는 구름크림피부 속 건조함을 잡아주는 에바 에센스에바에센스는 빠르게 흡수되며,피부에 살짝 조이는 느낌과 함께 미세한보습막을형성합니다. 이를 통해모공을축소하고잔주름에대한피부의 저항력을 높이는 효과를 선사합니다. 이러한 반응은 더블액션 활성화 과정에서 비롯된 결과입니다. 1.매일 바르는...",
              similarity: 0.9040437936782837,
            },
            {
              source: {
                title:
                  "피부 속당김 개선에센스시카리닉 HA 바이오에센스속건조에센스",
                url: "https://blog.naver.com/haemandalman/223890562830",
                blog_name: "해만달만",
              },
              snippet:
                "얇은보습막이 형성되는 느낌이으로 마무리감이 부담스럽지 않아서 남성분들이 사용하기에도 좋은 제형입니다. 요즘 가장 큰피부고민은 ‘속건조’입니다. 겉보기엔 괜찮아 보여도 속이 바싹 마른 상태라 메이크업도 들뜨고, 오후만 되면 푸석푸석해지는 게 느껴집니다. 시카리닉 수분에센스를 사용하면서 이속건조가 정말 눈에 띄게 개선되었습니다. 속당김...",
              similarity: 0.7352573871612549,
            },
            {
              source: {
                title: "피부 속건조수분에센스한달 사용기",
                url: "https://blog.naver.com/mujin76/223835743503",
                blog_name: "어제도 오늘도 내일도 므찐",
              },
              snippet:
                '그래서 열심히 챙겨바르는 중이지요~ 이마에도 요렇게잔주름이 생기는데 은근히 수분감 채우기가 어렵더라고요 그런데 이거 하나만 있으면~ 한번 바르면 다음 씻고 바를때까지 그... 따가운걸잡아주는게 확실하게 느낄수 있는 기회였어요 ㅎ0ㅎ 굿~~ 지금까지피부 속건조해결을 위한 수분에센스"3스텝 멀티 솔루션"을 소개해 드렸습니다 수부지로 항상 고생했었는데...',
              similarity: 0.7385450601577759,
            },
            {
              source: {
                title:
                  "속건조잡는 화잘먹 수분세럼 추천 조조모모 퍼펙트 아쿠아 세럼",
                url: "https://blog.naver.com/jetchoi/223884719425",
                blog_name: "❤️슈이니뷰티❤️",
              },
              snippet:
                "이럴 땐 단순히 유분을 잡는 것보다 속부터 수분을 꽉 채워피부밸런스를잡아주는게 필요하더라고요. 그래서 오늘은 속보습,모공케어 화잘먹 기초제품으로 좋은 조조모모 퍼펙트 아쿠아 세럼 소개해 볼게요. 조조모모 퍼펙트 아쿠아 세럼 제형은? 처음 손등에 짜보면 하얀색의에센스텍스처로 적당히 쫀쫀하면서 몰랑하다고 할까요? 쫀쫀 탱글 하니 흘러내리지 않을...",
              similarity: 0.7765238285064697,
            },
            {
              source: {
                title: "모공축소화장품 찐 공병템 후기",
                url: "https://blog.naver.com/firstmozart/223845389547",
                blog_name: "모짜 vlog",
              },
              snippet:
                "그래서 많은 분들이 바라시는 게모공축소일 것 같아요. 이런 케어를 위해서는 사실 두 가지가 가장 중요하다고 하는데요. 첫 번째는 바로피부의 유수분 밸런스를 맞춰주는것이에요. 과하게 올라오는 피지는모공이 넓어지는 주요 원인 중에 하나거든요. 그렇기 때문에속건조를잡아주고 평소에 강한 수분감과 적절한 보습감을 충분히 더해주시는 게 필요해요. 그리고 두...",
              similarity: 0.7219073176383972,
            },
            {
              source: {
                title:
                  "효과좋은 홈에스테틱 마스크팩 - 미스테틱 시카 PDRN 백만샷마이크로스피큘 필오프팩",
                url: "https://cafe.naver.com/miznett/4548011?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6Im1pem5ldHQiLCJhcnRpY2xlSWQiOjQ1NDgwMTEsImlzc3VlZEF0IjoxNzQ5NjA2Mzg3MjExfQ.Tq0opxLd-g7EWbPdfP9X2EwPqBzWqLhxWmxHQqr60N4",
                blog_name:
                  "미즈넷-임신 육아 임산부 교육 뷰티 아기용품 핫딜 리뷰 체험단",
              },
              snippet:
                "히알루론산함유로피부표면과 속까지 수분을 전달해속건조를 해결하고 촉촉함을 채워 보습효과가 있습니다. 필오프팩은 시간이 지나면에센스가피부에 흡수되고, 자연스럽게 굳어 크림막을형성해 수분 손실을 막아주며 간편하게 떼어낼수 있어피부관리가 편리합니다. 첨이라 좀 얇게 발랐었는데 담부턴 양을 더 늘리고 주름부위와모공이 넓은 곳에 더...",
              similarity: 0.8261466026306152,
            },
          ],
        },
        {
          sentence_text:
            "평소 손만 닿아도 붉은기가 올라오는 예민한 피부인터라 비건화장품 다양하게 사용해봤지만 프랑스 비건 인증의 엄격한 기준을 통과하고 99.6% 자연 성분을 담은 누아지 수분크림 추천 받고 나니 평생을 함께하고픈 인생템이 되었는데요.",
          sentence_rank_in_blog: 10,
          original_score_from_extraction: 1.0,
          search_results_count: 6,
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
                title: "온도 클로토 앰플 :: 온도코스메틱 저자극앰플비건화장품",
                url: "https://blog.naver.com/rhm8307/223865917473",
                blog_name: "취향을 가득담아",
              },
              snippet:
                "바탕으로다양한피부문제의 근본적인 해결에 초점을 맞춘비건저자극앰플 ✨️ 상세 정보 ❤️ 제품명 : 온도 스킨 클로토 앰플 용량 : 50ml 기능 : 2중 기능성화장품(미백... 제품 특장점 1️⃣ 전 공정비건 인증완료 동물성 원료를 배제한 클린 포뮬러사용2️⃣ 미백 • 주름개선 2중 기능성 앰플 맑은톤피부케어의 핵심 성분인 수레국화꽃추출물로붉은피부를...",
              similarity: 0.6539080739021301,
            },
            {
              source: {
                title: "스킨푸드 당근패드 내돈내산 60매 수부지 솔직후기",
                url: "https://blog.naver.com/rinnai911v/223893099190",
                blog_name: "끼수의 보석함",
              },
              snippet:
                "갈라서사용하면 2장이 되는 마법!! 한 장을 나워서 양 볼에 부착해주면피부를 빠르게 진정 시켜주고 수분을 충전시켜주기에도 좋더라구요! 특히 요즘 에어컨 바람 때문에피부가 건조해지기 시작했는데 이거 하나면 바로 진정 완이요~ 스킨푸드 당근패드는 한국비건 인증까지 완료하여 닦토 & 팩토까지 활용하기 좋은 제품인 것 같아요! 닦토를 해주자마자 촉촉해지면서...",
              similarity: 0.6318245530128479,
            },
            {
              source: {
                title:
                  "얼굴붉은기두드러기 안면 홍조 열감 뜨거움 원인 진정크림 후기",
                url: "https://blog.naver.com/jayhee02/223889850620",
                blog_name: "하이디 뷰티로그",
              },
              snippet:
                "특히 저는 얼굴붉은기뿐만 아니라 오돌토돌올라오는여드름과 기미 잡티 등의 색소침착 흔적들에도 관심이 많았는데 이 제품이 이런 고민들을 동시에 해결해줄 수 있어서 너무... 얼굴붉은두드러기 완화에도 역시나 좋았어요. 저는 지금까지 정말다양한 제품들을사용해 봤지만,평소제피부고민이나 상태를 고려해서 구매하지는 않았기 때문에 그렇게 효과가...",
              similarity: 0.6490911245346069,
            },
            {
              source: {
                title: "비건슈퍼 샤인 아이섀도우 바르는법 눈화장 추천",
                url: "https://blog.naver.com/sailorsaturn/223874655059",
                blog_name: "카카오썬",
              },
              snippet:
                "비건 화장품브랜드인비건슈퍼 VEGAN SUPER 얼굴피부중 얇은 부위인 눈 눈화장을 할 때 성분을 따져보는 편인데 PETA비건 인증을 받아 안심하고사용할 수 있는 아이섀도우를...붉은기가없어요. M07 DUNE 듄 딥브라운 컬러로 아이라이너 대용으로 가볍게 그려도 예뻐요. 아이섀도우 바르는법으로는다양한 방법이 있지만 제일 기본적인 단계로 베이스 섀도우를...",
              similarity: 0.586268961429596,
            },
            {
              source: {
                title: "좁쌀 턱 여드름올라오는원인 극복한 썰 품",
                url: "https://blog.naver.com/unar8623/223889717145",
                blog_name: "하이디",
              },
              snippet:
                "평소피부가예민한편이라 수시로 뒤집어지는건 일도 아니였음 그 중에서도 한 곳만올라오는게 특징이였는데 이번에도 역시나 턱 여드름이 가장 심해똬,,✨ 그치만 이대로... 않은화장품사용✔ 내부적인 호르몬의 문제 ✔ 원활한 노폐물 배출이 X 사실 원인이라고 하면 어느 부위든 비교적 비슷한 상황에서 나타나는데 요즘엔 날씨 영향도 무시 못함 ㅠ...",
              similarity: 0.484528511762619,
            },
          ],
        },
      ],
      performance_metrics: {
        total_analysis_time_seconds: 33.65,
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
        "🔍 검색 결과 필터링 후: 6개 (자기 블로그 제외)",
        "⏱️ 총 유사도 분석 시간: 33.65초",
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
          time_seconds: 0.5424716472625732,
          status: "✅ 본문 크롤링 성공",
        },
        {
          step: "Azure_Summarization",
          time_seconds: 4.345779180526733,
          sentence_count: 10,
        },
        {
          step: "Azure_Overall_Sentiment_Analysis",
          time_seconds: 1.5752627849578857,
        },
        {
          step: "Total_Processing_Time",
          time_seconds: 7.724809646606445,
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
