
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import Octicons from 'react-native-vector-icons/Octicons';
import HeadingPart from '../../Component/PujariHome/HeadingPart';
import TableComponent from '../../Component/PujariHome/TableComponent';

const PujariAnalyticsScreen = ({ navigation }) => {
  const tableData1 = [
    { pooja: "Rahu-ketu", december: 5, november: 12 },
    { pooja: "Wealth", december: 7, november: 15 },
    { pooja: "Ghar-shanti", december: 10, november: 12 },
  ];

  const tableData2 = [
    { pooja: "Online Pooja 1", december: 8, november: 10 },
    { pooja: "Online Pooja 2", december: 5, november: 9 },
  ];

  const tableData3 = [
    { pooja: "Mob Pooja 1", december: 3, november: 7 },
    { pooja: "Mob Pooja 2", december: 6, november: 4 },
  ];

  return (
    <View style={styles.container}>
      <HeadingPart navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={{ paddingHorizontal: hp('0.5%') }}>
          <View style={styles.actionContainer}>
            {[
              {
                title: "Offline poojas",
                screen: "CompletedPoojaScreen",
                color: "#CFF7D3",
                icon: "graph",
                iconLib: Octicons,
                iconColor: "#009951",
                textColor: "#02542D",
                count: 20,
                countColor: "#02542D",
              },
              {
                title: "Online poojas",
                screen: "CompletedPoojaScreen",
                color: "#E8DEF8",
                icon: "graph",
                iconLib: Octicons,
                iconColor: "#65558F",
                textColor: "#4B0082",
                count: 19,
                countColor: "#4A4459",
              },
              {
                title: "   Mob Poojas",
                screen: "CompletedPoojaScreen",
                color: "#FFF1C2",
                icon: "graph",
                iconLib: Octicons,
                iconColor: "#852221",
                textColor: "#852221",
                count: 8,
                countColor: "#BF6A02",
              },
              {
                title: "  Feedbacks",
                screen: "CompletedPoojaScreen",
                color: "#FFDAD7",
                icon: "graph",
                iconLib: Octicons,
                iconColor: "#BF6A02",
                textColor: "#522504",
                count: 15,
                countColor: "#975102",
              }
            ]
              .reduce((rows, item, index, array) => {
                if (index % 2 === 0) {
                  rows.push(array.slice(index, index + 2)); // Group into pairs of 2
                }
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <View key={rowIndex} style={styles.actionRow}>
                  {row.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[styles.actionButton, { backgroundColor: item.color }]}
                      onPress={() => navigation.navigate(item.screen)}
                    >
                      {item.count > 0 && (
                        <View style={styles.count}>
                          <Text style={[styles.countText, { color: item.countColor }]}>{item.count}</Text>
                        </View>
                      )}

                      <View style={styles.rowContainer}>
                        <View style={styles.iconTitleContainer}>
                          <item.iconLib name={item.icon} size={18} color={item.iconColor} style={styles.icon} />
                          <Text style={[styles.actionText, { color: item.textColor }]}>{item.title}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
          </View>
          <TableComponent
            title="Offline Poojas"
            headers={["Poojas", "December", "November"]}
            data={[
              { poojas: "Rahu-ketu", december: "10", november: "12" },
              { poojas: "Wealth", december: "5", november: "8" },
              { poojas: "Ghar-shanti", december: "10", november: "12" },
              { poojas: "Satya-narayan", december: "5", november: "8" },
            ]}
          />

          <TableComponent
            title="Online Poojas"
            headers={["Poojas", "December", "November"]}
            data={[
              { poojas: "Rahu-ketu", december: "10", november: "12" },
              { poojas: "Wealth", december: "5", november: "8" },
              { poojas: "Ghar-shanti", december: "10", november: "12" },
              { poojas: "Satya-narayan", december: "5", november: "8" },
            ]}
          />

          <TableComponent
            title="Mob Poojas"
            headers={["Poojas", "December", "November"]}
            data={[
              { poojas: "Rahu-ketu", december: "10", november: "12" },
              { poojas: "Wealth", december: "5", november: "8" },
              { poojas: "Ghar-shanti", december: "10", november: "12" },
              { poojas: "Satya-narayan", december: "5", november: "8" },
            ]}
          />


        </View>
      </ScrollView>
    </View>
  )
}

export default PujariAnalyticsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: hp('7%'),
    backgroundColor: '#fff'
  },
  scrollContainer: {
    padding: hp('1.4%')
  },
  actionContainer: {
    paddingHorizontal: hp('1%'),
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('1.2%'),
  },
  actionButton: {
    flex: 1,
    marginHorizontal: wp('2%'),
    paddingVertical: hp('3%'),
    borderRadius: 6,
    alignItems: 'center',
    elevation: 5,
  },
  countText: {
    fontSize: hp('3.5%'),
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  iconTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  icon: {
    marginLeft: hp('1%'),
  },
  actionText: {
    fontSize: hp('1.7%'),
    color: '#000',
    textAlign: 'center',
    fontWeight: '500'
  },

})
