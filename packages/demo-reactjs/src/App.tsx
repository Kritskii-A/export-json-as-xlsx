import xlsx from "export-json-as-xlsx"

function App() {
  const downloadFile = () => {
    let data = [
      {
        sheet: "Adults",
        columns: [
          { label: "User", value: "user", isFormula: true }, // Use formuls
          { label: "Age", value: "age", format: '# "years"' }, // Custom format
          { label: "Phone", value: (row: any) => row?.more?.phone ?? "", width: "5" }, // Run functions and add width
          { label: "Date", value: "date", format: "DD.MM.YYYY", type: "d" }, // Set type
        ],
        content: [
          { user: `=HYPERLINK("${window.location.origin}", "Alex")`, age: 20, more: { phone: "11111111" }, date: "1999.02.20" },
          { user: "Luis", age: 21, more: { phone: "12345678" }, date: "1999.01.21" },
        ],
      },
      {
        sheet: "Children",
        columns: [
          { label: "User", value: "user" }, // Top level data
          { label: "Age", value: "age", format: '# "years"' }, // Custom format
          { label: "Phone", value: (row: any) => row?.more?.phone ?? "" }, // Run functions
        ],
        content: [
          { user: "Manuel", age: 16, more: { phone: "99999999" } },
          { user: "Ana", age: 17, more: { phone: "87654321" } },
        ],
      },
    ]
    let settings = {
      fileName: "MySpreadsheet",
    }

    xlsx(data, settings)
  }

  return (
    <div id="app">
      <h1>Testing export-json-as-xlsx</h1>
      <button onClick={downloadFile}>Download</button>
      <h2>
        <span>Visit this project on: </span>
        <a href="https://github.com/Kritskii-A/export-json-as-xlsx" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </h2>
    </div>
  )
}

export default App
