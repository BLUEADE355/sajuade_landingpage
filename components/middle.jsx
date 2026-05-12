// middle.jsx — Report Preview, Launch Offer, Why Different, Social Proof, What You Get

// ============= REPORT PREVIEW =============
window.ReportPreview = function ReportPreview() {
  const mobile = useMobile();
  const sections = [
    { label: 'Your Core Identity', pageNum: '03', kind: 'identity' },
    { label: 'Career & Money', pageNum: '06', kind: 'career' },
    { label: 'Relationships', pageNum: '09', kind: 'relationships' },
    { label: 'This Year’s Forecast', pageNum: '12', kind: 'year' },
    { label: 'Your Decade Ahead', pageNum: '14', kind: 'decade' },
  ];

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

      <div className="pdf-rail">
        {sections.map((s, i) => <PdfPage key={i} section={s} index={i} />)}
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
              Your most important topic comes first.
            </div>
            <div style={{fontSize: 15, color: 'rgba(255,255,255,0.7)'}}>
              Whatever you came here to figure out — that's where we start.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function PdfPage({ section, index }) {
  const renderBody = () => {
    if (section.kind === 'identity') {
      return (
        <>
          <FakeLine w="92%"/><FakeLine w="86%"/><FakeLine w="78%"/>
          <div style={pdfBlock}>
            <div style={pdfBlockH}>Day Master · 日主</div>
            <div style={{fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--ink)'}}>Yang Wood · 甲木</div>
            <FakeLine w="80%" small/><FakeLine w="65%" small/>
          </div>
          <FakeLine w="88%"/><FakeLine w="72%"/>
        </>
      );
    }
    if (section.kind === 'career') {
      return (
        <>
          <FakeLine w="90%"/><FakeLine w="76%"/>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 4}}>
            <PdfTag label="Lean in" tone="ok"/>
            <PdfTag label="Avoid" tone="warn"/>
          </div>
          <FakeLine w="84%"/><FakeLine w="68%"/><FakeLine w="79%"/>
          <div style={pdfBlock}>
            <div style={pdfBlockH}>Wealth pillar timing</div>
            <div style={{display:'flex', gap: 6, marginTop: 8}}>
              {['25','28','31','34','37'].map(y => (
                <div key={y} style={{
                  flex:1, padding:'8px 4px', borderRadius:4,
                  background: y === '31' ? 'var(--gold)' : 'rgba(61,46,38,0.06)',
                  color: y === '31' ? 'var(--ink-deep)' : 'var(--ink-soft)',
                  fontSize: 11, fontWeight: 600, textAlign:'center',
                }}>{y}</div>
              ))}
            </div>
          </div>
        </>
      );
    }
    if (section.kind === 'relationships') {
      return (
        <>
          <FakeLine w="88%"/><FakeLine w="74%"/>
          <div style={pdfBlock}>
            <div style={pdfBlockH}>Your relational pattern</div>
            <FakeLine w="92%" small/><FakeLine w="80%" small/><FakeLine w="68%" small/>
          </div>
          <div style={{...pdfBlock, background: 'var(--gold-tint)', borderColor: 'var(--gold-soft)'}}>
            <div style={{...pdfBlockH, color: 'var(--ink-soft)'}}>Written for your orientation</div>
            <FakeLine w="78%" small/><FakeLine w="64%" small/>
          </div>
          <FakeLine w="82%"/>
        </>
      );
    }
    if (section.kind === 'year') {
      return (
        <>
          <FakeLine w="84%"/>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:6, marginTop:8}}>
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m,i) => (
              <div key={m} style={{
                padding:'10px 4px', borderRadius:4, textAlign:'center',
                background: [3,7,9].includes(i) ? 'var(--ink)' : 'rgba(61,46,38,0.05)',
                color: [3,7,9].includes(i) ? '#fff' : 'var(--ink-soft)',
                fontSize:11, fontWeight:600,
              }}>{m}</div>
            ))}
          </div>
          <FakeLine w="86%"/><FakeLine w="70%"/><FakeLine w="78%"/>
        </>
      );
    }
    return (
      <>
        <FakeLine w="88%"/><FakeLine w="72%"/>
        <div style={pdfBlock}>
          <div style={pdfBlockH}>The next 10 years</div>
          <div style={{display:'flex', gap:4, marginTop:8, alignItems:'flex-end', height: 60}}>
            {[40,55,72,68,80,90,76,62,84,70].map((h,i) => (
              <div key={i} style={{
                flex:1, height: `${h}%`, background: i===5 ? 'var(--gold)' : 'var(--almond)',
                borderRadius: '2px 2px 0 0',
              }}/>
            ))}
          </div>
          <div style={{display:'flex', justifyContent:'space-between', fontSize:10, color: 'var(--ink-soft)', marginTop:4, fontWeight:600}}>
            <span>'26</span><span>'31</span><span>'36</span>
          </div>
        </div>
        <FakeLine w="82%"/>
      </>
    );
  };

  return (
    <div className="pdf-card">
      <div className="pdf-card-page">
        <div style={{
          fontSize: 9, fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--gold)',
        }}>
          Section {String(index+1).padStart(2,'0')} · Fateade
        </div>
        <div style={{
          fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500,
          color: 'var(--ink)', lineHeight: 1.2, marginBottom: 4,
        }}>{section.label}</div>
        <div style={{height: 1, background: 'var(--hairline-warm)', margin: '4px 0 12px'}}/>
        {renderBody()}
      </div>
      <div className="pdf-card-foot">
        <span>{section.label}</span>
        <span>{section.pageNum} / 16</span>
      </div>
    </div>
  );
}

function FakeLine({ w='90%', small=false }) {
  return <div style={{
    height: small ? 5 : 6, width: w, borderRadius: 2,
    background: 'rgba(61,46,38,0.10)',
  }}/>;
}
function PdfTag({ label, tone }) {
  return <div style={{
    padding: '8px 10px', borderRadius: 4, fontSize: 10, fontWeight: 700,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    background: tone === 'ok' ? 'rgba(0,98,65,0.08)' : 'rgba(168,49,42,0.06)',
    color: tone === 'ok' ? '#0d6b4f' : '#a8312a',
  }}>{label}</div>;
}
const pdfBlock = {
  marginTop: 8, padding: '12px 14px', borderRadius: 6,
  background: 'rgba(61,46,38,0.04)', border: '1px solid var(--hairline-warm)',
  display: 'flex', flexDirection: 'column', gap: 6,
};
const pdfBlockH = {
  fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
  textTransform: 'uppercase', color: 'var(--ink-soft)',
};

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
          {!mobile && (
            <div style={{position: 'relative'}}>
              <div style={{
                width: '100%', aspectRatio: '4 / 5', borderRadius: 8,
                background: 'linear-gradient(160deg, #5a4438 0%, #2a1f1a 60%, #1a120e 100%)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(213,189,175,0.18)',
              }}>
                <div className="hanja-mark" style={{
                  fontSize: 180, color: 'rgba(213,189,175,0.14)', fontWeight: 200,
                }}>師</div>
                <div style={{
                  position: 'absolute', bottom: 16, left: 16, right: 16,
                  fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em',
                  textTransform: 'uppercase', textAlign: 'center',
                }}>Photo placeholder · drop in real portrait</div>
              </div>
            </div>
          )}
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
