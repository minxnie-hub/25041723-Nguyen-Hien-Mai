import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="hand-note" lang="zh-Hans">走错路了</p>
      <h1>Trang này chưa có trong sổ.</h1>
      <Link className="button button-primary" to="/">
        <ArrowLeft aria-hidden="true" /> Về trang chủ
      </Link>
    </main>
  );
}
