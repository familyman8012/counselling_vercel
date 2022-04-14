import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { loadDetail, priceSelect, onisModal } from "../../redux/productSlice";
import ReviewList from "../../container/detail/ReviewList";
import { useSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import Link from "next/link";

const PriceItem = ({ priceItem }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ul className="price">
        {priceItem.map((item, i) => (
          <li key={item.price} onClick={() => dispatch(priceSelect(i + 1))}>
            {item.title} :{" "}
            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </li>
        ))}
      </ul>
    </>
  );
};

const Product = () => {
  const router = useRouter();
  const [session] = useSession();

  const { detailInfo, priceItem, selectPrice, isModal } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const { id } = router.query;

  useEffect(() => {
    {
      id ? dispatch(loadDetail(id)) : "";
    }
  }, [id]);

  useEffect(() => {
    dispatch(priceSelect(0));
  }, []);

  const linkPay = () => {
    if (session === null) {
      alert("로그인 후 결제 가능합니다.");
      return;
    }
    router.push("/payment?correctUrl=true", "/payment");
  };

  return (
    <>
      {detailInfo && (
        <>
          <NextSeo
            canonical={`https://mindcarecenter.org/products/${id}`}
            title={`${detailInfo[0].title} 를 위한 최선의 심리상담 |  마인드케어센터`}
            description={`${detailInfo[0].title} 에 대한 고민, 마인드케어가 속 시원히 해결해드리겠습니다.`}
            openGraph={{
              type: "website",
              title: `${detailInfo[0].title} 를 위한 최선의 심리상담 |  마인드케어센터`,
              description: `${detailInfo[0].title} 에 대한 고민, 마인드케어가 속 시원히 해결해드리겠습니다.`,
              url: `https://mindcarecenter.org/products/${id}`,
              // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next
              images: [
                {
                  url: `https://mindcarecenter.org${detailInfo[0].imgUrl}`,
                  width: 1200,
                  height: 630,
                  alt: detailInfo[0].alt,
                },
              ],
              site_name: "심리상담센터 마인드케어센터",
            }}
          />
          <div className="wrap_product_detail">
            <div className="top">
              <div className="box_product_img">
                <img src={detailInfo[0].imgUrl} alt={detailInfo[0].alt} />
              </div>
              <div className="wrap_detail_info">
                <div className="product_info">
                  <div className="wrap_simple_info">
                    <div className="title">{detailInfo[0].title}</div>
                    <PriceItem priceItem={priceItem} />
                  </div>
                  <div className="desc">
                    {detailInfo[0].text}
                    <p className="addDesc">
                      *결제 후, 당일~최대 1주일이내에 상담이 진행되며,
                      <br /> 1주일내에 상담이 진행되지 않을 시 100%
                      환불진행됩니다.
                      <br />
                      <Link href="/refund">
                        <a>환불정책 보러가기</a>
                      </Link>
                    </p>
                  </div>
                  <div className="box_sel_price">
                    <p className="tit">상담선택*</p>
                    <div
                      className={"selected_info " + (isModal ? "on" : "")}
                      onClick={() => dispatch(onisModal())}
                    >
                      {selectPrice !== null
                        ? `${selectPrice[0].title} : ${selectPrice[0].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
                        : "상담선택(필수)"}
                    </div>
                    {isModal && <PriceItem priceItem={priceItem} />}
                    <div className="box_btns">
                      {selectPrice !== null ? (
                        <span className="btn" onClick={linkPay}>
                          결제
                        </span>
                      ) : (
                        <span className="btn">상담을 선택해주세요</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="wrap_tab">
              <li className="on">구매평</li>
              <li
                onClick={() => alert("준비 중입니다. 채널톡으로 문의주세요.")}
              >
                Q&A
              </li>
            </ul>
            <div className="program_desc">
              {/* <p>
                기본상담 : 단회성 프로그램으로써, 현재 자기자신의 상태에 대한
                정확한 이해와 극복을 위한 프로그램입니다.
                <br />
                국내 최고의 대학종합병원에서 진행되는 수준이상의 세션을 명문
                심리상담학과 석박사 출신의 최고의 심리전문가의
                <br /> 정확한 진단 및 극복방향에 대한 큰 방향을 짚어드립니다.
              </p>
              <p>
                심층상담 : 세 번의 심층상담을 통해, 내담자의 깊은 내면과 정체성
                수준의 탐색과 변화를 이끄는 상담을 진행합니다.
                <br />
                어디서 내면의 힘듬이 시작되었는지, 어떻게 극복할 수 있는지 알게
                되며, 3번에 걸쳐 심리전문가의 도움을 통해 현재 상황을 극복할 수
                있게 도움을 드립니다.
              </p>
              <p>
                Reborn I : 심층상담을 포함한 훨씬 다양한 프로그램들을 통해
                (내담자에 맞춤형으로 진행됩니다.) <br />
                6회 세션으로 다시 태어난 수준의 거듭나고 싶은 분들을 위해,
                개설된 프로그램입니다.
              </p>
              <p>
                Reborn I : 심층상담을 포함한 훨씬 다양한 프로그램들을 통해
                (내담자에 맞춤형으로 진행됩니다.) <br />
                8회 세션으로 마인드케어센터의 모든 상담에 관한 도움을 받아볼 수
                있는 프로그램입니다.
                <br />
                대부분의 내담자 분들의 실질적인 문제해결에 대해 충분한 정도의
                도움을 드릴 수 있어 현재의 상황개선 및 마음의 힘듬을 완전히
                극복하고 싶어하는 대부분의 내담자분들에게 추천드리는
                프로그램입니다. 마음의 힘듬에 대한 졸업프로그램이라 할 수
                있습니다.
              </p>
              <p>
                VIP : 12회 세션으로 최상의 상담환경과 최상의 상담을 원하시는
                분들을 위한 프로그램입니다. 원장님의 직접 1:1 세션을 포함해서,
                마인드케어센터의 시니어 상담사 분들 모두가 꼼꼼하게 성장을 위한
                단 한 분을 위해 맞춤형 프로그램을 제공합니다.
              </p>
              <p>
                Premium : 20~30회 경제적 여유가 있는 분들을 위한 프로그램입니다.
                현재의 마음의 힘듬과 고민을 극복하는 것은 물론, 행복한 삶이라는
                큰 주제에 대한 완벽한 답을 만들어드리는 프로그램입니다.
                마인드케어만이 만들어들 수 있는 프로그램이며, 즐거움, 새로운
                삶의 양식, 새로운 긍정비젼을 가질 수 있는 프로그램입니다.
              </p>
              <p>
                Lightning : 자기 자신만의 발전과 극복만이 아닌, 선한 영향력을 줄
                수 있는 심리코치가 될 수 있는 프로그램입니다. 현재
                마인드케어센터는 마인드케어센터만이 아닌 다양한 부분의
                심리코치들의 활동영역을 만들어나가고 있습니다. 심리에 대한
                정확한 이해와 그외의 분야에 대한 전문가들의 배움을 얻고, 발전을
                해가며, &#34;빛나는 존재&#34;, &#34;다른 사람의 잃어버린
                빛&#34;을 찾아줄 수 있는 존재로써 성장을 할 수 있는
                프로그램입니다.
              </p>
              <p>
                모든 프로그램의 신청은 신청 전 채널톡과
                https://pf.kakao.com/_aFQms/ 카카오 채널 프로그램을 통해 상담
                이후 결제해주시기 바랍니다.
              </p>
              <p>
                저희는 단순하게 &#39;상담&#39;을 판매하는 곳이 아닌, 내담자들의
                행복을 만들어드리며, 그에 맞는 진단과 해결을 위해 일을 하고
                있습니다.
                <br />
                <br />
                실질적으로 진단이나 상담이 필요없거나 저희와 맞지 않는 분들은
                처음부터 &#39;진단이 필요없으시다거나 저희와 맞지 않을 것&#39;
                이라고 말씀드릴 것입니다.
                <br />
                그런만큼 정식상담 문의는 매우 중요한 단계임을 인식해주시기
                바랍니다.
              </p> */}
            </div>
            <ReviewList nowCategory={detailInfo[0].title} />
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(Product);
