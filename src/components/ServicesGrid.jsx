import React from 'react';
import './ServicesGrid.css';

const services = [
  { title: 'IT Services', desc: 'Enterprise solutions, cloud migration, digital transformation.', href: '/IT services' },
  { title: 'Healthcare RCM', desc: 'Revenue Cycle Management and medical billing optimization.', href: '/RCM Services' },
  { title: 'Semiconductors', desc: 'Embedded systems, IoT solutions, and hardware consulting.', href: '/Semi conductors' },
  { title: 'IT Consulting', desc: 'Strategic business consulting and process optimization.', href: '/IT Consulting' }
];

export default function ServicesGrid() {
  return (
    <div className="services-grid" role="list" aria-label="Our services">
      {services.map((s) => (
        <article key={s.title} className="service-card" role="listitem">
          <div className="service-icon" aria-hidden="true">💡</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <a className="service-link" href={s.href} aria-label={`See details for ${s.title}`}>See details →</a>
        </article>
      ))}
    </div>
  );
}
