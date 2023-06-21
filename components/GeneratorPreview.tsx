// import { Stage, Layer, Rect, Image } from 'react-konva';
import Style from './GeneratorPreview.module.css';
import  type { Member} from '../utils/types'

export default function GeneratorPreview({
  member,
  input,
  title,
}: {
  member?: Member,
  input?: string,
  title?: string,
}) {
  const inputHTML = input.replaceAll('i', `<img src="${member?.pic}">`)
  return (
    <div className="w-[400px] h-[348px] relative" style={{
      background: member?.color || 'linear-gradient(to right, #a986f8, #c882e7, #de80d5, #ed81c4, #f585b4)',
    }}>
      <img src="/logo.svg" className="w-20 mt-4 ml-5" />
      <div className={Style.title_container}>
        <div className={Style.title_text}>{ title || 'DOME' }</div>
      </div>
      <div className="absolute left-[90px] bottom-8 mx-auto w-[220px] h-9 bg-black text-center uppercase">
        <div className={Style.input_text_container} dangerouslySetInnerHTML={{__html: inputHTML}} />
      </div>
    </div>
  )
}
