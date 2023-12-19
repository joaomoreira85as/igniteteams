import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useState } from "react";

export function NewGroup() {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState("");

  const handleNew = () => {
    navigation.navigate("players", { group: groupName });
  };

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroupName}
          value={groupName}
        />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
