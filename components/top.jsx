// top.jsx — Nav, Hero, Problem, Saju Explainer
const { useState, useEffect } = React;

// ============= MOBILE HOOK (shared across all components) =============
window.useMobile = function useMobile() {
  const [mobile, setMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 900);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return mobile;
};

// ============= NAV =============
window.Nav = function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const mobile = useMobile();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      height: 64,
      padding: mobile ? '0 20px' : '0 40px',
      display: 'flex', alignItems: 'center',
      background: scrolled ? 'rgba(237,237,233,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(160%) blur(8px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(61,46,38,0.08)' : '1px solid transparent',
      transition: 'background 0.25s ease, border-color 0.25s ease',
    }}>
      <a href="#top" style={{display:'flex', alignItems:'center', gap:10, textDecoration:'none', color:'var(--ink)'}}>
        <span style={{fontFamily:'var(--font-serif)', fontSize:22, fontWeight:600, letterSpacing:'-0.02em'}}>Fateade</span>
        {!mobile && (
          <span style={{fontFamily:'var(--font-sans)', fontSize:14, color:'var(--ink-soft)', paddingLeft:10, marginLeft:4, borderLeft:'1px solid rgba(61,46,38,0.2)', letterSpacing:'0.04em'}}>Saju Studio</span>
        )}
      </a>
      <div style={{display:'flex', gap: mobile ? 12 : 28, alignItems:'center', marginLeft:'auto'}}>
        {!mobile && (
          <>
            <a href="#how" style={navLink}>How It Works</a>
            <a href="#reviews" style={navLink}>Reviews</a>
            <a href="#pricing" style={navLink}>Pricing</a>
          </>
        )}
        <a href="#pricing" className="btn-pill btn-pill--primary btn-pill--sm">
          {mobile ? 'Get Reading' : 'Get My Reading'} <Arrow/>
        </a>
      </div>
    </nav>
  );
};

const navLink = {
  color: 'var(--ink)', textDecoration: 'none',
  fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em',
};

window.Arrow = function Arrow({size=16}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  );
};

// ============= HERO =============
window.Hero = function Hero() {
  const mobile = useMobile();
  const reportPreviewUrl = 'https://drive.google.com/file/d/1HHtuHgdCFkW5zOWStkUOavg0qs3g2W5O/view?usp=sharing';
  return (
    <section id="top" style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--ink)', color: '#fff',
      padding: mobile ? '0 24px 56px' : '60px 80px 80px',
      marginTop: -64, paddingTop: mobile ? 24 + 64 : 32 + 64,
    }}>
      <div style={{position:'relative', maxWidth:1100, margin:'0 auto', textAlign:'center'}}>
        <div className="hanja-mark" style={{
          fontSize: 13, letterSpacing: '0.5em',
          color: 'rgba(213,189,175,0.45)',
          marginBottom: 16,
        }}>
          四 柱 命 理
        </div>
        <span className="kicker kicker--white" style={{color:'var(--gold-soft)'}}>
          A Korean Saju Reading · 사주
        </span>
        <h1 className="h-display" style={{color:'#fff', marginTop:24, marginBottom:28, fontSize: mobile ? 52 : 84}}>
          Read your<br/>
          <span style={{fontStyle:'italic', color:'var(--gold-soft)'}}>destiny.</span>
        </h1>
        <p style={{
          maxWidth:560, margin:'0 auto 8px',
          fontSize: mobile ? 17 : 20,
          lineHeight: 1.65, letterSpacing: '-0.01em',
          color: 'rgba(255,255,255,0.92)',
        }}>
          A traditional Asian fortune telling —<br/>
          <span style={{
            borderBottom: '1px solid rgba(223,196,157,0.5)',
            paddingBottom: 1,
            color: 'var(--gold-soft)',
          }}>personalized</span> to your life.
        </p>
        <p style={{maxWidth:620, margin:'0 auto 36px', fontSize:15, color:'rgba(255,255,255,0.45)', letterSpacing:'-0.005em'}}>
          Trusted by 200+ readers worldwide.
        </p>
        <div style={{
          display: 'flex', flexDirection: mobile ? 'column' : 'row',
          alignItems: 'center', justifyContent: 'center', gap: 12,
          marginBottom: 20,
        }}>
          <a href="#pricing" className="btn-pill btn-pill--inverted btn-pill--lg">
            Get My Reading <Arrow size={18}/>
          </a>
          <a
            href={reportPreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill--outline"
            style={{
              padding: '10px 18px', fontSize: 14,
              color: '#fff', borderColor: 'rgba(255,255,255,0.55)',
            }}
          >
            <i className="ti ti-file-search" style={{fontSize: 16}}></i>
            Preview Report
          </a>
        </div>
        <div style={{fontSize:13, color:'rgba(255,255,255,0.45)', letterSpacing:'-0.005em'}}>
          One-time payment · No subscription · PDF delivered within 48 hours
        </div>
      </div>
    </section>
  );
};

// ============= PROBLEM =============
window.Problem = function Problem() {
  const mobile = useMobile();
  return (
    <section className="section section--cream">
      <div className="section-inner" style={{maxWidth:960}}>
        <div style={{textAlign:'center', marginBottom:36}}>
          <span className="kicker">Have you ever wondered…</span>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
          gap:16, marginBottom:72,
        }}>
          <div style={{background:'#fff', borderRadius:14, padding:'32px 28px', border:'1px solid var(--hairline-warm)', display:'flex', flexDirection:'column', gap:16}}>
            <div style={{width:36, height:36, borderRadius:'50%', background:'var(--gold-tint)', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <i className="ti ti-heart" style={{fontSize:17, color:'var(--gold)'}}></i>
            </div>
            <div style={{fontSize:11, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--gold)'}}>Relationships</div>
            <p style={{fontFamily:'var(--font-serif)', fontSize:19, lineHeight:1.45, color:'var(--ink)', fontStyle:'italic', margin:0}}>
              '"What kind of person is my destiny?"'
            </p>
          </div>

          <div style={{background:'#fff', borderRadius:14, padding:'32px 28px', border:'1px solid var(--hairline-warm)', display:'flex', flexDirection:'column', gap:16}}>
            <div style={{width:36, height:36, borderRadius:'50%', background:'var(--gold-tint)', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <i className="ti ti-briefcase" style={{fontSize:17, color:'var(--gold)'}}></i>
            </div>
            <div style={{fontSize:11, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--gold)'}}>Career</div>
            <p style={{fontFamily:'var(--font-serif)', fontSize:19, lineHeight:1.45, color:'var(--ink)', fontStyle:'italic', margin:0}}>
              "Which career is actually right for me?"
            </p>
          </div>

          <div style={{background:'#fff', borderRadius:14, padding:'32px 28px', border:'1px solid var(--hairline-warm)', display:'flex', flexDirection:'column', gap:16}}>
            <div style={{width:36, height:36, borderRadius:'50%', background:'var(--gold-tint)', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <i className="ti ti-coin" style={{fontSize:17, color:'var(--gold)'}}></i>
            </div>
            <div style={{fontSize:11, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--gold)'}}>Wealth</div>
            <p style={{fontFamily:'var(--font-serif)', fontSize:19, lineHeight:1.45, color:'var(--ink)', fontStyle:'italic', margin:0}}>
              "How much money can I make and when?"
            </p>
          </div>
        </div>

        <div style={{textAlign:'center', maxWidth:680, margin:'0 auto'}}>
          <p style={{fontSize:16, color:'rgba(0,0,0,0.52)', fontStyle:'italic', marginBottom:24}}>
            If you've ever thought, "I just wish I had a clear answer" —
          </p>
          <div style={{width:36, height:2, background:'var(--gold)', margin:'0 auto 28px'}}></div>
          <p style={{fontFamily:'var(--font-serif)', fontSize: mobile ? 30 : 40, lineHeight:1.15, color:'var(--ink)', fontWeight:400, marginBottom:12}}>
            You already have one.
          </p>
          <p style={{fontFamily:'var(--font-serif)', fontSize: mobile ? 18 : 22, lineHeight:1.4, color:'var(--ink-soft)', fontStyle:'italic'}}>
            It was written the moment you were born.
          </p>
        </div>
      </div>
    </section>
  );
};

// ============= SAJU EXPLAINER =============
window.SajuExplainer = function SajuExplainer() {
  const mobile = useMobile();
  const pillars = [
    { hanja: '年', label: 'Year', desc: 'Your inheritance' },
    { hanja: '月', label: 'Month', desc: 'Your formation' },
    { hanja: '日', label: 'Day', desc: 'Your true self' },
    { hanja: '時', label: 'Hour', desc: 'Your destiny' },
  ];
  return (
    <section className="section section--linen">
      <div className="section-inner">
        <div style={{
          display:'grid',
          gridTemplateColumns: mobile ? '1fr' : '1fr 1.1fr',
          gap: mobile ? 48 : 80,
          alignItems:'center',
        }}>
          <div>
            <span className="kicker">What is Saju?</span>
            <h2 style={{fontFamily:'var(--font-serif)', fontSize: mobile ? 32 : 42, lineHeight:1.1, color:'var(--ink)', margin:'14px 0 8px', fontWeight:400}}>
              Your personal blueprint
            </h2>
            <p style={{fontSize:17, color:'var(--ink-soft)', marginBottom:28, fontStyle:'italic', lineHeight:1.5}}>
              built from the exact moment you were born.
            </p>
            <p className="lead" style={{marginBottom:20, fontSize:16}}>
              Saju (四柱, "Four Pillars") is the ancient Asian system
              that maps your personality, relationships, timing, and life path
              from your birth year, month, day, and hour.
            </p>
            <div style={{borderLeft:'3px solid var(--gold)', paddingLeft:18, marginBottom:24}}>
              <p style={{fontSize:18, fontWeight:600, color:'var(--ink)', lineHeight:1.4}}>
                It's not a horoscope.<br/>It's a precision tool.
              </p>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:12}}>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <i className="ti ti-clock" style={{fontSize:16, color:'var(--gold)', flexShrink:0}}></i>
                <span style={{fontSize:15, color:'rgba(0,0,0,0.7)'}}>Practiced across Asia for thousands of years</span>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <i className="ti ti-world" style={{fontSize:16, color:'var(--gold)', flexShrink:0}}></i>
                <span style={{fontSize:15, color:'rgba(0,0,0,0.7)'}}>Now available in English, for the first time</span>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <i className="ti ti-user-check" style={{fontSize:16, color:'var(--gold)', flexShrink:0}}></i>
                <span style={{fontSize:15, color:'rgba(0,0,0,0.7)'}}>By a Korean specialist with 15 years of experience</span>
              </div>
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:16}}>
            {pillars.map((p, i) => (
              <div key={i} style={{background:'#fff', border:'1px solid var(--hairline-warm)', borderRadius:12, padding: mobile ? '24px 20px' : '36px 28px', position:'relative', overflow:'hidden'}}>
                <div className="hanja-mark" style={{position:'absolute', right:-10, top:-20, fontSize:140, color:'rgba(61,46,38,0.06)', fontWeight:300}}>{p.hanja}</div>
                <div style={{position:'relative'}}>
                  <div className="hanja-mark" style={{fontSize:36, color:'var(--ink)', marginBottom:12}}>{p.hanja}</div>
                  <div style={{fontSize:12, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--gold)', marginBottom:6}}>
                    Pillar {i+1}
                  </div>
                  <div style={{fontFamily:'var(--font-serif)', fontSize: mobile ? 18 : 22, fontWeight:500, color:'var(--ink)', marginBottom:4}}>{p.label}</div>
                  <div style={{fontSize:14, color:'rgba(0,0,0,0.6)'}}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
