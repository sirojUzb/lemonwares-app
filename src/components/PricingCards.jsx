const features = [
  '2GB SSD',
  '10GB Bandwidth',
  '15 Email Accounts',
  'Unlimited Database',
  '4 Subdomains',
  '1 Parked Domain',
  '2 Websites',
  'Free SSL',
  'Softaculous',
]

const plans = [
  { name: 'Starter', price: '$2.80' },
  { name: 'Standard', price: '$4.20' },
  { name: 'Suprem', price: '$7.00' },
]

const description =
  'with all your customers via all conversation channels in one central dashboard.'

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-[#1f2227]"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10l4 4 8-9" />
    </svg>
  )
}

function PricingCards() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 pb-24 pt-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]"
          >
            {/* Title + description */}
            <h3 className="text-2xl font-bold text-[#1f2227]">{plan.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              {description}
            </p>

            {/* Price */}
            <div className="mt-6">
              <span className="text-5xl font-extrabold tracking-tight text-[#1f2227]">
                {plan.price}
              </span>
              <p className="mt-1 text-sm text-gray-500">Per month</p>
            </div>

            {/* Button */}
            <button
              type="button"
              className="mt-7 w-full rounded-lg border border-gray-800 py-3.5 text-[15px] font-semibold text-[#1f2227] transition-colors hover:bg-[#1f2227] hover:text-white"
            >
              Choose this Plan
            </button>

            {/* Features */}
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[15px] text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingCards
