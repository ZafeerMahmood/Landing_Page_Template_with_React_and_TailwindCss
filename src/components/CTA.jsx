import {Button} from './Button'
import styles from '../style'
export const Cta = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-2xl`}>
      <div className="flex-1 flex flex-col ">
        <h2 className={`${styles.heading2} `}> Let{"'"}s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-md mt-5`}>Everthing you need to accept card payments and grow your business anywhere.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10` }>
        <Button text={'Get Started'} styles={''} />
      </div>
    </section>
  )
}
