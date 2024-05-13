import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <img src='../assets/cafeteriaHome.png' style={styles.fotoHome}/>
      <View style={styles.caixaTitulo}>
        <Text style={styles.Titulo}>O Melhor <Text style={styles.tituloDestaque}>Café</Text> </Text> 
        <Text style={styles.Titulo}>na cidade!</Text>
      </View>
      <View style={styles.caixaBotoes}>
        <TouchableOpacity style={styles.cadastro}>Cadastrar</TouchableOpacity>
        <TouchableOpacity style={styles.entrar}>Entrar</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fotoHome:{
    width:'auto',
  },
  caixaTitulo:{
    alignItems: 'center',
    padding:15
  },
  Titulo:{
    fontSize:30
  },
  tituloDestaque:{
    color:'#B98875'
  },
  caixaBotoes:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:30,
    paddingHorizontal:35
    
  },
  cadastro:{
    backgroundColor:'#B98875',
    borderRadius:24,
    color:'white',
    width:135,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    fontSize:20
  },
  entrar:{
    width:135,
    height:45,
    borderRadius:24,
    borderColor:'#B98875',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    color:'#B98875',
    fontSize:20
  }
});
