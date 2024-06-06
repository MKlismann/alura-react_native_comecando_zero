import { SafeAreaView, StatusBar } from 'react-native';
import Cesta from './src/telas/Cesta.js';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
