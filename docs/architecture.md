# Стек технологий

## Основа

- **Next.js** — фреймворк (App Router, SSR/SSG, маршрутизация, оптимизация)
- **TypeScript** — строгая типизация всего проекта

## Стилизация

- **SCSS Modules** — компонентные стили с изоляцией, переменные, миксины, вложенность

## Получение данных

- **Fetch / Safe-fetch** — нативный fetch с обёрткой для безопасной обработки ответов и типизации
- Статические тексты: запрос всех переводов при сборке / на сервере

## Интернационализация

- **i18n** — статический перевод через запрос текстов для каждой локали (`/en`, `/ru`, `/es`)

## Анимации

- **GSAP** — timeline-анимации переходов между экранами, появление элементов, обратные анимации
- **Fullpage.js / Lenis** — постраничный скролл на десктопе (один шаг колёсика = переход)
- Фоновая сетка: три слоя (нижний → сетка → верхний с вырезанным отверстием)
- На мобильных — только бегущая и переключающаяся строки

## Формы и валидация

- **Нативная валидация** — HTML5 constraint validation API, без сторонних библиотек

## Управление состоянием

- **Redux Toolkit / Zustand** — глобальный стейт приложения (язык, модалки, активный экран)

## Оптимизация

- **Next.js**: серверные компоненты, `next/image`, динамические импорты (`next/dynamic`)
- **React-хуки** (доступны в Next.js): `useMemo`, `useCallback`, `React.memo` для клиентских компонентов

## Мутация данных

- Встроенные инструменты Next.js (Server Actions / Route Handlers)

## Обработка ошибок

- Error Boundary, `error.tsx` / `not-found.tsx` в App Router

## Тестирование

- **Jest** — unit-тесты компонентов и утилит
- **Playwright** — e2e-тесты, кроссбраузерная проверка анимаций и переходов

## Линтеры

### ESLint (v9, flat config)

Пресеты:

- `next/core-web-vitals` — React, React Hooks, jsx-a11y, Next.js
- `next/typescript` — `@typescript-eslint`
- `eslint-config-prettier` — отключает конфликты с Prettier

Кастомные правила:

- `no-console: warn` — предупреждение о console.log
- `prefer-const: error` — только const если нет переназначения
- `eqeqeq: error` — только === / !==
- `no-var: error` — запрет var
- `no-explicit-any: error` — запрет any
- `no-unused-vars: error` — неиспользуемые переменные (кроме \_-префикса)
- `consistent-type-imports: warn` — import type {} для типов
- `self-closing-comp: error` — `<Comp />` вместо `<Comp></Comp>`
- `jsx-curly-brace-presence: error` — убирает лишние {'text'} → text

Именование файлов (`eslint-plugin-check-file`):

- Директории в src/ — kebab-case
- src/components/ — PascalCase (ContactForm.tsx)
- src/hooks/, utils/, lib/, store/, types/, constants/ — camelCase (useScroll.ts)

### Prettier (Airbnb)

- Точки с запятой, одинарные кавычки в JS/TS, двойные в JSX
- 2 пробела, printWidth 100, trailing commas everywhere
- Автоформат при сохранении в IDE

### TypeScript (strict: true)

- noImplicitAny, strictNullChecks, strictFunctionTypes
- Проверка типов при сборке (next build)
