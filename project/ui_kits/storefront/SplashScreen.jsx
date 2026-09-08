const { EnterSplash } = window.IKKENDesignSystem_c61fa2;

function SplashScreen({ onEnter }) {
  return <EnterSplash image="../../refs/layout-home.jpg" onEnter={onEnter} />;
}

Object.assign(window, { SplashScreen });
