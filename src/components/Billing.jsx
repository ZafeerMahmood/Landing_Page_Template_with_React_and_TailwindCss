import {apple,bill,google} from '../assets/'
import styles,{layout} from '../style'

export const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-full h-full relative z-20" />
        <div className="absolute z-10 -left-1/2 top-0 w-2/4 h-2/4 rounded-full white__gradient"></div>
        <div className="absolute z-0 -left-1/2 buttom-0 w-2/4 h-2/4 rounded-full pink__gradient"></div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" />billing & invoicing.</h2>
          <p className={`${styles.paragraph} max-w-md mt-5`}>
           Elit enim sed massa etiam. Mauris eu adipiscing ultricies leo integer malesuada nunc. 
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="google" className="w-32 h-11 object-contain mr-5 cursor-pointer" />
            <img src={google} alt="google" className="w-32 h-11 object-contain  cursor-pointer" />
          </div>
      </div>
    </section>
  )
}
