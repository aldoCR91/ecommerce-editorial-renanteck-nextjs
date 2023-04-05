import React from 'react'

export default function Footer() {

    const dt = new Date();

  return (
    <footer className='flex bg-slate-400 text-white h-10 justify-center items-center shadow-inner'>
      <p>Copyright © { dt.getFullYear()} Editorial Renanteck</p>
    </footer>
  )
}
