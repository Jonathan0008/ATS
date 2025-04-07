import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput as TxInput,
} from 'react-native';
import {Gap} from '../../components';
import Next from '../../assets/icon/next.svg';
import Cancel from '../../assets/icon/cancel.svg';
import Center from '../../assets/icon/gambarcenter.svg';
import Img from '../../assets/icon/img.svg';

const UploadSi = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Cancel style={styles.cancel} />
        </TouchableOpacity>
        <Text style={styles.HeadText}>Postingan Baru</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UploadId')}>
          <Next style={styles.Next} />
        </TouchableOpacity>
      </View>
      <Gap height={6} />
      <View>
        <Center style={styles.Imagecenter} />
        <Text style={styles.text1}>Terbaru</Text>
      </View>
      <ScrollView>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
        <View style={styles.flax}>
          <Img style={styles.imageup} />
          <Img />
          <Img />
        </View>
      </ScrollView>
    </View>
  );
};

export default UploadSi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EFEC',
  },
  Header: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 60,
  },
  cancel: {
    marginLeft: 17,
    marginVertical: 15,
  },
  HeadText: {
    marginLeft: 5,
    marginRight: 170,
    marginVertical: 15,
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    color: '#16423C',
  },
  Next: {
    marginVertical: 15,
  },
  Imagecenter: {
    alignSelf: 'center',
  },
  text1: {
    marginVertical: 10,
    marginLeft: 28,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#16423C',
  },
  flax: {
    flexDirection: 'row',
  },
  imageup: {
    marginLeft: 11,
  },
});
