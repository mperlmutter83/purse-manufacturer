/* eslint-disable @next/next/no-img-element -- canvas poster + loader logo are swapped/animated by the engine */
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { SITE } from './config';
import frames from './frames.json';
import MotionEngine from './MotionEngine';
import './motion.css';

const html = (s: string) => ({ __html: s });

/* Runs during HTML parse (first load only): picks motion vs static before the
   first paint so the loader shows immediately, and falls back to the static
   hero if the engine never starts (e.g. the JS bundle failed to load). */
const BOOT = `(function(){var r=document.currentScript&&document.currentScript.closest('.pm-motion');if(!r)return;
var m=window.matchMedia(${JSON.stringify('(min-width: 768px) and (prefers-reduced-motion: no-preference)')}).matches;
r.classList.add(m?'mode-motion':'mode-static');if(m)r.classList.add('is-loading');
setTimeout(function(){if(window.__pmEngine)return;r.classList.remove('is-loading','mode-motion');r.classList.add('mode-static');
var p=r.querySelector('.stage-poster');if(p&&!p.getAttribute('src'))p.src=p.getAttribute('data-poster');},15000);})();`;

export default function MotionHome() {
  const { colors: c, look, fonts, brand, hero, about, services, cta } = SITE;
  const vars = {
    '--primary': c.primary,
    '--on-primary': c.onPrimary,
    '--accent': c.accent,
    '--ink': c.ink,
    '--text': c.text,
    '--muted': c.muted,
    '--tint-strength': String(look.tintStrength),
    '--tint-blend': look.tintBlend,
    '--vignette': String(look.vignette),
    '--grain': String(look.grain),
    '--font-display': fonts.display,
    '--font-body': fonts.body,
    '--em-style': fonts.emphasis,
  } as CSSProperties;

  return (
    <div className="pm-motion" style={vars} suppressHydrationWarning>
      {/* Injected as markup so it runs on a full page load but stays inert on
          client-side navigation (the engine handles that case itself). */}
      <div hidden dangerouslySetInnerHTML={html(`<script>${BOOT}</script>`)} />

      <div id="story">
        {/* Pinned stage: canvas frame sequence + cinematic layers */}
        <div className="stage" aria-hidden="true">
          <canvas className="stage-canvas" />
          <img className="stage-poster" alt="" decoding="async" data-poster={frames.poster} />
          <div className="fx fx-tint" />
          <div className="fx fx-shade" />
          <div className="fx fx-vignette" />
          <div className="stage-progress">
            <span />
          </div>
        </div>

        <div className="story-content">
          <section id="top" className="hero">
            <div className="hero-inner">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="hero-title" dangerouslySetInnerHTML={html(hero.title)} />
              <p className="hero-sub">{hero.sub}</p>
              <div className="hero-ctas">
                <Link className="btn btn-primary" href={brand.ctaUrl}>
                  {hero.ctaPrimary}
                </Link>
                <a className="btn btn-ghost" href="#services">
                  {hero.ctaSecondary}
                </a>
              </div>
            </div>
            <p className="hero-caption">{hero.caption}</p>
            <div className="scroll-cue">
              <span>{hero.scrollCue}</span>
              <i />
            </div>
          </section>

          <section id="about" className="panel panel-left">
            <article className="glass card reveal">
              <p className="eyebrow">{about.eyebrow}</p>
              <h2 dangerouslySetInnerHTML={html(about.title)} />
              <div className="about-body">
                {about.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <dl className="stats">
                {about.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <dt>{s.value}</dt>
                    <dd>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </section>

          <section id="services" className="panel panel-right">
            <article className="glass card card-wide reveal">
              <p className="eyebrow">{services.eyebrow}</p>
              <h2 dangerouslySetInnerHTML={html(services.title)} />
              <p className="lede">{services.intro}</p>
              <ol className="services-grid">
                {services.items.map((item, i) => (
                  <li className="service" key={item.name}>
                    <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </li>
                ))}
              </ol>
              <p className="more-title">{services.moreTitle}</p>
              <ul className="services-more">
                {services.more.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section id="contact" className="panel panel-center">
            <article className="glass card card-cta reveal">
              <p className="eyebrow">{cta.eyebrow}</p>
              <h2 dangerouslySetInnerHTML={html(cta.title)} />
              <p className="lede">{cta.body}</p>
              <div className="cta-actions">
                <Link className="btn btn-primary btn-lg" href={brand.ctaUrl}>
                  {cta.primary}
                </Link>
                <p className="cta-phone">
                  {cta.secondaryPrefix} <a href={brand.phoneHref}>{brand.phone}</a>
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>

      {/* Preloader: shown (motion mode only) until every frame is decoded */}
      <div className="loader" role="status" aria-live="polite">
        <div className="loader-inner">
          <img className="loader-logo" src={brand.logoFull} alt={brand.name} />
          <div className="loader-bar">
            <span />
          </div>
          <div className="loader-label">
            {SITE.loader} <b className="loader-pct">0%</b>
          </div>
        </div>
      </div>

      <div className="grain" aria-hidden="true" />
      <MotionEngine />
    </div>
  );
}
