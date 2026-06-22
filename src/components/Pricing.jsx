import { useState } from 'react'

const TABS = ['Basic', 'Premium']

function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [activeTab, setActiveTab] = useState('Basic')

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1024px] px-6 pt-20 pb-10">
        {/* Heading */}
        <h2 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-[#0b0b0b] sm:text-5xl">
          Ready to get started with
          <br />
          Lemon Wares?
        </h2>
        <p className="mt-5 text-center text-xl text-[#1f2227]">
          Choose the package that suits you
        </p>

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="text-lg font-medium text-[#1f2227]">Monthly</span>

          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly((v) => !v)}
            className="relative inline-flex h-9 w-[68px] items-center rounded-full bg-[#C8102E] transition-colors"
          >
            <span
              className={`inline-block h-7 w-7 transform rounded-full bg-white shadow transition-transform duration-200 ${
                yearly ? 'translate-x-[37px]' : 'translate-x-1'
              }`}
            />
          </button>

          <span className="text-lg font-medium text-[#1f2227]">Yearly</span>
          <span className="rounded-md bg-[#FCE98A] px-2 py-1 text-xs font-semibold text-[#1f2227]">
            20% discount
          </span>
        </div>

        {/* Tabs */}
        <div className="mt-12 grid grid-cols-2">
          {TABS.map((tab) => {
            const active = activeTab === tab
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative pb-4 text-2xl font-bold transition-colors ${
                  active ? 'text-[#0b0b0b]' : 'text-[#1f2227]'
                }`}
              >
                {tab}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full ${
                    active ? 'bg-[#C8102E]' : 'bg-gray-200'
                  }`}
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
