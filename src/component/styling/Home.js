import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  SectionList
} from 'react-native';

import {
  Card,
  Icon
} from 'native-base';

// const data = [
//   {
//     title: 'Group A',
//     data: [
//       {
//         name: 'Russia',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/900px-Flag_of_Russia.png',
//         id: 1,
//         toFinal: true
//       },
//       {
//         name: 'Saudi Arabia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/750px-Flag_of_Saudi_Arabia.png',
//         id: 2,
//         toFinal: true
//       },
//       {
//         name: 'Egypt',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/900px-Flag_of_Egypt.png',
//         id: 3,
//         toFinal: false
//       },
//       {
//         name: 'Uruguay',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/900px-Flag_of_Uruguay.png',
//         id: 4,
//         toFinal: false
//       }
//     ]
//   },
//   {
//     title: 'Group B',
//     data: [
//       {
//         name: 'Portugal',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.png',
//         id: 1,
//         toFinal: true
//       },
//       {
//         name: 'Spain',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.png',
//         id: 2,
//         toFinal: true
//       },
//       {
//         name: 'Morocco',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/900px-Flag_of_Morocco.png',
//         id: 3,
//         toFinal: false
//       },
//       {
//         name: 'Iran',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.png',
//         id: 4,
//         toFinal: false
//       }
//     ]
//   },
//   {
//     title: 'Group C',
//     data: [
//       {
//         name: 'France',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.png',
//         id: 1,
//         toFinal: true
//       },
//       {
//         name: 'Australia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.png',
//         id: 2,
//         toFinal: true
//       },
//       {
//         name: 'Peru',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/900px-Flag_of_Peru_%28state%29.png',
//         id: 3,
//         toFinal: false
//       },
//       {
//         name: 'Denmark',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/740px-Flag_of_Denmark.png',
//         id: 4,
//         toFinal: false
//       }
//     ]
//   },
//   {
//     title: 'Group D',
//     data: [
//       {
//         name: 'Argentina',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.png',
//         id: 1,
//         toFinal: true
//       },
//       {
//         name: 'Iceland',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.png',
//         id: 2,
//         toFinal: true
//       },
//       {
//         name: 'Croatia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/800px-Flag_of_Croatia.png',
//         id: 3,
//         toFinal: false
//       },
//       {
//         name: 'Nigeria',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/800px-Flag_of_Nigeria.png',
//         id: 4,
//         toFinal: false
//       }
//     ]
//   },
//   {
//     title: 'Group E',
//     data: [
//       {
//         name: 'Brazil',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/720px-Flag_of_Brazil.png',
//         id: 1,
//         toFinal: true
//       },
//       {
//         name: 'Switzerland',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/320px-Flag_of_Switzerland_%28Pantone%29.png',
//         id: 2,
//         toFinal: true
//       },
//       {
//         name: 'Costa Rica',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/833px-Flag_of_Costa_Rica_%28state%29.png',
//         id: 3,
//         toFinal: false
//       },
//       {
//         name: 'Serbia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1350px-Flag_of_Serbia.png',
//         id: 4,
//         toFinal: false
//       }
//     ]
//   },
//   {
//     title: 'Group F',
//     data: [
//       {
//         name: 'Germany',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.png',
//         id: 1,
//         toFinal: true
//       },
//       {
//         name: 'Mexico',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.png',
//         id: 2,
//         toFinal: true
//       },
//       {
//         name: 'Sweden',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.png',
//         id: 3,
//         toFinal: false
//       },
//       {
//         name: 'South Korea',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/900px-Flag_of_South_Korea.png',
//         id: 4,
//         toFinal: false
//       }
//     ]
//   },
//   {
//     title: 'Group G',
//     data: [
//       {
//         name: 'Belgium',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/450px-Flag_of_Belgium.png',
//         id: 1,
//         toFinal: true
//       },
//       {
//         name: 'Panama',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/450px-Flag_of_Panama.png',
//         id: 2,
//         toFinal: true
//       },
//       {
//         name: 'Tunisia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.png',
//         id: 3,
//         toFinal: false
//       },
//       {
//         name: 'England',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/800px-Flag_of_England.png',
//         id: 4,
//         toFinal: false
//       }
//     ]
//   },
//   {
//     title: 'Group H',
//     data: [
//       {
//         name: 'Poland',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.png',
//         id: 1,
//         toFinal: true
//       },
//       {
//         name: 'Senegal',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
//         id: 2,
//         toFinal: true
//       },
//       {
//         name: 'Colombia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/450px-Flag_of_Colombia.png',
//         id: 3,
//         toFinal: false
//       },
//       {
//         name: 'Japan',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/900px-Flag_of_Japan.png',
//         id: 4,
//         toFinal: false
//       }
//     ]
//   },

// ]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://firebasestorage.googleapis.com/v0/b/worldcup-38bc3.appspot.com/o/WorldCupSchedule.json?alt=media&token=de44e4f8-cfed-404a-aeb6-a2f0af9b7b1a')
      .then((response) => response.json())
      .then((responseJson) => {
        // alert(responseJson.success)
        if (responseJson.success === true) {
          this.setState({ data: responseJson.result })
        }
      })
      .catch((error) => {
        // alert(error)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={({ item, index }) => {
            return (
              <Card>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                  <Text style={{ fontSize: 18, flex: 5 }}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', flex: 3 }}>
                    <Text style={{ fontSize: 16, flex: 1, textAlign: 'center' }}>P.</Text>
                    <Text style={{ fontSize: 16, flex: 1, textAlign: 'center' }}>Gd.</Text>
                    <Text style={{ fontSize: 16, flex: 1, textAlign: 'center' }}>Pts.</Text>

                  </View>
                </View>

                {item.data.map((mItem) => {
                  return (
                    <View style={{ padding: 10, flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <Text style={{
                          width: 30,
                          height: 30,
                          borderRadius: 25,
                          borderColor: mItem.toFinal ? '#1aff1a' : 'white',
                          borderWidth: 1,
                          backgroundColor: mItem.toFinal ? '#e6ffe6' : 'white',
                          textAlign: 'center',
                          textAlignVertical: 'center'
                        }}>{mItem.id}</Text>
                        <Image
                          source={{ uri: mItem.flag }}
                          style={{ width: 30, height: 30, borderRadius: 25, borderColor: 'blue', borderWidth: StyleSheet.hairlineWidth, marginLeft: 15 }}
                        />

                      </View>
                      <View style={{ flex: 3, marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 15, flex: 1 }}>
                          <Text style={{ fontSize: 16, color: 'black', flex: 3, }}>{mItem.name}</Text>
                          <Text style={{ fontSize: 16, color: 'black', flex: 1, textAlign: 'center' }}>0</Text>
                          <Text style={{ fontSize: 16, color: 'black', flex: 1, textAlign: 'center' }}>0</Text>
                          <Text style={{ fontSize: 16, color: 'black', flex: 1, textAlign: 'center' }}>0</Text>
                        </View>
                        <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: 'grey' }} />

                      </View>

                    </View>
                  )
                })}
              </Card>
            )
          }}

          data={this.state.data}
          keyExtractor={(item, index) => item + index}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 3,
  },
});