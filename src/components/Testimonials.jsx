import {feedback} from '../constants'
import styles from "../style";
import {FeedbackCard} from './FeedbackCard'
export const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id='clients' >
      {/* {TODO} */}
      <div className="absolute z-0 w-3/5 h-3/5 -right-2/4 rounded-full blue__gradient"></div>
      <div className='w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-10'>
        <h1 className={`${styles.heading2}`}>What people <br className='sm:block hidden'/> are saying about us</h1>
          <div className='w-full md:mt-0 mt-6 text-left max-w-md'>
            <p className={`${styles.paragraph}`}>
              Everything you need to accept card payments and grow your business anywhere.
            </p>
          </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-10'>
        {feedback.map((feedback,index) => (
          <FeedbackCard key={feedback.id} {...feedback} index={index} />
        ))}
      </div>
    </section>
  )
}
