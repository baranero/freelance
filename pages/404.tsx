// pages/404.js

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='text-center'>
      <h1>404 - Strona Nie Znaleziona</h1>
      <p >
        Ups! Strona, którą próbujesz odwiedzić, nie istnieje.
      </p>
      <p>
        Może chcesz wrócić do naszej strony głównej lub skorzystać z wyszukiwarki?
      </p>
      <Link className='' href="/">
        Powrót do <span className='text-accent font-bold'>strony głównej</span>
      </Link>
      {/* <div>
        <h2>Popularne strony:</h2>
        <ul>
          <li>
            <Link href="/about">
              O nas
            </Link>
          </li>
          <li>
            <Link href="/services">
              Usługi
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
