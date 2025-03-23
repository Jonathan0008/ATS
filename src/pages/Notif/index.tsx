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
import BACK from '../../assets/icon/ion_chevron-back.svg';
import Prof from '../../assets/icon/ppBlack.svg';

const Notif = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerNotif}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BACK style={styles.Back} />
        </TouchableOpacity>
        <Text style={styles.Notif}>Notifications</Text>
        <View style={styles.eclipse}>
          <Text style={styles.notificationNumber}>2</Text>
        </View>
      </View>
      <Gap height={23} />
      <View>
        <View style={styles.line} />
        <Gap height={23} />
        <View style={styles.containerNotif}>
          <Prof style={styles.prof} />
          <Text style={styles.text2}>
            <Text style={styles.Name}>Clau</Text> ingin mengambil barang yang
            anda posting
          </Text>
        </View>
        <Gap height={23} />
        <View style={styles.containerNotif}>
          <Prof style={styles.prof} />
          <Text style={styles.text2}>
            <Text style={styles.Name}>Gerry</Text> ingin mengambil barang yang
            anda posting
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerNotif: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  eclipse: {
    height: 20,
    width: 20,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    borderRadius: 48,
    marginLeft: 20,
  },
  notificationNumber: {
    fontFamily: 'Poppins-Regular',
  },
  containPage: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 28,
    paddingRight: 120,
  },
  Back: {
    marginLeft: 20,
  },
  Notif: {
    marginLeft: 98,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#16423C',
  },
  prof: {
    marginLeft: 23,
  },
  text1: {
    marginLeft: 23,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#100101',
  },
  text2: {
    marginLeft: 32,
    fontSize: 11,
    fontWeight: 'bold',
    color: '#100101',
  },
  line: {
    height: 1,
    width: 390,
    backgroundColor: '#16423C',
  },
  Name: {
    color: '#16423C',
    fontFamily: 'Poppins-Bold'
  },
});
