import { AccordionList } from "accordion-collapse-react-native";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WeaponList, FirstAidList, SoulList,OpenTalkList} from './SeconderyLists';
import { Ionicons } from '@expo/vector-icons';



class MainList extends React.Component {
  state = {
    list: [
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
          <Ionicons name={item.icon} size={32} color="green" /> 
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