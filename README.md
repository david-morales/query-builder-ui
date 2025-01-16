# Query Builder UI

This project is a React-based Query Builder that provides a user-friendly interface for building, exporting, and importing queries. It includes support for SQL and Elasticsearch query formats and provides a natural language explanation of the current query.

## 📸 Screenshot

![Query Builder UI Screenshot](./screenshots/query-builder-ui.png)


---

## Features

### 🚀 Key Features
- **Drag-and-Drop Query Builder**: Users can create complex queries visually using a drag-and-drop interface.
- **Export Query**:
  - Export queries in **SQL** or **Elasticsearch** format.
  - Copy queries to the clipboard with a single click.
- **Import Query**:
  - Import queries by typing an SQL `WHERE` clause.
- **Natural Language Explanation**:
  - Automatically generate a human-readable explanation of the current query.
  - Displayed prominently for better user understanding.
- **Syntax Highlighting**:
  - Query exports are displayed with syntax highlighting for readability.

---

## 🛠️ Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js**: Version 16 or higher
- **npm**: Comes with Node.js

### Installation
1. Clone the repository:
git clone https://github.com/david-morales/query-builder-ui.git cd query-builder-ui

2. Install the dependencies:
npm install

3. Build
npm run build

4. Run
npm run preview

5. Open your browser and navigate to the provided URL


---

## 🧑‍💻 Usage

### 1. Build Queries
- Add rules and groups using the **+ Rule** and **+ Group** buttons.
- Drag and drop rules and groups to rearrange them.

### 2. Export Queries
- Switch to the **Export** tab.
- Select either **SQL** or **Elasticsearch** sub-tabs to view the query in the desired format.
- Use the **Copy to Clipboard** button to copy the query.

### 3. Import Queries
- Switch to the **Import** tab.
- Paste an SQL `WHERE` clause into the text box and click **Import Query**.

### 4. Natural Language Explanation
- The natural language explanation of the current query is displayed at the top of the page.
- This helps users understand the query logic in plain English.

---

## ✨ Technologies Used

- **React**: For building the UI.
- **React Query Builder**: Core library for query building.
- **Bootstrap**: For styling and layout.
- **React-DnD**: For drag-and-drop functionality.
- **Prism Syntax Highlighter**: For syntax highlighting of exported queries.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Developed by [David Morales](https://github.com/david-morales).
