import { AccordionList } from "accordion-collapse-react-native";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import {WeaponList, FirstAidList, SoulList,OpenTalkList} from './SeconderyLists';
import { Ionicons } from '@expo/vector-icons';



class MainList extends React.Component {
  state = {
    list: [
      {
        id: 0,
        title: 'לו״ז שבועי',
        icon:'list',
        body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
      },
      {
        id: 4,
        title: 'סימולציות',
        icon:'walk',
        body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
      },
      {
        id: 1,
        title: 'תפיסת תפקיד הרס״פ',
        icon:'hand-left-outline',
        body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
      },

      {
        id: 2,
        title: 'עבודה מול בעלי תפקידים',
        icon:'people-outline',
        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
      },

      {
        id: 3,
        title: 'ניהול שגרה ומשמעת וניהול לוגיסטי',
        icon:'clipboard-outline',
        body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
      },






    ],
  }
  _head(item) {
    if(item.id==0){
      return (
        <TouchableOpacity style={{
            flexDirection:'row-reverse',
            flex:1,
          margin:10,
          borderRadius: 10,
          backgroundColor: '#ede0d4',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
  
          elevation: 5,
        }}
        onPress={()=>Linking.openURL('https://drive.google.com/file/d/1GR97aC3rBcQ2ghLsRLr2S-3nN1N0qPVr/view?usp=sharing')}>
            <Ionicons name={item.icon} size={32} color="green" style={{marginTop:5}} /> 
          <Text style={{ padding: 10, fontWeight: '400',fontSize:20 }}>{item.title}</Text>
        </TouchableOpacity>
      );
    }
    if(item.id==4){
      return (
        <TouchableOpacity style={{
            flexDirection:'row-reverse',
            flex:1,
          margin:10,
          borderRadius: 10,
          backgroundColor: '#ede0d4',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
  
          elevation: 5,
        }}
        onPress={()=>Linking.openURL('https://drive.google.com/file/d/1EUdj5Fn9YzJLV28b4I1t6p72hHCcfrrd/view?usp=sharing')}>
            <Ionicons name={item.icon} size={32} color="green" style={{marginTop:5}} /> 
          <Text style={{ padding: 10, fontWeight: '400',fontSize:20 }}>{item.title}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={{
          flexDirection:'row-reverse',
          flex:1,
        margin:10,
        borderRadius: 10,
        backgroundColor: '#ede0d4',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
          <Ionicons name={item.icon} size={32} color="green" style={{marginTop:5}}/> 
        <Text style={{ padding: 10, fontWeight: '400',fontSize:20 }}>{item.title}</Text>
      </View>
    );
  }

  _body(item) {
    return (
      <View style={{ padding: 10 }}>
        {item.id == 1 && <WeaponList />}
        {item.id == 2 && <FirstAidList />}
        {item.id == 3 && <SoulList />}
        
      </View>
    );
  }

  render() {
    return (
      <AccordionList
        style={{}}
        list={this.state.list}
        header={this._head}
        body={this._body}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
}
export default MainList;