// import React from "react";

// /** 개인정보 보호 약관 */
// const TermOfPrivateInfo = (props) => {
//   return <Content />;
// };

// const Content = () => {
//   return (
//     <>
//       {" "}
//       <p>
//         <br />
//         <br />
//       </p>
//       <p>
//         &lt;(주)위드플러스&gt;(이하 &apos;회사&apos;)은(는) 개인정보보호법에 따라 이용자의 개인정보
//         보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과
//         같은 처리방침을 두고 있습니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트
//         공지사항(또는 개별공지)을 통하여 공지할 것입니다. 본 방침은 2019년 12월 1일부터 시행됩니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>1. 수집하는 개인정보 항목&nbsp;</p>
//       <p>가. 회사는 회원가입을 위해 가입 당시 아래와 같은 개인정보를 수집합니다.</p>
//       <p>- 필수항목: 아이디(이메일 주소), 비밀번호</p>
//       <p>- 선택항목: 이름(닉네임)</p>
//       <p>
//         <br />
//       </p>
//       <p>나. 서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</p>
//       <p>- IP주소, 쿠키, 방문일시, 서비스 이용기록, 서비스 불량 이용기록</p>
//       <p>
//         <br />
//       </p>
//       <p>
//         다. 신규 서비스(기능) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회
//         제공을 위해 아래와 같은 정보들이 수집될 수 있습니다.
//       </p>
//       <p>- 이메일 주소</p>
//       <p>
//         <br />
//       </p>
//       <p>2. 개인정보의 수집 및 이용 목적</p>
//       <p>가. 홈페이지 회원가입 및 관리</p>
//       <p>
//         회사는 회원 서비스의 제공, 회원 가입의사 확인, 회원자격 유지&middot;관리, 서비스 부정이용
//         방지, 각종 고지&middot;통지, 고충처리, 회원탈퇴 의사 확인, 분쟁 조정을 위한 기록 보존 등을
//         목적으로 개인정보를 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지
//         않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>나. 서비스 이용 관리</p>
//       <p>
//         회사는 회원의 원활한 서비스 이용을 위해 게시물의 신규 생성, 수정, 삭제 등의 기록 등을
//         수집합니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>다. 마케팅 및 광고에의 활용</p>
//       <p>
//         신규 서비스(제품) 개발 및 맞춤 서비스 제공
//         {/*, 이벤트 및 광고성 정보 제공 및 참여기회 제공,
//         인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는
//   회원의 서비스 이용에 대한 통계 등을*/}{" "}
//         목적으로 개인정보를 처리합니다.
//       </p>
//       {/* <p>
//         단, 이벤트의 응모를 통해 상품이 지급되는 경우 상품의 배송을 위해 개인정보가 제3자에게 제공될
//         수 있습니다.
//       </p> */}
//       <p>- 이벤트 시 제3자에게 제공되는 개인정보 항목: 이름, {/*전화번호,*/} 주소, 이메일</p>
//       <p>
//         <br />
//       </p>
//       <p>3. 개인정보의 처리 및 보유 기간</p>
//       <p>
//         회사는 법령에 따른 개인정보 보유&middot;이용기간 또는 정보주체로부터 개인정보를 수집시에
//         동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유하며 이용목적이 달성되면
//         지체업이 파기합니다.
//       </p>
//       <p>가. 회사 내부 방침에 의한 정보보유</p>
//       <p>회사의 내부 정책에 의하여 아래의 이유로 명시한 기간 동안 보존합니다.</p>
//       <p>
//         <br />
//       </p>
//       <p>[부정이용기록]&nbsp;</p>
//       <p>- 보존 사유 : 부정이용 방지&nbsp;</p>
//       <p>- 보존 기간 : 30일</p>
//       <p>
//         <br />
//       </p>
//       <p>나. 관련법령에 의한 정보보유</p>
//       <p>
//         상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가
//         있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.&nbsp;
//       </p>
//       <p>
//         이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
//       </p>
//       <p>&nbsp; &nbsp;</p>
//       <p>[계약 또는 청약철회 등에 관한 기록]&nbsp;</p>
//       <p>- 보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률&nbsp;</p>
//       <p>- 보존 기간: 5년&nbsp;</p>
//       <p>[대금결제 및 재화 등의 공급에 관한 기록]&nbsp;</p>
//       <p>- 보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률&nbsp;</p>
//       <p>- 보존 기간: 5년&nbsp;</p>
//       <p>[전자금융 거래에 관한 기록]&nbsp;</p>
//       <p>- 보존 이유: 전자금융거래법&nbsp;</p>
//       <p>- 보존 기간: 5년&nbsp;</p>
//       <p>[소비자의 불만 또는 분쟁처리에 관한 기록]&nbsp;</p>
//       <p>- 보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률&nbsp;</p>
//       <p>- 보존 기간: 3년&nbsp;</p>
//       <p>[웹사이트 방문기록]&nbsp;</p>
//       <p>- 보존 이유: 통신비밀보호법&nbsp;</p>
//       <p>- 보존 기간: 3개월</p>
//       <p>
//         <br />
//       </p>
//       <p>4. 개인정보 파기절차 및 방법</p>
//       <p>
//         회사는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다.
//         파기의 절차, 기한 및 방법은 다음과 같습니다.
//       </p>
//       <p>가. 파기절차</p>
//       <p>
//         이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및
//         기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는
//         법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>나. 파기기한</p>
//       <p>
//         이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일
//         이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가
//         불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그
//         개인정보를 파기합니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>다. 파기방법</p>
//       <p>- 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</p>
//       <p>- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>
//       <p>
//         <br />
//       </p>
//       <p>5. 정보주체와 법정대리인의 권리&middot;의무 및 그 행사방법</p>
//       <p>
//         정보주체와 법정대리인의 권리&middot;의무 및 그 행사방법으로 이용자는 개인정보주체로써 다음과
//         같은 권리를 행사할 수 있습니다.
//       </p>
//       <p>
//         ① 정보주체는 회사에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를
//         행사할 수 있습니다.
//       </p>
//       <p>
//         ② 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행령 제41조제1항에따라 서면,
//         전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이
//         조치하겠습니다.
//       </p>
//       <p>
//         ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실
//         수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출 하셔야
//         합니다.
//       </p>
//       <p>
//         ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여
//         정보주체의 권리가 제한될 수 있습니다.
//       </p>
//       <p>
//         ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는
//         경우에는 그 삭제를 요구할 수 없습니다.
//       </p>
//       <p>
//         ⑥ 회사는 정보주체 권리에 따른 열람의 요구, 정정&middot;삭제의 요구, 처리정지의 요구 시 열람
//         등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
//       </p>
//       <p>&nbsp;</p>
//       <p>6. 개인정보 자동 수집 장치의 설치&bull;운영 및 거부에 관한 사항</p>
//       <p>가. 쿠키 설명 및 사용 목적</p>
//       <p>
//         회사는 이용자에게 보다 적절하고 유용한 서비스를 제공하기 위하여 이용자의 정보를 수시로
//         저장하고 불러오는 &lsquo;쿠키(cookie)&rsquo;를 사용합니다. 쿠키란 회사의 웹사이트를
//         운영하는데 이용되는 서버가 이용자의 컴퓨터로 전송하는 아주 작은 텍스트 파일로서 이용자의
//         컴퓨터 하드디스크에 저장됩니다. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>나. 쿠키 설정 거부 방법</p>
//       <p>
//         이용자는 사용하는 웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나 쿠키를 저장할
//         때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 쿠키의 저장을 거부할 경우
//         로그인이 필요한 서비스의 이용에 제한이 생길 수 있습니다.
//       </p>
//       <p>[쿠키 설치 허용 여부를 지정하는 방법(Internet Explorer의 경우)]</p>
//       <p>① [도구] 메뉴에서 [설정]을 선택</p>
//       <p>② [업데이트 및 보안]을 클릭</p>
//       <p>③ [쿠키]를 클릭</p>
//       <p>④ 쿠키 허용여부를 선택</p>
//       <p>
//         <br />
//       </p>
//       <p>7. 회원 정보의 관리 또는 삭제요청</p>
//       <p>회사는 데이터 액세스, 수정, 복사 및 삭제 기능을 제공합니다.</p>
//       <p>
//         회사는 더 이상 서비스를 제공할 필요가 없는 시점, &nbsp;회원의 계정이 삭제되는 시점 중 먼저
//         도달하는 시점까지만 데이터를 저장합니다.&nbsp;
//       </p>
//       <p>
//         이는 데이터의 성격, 수집 및 처리된 이유, 관련 법적 또는 운영상의 보존 필요성과 같은 요인에
//         따라 개별적으로 결정됩니다.&nbsp;
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>
//         회원 및 계정정보를 삭제하면 회원의 개인정보 및 회원이 작성한 사항이 삭제되며 나중에 해당
//         정보를 복원할 수 없습니다.&nbsp;
//       </p>
//       <p>
//         다른 회원이 회원에게 대해 공유한 정보는 회원의 계정정보에 포함되지 않으며 삭제되지
//         않습니다.&nbsp;
//       </p>
//       {/* <p>
//         계정을 삭제하지 않고 제품 이용을 일시적으로 중단하려면 계정을 비활성화할 수 있습니다.&nbsp;
//       </p> */}
//       <p>
//         회원님의 계정정보(작성정보 포함)의 삭제는 아래 회사 개인정보 보호책임자에게 연락하여 언제든
//         요청할 수 있습니다. &nbsp;
//       </p>
//       <p>(개인정보의 파기절차 및 방법은 본 개인정보처리방침의 4항을 참고해주시기 바랍니다.)</p>
//       <p>
//         <br />
//       </p>
//       <p>8. 개인정보의 안전성 확보 조치</p>
//       <p>
//         회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적
//         조치를 하고 있습니다.
//       </p>
//       <p>가. 정기적인 자체 감사 실시</p>
//       <p>
//         개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>나. 개인정보 취급 직원의 최소화 및 교육</p>
//       <p>
//         개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을
//         시행하고 있습니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>다. 내부관리계획의 수립 및 시행</p>
//       <p>개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</p>
//       <p>
//         <br />
//       </p>
//       {/* <p>라. 해킹 등에 대비한 기술적 대책</p>
//       <p>
//         회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을
//         설치하고 주기적인 갱신&middot;점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고
//         기술적/물리적으로 감시 및 차단하고 있습니다.
//       </p> */}
//       <p>
//         <br />
//       </p>
//       <p>마. 개인정보의 암호화</p>
//       <p>
//         이용자의 개인정보 중 비밀번호는 암호화되어 저장 및 관리되고 있어, 본인만이 알 수 있으며
//         중요한 데이터는 파일 및 전송 데이터를 암호화하거나 파일 잠금 기능을 사용하는 등의 별도
//         보안기능을 사용하고 있습니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>바. 접속기록의 보관 및 위/변조 방지</p>
//       <p>
//         개인정보처리시스템에 접속한 기록은 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이
//         위변〮조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>사. 개인정보에 대한 접근 제한</p>
//       <p>
//         개인정보에 대한 접근통제를 위하여 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
//         부여, 변경, 말소 등의 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
//         접근을 통제하고 있습니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>9. 개인정보 보호책임자</p>
//       <p>
//         회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
//         불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
//       </p>
//       <p>[개인정보 보호책임자]</p>
//       <p>- 성명: 이광표</p>
//       <p>- 직책: 대표자</p>
//       <p>- 직급: 대표</p>
//       <p>- 연락처: 031-423-0201 / withplus@gamedu.co.kr</p>
//       <p>
//         정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리,
//         피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는
//         정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>10. 정보주체의 권익침해에 대한 구제방법</p>
//       <p>
//         아래의 기관은 회사와는 별개의 기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제 결과에
//         만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)&nbsp;</p>
//       <p>- 소관업무: 개인정보 침해사실 신고, 상담 신청&nbsp;</p>
//       <p>- 홈페이지: privacy.kisa.or.kr&nbsp;</p>
//       <p>- 전화: (국번없이) 118&nbsp;</p>
//       <p>- 주소: (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터&nbsp;</p>
//       <p>▶ 개인정보 분쟁조정위원회&nbsp;</p>
//       <p>- 소관업무: 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)&nbsp;</p>
//       <p>- 홈페이지: www.kopico.go.kr&nbsp;</p>
//       <p>- 전화: (국번없이) 1833-6972&nbsp;</p>
//       <p>- 주소: (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층&nbsp;</p>
//       <p>▶ 정보보호마크 인증위원회: 02-580-0533~4 (www.eprivacy.or.kr)</p>
//       <p>▶ 대검찰청 사이버범죄수사단: 02-3480-3573 (www.spo.go.kr)</p>
//       <p>▶ 경찰청 사이버안전국: 182 (http://cyberbureau.police.go.kr)</p>
//       <p>
//         <br />
//       </p>
//       <p>11. 개인정보 처리방침 변경 및 고지의 의무</p>
//       <p>
//         개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및
//         정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
//       </p>
//       <p>
//         <br />
//       </p>
//       <p>[부칙]</p>
//       <p>공고일자: 2023년 03월 28일</p>
//       <p>시행일자: 2023년 03월 28일</p>
//       <p>일부개정: 2023년 03월 28일</p>
//       <p>
//         <br />
//       </p>{" "}
//     </>
//   );
// };

// export default TermOfPrivateInfo;
