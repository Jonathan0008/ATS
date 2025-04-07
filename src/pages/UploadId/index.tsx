import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput as TxInput,
  Image,
} from 'react-native';
import { Gap } from '../../components';
import {
  BackButton,
  Kategori,
  Keterangan,
  Lokasi,
  Submit,
} from '../../assets/icon';
import { Previewfoto } from '../../assets/Image/index';

const UploadId = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BackButton style={styles.BackBtn} />
        </TouchableOpacity>
        <Text style={styles.HeadText}>Postingan Baru</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Submit style={styles.Next} />
        </TouchableOpacity>
      </View>
      <Gap height={6} />
      <Image source={Previewfoto} style={styles.Imagecenter} />
      <View>
        <Gap height={10} />
        <View style={styles.flax}>
          <Keterangan style={styles.Keterangan} />
          <View>
            <Text style={styles.StylKeterangan}>Keterangan</Text>
            <TxInput style={styles.txInputStyl}>
              Deskripsikan postingan anda di sini...
            </TxInput>
          </View>
        </View>
        <View style={styles.flax}>
          <Lokasi style={styles.Keterangan} />
          <View>
            <Text style={styles.StylKeterangan}>Lokasi</Text>
            <TxInput style={styles.txInputStyl}>
              Masukan lokasi anda di sini...
            </TxInput>
          </View>
        </View>
        <View style={styles.flax}>
          <Kategori style={styles.Keterangan} />
          <View>
            <Text style={styles.StylKeterangan}>Kategori</Text>
            <View style={styles.flax}>
              <Text style={styles.Organikkate}>Organik</Text>
              <Text style={styles.Anorganikkate}>Anorganik</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UploadId;

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
  BackBtn: {
    marginLeft: 20,
    marginVertical: 20,
  },
  HeadText: {
    marginLeft: 20,
    marginRight: 170,
    marginVertical: 20,
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
  flaxnBorder: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  imageup: {
    marginLeft: 11,
  },
  Keterangan: {
    marginLeft: 44,
    marginTop: 30,
    marginRight: 22,
  },
  StylKeterangan: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  txInputStyl: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginRight: 100,
    borderBottomWidth: 1,
  },
  Organikkate: {
    color: '#E9EFEC',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    paddingVertical: 3,
    backgroundColor: '#16423C',
    borderRadius: 24,
    width: 110,
    height: 30,
    marginRight: 8,
  },
  Anorganikkate: {
    color: '#16423C',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    paddingVertical: 3,
    backgroundColor: '#E9EFEC',
    borderRadius: 24,
    width: 110,
    height: 30,
    marginLeft: 8,
  },
});
