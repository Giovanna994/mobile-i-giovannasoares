import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; // Importação de componentes(bibliotecas), componentes são tags para criar marcações onde sõ passamos os parametros.

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá Mundo!</Text>
      <StatusBar style="auto" />
    </View> // View é equivalentye a uma div, só que aqui a div não existe porém, tem coisas similares a ela
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    texto: { 
      color: '#ff00ff',
    }
});
