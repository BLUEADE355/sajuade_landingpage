// bottom.jsx — Pricing, How It Works, FAQ, Final CTA, Footer, Floating CTA

// ============= PRICING =============
window.Pricing = function Pricing() {
  const mobile = useMobile();
  const discountPill = (label, dark=false) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '5px 10px', borderRadius: 999,
      background: dark ? 'rgba(203,162,88,0.18)' : 'var(--gold-tint)',
      color: dark ? 'var(--gold)' : 'var(--ink-soft)',
      border: dark ? '1px solid rgba(203,162,88,0.32)' : '1px solid rgba(203,162,88,0.28)',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
      textTransform: 'uppercase',
    }}>{label}</span>
  );
  const discountInline = (label, dark=false) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '6px 12px', borderRadius: 999,
      background: dark ? 'rgba(203,162,88,0.18)' : 'var(--gold-tint)',
      border: dark ? '1px solid rgba(203,162,88,0.36)' : '1px solid rgba(203,162,88,0.34)',
      color: dark ? 'var(--gold)' : 'var(--ink-soft)',
      fontSize: mobile ? 15 : 16,
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    }}>{label}</span>
  );
  const reportCheckoutUrl = 'https://www.paypal.com/ncp/payment/D5489XLQ5KP94';
  const consultationCheckoutUrl = 'https://www.paypal.com/ncp/payment/ZJEQUNGD56XHQ';

  return (
    <section className="section section--cream" id="pricing">
      <div className="section-inner section-inner--wide">
        <div style={{textAlign: 'center', marginBottom: 56, maxWidth: 640, margin: '0 auto 56px'}}>
          <span className="kicker">Pricing</span>
          <h2 className="h-jumbo" style={{marginTop: 16, marginBottom: 16, color: 'var(--ink)'}}>
            Simple pricing. No surprises.
          </h2>
          <p className="lead" style={{maxWidth: 480, margin: '0 auto'}}>
            Launch pricing is already applied. Choose the report alone, or bundle it with written follow-up.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
          gap: 20,
          alignItems: mobile ? 'stretch' : 'stretch',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {/* Card 1 — Featured */}
          <div className="price-card price-card--featured" style={{transform: mobile ? 'none' : undefined}}>
            <div className="price-badge">50% off</div>
            <div style={{display:'flex', alignItems:'center', gap: 10, marginBottom: 4}}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(203,162,88,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className="ti ti-file-text" style={{fontSize: 18, color: 'var(--gold)'}}></i>
              </div>
              <div className="kicker" style={{color: 'var(--gold)', margin: 0}}>The full report</div>
            </div>
            <h3 className="h-medium" style={{color: '#fff', fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 500}}>
              Full Destiny Report
            </h3>
            <p style={{fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, margin: 0}}>
              Complete analysis — personality, relationships,
              career, money, and the next 10 years.
            </p>
            <div style={{display: 'flex', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.6)', flexWrap: 'wrap'}}>
              <span>25+ page PDF</span>
              <span>·</span>
              <span>Personalized report</span>
              <span>·</span>
              <span>Delivered in 48 hrs</span>
            </div>
            <div>{discountPill('Save $10', true)}</div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, flexWrap: 'wrap'}}>
              <span className="price-strike" style={{fontSize: 22}}>$20</span>
              <span className="price-now" style={{color: '#fff'}}>$10</span>
              {discountInline('50% off', true)}
            </div>
            <a href={reportCheckoutUrl} target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill--gold" style={{marginTop: 8}}>
              Get My Report <Arrow size={18}/>
            </a>
          </div>

          {/* Card 2 — Bundle */}
          <div className="price-card">
            <div className="price-badge">Best value</div>
            <div style={{display:'flex', alignItems:'center', gap: 10, marginBottom: 4}}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--paper-warm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className="ti ti-messages" style={{fontSize: 18, color: 'var(--ink)'}}></i>
              </div>
              <div className="kicker" style={{margin: 0}}>Report + consultation</div>
            </div>
            <h3 style={{color: 'var(--ink)', fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 500, margin: 0}}>
              Full Destiny Report + 1-on-1 Written Consultation
            </h3>
            <p style={{fontSize: 15, color: 'rgba(0,0,0,0.62)', lineHeight: 1.55, margin: 0}}>
              Get the full report, then ask up to 5 follow-up questions.
              Written answers are delivered within 24 hours after your report.
            </p>
            <div style={{display: 'flex', gap: 8, fontSize: 12, color: 'rgba(0,0,0,0.52)', flexWrap: 'wrap'}}>
              <span>35+ page PDF</span>
              <span>·</span>
              <span>5 written answers</span>
              <span>·</span>
              <span>Priority follow-up</span>
            </div>
            <div>{discountPill('70% off · save $70')}</div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, flexWrap: 'wrap'}}>
              <span className="price-strike" style={{fontSize: 22}}>$100</span>
              <span className="price-now">$30</span>
              {discountInline('70% off')}
            </div>
            <a href={reportCheckoutUrl} target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill--outline" style={{marginTop: 8}}>
              Get Report + Consultation <Arrow size={18}/>
            </a>
          </div>
        </div>

        {/* Add-on note */}
        <div style={{
          marginTop: 32, padding: mobile ? '20px 20px' : '24px 32px',
          background: 'var(--paper-warm)', borderRadius: 12,
          border: '1px solid var(--gold-soft)',
          display: 'flex', alignItems: mobile ? 'flex-start' : 'center',
          flexDirection: mobile ? 'column' : 'row',
          gap: mobile ? 16 : 24, flexWrap: 'wrap',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'var(--gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, color: 'var(--ink-deep)', fontWeight: 700, flex: '0 0 auto',
          }}>✦</div>
          <div style={{flex: 1, minWidth: 200}}>
            <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 4}}>
              Standalone or report add-on
            </div>
            <div style={{fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, color: 'var(--ink)'}}>
              1-on-1 Written Consultation
            </div>
            <div style={{fontSize: 14, color: 'rgba(0,0,0,0.62)', marginTop: 2, lineHeight: 1.55}}>
              Best after buying the Full Destiny Report. It can be purchased separately, but it does not include a report.
              If purchased without a report, no report will be delivered — only written answers to your submitted questions.
              Refunds may be limited once written work begins.
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: mobile ? 'stretch' : 'flex-end', gap: 10, width: mobile ? '100%' : 'auto'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: mobile ? 'flex-start' : 'flex-end'}}>
              <span className="price-strike" style={{fontSize: 20}}>$80</span>
              <span style={{fontFamily:'var(--font-serif)', fontSize: 36, fontWeight: 500, color: 'var(--ink)'}}>$40</span>
              {discountInline('50% off')}
            </div>
            <a href={consultationCheckoutUrl} target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill--outline" style={{width: mobile ? '100%' : 'auto', justifyContent: 'center'}}>
              Buy Consultation Only <Arrow size={18}/>
            </a>
          </div>
        </div>

        {/* Trust line */}
        <div style={{
          marginTop: 32, textAlign: 'center', fontSize: 14,
          color: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', gap: 16,
          flexWrap: 'wrap', alignItems: 'center',
        }}>
          <span style={{display:'inline-flex', gap:6, alignItems:'center'}}>
            <Lock/> Secure checkout via PayPal
          </span>
          <span>·</span>
          <span>One-time payment</span>
          <span>·</span>
          <span>No subscription</span>
        </div>
      </div>
    </section>
  );
};

function Lock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2"/>
      <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
    </svg>
  );
}

// ============= HOW IT WORKS =============
window.HowItWorks = function HowItWorks() {
  const mobile = useMobile();
  const steps = [
    {
      num: '01',
      icon: 'ti-receipt',
      title: 'Place your order',
      body: 'Choose your reading and fill in your birth details — date, place, and time if you have it.',
    },
    {
      num: '02',
      icon: 'ti-eye',
      title: 'We analyze your chart',
      body: 'A Korean Saju specialist reads your four pillars and writes your report by hand.',
    },
    {
      num: '03',
      icon: 'ti-mail-forward',
      title: 'Receive your PDF',
      body: 'Your report lands in your inbox within 48 hours. Yours to keep, forever.',
    },
  ];
  return (
    <section className="section section--almond" id="how">
      <div className="section-inner">
        <div style={{textAlign: 'center', marginBottom: 56, maxWidth: 640, margin: '0 auto 56px'}}>
          <span className="kicker">How it works</span>
          <h2 className="h-jumbo" style={{marginTop: 16, marginBottom: 16, color: 'var(--ink)'}}>
            Three steps. That's it.
          </h2>
          <p className="lead" style={{margin: '0 auto'}}>
            No calls, no apps, no waiting room.
          </p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: mobile ? 'column' : 'row',
          alignItems: mobile ? 'stretch' : 'stretch',
          gap: mobile ? 16 : 12,
        }}>
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <div className="step-card" style={{minWidth: mobile ? 'auto' : 240, textAlign: mobile ? 'left' : 'center'}}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'var(--paper-warm)',
                  border: '1px solid var(--hairline-warm)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <i className={`ti ${s.icon}`} style={{fontSize: 24, color: 'var(--ink)'}}></i>
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8,
                }}>Step {s.num}</div>
                <h3 className="h-medium" style={{fontSize: 22, marginBottom: 10, color: 'var(--ink)', fontFamily: 'var(--font-serif)', fontWeight: 500}}>
                  {s.title}
                </h3>
                <p style={{fontSize: 15, lineHeight: 1.55, color: 'rgba(0,0,0,0.62)'}}>
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && !mobile && (
                <div className="step-arrow" style={{padding: '0 4px'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============= FAQ =============
window.FAQ = function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    {
      q: 'How accurate is this?',
      a: 'Saju is a framework, not a guarantee. What we can promise: your report is specific, honest, and based on your exact birth data — not a generic template.',
    },
    {
      q: 'What information do I need?',
      a: 'Your birth date (year, month, day) and birth time. If you don\'t know your exact birth time, that\'s okay — we\'ll work with what you have and note it in the report.',
    },
    {
      q: 'How long does it take?',
      a: 'Within 48 hours of your order. High-demand periods may extend to 72 hours. Every report is written personally.',
    },
    {
      q: 'I\'m not straight / I\'m nonbinary. Will this be relevant to me?',
      a: 'Yes. You\'ll share your orientation when you order. The relationship sections are written around your actual life — not a default heterosexual template.',
    },
    {
      q: 'What if I\'m not satisfied?',
      a: 'If your report doesn\'t resonate, reach out. We\'ll redo it — plus offer a free 1-on-1 consultation. That\'s a $50 value, at no cost to you.',
    },
  ];
  return (
    <section className="section section--cream" id="faq">
      <div className="section-inner" style={{maxWidth: 880}}>
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="kicker">FAQ</span>
          <h2 className="h-jumbo" style={{marginTop: 16, color: 'var(--ink)'}}>
            Questions you probably have.
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="faq-chev">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============= FINAL CTA =============
window.FinalCTA = function FinalCTA() {
  const mobile = useMobile();
  return (
    <section style={{
      background: 'var(--ink)', color: '#fff',
      padding: mobile ? '80px 24px' : '120px 80px',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      <div className="hanja-mark" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: mobile ? 280 : 540, color: 'rgba(213,189,175,0.05)', fontWeight: 200,
      }}>命</div>
      <div style={{position: 'relative', maxWidth: 720, margin: '0 auto'}}>
        <span className="kicker" style={{color: 'var(--gold-soft)'}}>Last call</span>
        <h2 className="h-display" style={{marginTop: 24, marginBottom: 32, color: '#fff', fontSize: mobile ? 44 : 72}}>
          Your reading is waiting.<br/>
          <span style={{fontStyle: 'italic', color: 'var(--gold-soft)'}}>The price isn't.</span>
        </h2>
        <a href="#pricing" className="btn-pill btn-pill--gold btn-pill--lg" style={{marginBottom: 20}}>
          Get My Reading Now <Arrow size={18}/>
        </a>
        <div style={{fontSize: 14, color: 'rgba(255,255,255,0.55)'}}>
          One-time payment · PDF in 48 hours · 50% off, automatically applied
        </div>
      </div>
    </section>
  );
};

// ============= FOOTER =============
window.SiteFooter = function SiteFooter() {
  const mobile = useMobile();
  return (
    <footer style={{
      background: 'var(--ink-deep)', color: 'rgba(255,255,255,0.7)',
      padding: mobile ? '20px 24px' : '28px 80px',
    }}>
      <div className="section-inner" style={{maxWidth: 1200}}>
        <div style={{
          display: 'flex',
          flexDirection: mobile ? 'column' : 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
          fontSize: 12, color: 'rgba(255,255,255,0.45)',
          paddingBottom: 16,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div>© 2026 Fateade · Saju Studio. All rights reserved.</div>
          <div style={{display: 'flex', gap: 20}}>
            <span style={{cursor:'pointer'}}>Terms</span>
            <span style={{cursor:'pointer'}}>Privacy</span>
            <span style={{cursor:'pointer'}}>Contact</span>
          </div>
        </div>

        <div style={{
          marginTop: 16, padding: '14px 18px',
          background: 'rgba(255,255,255,0.04)', borderRadius: 8,
          fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)',
          display: 'flex', gap: 14, alignItems: 'flex-start',
        }}>
          <span style={{flex: '0 0 auto', color: 'var(--gold-soft)'}}>⚠</span>
          <span>
            <strong style={{color: 'rgba(255,255,255,0.8)'}}>Disclaimer.</strong>{' '}
            Saju readings are provided for entertainment and self-reflection purposes only.
            They do not constitute professional advice of any kind — legal, financial, medical, or psychological.
            Results vary. Individual outcomes are not guaranteed.
          </span>
        </div>
      </div>
    </footer>
  );
};

// ============= FLOATING CTA =============
window.FloatingCTA = function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const pricing = document.getElementById('pricing');
      const pricingRect = pricing?.getBoundingClientRect();
      const pricingInView = pricingRect ? pricingRect.top < window.innerHeight - 120 && pricingRect.bottom > 120 : false;
      setVisible(
        window.scrollY > 600 &&
        window.scrollY < (document.body.scrollHeight - window.innerHeight - 400) &&
        !pricingInView
      );
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href="#pricing" className={'floating-cta' + (visible ? ' visible' : '')}>
      <div className="btn-pill btn-pill--primary btn-pill--lg" style={{
        boxShadow: '0 0 6px rgba(0,0,0,.24), 0 8px 16px rgba(0,0,0,.18)',
      }}>
        Get My Reading <Arrow size={18}/>
      </div>
    </a>
  );
};
