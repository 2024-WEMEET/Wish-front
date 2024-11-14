import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  universities: [
    { name: "서울대학교 경영대학" },
    { name: "서울대학교 경제학부" },
    { name: "서울대학교 국어교육과" },
    { name: "서울대학교 농경제사회학부" },
    { name: "서울대학교 사회학과" },
    { name: "서울대학교 사회교육과" },
    { name: "서울대학교 사회복지학과" },
    { name: "서울대학교 소비자아동학부(소비자전공)" },
    { name: "서울대학교 소비자아동학부(아동가족전공)" },
    { name: "서울대학교 심리학과" },
    { name: "서울대학교 언론정보학과" },
    { name: "서울대학교 역사교육과" },
    { name: "서울대학교 역사학부" },
    { name: "서울대학교 영어교육과" },
    { name: "서울대학교 윤리교육과" },
    { name: "서울대학교 인류학과" },
    { name: "서울대학교 인문계열" },
    { name: "서울대학교 인문계열" },
    { name: "서울대학교 정치외교학부" },
    { name: "서울대학교 정치외교학부" },
    { name: "서울대학교 지리학과" },
    { name: "서울대학교 지리교육과" },
    { name: "서울대학교 간호대학" },
    { name: "서울대학교 건설환경공학부" },
    { name: "서울대학교 건축학과" },
    { name: "서울대학교 광역" },
    { name: "서울대학교 기계공학부" },
    { name: "서울대학교 물리교육과" },
    { name: "서울대학교 물리천문학부(물리전공)" },
    { name: "서울대학교 물리천문학부(천문전공)" },
    { name: "서울대학교 바이오시스템소재학부" },
    { name: "서울대학교 산림과학부" },
    { name: "서울대학교 산업공학과" },
    { name: "서울대학교 생명과학부" },
    { name: "서울대학교 생물교육과" },
    { name: "서울대학교 수리과학부" },
    { name: "서울대학교 수의예과" },
    { name: "서울대학교 수학교육과" },
    { name: "서울대학교 식물생산과학부" },
    { name: "서울대학교 식품동물생명공학부" },
    { name: "서울대학교 식품영양학과" },
    { name: "서울대학교 약학계열" },
    { name: "서울대학교 에너지자원공학과" },
    { name: "서울대학교 원자핵공학과" },
    { name: "서울대학교 응용생물화학부" },
    { name: "서울대학교 의류학과" },
    { name: "서울대학교 의예과" },
    { name: "서울대학교 재료공학부" },
    { name: "서울대학교 전기정보공학부" },
    { name: "서울대학교 조경지역시스템공학부" },
    { name: "서울대학교 조선해양공학과" },
    { name: "서울대학교 지구과학교육과" },
    { name: "서울대학교 지구환경과학부" },
    { name: "서울대학교 첨단융합학부" },
    { name: "서울대학교 치의학과" },
    { name: "서울대학교 컴퓨터공학부" },
    { name: "서울대학교 통계학과" },
    { name: "서울대학교 항공우주공학과" },
    { name: "서울대학교 화학교육과" },
    { name: "서울대학교 화학부" },
    { name: "서울대학교 화학생물공학부" },
    { name: "서울대학교 공예과" },
    { name: "서울대학교 동양화과" },
    { name: "서울대학교 디자인학과" },
    { name: "서울대학교 서양화과" },
    { name: "서울대학교 성악과" },
    { name: "서울대학교 음악학과" },
    { name: "서울대학교 작곡과" },
    { name: "서울대학교 조소과" },
    { name: "서울대학교 체육교육과" },
    { name: "서울대학교 자유전공학부" },
    { name: "서울과학기술대학교 경영학과(경영전공)" },
    { name: "서울과학기술대학교 경영학과(글로벌테크노경영전공)" },
    { name: "서울과학기술대학교 문예창작학과" },
    { name: "서울과학기술대학교 산업공학과(ITM전공)" },
    { name: "서울과학기술대학교 산업공학과(산업정보시스템전공)" },
    { name: "서울과학기술대학교 영어영문학과" },
    { name: "서울과학기술대학교 행정학과" },
    { name: "서울과학기술대학교 건설시스템공학과" },
    { name: "서울과학기술대학교 건축학부(건축공전공)" },
    { name: "서울과학기술대학교 건축학부(건축전공)" },
    { name: "서울과학기술대학교 경영학과(글로벌테크노경영전공)" },
    { name: "서울과학기술대학교 기계시스템디자인공학과" },
    { name: "서울과학기술대학교 기계자동차공학과" },
    { name: "서울과학기술대학교 미래에너지융합학과" },
    { name: "서울과학기술대학교 산업공학과(ITM전공)" },
    { name: "서울과학기술대학교 산업공학과(산업정보시스템전공)" },
    { name: "서울과학기술대학교 스마트ICT융합공학과" },
    { name: "서울과학기술대학교 식품공학과" },
    { name: "서울과학기술대학교 신소재공학과" },
    { name: "서울과학기술대학교 안경광학과" },
    { name: "서울과학기술대학교 안전공학과" },
    { name: "서울과학기술대학교 인공지능응용학과" },
    { name: "서울과학기술대학교 전기정보공학과" },
    { name: "서울과학기술대학교 전자공학과" },
    { name: "서울과학기술대학교 정밀화학과" },
    { name: "서울과학기술대학교 지능형반도체공학과" },
    { name: "서울과학기술대학교 컴퓨터공학과" },
    { name: "서울과학기술대학교 화공생명공학과" },
    { name: "서울과학기술대학교 환경공학과" },
    { name: "서울과학기술대학교 MSDE학과" },
    { name: "서울과학기술대학교 금속공예디자인학과" },
    { name: "서울과학기술대학교 도예학과" },
    { name: "서울과학기술대학교 디자인학과" },
    { name: "서울과학기술대학교 스포츠과학과" },
    { name: "서울과학기술대학교 조형예술학과" },
    { name: "서울시립대학교 경영학부" },
    { name: "서울시립대학교 경제학부" },
    { name: "서울시립대학교 국사학과" },
    { name: "서울시립대학교 국어국문학과" },
    { name: "서울시립대학교 국제관계학과" },
    { name: "서울시립대학교 도시사회학과" },
    { name: "서울시립대학교 도시행정학과" },
    { name: "서울시립대학교 사회복지학과" },
    { name: "서울시립대학교 세무학과" },
    { name: "서울시립대학교 영어영문학과" },
    { name: "서울시립대학교 자유전공학부" },
    { name: "서울시립대학교 중국어문화학과" },
    { name: "서울시립대학교 철학과" },
    { name: "서울시립대학교 행정학과" },
    { name: "서울시립대학교 건축학부(건축공전공)" },
    { name: "서울시립대학교 건축학부(건축전공)" },
    { name: "서울시립대학교 공간정보공학과" },
    { name: "서울시립대학교 교통공학과" },
    { name: "서울시립대학교 기계정보공학과" },
    { name: "서울시립대학교 도시공학과" },
    { name: "서울시립대학교 물리학과" },
    { name: "서울시립대학교 생명과학과" },
    { name: "서울시립대학교 수학과" },
    { name: "서울시립대학교 신소재공학과" },
    { name: "서울시립대학교 융합응용화학과" },
    { name: "서울시립대학교 인공지능학과" },
    { name: "서울시립대학교 전자전기컴퓨터공학부" },
    { name: "서울시립대학교 조경학과" },
    { name: "서울시립대학교 컴퓨터과학부" },
    { name: "서울시립대학교 토목공학과" },
    { name: "서울시립대학교 통계학과" },
    { name: "서울시립대학교 화학공학과" },
    { name: "서울시립대학교 환경공학부" },
    { name: "서울시립대학교 환경원예학과" },
    { name: "서울시립대학교 디자인학과(산업디자인전공)" },
    { name: "서울시립대학교 디자인학과(시각디자인전공)" },
    { name: "서울시립대학교 스포츠과학과" },
    { name: "서울시립대학교 음악학과" },
    { name:"서울시립대학교 환경조각학과" },
    { name: "건국대학교 경영학과" },
    { name: "건국대학교 경제학과" },
    { name: "건국대학교 교육공학과" },
    { name: "건국대학교 국어국문학과" },
    { name: "건국대학교 국제무역학과" },
    { name: "건국대학교 글로벌비즈니스학과" },
    { name: "건국대학교 기술경영학과" },
    { name: "건국대학교 문화콘텐츠학과" },
    { name: "건국대학교 미디어커뮤니케이션학과" },
    { name: "건국대학교 부동산학과" },
    { name: "건국대학교 사학과" },
    { name: "건국대학교 영어교육학과" },
    { name: "건국대학교 영어영문학과" },
    { name: "건국대학교 융합인재학과" },
    { name: "건국대학교 응용통계학과" },
    { name: "건국대학교 의상디자인학과" },
    { name: "건국대학교 일어교육학과" },
    { name: "건국대학교 정치외교학과" },
    { name: "건국대학교 중어중문학과" },
    { name: "건국대학교 지리학과" },
    { name: "건국대학교 철학과" },
    { name: "건국대학교 행정학과" },
    { name: "건국대학교 건축학부" },
    { name: "건국대학교 기계항공공학부" },
    { name: "건국대학교 동물자원과학과" },
    { name: "건국대학교 물리학과" },
    { name: "건국대학교 미래에너지공학과" },
    { name: "건국대학교 사회환경공학부" },
    { name: "건국대학교 산림조경학과" },
    { name: "건국대학교 산업공학과" },
    { name: "건국대학교 생명과학특성학과" },
    { name: "건국대학교 생물공학과" },
    { name: "건국대학교 수의예과" },
    { name: "건국대학교 수학과" },
    { name: "건국대학교 수학교육과" },
    { name: "건국대학교 스마트ICT융합공학과" },
    { name: "건국대학교 스마트운행체공학과" },
    { name: "건국대학교 시스템생명공학과" },
    { name: "건국대학교 식량자원과학과" },
    { name: "건국대학교 식품유통공학과" },
    { name: "건국대학교 융합생명공학과" },
    { name: "건국대학교 의생명공학과" },
    { name: "건국대학교 전기전자공학부" },
    { name: "건국대학교 줄기세포재생공학과" },
    { name: "건국대학교 축산식품생명공학과" },
    { name: "건국대학교 컴퓨터공학부" },
    { name: "건국대학교 화장품공학과" },
    { name: "건국대학교 화학과" },
    { name: "건국대학교 화학공학부" },
    { name: "건국대학교 환경보건과학과" },
    { name: "건국대학교 리빙디자인학과" },
    { name: "건국대학교 산업디자인학과" },
    { name: "건국대학교 영상영화학과" },
    { name: "건국대학교 음악교육과" },
    { name: "건국대학교 의상디자인학과" },
    { name: "건국대학교 체육교육과" },
    { name: "건국대학교 커뮤니케이션디자인학과" },
    { name: "건국대학교 현대미술학과" },
    { name: "건국대학교(글로컬) 경영학과" },
    { name: "건국대학교(글로컬) 경제통상학과" },
    { name: "건국대학교(글로컬) 경찰학과" },
    { name: "건국대학교(글로컬) 동화한국어문화학과" },
    { name: "건국대학교(글로컬) 문헌정보학과" },
    { name: "건국대학교(글로컬) 사회복지학과" },
    { name: "건국대학교(글로컬) 소방방재융합학과" },
    { name: "건국대학교(글로컬) 신문방송학과" },
    { name: "건국대학교(글로컬) 영어문화학과" },
    { name: "건국대학교(글로컬) 유아교육학과" },
    { name: "건국대학교(글로컬) 간호학과" },
    { name: "건국대학교(글로컬) 녹색기술융합학과" },
    { name: "건국대학교(글로컬) 메카트로닉스공학과" },
    { name: "건국대학교(글로컬) 바이오메디컬공학과" },
    { name: "건국대학교(글로컬) 바이오의약학과" },
    { name: "건국대학교(글로컬) 뷰티화장품학과" },
    { name: "건국대학교(글로컬) 생명공학과" },
    { name: "건국대학교(글로컬) 식품영양학과" },
    { name: "건국대학교(글로컬) 응용화학과" },
    { name: "건국대학교(글로컬) 의예과" },
    { name: "건국대학교(글로컬) 컴퓨터공학과" },
    { name: "건국대학교(글로컬) 미디어콘텐츠학과" },
    { name: "건국대학교(글로컬) 산업디자인학과" },
    { name: "건국대학교(글로컬) 스포츠건강학과" },
    { name: "건국대학교(글로컬) 시각영상디자인학과" },
    { name: "건국대학교(글로컬) 실내디자인학과" },
    { name: "건국대학교(글로컬) 조형예술학과" },
    { name: "건국대학교(글로컬) 패션디자인학과" },
    { name: "경희대학교(서울) 경영학과" },
    { name: "경희대학교(서울) 경제학과" },
    { name: "경희대학교(서울) 관광엔터테인먼트학부" },
    { name: "경희대학교(서울) 국어국문학과" },
    { name: "경희대학교(서울) 무역학과" },
    { name: "경희대학교(서울) 미디어학과" },
    { name: "경희대학교(서울) 글로벌Hospitality관광학과" },
    { name: "경희대학교(서울) 빅데이터응용학과" },
    { name: "경희대학교(서울) 사학과" },
    { name: "경희대학교(서울) 사회학과" },
    { name: "경희대학교(서울) 사회과학광역학과" },
    { name: "경희대학교(서울) 아동가족학과" },
    { name: "경희대학교(서울) 영어영문학과" },
    { name: "경희대학교(서울) 응용영어통번역학과" },
    { name: "경희대학교(서울) 의상학과" },
    { name: "경희대학교(서울) 자율전공학부" },
    { name: "경희대학교(서울) 정치외교학과" },
    { name: "경희대학교(서울) 조리&푸드디자인학과" },
    { name: "경희대학교(서울) 주거환경학과" },
    { name: "경희대학교(서울) 지리학과(인문)" },
    { name: "경희대학교(서울) 철학과" },
    { name: "경희대학교(서울) 한의예과(인문)" },
    { name: "경희대학교(서울) 행정학과" },
    { name: "경희대학교(서울) 회계세무학과" },
    { name: "경희대학교(서울) Hospitality경영학과" },
    { name: "경희대학교(서울) 간호학과" },
    { name: "경희대학교(서울) 물리학과" },
    { name: "경희대학교(서울) 생물학과" },
    { name: "경희대학교(서울) 수학과" },
    { name: "경희대학교(서울) 식품영양학과" },
    { name: "경희대학교(서울) 약과학과" },
    { name: "경희대학교(서울) 약학과" },
    { name: "경희대학교(서울) 의예과" },
    { name: "경희대학교(서울) 정보디스플레이학과" },
    { name: "경희대학교(서울) 지리학과(자연)" },
    { name: "경희대학교(서울) 치의예과" },
    { name: "경희대학교(서울) 한약학과" },
    { name: "경희대학교(서울) 한의예과(자연)" },
    { name: "경희대학교(서울) 화학과" },
    { name: "경희대학교(서울) 기악과" },
    { name: "광운대학교 경영학부" },
    { name: "광운대학교 국어국문" },
    { name: "광운대학교 국제통상학부" },
    { name: "광운대학교 국제학부" },
    { name: "광운대학교 동북아문화산업학부" },
    { name: "광운대학교 미디어커뮤니케이션학부" },
    { name: "광운대학교 법학부" },
    { name: "광운대학교 산업심리" },
    { name: "광운대학교 영어산업" },
    { name: "광운대학교 행정" },
    { name: "광운대학교 건축" },
    { name: "광운대학교 건축공" },
    { name: "광운대학교 로봇학부" },
    { name: "광운대학교 소프트웨어학부" },
    { name: "광운대학교 수학" },
    { name: "광운대학교 스포츠융합과학" },
    { name: "광운대학교 전기공" },
    { name: "광운대학교 전자공" },
    { name: "광운대학교 전자바이오물리" },
    { name: "광운대학교 전자융합공" },
    { name: "광운대학교 전자재료공" },
    { name: "광운대학교 전자통신공" },
    { name: "광운대학교 정보융합학부" },
    { name: "광운대학교 컴퓨터정보공학부" },
    { name: "광운대학교 화학" },
    { name: "광운대학교 화학공" },
    { name: "광운대학교 환경공" },
    { name: "경희대학교(국제/용인) 국제" },
    { name: "경희대학교(국제/용인) 글로벌커뮤니케이션학부" },
    { name: "경희대학교(국제/용인) 러시아어" },
    { name: "경희대학교(국제/용인) 스페인어" },
    { name: "경희대학교(국제/용인) 일본어" },
    { name: "경희대학교(국제/용인) 중국어" },
    { name: "경희대학교(국제/용인) 프랑스어" },
    { name: "경희대학교(국제/용인) 한국어" },
    { name: "경희대학교(국제/용인) 건축" },
    { name: "경희대학교(국제/용인) 건축공" },
    { name: "경희대학교(국제/용인) 기계공" },
    { name: "경희대학교(국제/용인) 사회기반시스템공" },
    { name: "경희대학교(국제/용인) 산업경영공" },
    { name: "경희대학교(국제/용인) 생명과학광역" },
    { name: "경희대학교(국제/용인) 생체의공" },
    { name: "경희대학교(국제/용인) 소프트웨어융합" },
    { name: "경희대학교(국제/용인) 스마트팜과학" },
    { name: "경희대학교(국제/용인) 식물환경신소재공" },
    { name: "경희대학교(국제/용인) 식품생명공" },
    { name: "경희대학교(국제/용인) 우주과학" },
    { name: "경희대학교(국제/용인) 원자력공" },
    { name: "경희대학교(국제/용인) 유전생명공" },
    { name: "경희대학교(국제/용인) 응용물리" },
    { name: "경희대학교(국제/용인) 응용수학" },
    { name: "경희대학교(국제/용인) 응용화학" },
    { name: "경희대학교(국제/용인) 전자공" },
    { name: "경희대학교(국제/용인) 정보전자신소재공" },
    { name: "경희대학교(국제/용인) 컴퓨터공학부(인공지능)" },
    { name: "경희대학교(국제/용인) 컴퓨터공학부(컴퓨터공)" },
    { name: "경희대학교(국제/용인) 한방생명공" },
    { name: "경희대학교(국제/용인) 화학공" },
    { name: "경희대학교(국제/용인) 환경학및환경공" },
    { name: "경희대학교(국제/용인) ICT광역" },
    { name: "경희대학교(국제/용인) 골프산업" },
    { name: "경희대학교(국제/용인) 도예" },
    { name: "경희대학교(국제/용인) 디지털콘텐츠" },
    { name: "경희대학교(국제/용인) 산업디자인" },
    { name: "국민대학교 건축학부(인문)" },
    { name: "국민대학교 경영정보학부(인문)" },
    { name: "국민대학교 경영학부(경영전공)" },
    { name: "국민대학교 경제" },
    { name: "국민대학교 교육" },
    { name: "국민대학교 국제통상" },
    { name: "국민대학교 러시아유라시아" },
    { name: "국민대학교 미디어광고학부(광고홍보전공)" },
    { name: "국민대학교 미디어광고학부(미디어전공)" },
    { name: "국민대학교 법학부" },
    { name: "국민대학교 사회" },
    { name: "국민대학교 영어영문학부" },
    { name: "국민대학교 일본" },
    { name: "국민대학교 재무금융회계학부(재무금융전공)" },
    { name: "국민대학교 재무금융회계학부(회계전공)" },
    { name: "국민대학교 정치외교" },
    { name: "국민대학교 중국학부(중국어문전공)" },
    { name: "국민대학교 중국학부(중국정경전공)" },
    { name: "국민대학교 한국어문학부(국어국문전공)" },
    { name: "국민대학교 한국어문학부(글로벌한국어전공)" },
    { name: "국민대학교 한국역사" },
    { name: "국민대학교 행정" },
    { name: "국민대학교 AI빅데이터융합경영(인문)" },
    { name: "국민대학교 KMU International Business School" },
    { name: "국민대학교 스포츠의학" },
    { name: "국민대학교 시각디자인" },
    { name: "국민대학교 연극영화(영화연출및제작전공)" },
    { name: "국민대학교 의류디자인" },
    { name: "국민대학교 건설시스템공학부" },
    { name: "국민대학교 건축학부(자연)" },
    { name: "국민대학교 경영정보학부(자연)" },
    { name: "국민대학교 기계공학부" },
    { name: "국민대학교 나노전자물리" },
    { name: "국민대학교 미래모빌리티" },
    { name: "국민대학교 바이오발효융합" },
    { name: "국민대학교 산림환경시스템" },
    { name: "국민대학교 소프트웨어학부" },
    { name: "국민대학교 식품영양" },
    { name: "국민대학교 신소재공학부(기계금속재료전공)" },
    { name: "국민대학교 신소재공학부(전자화학재료전공)" },
    { name: "국민대학교 응용화학부(나노소재전공)" },
    { name: "국민대학교 응용화학부(바이오의약전공)"},
    { name: "국민대학교 인공지능학부" },
    { name: "국민대학교 임산생명공" },
    { name: "국민대학교 자동차IT융합" },
    { name: "국민대학교 자동차공" },
    { name: "국민대학교 전자공학부(전자시스템공전공)" },
    { name: "국민대학교 전자공학부(지능전자공전공)" },
    { name: "국민대학교 전자공학부(지능형반도체융합전자전공)" },
    { name: "국민대학교 정보보안암호수학" },
    { name: "국민대학교 AI빅데이터융합경영(자연)" },
    { name: "국민대학교 공간디자인" },
    { name: "국민대학교 공업디자인" },
    { name: "국민대학교 금속공예" },
    { name: "국민대학교 도자공예" },
    { name: "국민대학교 미술학부(입체미술전공)" },
    { name: "국민대학교 미술학부(회화전공)" },
    { name: "국민대학교 스포츠건강재활" },
    { name: "국민대학교 스포츠교육" },
    { name: "국민대학교 스포츠산업레저" },
    { name: "국민대학교 시각디자인" },
    { name: "국민대학교 영상디자인" },
    { name: "국민대학교 음악학부(관현악전공)" },
    { name: "국민대학교 음악학부(성악전공)" },
    { name: "국민대학교 음악학부(작곡전공)" },
    { name: "국민대학교 음악학부(피아노전공)" },
    { name: "국민대학교 의상디자인" },
    { name: "국민대학교 자동차운송디자인" },
    { name: "국민대학교 AI디자인" },
    { name: "고려대학교(서울) 경영대학" },
    { name: "고려대학교(서울) 경제" },
    { name: "고려대학교(서울) 교육" },
    { name: "고려대학교(서울) 국어교육" },
    { name: "고려대학교(서울) 국어국문" },
    { name: "고려대학교(서울) 국제학부" },
    { name: "고려대학교(서울) 노어노문" },
    { name: "고려대학교(서울) 독어독문" },
    { name: "고려대학교(서울) 미디어학부" },
    { name: "고려대학교(서울) 보건정책관리학부" },
    { name: "고려대학교(서울) 불어불문" },
    { name: "고려대학교(서울) 사학" },
    { name: "고려대학교(서울) 사회" },
    { name: "고려대학교(서울) 서어서문" },
    { name: "고려대학교(서울) 식품자원경제" },
    { name: "고려대학교(서울) 심리학부" },
    { name: "고려대학교(서울) 언어" },
    { name: "고려대학교(서울) 역사교육" },
    { name: "고려대학교(서울) 영어교육" },
    { name: "고려대학교(서울) 영어영문" },
    { name: "고려대학교(서울) 일어일문" },
    { name: "고려대학교(서울) 자유전공학부" },
    { name: "고려대학교(서울) 정치외교" },
    { name: "고려대학교(서울) 중어중문" },
    { name: "고려대학교(서울) 지리교육" },
    { name: "고려대학교(서울) 철학" },
    { name: "고려대학교(서울) 통계" },
    { name: "고려대학교(서울) 한국사" },
    { name: "고려대학교(서울) 한문" },
    { name: "고려대학교(서울) 행정" },
    { name: "고려대학교(서울) 가정교육" },
    { name: "고려대학교(서울) 간호대학" },
    { name: "고려대학교(서울) 건축" },
    { name: "고려대학교(서울) 건축사회환경공학부" },
    { name: "고려대학교(서울) 기계공학부" },
    { name: "고려대학교(서울) 데이터과학" },
    { name: "고려대학교(서울) 물리" },
    { name: "고려대학교(서울) 바이오시스템의과학부" },
    { name: "고려대학교(서울) 바이오의공학부" },
    { name: "고려대학교(서울) 반도체공" },
    { name: "고려대학교(서울) 보건환경융합과학부" },
    { name: "고려대학교(서울) 사이버국방" },
    { name: "고려대학교(서울) 산업경영공학부" },
    { name: "고려대학교(서울) 생명공학부" },
    { name: "고려대학교(서울) 생명과학부" },
    { name: "고려대학교(서울) 수학" },
    { name: "고려대학교(서울) 수학교육" },
    { name: "고려대학교(서울) 스마트모빌리티학부" },
    { name: "고려대학교(서울) 스마트보안학부" },
    { name: "고려대학교(서울) 식품공" },
    { name: "고려대학교(서울) 신소재공학부" },
    { name: "고려대학교(서울) 융합에너지공" },
    { name: "고려대학교(서울) 의과대학" },
    { name: "고려대학교(서울) 전기전자공학부" },
    { name: "고려대학교(서울) 지구환경과학" },
    { name: "고려대학교(서울) 차세대통신" },
    { name: "고려대학교(서울) 컴퓨터" },
    { name: "고려대학교(서울) 화공생명공" },
    { name: "고려대학교(서울) 화학과" },
    { name: "고려대학교(서울) 환경생태공학부" },
    { name: "고려대학교(서울) 디자인조형학부" },
    { name: "고려대학교(서울) 체육교육" },
    { name: "숙명여자대학교 가족자원경영" },
    { name: "숙명여자대학교 경영학부" },
    { name: "숙명여자대학교 경제학부" },
    { name: "숙명여자대학교 교육학부" },
    { name: "숙명여자대학교 글로벌서비스학부(글로벌협력전공)" },
    { name: "숙명여자대학교 글로벌서비스학부(앙트러프러너십전공)" },
    { name: "숙명여자대학교 독일언어문화" },
    { name: "숙명여자대학교 문헌정보" },
    { name: "숙명여자대학교 문화관광외식학부(르꼬르동블루외식경영전공)" },
    { name: "숙명여자대학교 문화관광외식학부(문화관광전공)" },
    { name: "숙명여자대학교 미디어학부" },
    { name: "숙명여자대학교 법학부" },
    { name: "숙명여자대학교 사회심리" },
    { name: "숙명여자대학교 소비자경제" },
    { name: "숙명여자대학교 아동복지학부" },
    { name: "숙명여자대학교 역사문화" },
    { name: "숙명여자대학교 영어영문학부(영어영문전공)" },
    { name: "숙명여자대학교 영어영문학부(테슬(TESL)전공)" },
    { name: "숙명여자대학교 일본" },
    { name: "숙명여자대학교 정치외교" },
    { name: "숙명여자대학교 중어중문학부" },
    { name: "숙명여자대학교 프랑스언어문화" },
    { name: "숙명여자대학교 한국어문학부" },
    { name: "숙명여자대학교 행정" },
    { name: "숙명여자대학교 홍보광고" },
    { name: "숙명여자대학교 기계시스템학부" },
    { name: "숙명여자대학교 기초공학부" },
    { name: "숙명여자대학교 생명시스템학부" },
    { name: "숙명여자대학교 소프트웨어학부(데이터사이언스전공)" },
    { name: "숙명여자대학교 소프트웨어학부(컴퓨터과학전공)" },
    { name: "숙명여자대학교 수학" },
    { name: "숙명여자대학교 식품영양" },
    { name: "숙명여자대학교 약학부" },
    { name: "숙명여자대학교 의류" },
    { name: "숙명여자대학교 인공지능공학부" },
    { name: "숙명여자대학교 첨단소재전자융합공학부(신소재물리전공)" },
    { name: "숙명여자대학교 첨단소재전자융합공학부(지능형전자시스템전공)" },
    { name: "숙명여자대학교 통계" },
    { name: "숙명여자대학교 화공생명공학부" },
    { name: "숙명여자대학교 화학" },
    { name: "숙명여자대학교 공예" },
    { name: "숙명여자대학교 관현악" },
    { name: "숙명여자대학교 산업디자인" },
    { name: "숙명여자대학교 성악" },
    { name: "숙명여자대학교 시각영상디자인" },
    { name: "숙명여자대학교 작곡" },
    { name: "숙명여자대학교 체육교육" },
    { name: "숙명여자대학교 피아노" },
    { name: "숙명여자대학교 환경디자인" },
    { name: "숙명여자대학교 회화(서양화전공)" },
    { name: "숙명여자대학교 회화(한국화전공)" },
    { name: "동국대학교(서울) 경영" },
    { name: "동국대학교(서울) 경영정보" },
    { name: "동국대학교(서울) 경제" },
    { name: "동국대학교(서울) 경찰행정학부" },
    { name: "동국대학교(서울) 광고홍보" },
    { name: "동국대학교(서울) 교육" },
    { name: "동국대학교(서울) 국어교육" },
    { name: "동국대학교(서울) 국어국문문예창작학부" },
    { name: "동국대학교(서울) 국제통상" },
    { name: "동국대학교(서울) 문화재" },
    { name: "동국대학교(서울) 법학" },
    { name: "동국대학교(서울) 불교학부" },
    { name: "동국대학교(서울) 사학" },
    { name: "동국대학교(서울) 사회복지" },
    { name: "동국대학교(서울) 사회언론정보학부(미디어커뮤니케이션전공)" },
    { name: "동국대학교(서울) 사회언론정보학부(사회전공)" },
    { name: "동국대학교(서울) 식품산업관리" },
    { name: "동국대학교(서울) 역사교육" },
    { name: "동국대학교(서울) 영어영문학부" },
    { name: "동국대학교(서울) 일본" },
    { name: "동국대학교(서울) 정치행정학부(북한전공)" },
    { name: "동국대학교(서울) 정치행정학부(정치외교전공)" },
    { name: "동국대학교(서울) 정치행정학부(행정전공)" },
    { name: "동국대학교(서울) 중어중문" },
    { name: "동국대학교(서울) 지리교육" },
    { name: "동국대학교(서울) 철학" },
    { name: "동국대학교(서울) 회계" },
    { name: "동국대학교(서울) AI소프트웨어융합학부(인문)" },
    { name: "동국대학교(서울) 가정교육" },
    { name: "동국대학교(서울) 건설환경공" },
    { name: "동국대학교(서울) 건축공학부" },
    { name: "동국대학교(서울) 기계로봇에너지공" },
    { name: "동국대학교(서울) 물리" },
    { name: "동국대학교(서울) 바이오환경과학" },
    { name: "동국대학교(서울) 산업시스템공" },
    { name: "동국대학교(서울) 생명과학" },
    { name: "동국대학교(서울) 수학" },
    { name: "동국대학교(서울) 수학교육" },
    { name: "동국대학교(서울) 시스템반도체학부" },
    { name: "동국대학교(서울) 식품생명공" },
    { name: "동국대학교(서울) 약학" },
    { name: "동국대학교(서울) 에너지신소재공" },
    { name: "동국대학교(서울) 의생명공" },
    { name: "동국대학교(서울) 전자전기공학부" },
    { name: "동국대학교(서울) 정보통신공" },
    { name: "동국대학교(서울) 통계" },
    { name: "동국대학교(서울) 화공생물공" },
    { name: "동국대학교(서울) 화학" },
    { name: "동국대학교(서울) AI소프트웨어융합학부(자연)" },
    { name: "동국대학교(서울) 미술학부(조소전공)" },
    { name: "동국대학교(서울) 영화영상" },
    { name: "동국대학교(서울) 체육교육" },
    //  여기에 다른 학교와 학과 데이터를 추가
  ],
  searchResults: [],
};

const universitySlice = createSlice({
  name: 'universityData',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = state.universities.filter(university =>
        university.name.includes(action.payload)
      );
    },
  },
});

export const { setSearchResults } = universitySlice.actions;
export default universitySlice.reducer;