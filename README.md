# HTTPS Server

Простой HTTPS сервер на **Node.js + TypeScript** с **React** фронтендом.

Создан AI-агентом [opencode](https://opencode.ai) совместно с [vladimka](https://github.com/vladimka).

## Стек

- **Node.js** + **TypeScript**
- **React** + **Vite**
- **mkcert** — локальный доверенный CA
- **Morgan** — логирование запросов

## Запуск

```bash
npm run build    # сборка клиента и сервера
npm start        # запуск на https://localhost:4433
npm run dev      # сборка + запуск
```

## Требования

- Node.js 18+
- [mkcert](https://github.com/FiloSottile/mkcert) (CA установлен в систему)
