import Link from 'next/link';
import styles from './styles.module.scss';

import { CountryCardProps } from 'types/CountryTypes';

import { useCountry } from '@contexts/CountryContext';

export default function CountryCards() {
  const { countries } = useCountry();

  function showData(value: string | number): string | number {
    if (typeof value === 'string') {
      return value !== '' ? value : 'Unexistent';
    }

    return new Intl.NumberFormat().format(value);
  }

  return (
    <div className={styles.cardsContainer}>
      {countries.map(({ flag, name, capital, region, population }: CountryCardProps, key: number) => (
        <div key={key}>
          <div>
            <Link href={`/country/${name.toLowerCase()}`}>
              <a>
                <img src={flag} alt={name} title={name} />
              </a>
            </Link>
          </div>

          <div>
            <Link href={`/country/${name.toLowerCase()}`}>
              <a>
                <h3>{showData(name)}</h3>
              </a>
            </Link>

            <div>
              <div>
                Population: <span>{showData(population)}</span>
              </div>

              <div>
                Region: <span>{showData(region)}</span>
              </div>

              <div>
                Capital: <span>{showData(capital)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
