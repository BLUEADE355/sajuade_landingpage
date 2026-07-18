// middle.jsx — Report Preview, Launch Offer, Why Different, Social Proof, What You Get

// ============= REPORT PREVIEW =============
window.ReportPreview = function ReportPreview() {
  const mobile = useMobile();
  const railRef = React.useRef(null);
  const [active, setActive] = useState(0);
  const pages = [
    { kind: 'pillars', header: 'Birth Chart', eyebrow: '01 · Natal Chart', title: 'The Four Pillars', foot: 'The Four Pillars', page: '04 / 48' },
    { kind: 'balance', header: 'Elements & Ten Gods', eyebrow: '01 · Natal Chart', title: 'Element & Ten Gods Balance', foot: 'Element & Ten Gods Balance', page: '05 / 48' },
    { kind: 'wealth', header: 'Step 4', eyebrow: 'Step 4', title: 'Wealth Fortune Analysis', foot: 'Best Periods for Wealth', page: '10 / 48' },
    { kind: 'career', header: 'Step 5', eyebrow: 'Step 5', title: 'Career Fortune Analysis', foot: 'Career Fortune Flow', page: '19 / 48' },
    { kind: 'love', header: 'Step 6', eyebrow: 'Step 6', title: 'Love Fortune Analysis', foot: 'Love Fortune Flow Analysis', page: '26 / 48' },
    { kind: 'luck', header: 'Grand Luck', eyebrow: 'Timeline', title: 'Grand Luck Cycles', foot: 'Grand Luck Cycles', page: '34 / 48' },
    { kind: 'annual', header: 'Annual Luck', eyebrow: 'Year-by-Year Flow', title: 'Annual Fortune Highlights', foot: 'Annual Fortune Highlights', page: '43 / 48' },
  ];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const updateActive = () => {
      const cards = Array.from(rail.querySelectorAll('.report-preview-card'));
      const railLeft = rail.getBoundingClientRect().left;
      let nextIndex = 0;
      let nextDistance = Infinity;
      cards.forEach((card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - railLeft);
        if (distance < nextDistance) {
          nextDistance = distance;
          nextIndex = index;
        }
      });
      setActive(nextIndex);
    };
    updateActive();
    rail.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      rail.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  const scrollToPage = (index) => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = rail.querySelectorAll('.report-preview-card');
    const target = cards[Math.max(0, Math.min(pages.length - 1, index))];
    if (target) target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  return (
    <section className="section section--cream" style={{paddingLeft: 0, paddingRight: 0}}>
      <div className="section-inner" style={{textAlign: 'center', padding: mobile ? '0 24px' : '0 80px', marginBottom: 48}}>
        <span className="kicker">The Report</span>
        <h2 className="h-jumbo" style={{marginTop: 16, marginBottom: 16, color: 'var(--ink)'}}>
          What's inside your reading
        </h2>
        <p className="lead" style={{maxWidth: 560, margin: '0 auto'}}>
          15+ pages. Built around what's actually on your mind.
        </p>
      </div>

      <div className="report-preview-shell">
        {!mobile && (
          <button className="report-preview-nav report-preview-nav--prev" type="button" aria-label="Previous preview" onClick={() => scrollToPage(active - 1)}>
            ‹
          </button>
        )}
        <div className="report-preview-rail" ref={railRef}>
          {pages.map((page) => <ReportPreviewCard key={page.page} page={page} />)}
        </div>
        {!mobile && (
          <button className="report-preview-nav report-preview-nav--next" type="button" aria-label="Next preview" onClick={() => scrollToPage(active + 1)}>
            ›
          </button>
        )}
        <div className="report-preview-dots" aria-hidden="true">
          {pages.map((page, index) => (
            <button key={page.page} type="button" className={`report-preview-dot ${active === index ? 'active' : ''}`} onClick={() => scrollToPage(index)} />
          ))}
        </div>
      </div>

      <div className="section-inner" style={{padding: mobile ? '40px 24px 0' : '40px 80px 0'}}>
        <div style={{
          background: 'var(--ink)', color: '#fff',
          padding: mobile ? '28px 24px' : '36px 48px', borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 24,
          maxWidth: 880, margin: '0 auto',
        }}>
          <div style={{
            flex: '0 0 auto', width: 48, height: 48, borderRadius: '50%',
            background: 'rgba(203,162,88,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, color: 'var(--gold)',
          }}>★</div>
          <div>
            <div style={{fontFamily: 'var(--font-serif)', fontSize: mobile ? 18 : 22, fontWeight: 500, marginBottom: 6}}>
              What you’ve been dying to know.
            </div>
            <div style={{fontSize: 15, color: 'rgba(255,255,255,0.7)'}}>
              It analyzes each area of your fortune in detail, along with the overall flow of your life and the years that require extra care.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ReportPreviewCard({ page }) {
  return (
    <article className="report-preview-card">
      <div className="report-mini-page">
        <div className="report-page-topline" />
        <header className="report-page-header"><div>FATEADE</div><span>{page.header}</span></header>
        <div className="report-page-body">
          <div className="report-section-heading">
            <div className="report-eyebrow">{page.eyebrow}</div>
            <h3>{page.title}</h3>
          </div>
          <ReportPreviewBody kind={page.kind} />
        </div>
      </div>
      <div className="report-preview-foot">
        <span>{page.foot}</span>
        <span>{page.page}</span>
      </div>
    </article>
  );
}

function ReportPreviewBody({ kind }) {
  if (kind === 'pillars') return <PillarsPreview />;
  if (kind === 'balance') return <BalancePreview />;
  if (kind === 'wealth') return <StagePreview type="wealth" />;
  if (kind === 'career') return <StagePreview type="career" />;
  if (kind === 'love') return <StagePreview type="love" />;
  if (kind === 'luck') return <LuckPreview />;
  return <AnnualPreview />;
}

function PillarsPreview() {
  return (
    <>
      <div className="report-pillar-grid">
        {['Year', 'Month', 'Day Master', 'Hour'].map((label) => (
          <div className={`report-pillar-card ${label === 'Day Master' ? 'is-day' : ''}`} key={label}>
            <div className="report-pillar-label">{label}</div>
            <div className="report-pillar-stem"><MaskedSymbol /></div>
            <div className="report-pillar-branch"><MaskedSymbol /></div>
            <div className="report-pillar-full"><MaskedSmall /><br/><MaskedSmall gold /></div>
          </div>
        ))}
      </div>
      <div className="report-minor-heading">Key Facts</div>
      <div className="report-fact-grid">
        {['Birth', 'Day Master', 'Chart Structure', 'Useful Element', 'Spirit Stars', 'Grand Luck Start'].map((label, index) => (
          <div className="report-fact" key={label}>
            <div className="report-fact-label">{label}</div>
            <Line gold={index === 1 || index === 3} />
            <Line size={index % 2 ? 'short' : 'mid'} />
          </div>
        ))}
      </div>
    </>
  );
}

function BalancePreview() {
  const elements = [
    ['Wood', '木', 'var(--green)', 38],
    ['Fire', '火', 'var(--korean-red)', 52],
    ['Earth', '土', '#b5956a', 68],
    ['Metal', '金', '#6b7a82', 26],
    ['Water', '水', '#1d3461', 42],
  ];
  return (
    <>
      <div className="report-element-panel">
        <div className="report-panel-head">
          <div>
            <div className="report-minor-heading">Five Element Balance</div>
            <Line size="long" />
          </div>
          <div className="report-summary-chips"><span>Total</span><span>Dominant</span><span>Absent</span></div>
        </div>
        <div className="report-element-grid">
          {elements.map(([name, glyph, color, width]) => (
            <div className="report-element-card" style={{'--element-color': color}} key={name}>
              <div><div className="report-element-glyph">{glyph}</div><div className="report-element-name">{name}</div></div>
              <div className="report-element-count"><MaskedNumber /></div>
              <div className="report-track"><div className="report-fill" style={{width: `${width}%`}} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="report-ten-gods-panel">
        <div className="report-minor-heading">Ten Gods Balance</div>
        <div className="report-ten-gods-grid">
          {['比', '食', '財', '官', '印'].map((god, index) => (
            <div className="report-god-card" key={god}><strong>{god}</strong><span><Line size={index === 2 ? 'short' : 'mid'} gold={index === 3} /></span></div>
          ))}
        </div>
      </div>
    </>
  );
}

function StagePreview({ type }) {
  const data = {
    wealth: [
      ['4-3', 'Wealth Loss Risks and Vulnerable Patterns'],
      ['4-4', 'Best Periods for Wealth'],
      ['4-5', 'Wealth Accumulation Strategy'],
    ],
    career: [
      ['5-3', 'Best Career Direction'],
      ['5-4', 'Career Fortune Flow'],
      ['5-5', 'Career Success Strategy'],
    ],
    love: [
      ['6-5', 'Periods of Strong Romantic Energy'],
      ['6-6', 'Love Fortune Flow Analysis'],
    ],
  }[type];
  return (
    <div className="report-stage-stack">
      {data.map(([num, title], index) => (
        <div className={`report-subsection-card ${index === 1 ? 'featured' : ''}`} key={num}>
          <div className="report-subsection-kicker">{num}</div>
          <h4>{title}</h4>
          {index === 1 ? <FlowRow /> : <><Line size={index ? 'mid' : 'long'} gold={index === 2} /><Line size={index ? 'long' : 'mid'} /></>}
        </div>
      ))}
      <div className="report-mini-note"><Line size="long" /><Line size="mid" gold={type === 'love'} /></div>
    </div>
  );
}

function FlowRow() {
  return (
    <div className="report-flow-row">
      {[0, 1, 2, 3, 4].map((index) => (
        <div className={`report-flow-cell ${index === 0 || index === 3 ? 'dark' : ''}`} key={index}>
          <Line gold={index === 0 || index === 3} />
          <Line size={index % 2 ? 'short' : 'mid'} />
        </div>
      ))}
    </div>
  );
}

function LuckPreview() {
  const cycles = [
    ['Cycle 1', 'Ages 2-11', '2002-2011', ['money', 'career']],
    ['Cycle 2', 'Ages 12-21', '2012-2021', ['love', 'caution']],
    ['Cycle 3', 'Ages 22-31', '2022-2031', ['career', 'money', 'love']],
    ['Cycle 4', 'Ages 32-41', '2032-2041', ['money', 'career']],
  ];
  return (
    <div className="report-luck-grid">
      {cycles.map(([cycle, ages, years, tags], index) => (
        <div className={`report-luck-card ${index === 2 ? 'current' : ''}`} key={cycle}>
          <div className="report-luck-head">
            <div className="report-luck-pillar"><MaskedSymbol /></div>
            <div><div className="report-luck-order">{cycle}</div><h4>{ages}</h4><p>{years}</p></div>
          </div>
          <TagRow tags={tags} />
          <div className="report-luck-body"><Line size="long" gold={index === 2} /><Line size={index === 1 ? 'short' : 'mid'} /></div>
        </div>
      ))}
    </div>
  );
}

function AnnualPreview() {
  return (
    <div className="report-annual-grid">
      {[2022, 2023, 2024, 2025, 2026, 2027].map((year, index) => (
        <div className="report-annual-card" key={year}>
          <div className="report-annual-top"><h4>{year}</h4><span className="report-annual-glyph"><MaskedSymbol /></span></div>
          <div className="report-annual-age">Age {22 + index}</div>
          <TagRow tags={index % 3 === 0 ? ['career', 'caution'] : index % 3 === 1 ? ['love', 'caution'] : ['money', 'career']} />
          <div className="report-annual-body"><Line size={index === 4 ? 'mid' : 'long'} gold={index === 2} /><Line size={index % 2 ? 'short' : 'mid'} /></div>
        </div>
      ))}
    </div>
  );
}

function TagRow({ tags }) {
  return <div className="report-tag-row">{tags.map((tag) => <span className={`report-tag ${tag}`} key={tag}>{tag}</span>)}</div>;
}

function Line({ size='long', gold=false }) {
  return <span className={`report-line ${size} ${gold ? 'gold' : ''}`} />;
}

function MaskedSymbol() {
  return <span className="report-masked-symbol" />;
}

function MaskedSmall({ gold=false }) {
  return <span className={`report-masked-small ${gold ? 'gold' : ''}`} />;
}

function MaskedNumber() {
  return <span className="report-masked-number" />;
}

// ============= LAUNCH OFFER =============
window.LaunchOffer = function LaunchOffer() {
  const mobile = useMobile();
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  function getTimeLeft() {
    const target = Date.now() + 7 * 24 * 60 * 60 * 1000;
    let t = parseInt(localStorage.getItem('fateade-launch-end') || '0', 10);
    if (!t || t < Date.now()) {
      t = target;
      localStorage.setItem('fateade-launch-end', String(t));
    }
    const diff = Math.max(0, t - Date.now());
    const days = Math.floor(diff / (24*60*60*1000));
    const hours = Math.floor((diff / (60*60*1000)) % 24);
    const mins = Math.floor((diff / (60*1000)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    return { days, hours, mins, secs };
  }

  return (
    <section style={{
      background: 'linear-gradient(180deg, #cba258 0%, #b88d44 100%)',
      color: 'var(--ink-deep)',
      padding: mobile ? '64px 24px' : '80px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="section-inner" style={{textAlign: 'center', position: 'relative', maxWidth: 720}}>
        <span className="kicker" style={{color: 'var(--ink-deep)', opacity: 0.7}}>
          Launch Special · 50% off
        </span>
        <h2 className="h-jumbo" style={{marginTop: 16, marginBottom: 20, color: 'var(--ink-deep)', fontSize: mobile ? 34 : undefined}}>
          We just launched.<br/>
          <span style={{fontStyle: 'italic'}}>You get the early price.</span>
        </h2>
        <p style={{fontSize: mobile ? 16 : 19, lineHeight: 1.6, color: 'rgba(42,31,26,0.78)', maxWidth: 520, margin: '0 auto 36px'}}>
          Every report is half off. No code needed, no catch.
          Once the launch window closes, prices go back up.
        </p>

        <div style={{
          display: 'inline-flex', gap: 0,
          background: 'rgba(42,31,26,0.10)',
          borderRadius: 12, padding: 8, marginBottom: 32,
        }}>
          {[
            ['Days', time.days],
            ['Hours', time.hours],
            ['Mins', time.mins],
            ['Secs', time.secs],
          ].map(([label, v], i, arr) => (
            <div key={label} style={{
              padding: mobile ? '10px 14px' : '12px 22px',
              borderRight: i < arr.length - 1 ? '1px solid rgba(42,31,26,0.15)' : 'none',
              minWidth: mobile ? 60 : 80,
            }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: mobile ? 28 : 36, fontWeight: 500,
                lineHeight: 1, color: 'var(--ink-deep)',
                fontVariantNumeric: 'tabular-nums',
              }}>{String(v).padStart(2,'0')}</div>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(42,31,26,0.65)',
                marginTop: 4,
              }}>{label}</div>
            </div>
          ))}
        </div>
        <div>
          <a href="#pricing" className="btn-pill btn-pill--primary btn-pill--lg">
            Claim My Discount <Arrow size={18}/>
          </a>
        </div>
        <div style={{fontSize: 12, color: 'rgba(42,31,26,0.55)', marginTop: 18}}>
          Offer valid for a limited time only.
        </div>
      </div>
    </section>
  );
};

// ============= WHY DIFFERENT =============
window.WhyDifferent = function WhyDifferent() {
  const mobile = useMobile();
  const cards = [
    {
      icon: 'ti-target',
      title: 'Actionable, not vague',
      bullets: [
        <><strong style={{color:'var(--ink)'}}>When to move</strong> and when to wait</>,
        <>Names the <strong style={{color:'var(--ink)'}}>patterns holding you back</strong></>,
        <>No generic predictions</>,
      ],
    },
    {
      icon: 'ti-calendar-event',
      title: 'Now and the next 10 years',
      bullets: [
        <>Shows the <strong style={{color:'var(--ink)'}}>bigger picture</strong>, not just today</>,
        <>Know if you're in a <strong style={{color:'var(--ink)'}}>building or breakthrough</strong> phase</>,
        <>Decade-level timing map</>,
      ],
    },
    {
      icon: 'ti-book',
      title: 'A manual, not a moment',
      bullets: [
        <>Something you <strong style={{color:'var(--ink)'}}>return to</strong>, not glance at once</>,
        <>Before the career move, <strong style={{color:'var(--ink)'}}>before you commit</strong></>,
        <>Yours to keep, forever</>,
      ],
    },
  ];
  return (
    <section className="section section--almond">
      <div className="section-inner">
        <div style={{textAlign: 'center', marginBottom: 56, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto'}}>
          <span className="kicker">Why this is different</span>
          <h2 className="h-jumbo" style={{marginTop: 16, color: 'var(--ink)'}}>
            Not your average reading.
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 14, padding: '40px 32px 36px',
              border: '1px solid rgba(61,46,38,0.08)',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'var(--gold-tint)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className={`ti ${c.icon}`} style={{fontSize: 22, color: 'var(--gold)'}}></i>
              </div>
              <h3 className="h-medium" style={{fontSize: 18, color: 'var(--ink)', margin: 0}}>
                {c.title}
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {c.bullets.map((b, bi) => (
                  <div key={bi} style={{display: 'flex', alignItems: 'flex-start', gap: 10}}>
                    <span style={{color: 'var(--gold)', fontSize: 14, marginTop: 1, flexShrink: 0}}>→</span>
                    <span style={{fontSize: 15, lineHeight: 1.55, color: 'rgba(0,0,0,0.72)'}}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============= SOCIAL PROOF =============
window.SocialProof = function SocialProof() {
  const mobile = useMobile();
  const reviews = [
    {
      stars: 5,
      body: 'I’ve done tarot, astrology, Human Design — but this was different. The part about my career timing was so specific it actually scared me. I’ve already recommended it to three friends.',
      name: 'Ashley T.',
      meta: '29 · Los Angeles',
    },
    {
      stars: 5,
      body: 'I got mine mostly out of curiosity about a relationship I was unsure about. The reading confirmed every gut feeling I’d been suppressing. It helped me make the decision I needed to make.',
      name: 'Maya R.',
      meta: '33 · Toronto',
    },
    {
      stars: 5,
      body: 'No “you will find love soon” nonsense. It told me specifically what kind of work environment I’m not cut out for. Honestly the most useful thing I’ve read about myself.',
      name: 'Jordan K.',
      meta: '31 · London',
    },
  ];

  return (
    <section className="section section--cream" id="reviews">
      <div className="section-inner">
        {/* Expert credential */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : '0.8fr 1.2fr',
          gap: mobile ? 32 : 64,
          alignItems: 'center', marginBottom: 96,
          background: 'var(--ink)', color: '#fff', borderRadius: 16,
          padding: mobile ? '36px 24px' : '56px 56px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div className="hanja-mark" style={{
            position: 'absolute', left: -20, bottom: -60,
            fontSize: 320, color: 'rgba(213,189,175,0.07)',
          }}>師</div>
          <div style={{position: 'relative'}}>
            <div style={{
              width: '100%',
              aspectRatio: mobile ? '16 / 11' : '4 / 5',
              borderRadius: 8,
              background: 'var(--ink-deep)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(213,189,175,0.18)',
              boxShadow: '0 24px 50px rgba(0,0,0,0.22)',
            }}>
              <img
                src="assets/images/professor-reading.jpg"
                alt="Korean Saju specialist reviewing a chart"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: mobile ? '50% 36%' : '56% 50%',
                  opacity: 0.92,
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(26,18,14,0.08) 0%, rgba(26,18,14,0.18) 100%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <span className="kicker kicker--white" style={{color: 'var(--gold)'}}>
              The expertise behind your reading
            </span>
            <h3 className="h-large" style={{marginTop: 16, marginBottom: 24, color: '#fff', fontSize: mobile ? 26 : 36}}>
              15 years. 20,000+ readings.
            </h3>
            <p style={{fontSize: mobile ? 16 : 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', marginBottom: 0}}>
              Your report is based on the methodology of a Korean Saju specialist
              with 15 years of practice and 20,000+ readings.
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="kicker">From recent readers</span>
          <h2 className="h-large" style={{marginTop: 16, color: 'var(--ink)'}}>
            What people say after they read it.
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 12,
              border: '1px solid rgba(61,46,38,0.08)',
              padding: '32px 28px',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <div style={{display: 'flex', gap: 2, color: 'var(--gold)'}}>
                {Array.from({length: r.stars}).map((_,si) => (
                  <span key={si} style={{fontSize: 18}}>★</span>
                ))}
              </div>
              <p style={{
                fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.55,
                color: 'var(--ink)', margin: 0, flex: 1,
              }}>"{r.body}"</p>
              <div>
                <div style={{fontSize: 14, fontWeight: 600, color: 'var(--ink)'}}>{r.name}</div>
                <div style={{fontSize: 13, color: 'rgba(0,0,0,0.55)', marginTop: 2}}>{r.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============= WHAT YOU GET =============
window.WhatYouGet = function WhatYouGet() {
  const mobile = useMobile();
  const items = [
    { icon: '📄', title: '15+ pages of personalized analysis', body: 'Written specifically for your four pillars — not assembled from templates.' },
    { icon: '💾', title: 'A PDF you own forever', body: 'No subscription. No expiration. Re-read it whenever life shifts.' },
    { icon: '🎯', title: 'Your biggest question, answered first', body: 'Tell us what brought you here, and your report opens with that.' },
    { icon: '❤', title: 'Inclusive of all relationship types', body: 'Your reading reflects your actual life — not a default heterosexual template.' },
    { icon: '💬', title: 'Optional 1-on-1 follow-up', body: '5 questions, answered in writing within 24 hours. Add it at checkout.' },
  ];
  return (
    <section className="section section--linen">
      <div className="section-inner" style={{maxWidth: 1080}}>
        <div style={{textAlign: 'center', marginBottom: 56, maxWidth: 640, margin: '0 auto 56px'}}>
          <span className="kicker">What you actually receive</span>
          <h2 className="h-jumbo" style={{marginTop: 16, color: 'var(--ink)'}}>
            More than a reading.<br/>
            <span style={{fontStyle: 'italic'}}>A reference you keep.</span>
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)',
          gap: 16,
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              gridColumn: (!mobile && i === items.length - 1) ? '1 / -1' : 'auto',
              background: '#fff', borderRadius: 12, padding: '28px 28px',
              border: '1px solid rgba(61,46,38,0.08)',
              display: 'flex', gap: 20, alignItems: 'flex-start',
            }}>
              <div style={{
                flex: '0 0 auto', width: 48, height: 48, borderRadius: '50%',
                background: 'var(--paper-warm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
              }}>{it.icon}</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 600,
                  color: 'var(--ink)', marginBottom: 4, letterSpacing: '-0.01em',
                }}>{it.title}</div>
                <div style={{fontSize: 15, lineHeight: 1.55, color: 'rgba(0,0,0,0.62)'}}>
                  {it.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
