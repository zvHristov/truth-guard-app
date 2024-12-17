
import dynamic from 'next/dynamic';
import { HomeComponent } from '@/components/page-components/HomePage';


export default async function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <h1>Article Truth Analyzer</h1>
      <HomeComponent />
    </div>
  )
}
