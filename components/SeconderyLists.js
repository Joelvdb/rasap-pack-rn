import {AccordionList} from "accordion-collapse-react-native";
import React from 'react';
import { Button,FlatList,Linking, StyleSheet, Text, View,TouchableOpacity } from 'react-native';


class WeaponList extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {
                  id:1,
                  title: 'מטלת תפיסת תפקיד הרס״פ',
                  links:'https://drive.google.com/file/d/1HDi84QmL40px9qgAXPjB6O5BJQOxRM4J/view?usp=sharing'
                },
        
                {
                  id:2,
                  title: 'תפיסת תפקיד הרס״פ',
                  links:'https://drive.google.com/file/d/1ofHnG9vDPcIB8bwH1rqsTl4f1RDxewNk/view?usp=sharing'
                },
        
                {
                    id:3,
                    title: 'מקורות הכח של הרס״פ',
                    links: 'https://drive.google.com/file/d/12JDDtrOLX8p2suPLvUuTvSJ_Am4Vu4tK/view?usp=sharing'
                  },
        
                  {
                    id:4,
                    title: 'שיחת פתיחה רס״פ',
                    links:'https://drive.google.com/file/d/1sfpUl_FRY7SAHfEh49ueoTjsOQrfWS89/view?usp=sharing'
                  },
                    
                ],
          }
    }

      _head(item){
        return(
          <TouchableOpacity                 
          onPress={()=>Linking.openURL(item.links)}
           style={styles.head} >
              <Text>{item.title}</Text>
              </TouchableOpacity>
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
              links:'https://drive.google.com/file/d/1Ncg-ipClAwj02bu79okxUvrZ_7_iPBoC/view'

            },
    
            {
              id:2,
              title: 'ממשקי עבודה סמ״פ - רס״פ',
              links:'https://drive.google.com/file/d/1JqNfKlm0FwKwK4mYKziHbVhM8x3Hr7Og/view?usp=sharing'

            },
    
            {
                id:3,
                title: 'ממשקי עבודה עם סמלים',
                links: 'https://drive.google.com/file/d/1spA1Ru6YTGjr5a-n3i6_lB_h9ZdWuhjm/view?usp=sharing'
              },

              {
                id:4,
                title: 'בניית תדריך וניהול ישיבת פרל״ג',
                links: 'https://drive.google.com/file/d/1BOwHJnvmpwz5s9Y1kF7KvlUqQUB222lo/view?usp=sharing'
              },
              {
                id:5,
                title: 'תפיסת חניכת סגל',
                links: 'https://drive.google.com/file/d/10lhz6Ezb6o3mPfmyAN1tL3G_QnQimM5X/view?usp=sharing'
              },
            ],
      }
}

  _head(item){
    return(
      <TouchableOpacity                 
      onPress={()=>Linking.openURL(item.links)}
       style={styles.head} >
          <Text>{item.title}</Text>
          </TouchableOpacity>
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
              links:'https://drive.google.com/file/d/1D4yRKVy3MMtZob07hWZDXxQuw__dhI7y/view?usp=sharing'
            },
    
            {
              id:2,
              title: 'דמ״שים, משפטים וכתיבת טפסי תלונה',
              links: 'https://drive.google.com/file/d/1sqKwEXKWRUyZmhtw8tjHd0rorrTWTN4_/view?usp=sharing'

            },
    
            {
                id:3,
                title: 'ניהול מלאי פלוגתי',
                links: 'https://drive.google.com/file/d/1WV6ke-S9R36JwoB92nyzoOYED_L9W-dX/view?usp=sharing'

              },

              {
                id:4,
                title: 'היערכות הרס״פ למשימות במחזור ',
                links: 'https://drive.google.com/file/d/14TZsKOxunyZLqzqfzr1Oywf9gKg4hVpc/view?usp=sharing'
              },
              {
                id:5,
                title: 'אירגון וניהול הלוגיסטיקה בפלוגה',
                links: 'https://drive.google.com/file/d/16UsXIe35rz76LtjBCY0eEZ6-SphMtfXQ/view'
              },
            {
              id:6,
              title: 'המענה הלוגיסטי לחייל',
              links: 'https://drive.google.com/file/d/10UPOfKKtAgTxvpHX56F6JN80MGm4yn9k/view?usp=sharing'

            },

            
          {
          id:7,
          title: 'עבודה מול גורמי בסיס',
          links: 'https://drive.google.com/file/d/13UTbh36RHUEHq7xPEyk2qR9MJB0I0Ws9/view?usp=sharing'
        },

            

            ],
      }
}

  _head(item){
    return(
      <TouchableOpacity                 
      onPress={()=>Linking.openURL(item.links)}
       style={styles.head} >
          <Text>{item.title}</Text>
          </TouchableOpacity>
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
      <TouchableOpacity                 
      onPress={()=>Linking.openURL(item.link)}
       style={styles.head} >
          <Text>{item.title}</Text>
          </TouchableOpacity>
    );
}

_body(item){
    return (
        <View style={{padding:10}}>
          <Button 
        style={styles.head} 
        onPress={()=>Linking.openURL(item.link)}
        title={item.title}
        /> 
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