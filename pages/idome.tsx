import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import GeneratorPreview from '../components/GeneratorPreview'
import IdomeStyle from '../styles/Idome.module.css';

const IdomePage: NextPage = () => {
  const members = [
    {
      key: 'abe',
      src: '/idome/img_abe-small.webp',
      color: '#6bba41',
    },
    {
      key: 'iwamoto',
      src: '/idome/img_iwamoto-small.webp',
      color: '#feea45',
    },
    {
      key: 'fukazawa',
      src: '/idome/img_fukazawa-small.webp',
      color: '#7f52e5',
    },
    {
      key: 'mukai',
      src: '/idome/img_mukai-small.webp',
      color: '#ff842b',
    },
    {
      key: 'raul',
      src: '/idome/img_raul-small.webp',
      color: '#fff',
    },
    {
      key: 'watanabe',
      src: '/idome/img_watanabe-small.webp',
      color: '#459be2',
    },
    {
      key: 'miyadate',
      src: '/idome/img_miyadate-small.webp',
      color: '#fc1f1f',
    },
    {
      key: 'meguro',
      src: '/idome/img_meguro-small.webp',
      color: '#444',
    },
    {
      key: 'sakuma',
      src: '/idome/img_sakuma-small.webp',
      color: '#ed5193',
    },
  ];

  const [member, setMember] = useState<{ key?: string, src?: string, color?: string }>({});
  const handleChangeMember = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    setMember(members.find(v => v.key === key));
  };

  return (
    <>
      <Head>
        <title>Snow Man-3rd ALBUM「i DO ME｣ #挑め自分らしさに</title>
        <meta
          property="og:image"
          content="https://snowman-logo.vercel.app/og-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://snowman-logo.vercel.app/og-image.jpg"
        />
      </Head>
      <main className='idome-page main-container flex justify-center items-center'>
        <div className={IdomeStyle.idome_word}></div>
        <div className='fixed top-0 left-0 w-full h-full bg-dark' style={{ height: 'calc(100vh - 140px)' }}>
          <div className={IdomeStyle.bg_object}></div>
          <div className={IdomeStyle.bg_text}></div>
        </div>
        <div className='p-8 bg-dark/90 relative w-4/5 my-8 mx-12 rounded-2xl text-slate-50'>
          <div className='flex items-center justify-center'>
            <div className='generator-ops flex flex-col items-center justify-center gap-5 w-1/2'>
              <div className={IdomeStyle.generator_hashtag}>
                <div className={IdomeStyle.generator_hashtag_inner}>
                  <img src={'/idome/text_hashtag-generator.svg'}
                    alt="#アイを伝えるオリジナルジャケット" width="231" height="14" loading="lazy" />
                </div>
              </div>
              <div className={IdomeStyle.generator_label}>メンバーカラーを選ぼう</div>
              <div className={IdomeStyle.generator_member_list}>
                <div className="flex flex-wrap gap-6">
                  {members.map((mem, index) => (
                    <div key={index} className={'w-20 h-20 ' + IdomeStyle.generator_member_item}>
                      <input
                        id={mem.key}
                        type="radio"
                        value={mem.key}
                        onChange={handleChangeMember}
                        className='hidden'
                        checked={member && member.key === mem.key}
                      />
                      <label
                        htmlFor={mem.key}
                        className='block relative cursor-pointer w-20 h-20'
                        style={{ "--checked-color": mem.color } as React.CSSProperties}
                      >
                        <img src={mem.src} />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className={IdomeStyle.generator_label}>名前を入力しよう</div>
              <input
                className={IdomeStyle.generator_input}
                type="text" required
                minLength={1} maxLength={15} size={30}
                placeholder='英字15文字以内で入力してください' />
            </div>
            <div className='canvas-preview w-1/2 flex justify-center items-center'>
              <GeneratorPreview color={member?.color}/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default IdomePage
