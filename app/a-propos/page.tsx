import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { team, site } from "@/lib/content";

export const metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire des Hysterical Ladies, leur équipe et leur cabaret musical Le Catalogue des Angoisses Sexuelles.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-ink/10 bg-paper-deep section">
        <div className="mx-auto max-w-7xl">
          <p className="catalog-label">N° 01 — Le Spectacle</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold tracking-tightest leading-[1.05] sm:text-6xl lg:text-7xl">
            Le Catalogue des Angoisses Sexuelles
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl italic text-ink-soft sm:text-2xl">
            Un cabaret musical explorant les éveils et escapades sexuelles de trois
            «&nbsp;filles hystériques&nbsp;».
          </p>
        </div>
      </section>

      {/* Synopsis */}
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper-deep">
            <Image
              src="/images/about-hero.png"
              alt="Affiche du spectacle Le Catalogue des Angoisses Sexuelles"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-base leading-relaxed text-ink-soft">
              À l'instar de <em>Monty Python</em>, nous nous lançons dans une quête. Une quête
              au nom des femmes du monde entier pour répondre à l'une des grandes questions
              existentielles&nbsp;: <strong className="text-ink">Suis-je sexuellement normale&nbsp;?</strong>
            </p>
            <div className="rule-carmine" />
            <p className="text-base leading-relaxed text-ink-soft">
              Avec des morceaux originaux inspirés des Andrew Sisters, nous voyageons à
              travers des chapitres hilarants qui reflètent nos propres parcours
              d'anxiétés sexuelles, de répression, et même de libération&nbsp;!
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Alors embarquez avec nous, tandis que nous ouvrons notre bible de
              blasphèmes et que nous vous racontons une petite histoire…
            </p>

            <a
              href={site.ticketsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-10"
            >
              Réserver vos places
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-paper-deep">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <p className="catalog-label">N° 02 — Notre histoire</p>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tightest leading-tight sm:text-5xl">
              Trois amies, un après-midi pluvieux.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Un après-midi pluvieux, trois amies se sont réfugiées dans un café et se sont
              installées pour discuter, débattre et critiquer leur vie amoureuse. Après
              plusieurs tours de «&nbsp;Est-ce que c'est moi&nbsp;?&nbsp;», «&nbsp;Oh, toi
              aussi tu as ce poil rebelle là&nbsp;?&nbsp;», «&nbsp;Est-ce que ta grimace
              quand tu jouis est aussi bizarre que la mienne&nbsp;?&nbsp;», il est vite
              devenu évident à quel point nos angoisses sexuelles se recoupaient, malgré nos
              différences sexuelles, culturelles et religieuses.
            </p>
            <p>
              Nous nous sommes également demandé comment les femmes à travers l'histoire
              avaient affronté les mêmes questions, surtout à une époque où toute pensée
              exprimée pouvait suffire à qualifier une femme d'«&nbsp;hystérique&nbsp;».
            </p>
            <p>
              C'est ainsi qu'une idée de spectacle a commencé à germer. Notre ambition&nbsp;:{" "}
              <strong className="text-ink">normaliser l'anormal&nbsp;!</strong> En partageant
              nos propres angoisses sexuelles, nous espérions mettre en lumière des
              problèmes auxquels toutes les femmes font face. La vie est bien trop courte
              pour s'inquiéter de la taille de son vagin&nbsp;!
            </p>
            <p>
              Nous avons eu l'honneur de collaborer avec le compositeur reconnu{" "}
              <strong className="text-ink">Patrice Peyrieras</strong>, qui a sublimé nos
              paroles grâce à son génie musical.
            </p>
            <p>
              <em>Le Catalogue des Angoisses Sexuelles</em> est une pièce unique de théâtre
              posée sur une partition originale inspirée du jazz des années 40. Notre
              utilisation de la musique swing traditionnelle fait écho à la féminité
              hégémonique, en jouant sur le contraste entre des harmonies impeccables et des
              blagues bien décalées.
            </p>
            <p>
              Alors accrochez-vous, et pourquoi pas… attachez-vous aussi, pour un périple
              endiablé.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <p className="catalog-label">N° 03 — L'équipe</p>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tightest leading-tight sm:text-5xl">
            Notre équipe
          </h2>

          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member, i) => (
              <li key={member.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <p className="mt-4 font-sans text-[0.65rem] uppercase tracking-catalog text-brass">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium">{member.name}</h3>
                <p className="mt-0.5 font-display text-base italic text-ink-soft">
                  {member.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-paper-deep text-ink">
        <div className="mx-auto max-w-3xl text-center">
          <p className="catalog-label justify-center">
            Prochaine étape
          </p>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tightest leading-tight sm:text-5xl">
            Voir le spectacle.
          </h2>
          <Link href="/a-venir" className="btn-primary mt-10">
            Dates de tournée
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
