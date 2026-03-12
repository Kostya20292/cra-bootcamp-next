# CPA Project — Agent Rules

## Project Context

CPA лендинг с full-page scroll анимациями на десктопе. 4 экрана, мультиязычность, API-интеграция. Мобильная версия без постраничного скролла и тяжёлых анимаций.

## Code Style (Airbnb)

- 2 пробела для отступов (без табов)
- Одинарные кавычки в JS/TS, двойные в JSX
- Точки с запятой обязательны
- `===` вместо `==`, trailing commas
- Максимум 100 символов в строке
- `const` вместо `function` для переменных и обработчиков
- Никогда не используй `any` для типизации
- Не оставлять комментарии и console.log в финальном коде

## Naming

- **PascalCase**: компоненты, типы, интерфейсы, файлы компонентов (`ContactForm.tsx`)
- **camelCase**: файлы утилит, хуков (`useScroll.ts`, `formatDate.ts`)
- **kebab-case**: директории
- **camelCase**: переменные, функции, хуки, пропсы
- **UPPERCASE**: константы, env-переменные
- Обработчики: `handleClick`, `handleSubmit`
- Булевы: `isLoading`, `hasError`, `canSubmit`
- Хуки: `useAuth`, `useScroll`

## Key Conventions

- Server Components по умолчанию; `'use client'` только для event listeners, browser API, state, client-only библиотек
- `interface` предпочтительнее `type` для объектов
- Redux: отдельные slices по фичам, нормализованный state, selectors
- Изображения через `next/image`, навигация через `next/link`
- Sanitize HTML через DOMPurify
- Semantic HTML, ARIA-атрибуты, keyboard navigation
- Early returns для читаемости
- Анимации: плавные, кроссбраузерные (baseline widely available). На мобильных — только бегущая и переключающаяся строки
