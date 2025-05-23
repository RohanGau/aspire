# 📄 Recent Transactions Component (React + Ant Design)

A **Recent Transactions** card component built using **React** and **Ant Design**, styled with **SCSS Modules**. It displays the latest transaction history in a collapsible card format, with a "View All" feature to expand the list with scrolling.

---

## ✨ Features

- Displays a **collapsible panel** with a transaction list.
- **Initially shows 4** recent transactions.
- **"View All Card Transactions" button** expands the list:
  - Sets the transaction list height to **60vh**.
  - Enables **vertical scroll** inside the list.
  - **Hides the View All button** once expanded.
- Built with **responsive and modular SCSS styles**.
- Uses **Ant Design's Collapse** and **Typography** components for structure and UI.

---

## 🛠️ Tech Stack

- **React** (with TypeScript)
- **Ant Design** (`antd`)
- **SCSS Modules** (for scoped CSS)
- **Icons and dummy data** handled separately.

---

## 🏧 Folder Structure

```bash
/src
  /components
    /RecentTransactions
      ├── RecentTransactions.tsx   # Main Component
      ├── RecentTransactions.module.scss   # Styles
/utils
  └── constant.ts                  # Dummy Transactions Data
/assets
  └── icons/                        # Icons used in the component
```

---

## 📦 Installation

1. **Clone the repository** (or integrate into your project)

```bash
git clone <your-repository-url>
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm start
# or
yarn start
```

Make sure you have `antd` installed in your project:

```bash
npm install antd
# or
yarn add antd
```

---

## 📸 Demo Preview

| State                   | UI                                                 |
| ----------------------- | -------------------------------------------------- |
| Initial View            | Shows 4 transactions, "View All" button            |
| After Clicking View All | 60vh list height, scrollable, no "View All" button |

---

## 🧹 How it Works

- The component uses a local **`viewAll` state**.
- Initially `viewAll = false`, showing only the top 4 transactions.
- On clicking **View All**, the list applies:
  - A class to **expand** the height (`60vh`) and enable **scroll**.
  - The **View All button disappears**.

---

## 🧪 Testing with Jest

This project uses **Jest** for unit testing.

### Jest Commands

- **Run tests**:

```bash
npm test
# or
yarn test
```

- **Run tests in watch mode**:

```bash
npm run test:watch
# or
yarn test:watch
```

- **Run tests with coverage**:

```bash
npm run test:coverage
# or
yarn test:coverage
```

### Jest Setup

Make sure you have the following configuration for Jest in your `package.json` or in a separate Jest config file:

```json
"jest": {
  "preset": "react",
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.ts"]
}
```

#### Mocks

If you're using libraries such as `react-redux` or components with `window.matchMedia`, ensure they are properly mocked in your tests to avoid errors like:

1. **Mocking `window.matchMedia` for AntD's responsive observer**:

```ts
// In src/setupTests.ts
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

2. **Mocking `useSelector` and `useDispatch` from `react-redux`**:

```ts
// In your test files
import * as redux from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
```

Make sure to mock these before rendering the component in your tests.

---

## 📌 To-Do / Improvements (Optional)

- Add **animation** for smooth height transition on expanding.
- Fetch **dynamic transactions** using API instead of dummy data.
- Add **loading skeletons** for better UX when data is loading.
- Add **filters** for different card types (debit/credit).

---

## 📋 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ using React and Ant Design.
