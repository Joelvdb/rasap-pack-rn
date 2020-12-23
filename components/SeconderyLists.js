import {AccordionList} from "accordion-collapse-react-native";
import React from 'react';
import { Button,FlatList,Linking, StyleSheet, Text, View } from 'react-native';


class WeaponList extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {
                  id:1,
                  title: 'מטלת תפיסת תפקיד הרס״פ',
                  link:9
                },
        
                {
                  id:2,
                  title: 'תפיסת תפקיד הרס״פ',
                  links:9
                },
        
                {
                    id:3,
                    title: 'מקורות הכח של הרס״פ',
                    links: 9
                  },
        
                  {
                    id:4,
                    title: 'שיחת פתיחה רס״פ',
                    links:9
                  },
                    
                ],
          }
    }

      _head(item){
        return(
            <View style={styles.head}>
              <Text>{item.title}</Text>
              </View>
        );
    }
    
    _body(item){
        return (
            <View style={{padding:10}}>
            </View>
        );
    }
    
    render() {
        return (
          <View style={{flex:1,}}>

              <AccordionList
                style={{marginTop:10,}}
                list={this.state.list}
                header={this._head}
                body={this._body.bind(this)}
                keyExtractor={item => `${item.id}`}
              />


              </View>
        );
    }
    }

class FirstAidList extends React.Component{
  constructor(){
    super()
    this.state={
        list:[
            {
              id:1,
              title: 'ממשקי עבודה בפורום מוביל',
              links:9

            },
    
            {
              id:2,
              title: 'ממשקי עבודה סמ״פ - רס״פ',
              links:9

            },
    
            {
                id:3,
                title: 'ממשקי עבודה עם סמלים',
                links: 9
              },

              {
                id:4,
                title: 'בניית תדריך וניהול ישיבת פרל״ג',
                links: 9
              },
              {
                id:5,
                title: 'תפיסת חניכת סגל',
                links: 9
              },
            ],
      }
}

  _head(item){
    return(
        <View style={styles.head}>
          <Text>{item.title}</Text>
          </View>
    );
}

_body(item){
    return (
        <View style={{padding:10}}>
        </View>
    );
}

render() {
    return (
          <AccordionList
            list={this.state.list}
            header={this._head}
            body={this._body.bind(this)}
            keyExtractor={item => `${item.id}`}
          />
    );
}
}

class SoulList extends React.Component{
  constructor(){
    super()
    this.state={
        list:[
            {
              id:1,
              title: 'מודל תסחים, מסדרי הנפה והשבעות',
              links:9
            },
    
            {
              id:2,
              title: 'דמ״שים, משפטים וכתיבת טפסי תלונה',
              links: 9

            },
    
            {
                id:3,
                title: 'ניהול מלאי פלוגתי',
                links: 9

              },

              {
                id:4,
                title: 'היערכות הרס״פ למשימות במחזור ',
                links: 9
              },
              {
                id:5,
                title: 'אירגון וניהול הלוגיסטיקה בפלוגה',
                links: 9
              },
            {
              id:6,
              title: 'המענה הלוגיסטי לחייל',
              links: 9

            },

            
          {
          id:7,
          title: 'עבודה מול גורמי בסיס',
          links: 9
        },

            

            ],
      }
}

  _head(item){
    return(
        <View style={styles.head}>
          <Text>{item.title}</Text>
          </View>
    );
}

_body(item){
    return (
        <View style={{padding:10}}>
        </View>
    );
}

render() {
    return (
          <AccordionList
            list={this.state.list}
            header={this._head}
            body={this._body.bind(this)}
            keyExtractor={item => `${item.id}`}
          />
    );
}
}
class OpenTalkList extends React.Component{
  constructor(){
    super()
    this.state={
      DATA:[1,2,3],
        list:[
            {
              id:1,
              title: 'שיחת פתיחה רב',
              link:'https://www.youtube.com/watch?v=k80fE9hdhbc&t=19s&ab_channel=%D7%9E%D7%A2%D7%A8%D7%9A%D7%9E%D7%92%D7%9C'
            },
            {
              id:2,
              title: 'שיחת פתיחה מפקד מרפאה',
              link:'https://www.youtube.com/watch?v=94VeACkPkI0&ab_channel=%D7%9E%D7%A2%D7%A8%D7%9A%D7%9E%D7%92%D7%9C'
            },
            {
              id:3,
              title: 'שיחת פתיחה רס"ר',
              link:'https://www.youtube.com/watch?v=AGTVSf8YIO4&t=21s&ab_channel=%D7%9E%D7%A2%D7%A8%D7%9A%D7%9E%D7%92%D7%9C'
            },
            {
              id:4,
              title:  'שיחת פתיחה רס"ר- בנים',
              link:'https://www.youtube.com/watch?v=ldTpLl9SqBA&ab_channel=%D7%9E%D7%A2%D7%A8%D7%9A%D7%9E%D7%92%D7%9C'
            },
            {
              id:5,
              title:  'שיחת פתיחה רס"ר- בנות',
              link:'https://www.youtube.com/watch?v=RLeEU2cueq8&ab_channel=%D7%9E%D7%A2%D7%A8%D7%9A%D7%9E%D7%92%D7%9C'
            },
            ],
      }
}

  _head(item){
    return(
        <View style={styles.head}>
          <Text>{item.title}</Text>
          </View>
    );
}

_body(item){
    return (
        <View style={{padding:10}}>
        </View>
    );
}

render() {
    return (
      <FlatList
      data={this.state.list}
      renderItem={({item, index}) => ( 
      <View style={{marginTop:10,}}>
      <Button 
        style={styles.head} 
        onPress={()=>Linking.openURL(item.link)}
        title={item.title}
        /> 
        </View>)}
      keyExtractor={(item) => item.id}
      />
    
    );
}
}

    const styles = StyleSheet.create({
      head: {
        padding:5,
        borderRadius:10,
        backgroundColor:'#f7f7ff',
        margin:6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
    });

    export {FirstAidList , WeaponList, SoulList,OpenTalkList};