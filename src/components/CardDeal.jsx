import {card} from '../assets'
import styles,{layout} from '../style'
import {Button} from './Button'



export const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
          <p className={`${styles.paragraph} max-w-md mt-5`}>
            Arcu tortor, purus in mattis at sed integer facuibus. Aliquent quis aliquet eget mautis tortor quisque.
          </p>
        </h2>
        <Button styles={'mt-10'} text={'Get Started'}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  )
}
