import { Container, Table } from "react-bootstrap";

const tables = [
  { value: "le0 (1)", short: "", long: "" },
  { value: "le3 (1000)", short: "K", long: "thousand" },
  { value: "le6 (1,000,000)", short: "M", long: "million" },
  { value: "le9", short: "B", long: "billion" },
  { value: "le12", short: "T", long: "trillion" },
  { value: "le15", short: "Qa", long: "quadrillion" },
  { value: "le18", short: "Qi", long: "quintillion" },
  { value: "le21", short: "Sx", long: "sextillion" },
  { value: "le24", short: "Sp", long: "septillion" },
  { value: "le27", short: "Oc", long: "octillion" },
  { value: "le30", short: "No", long: "nonillion" },
  { value: "le33", short: "Dc", long: "decillion" },
  { value: "le36", short: "UDc", long: "undecillion" },
  { value: "le39", short: "DDc", long: "duodecillion" },
  { value: "le42", short: "TDc", long: "tredecillion" },
  { value: "le45", short: "QaDc", long: "quattuordecillion" },
]

const Decimallegend = () => {
  return (
    <Container>
      <h1>Standard-Decimal Suffixes</h1>
      <p>Based on <a href="http://home.kpn.nl/vanadovv/BignumbyN.html" target="_blank" >this list</a></p>
      <Table striped>
        <thead>
          <tr>
            <td>Value</td>
            <td>Short suffix</td>
            <td>Long suffix</td>
          </tr>
        </thead>
        <tbody>
          { tables.map((table, i) =>(
            <tr key={i}>
              <td>{table.value}</td>
              <td>{table.short}</td>
              <td>{table.long}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Decimallegend;