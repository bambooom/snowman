// https://nextjs.org/docs/advanced-features/custom-app
// Next.js uses the App component to initialize pages. You can override it and control the page initialization and:
// - Persist layouts between page changes
// - Keeping state when navigating pages
// - Inject additional data into pages
// - Add global CSS

import type { AppProps } from 'next/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <footer className="sticky left-0 bottom-0 p-6 flex items-center justify-center flex-col sm:flex-row gap-4 text-white/80 sm:p-12 bg-gradient-to-b from-transparent to-black">
        <div>Made by a Snow Man Fan
          <span className='ml-4'>© <a className='underline decoration-pink-500' href="https://zhuzi.dev/" target='_blank'>Zhuzi</a></span>
        </div>
        <a href="https://www.buymeacoffee.com/zhuzi" target="_blank">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style={{
            height: '35px !important',
            width: '120px !important',
          }} />
        </a>
      </footer>
    </>
  )
}
