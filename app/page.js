"use client"; // zobrazenie len pre klienta
import BlogList from "@/components/BlogList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
    </>
  );
}
