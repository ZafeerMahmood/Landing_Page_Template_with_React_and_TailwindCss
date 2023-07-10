

export const Button = ({styles,text}) => {

  return (
    <button type= 'button' className={` ${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-lg text-primary outline-none rounded-lg`}>{text}</button>
  )
  
}
Button.propTypes = {
  styles: " ",
  text: " "
}