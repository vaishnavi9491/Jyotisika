// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const TableComponent = ({ title, data }) => {
//   return (
//     <View style={styles.tableContainer}>
//       <View style={{ flexDirection: 'row', marginBottom: hp('2%') }}>
//         <Text style={styles.tableTitle}>{title}</Text>
//         <TouchableOpacity style={styles.filter}>
//           <MaterialIcons name="filter-list" size={20} color="black" style={styles.filterIcon} />
//           <Text style={styles.filterText}>Filter</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Table Header */}
//       <View style={[styles.tableRow, styles.tableHeader]}>
//         <Text style={[styles.tableCell, styles.tableHeaderText]}>Poojas</Text>
//         <Text style={[styles.tableCell, styles.tableHeaderText]}>December</Text>
//         <Text style={[styles.tableCell, styles.tableHeaderText]}>November</Text>
//       </View>

//       {/* Table Data Rows */}
//       {data.map((item, index) => (
//         <View key={index} style={[styles.tableRow, index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd]}>
//           <Text style={styles.tableCell}>{item.pooja}</Text>
//           <Text style={styles.tableCell}>{item.december}</Text>
//           <Text style={styles.tableCell}>{item.november}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tableContainer: {
//     marginVertical: hp('2%'),
//     backgroundColor: "#F2F2F7",
//     borderRadius: 10,
//     padding: hp('2%'),
//   },
//   tableTitle: {
//     fontSize: hp('2%'),
//     fontWeight: "bold",
//     marginBottom: hp('1%'),
//     textAlign: "center",
//     color: '#000',
//     marginRight: hp('15%'),
//   },
//   tableRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   tableHeader: {
//     backgroundColor: "#EFEFEF",
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     borderBottomWidth: 2,
//   },
//   tableHeaderText: {
//     fontSize: hp('1.8%'),
//     fontWeight: "bold",
//     flex: 1,
//     textAlign: "center",
//     paddingVertical: hp('1.5%'),
//     borderWidth: 1,
//     borderColor: "#ccc",
//     color: '#000'
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: "center",
//     fontSize: hp('1.6%'),
//     paddingVertical: hp('1%'),
//     borderWidth: 1,
//     borderColor: "#ccc",
//     color: '#000'
//   },
//   tableRowEven: {
//     backgroundColor: "#fff",
//   },
//   tableRowOdd: {
//     backgroundColor: "#CFF7D3",
//   },
//   filter: {
//     backgroundColor: '#E8DEF8',
//     flexDirection: 'row',
//     padding: hp('0.5%'),
//     gap: 5,
//     borderRadius: 8
//   },
//   filterText: {
//     color: '#000',
//     fontWeight: '500'
//   }
// });

// export default TableComponent;



import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TableComponent = ({ title = "Table", headers = [], data = [] }) => {
  return (
    <View style={styles.tableContainer}>
      {/* Table Header Section */}
      <View style={styles.tableHeaderContainer}>
        <Text style={styles.tableTitle}>{title}</Text>
        <TouchableOpacity style={styles.filter}>
          <MaterialIcons name="filter-list" size={20} color="black" style={styles.filterIcon} />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Check if headers exist */}
      {headers.length > 0 ? (
        <>
          {/* Table Column Headers */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            {headers.map((header, index) => (
              <Text key={index} style={[styles.tableCell, styles.tableHeaderText]}>
                {header}
              </Text>
            ))}
          </View>

          {/* Table Data Rows */}
          {data.length > 0 ? (
            data.map((item, rowIndex) => (
              <View
                key={rowIndex}
                style={[styles.tableRow, rowIndex % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd]}
              >
                {headers.map((header, colIndex) => (
                  <Text key={colIndex} style={styles.tableCell}>
                    {item[header.toLowerCase()] || "-"} {/* Default to '-' if value is missing */}
                  </Text>
                ))}
              </View>
            ))
          ) : (
            <Text style={styles.noDataText}>No data available</Text>
          )}
        </>
      ) : (
        <Text style={styles.noDataText}>No headers provided</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginVertical: hp('2%'),
    backgroundColor: "#F2F2F7",
    borderRadius: 10,
    padding: hp('2%'),
  },
  tableHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp('2%'),
  },
  tableTitle: {
    fontSize: hp('2%'),
    fontWeight: "bold",
    color: '#000',
    flex: 1, // Ensures the title takes available space
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableHeader: {
    backgroundColor: "#EFEFEF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
  },
  tableHeaderText: {
    fontSize: hp('1.8%'),
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    paddingVertical: hp('1.5%'),
    borderWidth: 1,
    borderColor: "#ccc",
    color: '#000'
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: hp('1.6%'),
    paddingVertical: hp('1%'),
    borderWidth: 1,
    borderColor: "#ccc",
    color: '#000'
  },
  tableRowEven: {
    backgroundColor: "#fff",
  },
  tableRowOdd: {
    backgroundColor: "#CFF7D3",
  },
  filter: {
    backgroundColor: '#E8DEF8',
    flexDirection: 'row',
    alignItems: "center",
    padding: hp('0.5%'),
    gap: 5,
    borderRadius: 8
  },
  filterText: {
    color: '#000',
    fontWeight: '500'
  },
  noDataText: {
    textAlign: "center",
    fontSize: hp("2%"),
    color: "#888",
    marginVertical: hp("1%"),
  }
});

export default TableComponent;
