
import '../css/my.scss'; // 导入 SCSS 文件

function My() {
  return (
    <div className="app">
      <header className="header">
        <h1>星辰网络工作室</h1>
        <p>欢迎来到星辰网络，我们专注于提供最专业的网络服务。</p>
      </header>
      <main className="main">
        <section className="services">
          <h2>我们的服务</h2>
          <ul className="service-list">
            <li className="service-item">网站设计与开发</li>
            <li className="service-item">移动应用开发</li>
            <li className="service-item">云服务与解决方案</li>
            <li className="service-item">网络安全咨询</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default My;