import {clients} from '../constants'
import styles from "../style";

export const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
          <div className={`flex-1 ${styles.Center} sm:min-w-[192px] min-w-[120px] `} key={client.id}>
            <img src={client.logo} alt="client" className="sm:w-48 w-24 object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}
