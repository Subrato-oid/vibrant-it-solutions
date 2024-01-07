import * as React from 'react';

type ProcessProps = {};

const Process = ({}:ProcessProps) => (
    <section>
    <div className="process">
        <h2>
          <span className="head1">Our</span>
          <span className="head2">Process</span>
        </h2>
        <p>
          As a Co-founder, I’m impressed by the infinite potential of the
          Vibrant Team. It’s not just about tech, it’s about helping businesses
          and making them stand out from their competitors. That’s our goal.
        </p>
        <a href="#" className="button">Contact Now </a>
      </div>
      <div className="process-container">
        <div className="p-container">
          <div className="p-left">
            01
            <h2>Concept</h2>
          </div>
          <p>
            We begin by figuring out what you hope to achieve. Together, you and
            our team work closely to ensure that we're on the same page. We
            draft a strategy outlining how we'll implement your idea, making use
            of the latest technologies and savvy strategies.
          </p>
        </div>

        <div className="p-container">
          <div className="p-left">
            02
            <h2>Design</h2>
          </div>
          <p>
            In the design stage, ideas become real. We combine brainstorming,
            drawing, and the newest design tools to produce a blueprint that
            matches your brand identity and guarantees the best possible user
            experience.
          </p>
        </div>

        <div className="p-container">
          <div className="p-left">
            03
            <h2>Development</h2>
          </div>
          <p>
            We begin by figuring out what you hope to achieve. Together, you and
            our team work closely to ensure that we're on the same page. We
            draft a strategy outlining how we'll implement your idea, making use
            of the latest technologies and savvy strategies.
          </p>
        </div>
      </div>
    </section>
);

export default Process;