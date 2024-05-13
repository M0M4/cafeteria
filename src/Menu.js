import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.caixaTitulo}>
        <Text style={styles.Titulo}> Escolha o seu Café </Text> 
      </View>
      <View>
        <TouchableOpacity style={styles.caixas}>
          <View style={styles.desc}> <img src='../assets/p1.png' style={styles.fotos}/> <Text style={styles.text}>Espresso</Text> </View>
          <View><img src='../assets/flecha.png' style={styles.flecha}/></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.caixas}>
          <View style={styles.desc}> <img src='../assets/p2.png' style={styles.fotos}/> <Text style={styles.text}>Cappuccino</Text> </View>
          <View><img src='../assets/flecha.png' style={styles.flecha}/></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.caixas}>
          <View style={styles.desc}> <img src='../assets/p3.png' style={styles.fotos2}/> <Text style={styles.text}>Macchiato</Text> </View>
          <View><img src='../assets/flecha.png' style={styles.flecha}/></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.caixas}>
          <View style={styles.desc}> <img src='../assets/p4.png' style={styles.fotos2}/> <Text style={styles.text}>Mocha</Text> </View>
          <View><img src='../assets/flecha.png' style={styles.flecha}/></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.caixas}>
          <View style={styles.desc}> <img src='../assets/p5.png' style={styles.fotos2}/> <Text style={styles.text}>Latte</Text> </View>
          <View><img src='../assets/flecha.png' style={styles.flecha}/></View>
        </TouchableOpacity>
      </View>
      <footer>
        <View style={styles.caixaf}>
        <TouchableOpacity style={styles.caixasf}>
          <View><img src='../assets/home.png' style={styles.ftfoo}/></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.caixasf}>
          <View><img src='../assets/local.png' style={styles.ftfoo2}/></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.caixasf}>
          <View><img src='../assets/copo.png' style={styles.ftfoo}/></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.caixasf}>
          <View><img src='../assets/conta.png' style={styles.ftfoo}/></View>
        </TouchableOpacity>
        </View>
      </footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF4EE',
    padding:0
  },
  caixaTitulo:{
    paddingTop:25,
    paddingStart:15
  },
  Titulo:{
    color:'#B98875',
    fontSize:28,
    fontWeight:'700'
  },
  caixas:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    padding:25
  },
  desc:{
    fontSize:19,
    flexDirection:'row',
    alignItems:'center',
  },
  fotos:{
    width:48
  },
  fotos2:{
    width:40
  },
  flecha:{
    width:26,
  },
  text:{
    fontSize:22,
    marginLeft:20,
    marginTop:15
  },
  caixaf:{
    backgroundColor:'white',
    height:80,
    flexDirection:'row',
    justifyContent:'space-around',
    borderStartEndRadius:30,
    borderTopStartRadius:30,
    alignItems:'center'
  },
  caixasf:{
    // padding:18
  },
  ftfoo:{
    width:25
  },
  ftfoo2:{
    width:19
  }

});