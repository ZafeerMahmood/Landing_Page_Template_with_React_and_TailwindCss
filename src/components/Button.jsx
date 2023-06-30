
export const Button = ({styles , text}) => {
  return (
    <button type= 'button' className={` ${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none`}>{text}</button>
  )
}
