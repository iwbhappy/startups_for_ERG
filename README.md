# GoInvest — стартапы для ERG

Веб-платформа, которая знакомит стартапы с инвесторами. Сделана для конкурса стартапов ERG (ноябрь 2025).

## Что умеет

- Каталог стартапов с карточками и фильтром по категориям
- Страница стартапа с описанием, основателем и нужным финансированием
- Форма «Подать идею»: новые стартапы сохраняются в `localStorage` и сразу появляются в каталоге
- Русский интерфейс, адаптивная вёрстка

## Стек

React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui (Radix UI), React Router. Первый прототип собран в [Lovable](https://lovable.dev).

## Запуск

```bash
npm install
npm run dev
```

Production-сборка: `npm run build`, результат появится в `dist/`.

## Структура

```
src/
├── pages/        # Index, StartupDetail, SubmitStartup, NotFound
├── components/   # Hero, Navigation, SearchFilters, StartupCard, ui/
└── data/         # демо-данные стартапов
```
