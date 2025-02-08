import { Star } from "lucide-react";
import { HighlightBadge } from "../highlight-badge";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "John Doe",
    message: "Really useful, i never lost orders now.",
    username: "@thejdhacker",
  },
  {
    name: "Jane Doe",
    message: "Really useful, i never lost orders now.",
    username: "@thejdhacker",
  },
  {
    name: "Mark Doe",
    message: "Really useful, i never lost orders now.",
    username: "@thejdhacker",
  },
  {
    name: "Timothy Doe",
    message: "Really useful, i never lost orders now.",
    username: "@thejdhacker",
  },
  {
    name: "Philip Doe",
    message: "Really useful, i never lost orders now.",
    username: "@thejdhacker",
  },
  {
    name: "Sam Doe",
    message: "Really useful, i never lost orders now.",
    username: "@thejdhacker",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(0, 3);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        props.className
      )}
    >
      {props.testimonials.map((testimonial, index) => (
        <div className="card" key={index}>
          <div className="">{testimonial.message}</div>
          <div className="flex items-center justify-between mt-5">
            <div className="font-medium tracking-tight leading-5">
              {testimonial.name}
            </div>
            <div className="tracking-tight text-primary/50 leading-5">
              {testimonial.username}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="px-4 md:px-0 container mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <HighlightBadge>Todos aprovam</HighlightBadge>
          </div>
          <h2 className="section-title">O que nossos clientes tem a dizer?</h2>
          <p className="section-subtitle">
            Para que se sinta confiante, já checa o que dizem sobre a llumonpay
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
