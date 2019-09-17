import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import imageData from './data'

const ImagesLayout = () => {
  return (
    <ScrollView>
      <View style={styles.wrappper}>
        {
          imageData.map(image => {
            return (
              <View key={image.id} style={styles.viewItem}>
                <Image style={styles.viewImage} source={ image.url }></Image>
                <Text style={styles.viewText}>{image.text}</Text>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrappper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  viewItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: 110,
    height: 146,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  viewImage: {
    marginBottom: 10,
    width: 90, 
    height: 100,
    borderRadius: 2,
  },
  viewText: {
    color: '#3E7FEE',
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default ImagesLayout
