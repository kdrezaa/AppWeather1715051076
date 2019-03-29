import React from 'react';
import { StyleSheet,Text, View, TextInput, Button } from 'react-native';

export default class Cuaca1  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
}
    };
  }
  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
    + this.state.city +
    '&appid=afc75de2138a2300f714527f9bcc431c&units=metric';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      });
  }

  render() {
    return (
      <View style = {{flex:4,backgroundColor:'#b7f4ee'}}>
        <View style={{backgroundColor:'#05a493'}}>
           <Text style = {{padding: 25, fontSize: 20, color: 'white', textAlign:'center'}} >
            Prakiraan Cuaca
          </Text>
         </View>

        <View style={{margin:30,padding: 20,placeholder:'center' , borderRadius: 7,  backgroundColor:'#e3fbfd'}}>


            <TextInput style = {{height: 40}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city)=>this.setState({city})}

            />

            <Button
              onPress={() =>this.getWeather ()}
              title="Lihat"
              accessibilityLabel="Klik Untuk Mencari Kota"
            />
       </View>


        <View style={{margin:30, borderRadius: 7, backgroundColor:'#10d8c3'}}>
          <Text style = {{padding: 10, fontSize: 18}} >
              Temperature =  {this.state.forecast.temp}{'°Celcius \n'}
              Weather     =  {this.state.forecast.main} {"\n"}
              Description = {this.state.forecast.description} {"\n"}

          </Text>
         </View>
         <View style={styles.box3}>
         <Text style={styles.text}></Text>
         </View>
         <View style={styles.box4}>
         <Text style={styles.text}>Kadek Reza Alfionita - 1715051076</Text>
         </View>


   </View>

    );
  }

}
const styles = StyleSheet.create({
  box3: {
    flex: 1, // lebar box lebih besar dari 2
    backgroundColor: '#b7f4ee',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
      fontSize:12
    },
    box4: {
      flex: 0.2, // lebar box lebih besar dari 2
      backgroundColor: '#84d6ce',
      alignItems: 'center',
      justifyContent: 'center',
      },
      text:{
        fontSize:13
      },
});
