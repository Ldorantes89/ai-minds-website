import { type ReactNode } from "react";
import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-4 sm:pt-48">
      <Container>
        <Reveal>
          <div className="flex max-w-3xl flex-col gap-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="display-h1 text-balance text-ink-primary">{title}</h1>
            <p className="body-lg max-w-2xl text-pretty">{description}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
