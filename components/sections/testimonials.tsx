"use client";

import React from "react";
import { HighlightBadge } from "../highlight-badge";
import { motion } from "framer-motion";

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
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
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
          </React.Fragment>
        ))}
      </motion.div>
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
        <div
          className="flex justify-center gap-6 
          [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={20}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={18}
          />
        </div>
      </div>
    </section>
  );
};
