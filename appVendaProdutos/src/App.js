import React from 'react';
import {SafeAreaView, View, Text, FlatList, Image} from 'react-native';
import produto from '../utils/data';
import styles from './styles/styles';

function VendaProdutos() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Anúncios </Text>
      </View>
      <FlatList
        data={produto}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.nome}</Text>
            <Text style={styles.textPrice}>{item.preco}</Text>
            <Image
              style={styles.image}
              source={{
                uri: item.imagem,
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default VendaProdutos;
