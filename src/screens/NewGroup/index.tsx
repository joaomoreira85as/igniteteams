import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState("");

  const handleNew = async () => {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert("Preencha o nome da turma");
      }
      await groupCreate(groupName.trim());
      navigation.navigate("players", { group: groupName });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Turma", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova Turma", "Não foi possível criar uma nova turma");
      }
    }
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
