// import { Stage, Layer, Rect, Image } from 'react-konva';
import Style from './GeneratorPreview.module.css';

export default function GeneratorPreview({
  color,
  input,
  title,
}: {
  color?: string,
  input?: string,
  title?: string,
}) {
  return (
    <div className="w-[400px] h-[348px] relative" style={{
      background: color || 'linear-gradient(to right, #a986f8, #c882e7, #de80d5, #ed81c4, #f585b4)',
    }}>
      <img src="/logo.svg" className="w-20 mt-4 ml-5" />
      <div className={Style.title_container}>
        <div className={Style.title_text}>DOME</div>
      </div>
      <div className="absolute left-[90px] bottom-8 mx-auto w-[220px] h-9 bg-black">{input}</div>
    </div>
  )
  // return (
  //   <Stage width={400} height={348}>
  //     <Layer>
  //       {/* <Circle x={200} y={100} radius={50} fill="green" /> */}
  //       <Rect
  //         x={0}
  //         y={0}
  //         width={400}
  //         height={348}
  //         fill={color}
  //       />
  //     </Layer>
  //     <Layer>
  //       <Image x={22} y={15} width={80} height={13} image={logo} />
  //     </Layer>
  //   </Stage>
  // );
}
