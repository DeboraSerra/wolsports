import { AiOutlineClose } from 'react-icons/ai'

export const successMsg = (style, close) =>  {
  return (
    <>
      <AiOutlineClose className={ style.close } onClick={ close } />
      <p className={ style.p }><span>Obrigado!</span> Esse foi o primeiro passo para viver o esporte como nunca antes.</p>
    </>
  )
}