import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import HeadingPart from '../../Component/PujariHome/HeadingPart';
import TableComponent from '../../Component/PujariHome/TableComponent';


const PujariEarningsScreen = ({ navigation }) => {
  const tableData1 = [
    { pooja: "Offline", december: 5, november: 12 },
    { pooja: "Online", december: 7, november: 15 },
    { pooja: "Mob", december: 10, november: 12 },
  ];

  const tableData2 = [
    { pooja: "Offline", december: 5, november: 12 },
    { pooja: "Online", december: 7, november: 15 },
    { pooja: "Mob", december: 10, november: 12 },
  ];


  return (
    <View style={styles.container}>
      <HeadingPart navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
        <View>
          <View style={styles.actionContainer}>
            {[
              {
                title: "Total Earnings",
                screen: "EarningBreakdown",
                color: "#CFF7D3",
                icon: "graph",
                iconLib: Octicons,
                iconColor: "#009951",
                iconSize: 20,
                textColor: "#02542D",
                count: 20,
                countColor: "#02542D",
              },
              {
                title: "Monthly Earnings",
                screen: "EarningBreakdown",
                color: "#E8DEF8",
                icon: "calendar",
                iconLib: Foundation,
                iconColor: "#65558F",
                iconSize: 29,
                textColor: "#4B0082",
                count: 19,
                countColor: "#4A4459",
              },
              {
                title: "Pending Payments",
                screen: "EarningBreakdown",
                color: "#FFF1C2",
                icon: "graph",
                iconLib: Octicons,
                iconSize: 20,
                iconColor: "#852221",
                textColor: "#852221",
                count: 8,
                countColor: "#BF6A02",
              },
            ]
              .reduce((rows, item, index, array) => {
                if (index % 3 === 0) {
                  rows.push(array.slice(index, index + 3));
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
                      <item.iconLib name={item.icon} size={item.iconSize} color={item.iconColor} style={styles.icon} />
                      {item.count > 0 && (
                        <View style={styles.count}>
                          <Text style={[styles.countText, { color: item.countColor }]}>{item.count} K</Text>
                        </View>
                      )}
                      <Text style={[styles.actionText, { color: item.textColor }]}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
          </View>
          <TableComponent
            title="Overall Earnings"
            headers={["Poojas", "December", "November"]}
            data={[
              { poojas: "Offline", december: 5, november: 12 },
              { poojas: "Online", december: 7, november: 15 },
              { poojas: "Mob", december: 10, november: 12 },
            ]}
          />
          <TableComponent
            title="Monthly Earnings"
            headers={["Poojas", "December", "November"]}
            data={[
              { poojas: "Offline", december: 5, november: 12 },
              { poojas: "Online", december: 7, november: 15 },
              { poojas: "Mob", december: 10, november: 12 },
            ]}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default PujariEarningsScreen

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
    //paddingHorizontal: hp('1%'),
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('1.2%'),
  },
  actionButton: {
    flex: 1,
    marginHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
    borderRadius: 6,
    alignItems: 'center',
    elevation: 5,
  },
  countText: {
    fontSize: hp('2.5%'),
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
    marginBottom: hp('1%'),

  },
  actionText: {
    fontSize: hp('1.5%'),
    color: '#000',
    textAlign: 'center',
    fontWeight: '500'
  },

})
