import {
  getDiscount,
  getFirstProductName,
  isPositive,
} from "@/lib/demo";

const products = ["Cuaderno", "Lápiz", "Regla"];

export default function Home() {
  return (
    <main className="container">
      <p className="eyebrow">Proyecto de ejemplo</p>
      <h1>Next.js + Sonar</h1>
      <p>
        Una app mínima con algunos defectos lógicos intencionados para comprobar
        qué detecta el análisis estático.
      </p>

      <section aria-labelledby="examples-title">
        <h2 id="examples-title">Resultados de ejemplo</h2>
        <ul>
          <li>
            Descuento para tipo VIP: {getDiscount("vip") * 100}%
          </li>
          <li>
            ¿Cero es positivo?: {isPositive(0) ? "Sí" : "No"}
          </li>
          <li>Primer producto: {getFirstProductName(products)}</li>
        </ul>
      </section>

      <p className="hint">
        Revisa <code>lib/sonar-bugs.ts</code> para localizar los diez casos
        sembrados.
      </p>
    </main>
  );
}
