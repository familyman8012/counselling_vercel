import React, { useEffect } from "react";
import { useRouter } from "next/router";
import QuillEditor from "../../components/bbs/QuillEditor";
import { useSession } from "next-auth/client";

function Bbswrite() {
  // session
  const [session] = useSession();
  //useRouter
  const router = useRouter();
  const { category, p_id } = router.query;

  useEffect(() => {
    if (session === null || category === undefined) {
      router.back();
    }
  }, []);
  if (session === null || category === undefined) {
    return <div></div>;
  } else {
    return <QuillEditor category={category} p_id={p_id} />;
  }
}

export default Bbswrite;
