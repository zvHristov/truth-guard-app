  'use client';
import dynamic from 'next/dynamic';
const HomeComponent = dynamic(() => import('../components/components-pages/home-page/HomePage'), { ssr: false });


export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <h1>Article Truth Analyzer</h1>
      <HomeComponent />
    </div>
  )
}
