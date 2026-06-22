import uptime from '../images/1.uptime.svg'
import fastHosting from '../images/2.fastHosting.svg'
import freeSSL from '../images/3.freeSSL.svg'
import support from '../images/4.support.svg'

const services = [
  { icon: uptime, title: '99.9% Uptime' },
  { icon: fastHosting, title: 'Blazing Fast Web Hosting' },
  { icon: freeSSL, title: 'Free SSL Certificates' },
  { icon: support, title: '24x7 Friendly Support' },
]

const description =
  'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'

function Services() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1456px] gap-x-8 gap-y-12 px-10 pb-16 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#FCE9EA]">
              <img src={service.icon} alt="" className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#1f2227]">
              {service.title}
            </h3>
            <p className="mt-3 max-w-[260px] text-[15px] leading-relaxed text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
