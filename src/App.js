import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import UserForm from "./components/UserForm";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  console.log(usuarios);

  document.title = "Cusers"
  
  return (
    <div style={styles}>
      <Container>
        <Card>
            <UserForm submit={submit} />
        </Card>
      </Container>
    </div>
  );
}

export default App;
