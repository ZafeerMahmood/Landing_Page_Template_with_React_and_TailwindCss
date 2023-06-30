import {stats} from '../constants'
import style from '../style'
export const Stats = () => {
  return (
    <section className={`${style.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat)=>(
        <div className={` flex-1 flex justify-start items-center flex-row m-3`} key={stat.id}>
          <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leeading-[53px] leading-[43px]">{stat.value}</h4>
          <p className="text-gradient uppercase ml-3 font-poppins font-normal xs:text-[20px] text-[15px] xs:leeading-[26px] leading-[21px]">{stat.title}</p>
        </div>

      ))}
    </section>
  )
}
