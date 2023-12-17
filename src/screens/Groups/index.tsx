import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="joque com a sua turma" />

      <GroupCard title="Galera do ignite" />
    </Container>
  );
}
