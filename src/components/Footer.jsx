import lemonLogo from '../images/lemonLogo.svg'

const columns = [
  {
    title: 'Service',
    links: ['Domain', 'Shared Hosting', 'Cloud Hosting', 'Private Hosting'],
  },
  {
    title: 'Hosting',
    links: [
      'Cheap Hosting',
      'Hosting Wordpress',
      'Email Hosting',
      'Hosting Unlimited',
    ],
  },
  {
    title: 'Company',
    links: ['About', 'Career', 'Contact Us'],
  },
  {
    title: 'Help',
    links: ['FAQ', 'Help support'],
  },
]

function Footer() {
  return (
    <footer className="w-full bg-[#B30D1F] text-white">
      <div className="mx-auto max-w-300 px-10 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <img
              src={lemonLogo}
              alt="LemonWares"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-[15px] leading-loose text-white/85">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna,
              porttitor rhoncus dolor purus non enim praesent elem
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[17px] font-bold">{col.title}</h3>
              <ul className="mt-6 space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-white/85 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p className="mt-16 flex items-center gap-1.5 text-[15px] text-white/90">
          Built by Jeremiah with
          <span className="text-white">&hearts;</span>
          in Lagos. Copyright 2026
        </p>
      </div>
    </footer>
  )
}

export default Footer
