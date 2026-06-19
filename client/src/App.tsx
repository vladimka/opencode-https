import './App.css'

function App() {
  return (
    <div className="card">
      <div className="badge">AI-generated</div>
      <h1>HTTPS Server is running</h1>
      <p className="subtitle">
        Этот сервер был полностью создан искусственным интеллектом —
        исходный код, SSL-сертификаты и конфигурация сгенерированы
        в автоматическом режиме.
      </p>
      <div className="divider" />
      <div className="info-grid">
        <div className="info-item">
          <div className="label">Протокол</div>
          <div className="value">HTTPS (TLS 1.3)</div>
        </div>
        <div className="info-item">
          <div className="label">Платформа</div>
          <div className="value">Node.js + TypeScript + React</div>
        </div>
        <div className="info-item">
          <div className="label">Сертификат</div>
          <div className="value">mkcert (локальный CA)</div>
        </div>
        <div className="info-item">
          <div className="label">Логирование</div>
          <div className="value">Morgan (combined)</div>
        </div>
      </div>
      <div className="divider" />
      <div className="authors">
        <span>Авторы:</span>
        <span className="author-badge">opencode (AI-агент)</span>
        <span className="author-badge">Vladimka</span>
      </div>
      <div className="footer">
        Создано с помощью{' '}
        <a href="https://opencode.ai" target="_blank" rel="noopener">opencode</a>
      </div>
    </div>
  )
}

export default App
