const Background = ({ mousePosition }) => (
  <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
    <div className="absolute inset-0 dark:hidden" style={{ background: '#FFF5F7' }}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #e4879a 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div
        className="absolute rounded-full opacity-30 blur-[120px] transition-[left,top] duration-500 ease-out"
        style={{
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, #FF5C87 0%, #FFAAC6 40%, transparent 70%)',
          left: mousePosition.x / 3 + 'px',
          top: mousePosition.y / 3 + 'px',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute rounded-full opacity-25 blur-[160px] transition-[right,bottom] duration-700 ease-out"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, #C084FC 0%, #F9A8D4 50%, transparent 70%)',
          right: mousePosition.x / 6 + 'px',
          bottom: mousePosition.y / 6 + 'px',
          transform: 'translate(30%, 30%)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] opacity-20 blur-[100px] rounded-full"
        style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)' }}
      />

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
    </div>

    <div className="absolute inset-0 hidden dark:block bg-black">
      <div
        className="absolute opacity-40 blur-3xl"
        style={{
          width: '800px', height: '600px',
          background: `radial-gradient(ellipse at center,
            rgba(255,183,77,0.3) 0%, rgba(255,138,101,0.2) 25%,
            rgba(220,144,194,0.2) 50%, rgba(168,162,255,0.1) 75%, transparent 100%)`,
          left: mousePosition.x / 8 + 'px',
          top: mousePosition.y / 8 + 'px',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute opacity-30 blur-3xl"
        style={{
          width: '600px', height: '400px',
          background: `radial-gradient(ellipse at center,
            rgba(255,206,84,0.2) 0%, rgba(255,154,158,0.15) 40%,
            rgba(162,155,254,0.1) 70%, transparent 100%)`,
          right: mousePosition.x / 12 + 'px',
          bottom: mousePosition.y / 12 + 'px',
        }}
      />
    </div>

  </div>
);

export default Background;
