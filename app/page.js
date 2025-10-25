'use client'   // zobrazenie len pre klienta
import BlogArticle from "@/components/BlogArticle";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BlogArticle />
    </>
  );
}
