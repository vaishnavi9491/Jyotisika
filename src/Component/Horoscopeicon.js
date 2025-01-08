
import React from 'react';
import Svg, { Path } from 'react-native-svg';

// Horoscope Icon
export const HoroscopeIcon = ({ size = 24, color = '#535763' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
        d="M16.7698 16.1309C16.5992 16.0611 16.4267 15.9956 16.2528 15.9343L16.7698 16.1309ZM16.7698 16.1309C18.2815 16.7483 19.6219 17.679 20.6738 18.8585L16.7698 16.1309ZM5.22142 3.45126L4.49896 4.09556C4.39393 3.97779 4.21333 3.96747 4.09556 4.07249M5.22142 3.45126L4.07251 19.5241C5.01772 18.4643 6.22983 17.6197 7.60833 17.0567L7.60887 17.0564C7.76378 16.9931 7.92079 16.9335 8.07978 16.8774L8.74728 16.6421V15.9343V8.06578V7.3581L8.0799 7.12272C7.92116 7.06673 7.76393 7.00696 7.60839 6.94342L7.60838 6.94342C6.22979 6.38033 5.01768 5.53574 4.07249 4.47589L4.07249 4.47589C3.96747 4.35813 3.97779 4.17752 4.09556 4.07249M5.22142 3.45126L4.49896 4.09556C5.38314 5.08701 6.52196 5.8824 7.82446 6.41442L7.82447 6.41442C9.12697 6.94644 10.5545 7.19923 11.9904 7.15115L11.9906 7.15115C11.9969 7.15094 12.0031 7.15094 12.0094 7.15115L12.0096 7.15115C13.4455 7.19923 14.873 6.94644 16.1755 6.41442C17.4781 5.8824 18.6169 5.08701 19.5011 4.09558L19.5012 4.09547C19.606 3.97791 19.7866 3.96741 19.9044 4.07242C20.0222 4.17751 20.0325 4.35817 19.9275 4.47588L20.6715 5.13935L19.9275 4.47589C18.9823 5.53575 17.7702 6.38033 16.3916 6.94342L16.3915 6.94346C16.2361 7.00697 16.0789 7.06673 15.9202 7.12269L15.2528 7.35804V8.06577V15.9343V16.6421L15.9203 16.8774C16.0793 16.9335 16.2363 16.9931 16.391 17.0564L16.3917 17.0567M5.22142 3.45126L16.3917 17.0567M4.09556 4.07249L3.43308 3.32965L4.09556 4.07249ZM4.49894 19.9045L4.49897 19.9045C5.38308 18.9132 6.52185 18.1176 7.8244 17.5857L4.49894 19.9045ZM4.49894 19.9045C4.39398 20.0222 4.2134 20.0326 4.09557 19.9275C3.9778 19.8225 3.96746 19.6419 4.07247 19.5241L4.49894 19.9045ZM19.5011 19.9045L19.5012 19.9046C19.606 20.0221 19.7865 20.0327 19.9044 19.9276L19.5011 19.9045ZM19.5011 19.9045C18.6169 18.9132 17.4782 18.1176 16.1756 17.5857L19.5011 19.9045ZM16.3917 17.0567C17.7702 17.6197 18.9823 18.4643 19.9275 19.5241C20.0325 19.6419 20.0222 19.8224 19.9045 19.9275L16.3917 17.0567ZM11.9904 16.8489L11.957 17.8484L11.9883 16.8488L11.9904 16.8489ZM11.9904 16.8489C10.5546 16.8008 9.12709 17.0535 7.82453 17.5856L11.9904 16.8489ZM14.6813 7.5351L13.5695 7.66025C13.0602 7.71757 12.5453 7.7389 12.0299 7.7235L12 7.72261L11.9701 7.7235C11.4547 7.7389 10.9399 7.71758 10.4306 7.66026L9.31872 7.53511V8.65398V15.346V16.4649L10.4306 16.3398C10.9399 16.2824 11.4547 16.2611 11.9702 16.2765L12 16.2774L12.0299 16.2765C12.5453 16.2611 13.0602 16.2824 13.5695 16.3398L14.6813 16.4649V15.3461V8.65397V7.5351Z" 
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

// Settings Icon
export const SettingsIcon = ({ size = 24, color = '#535763' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M6.82 4.99C3.41 5.56 2 7.66 2 11.9V14.93C2 19.98 4 22 9 22H15C20 22 22 19.98 22 14.93V11.9C22 7.59 20.54 5.48 17 4.96M14 2C16 2 17 3.01 17 5.03V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2H14Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);


export const FollowingIcon = ({ size = 24, color = '#535763' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M5.5 18V18.5H6H18H18.5V18V17.2C18.5 16.9288 18.4309 16.6712 18.2891 16.4393C18.1536 16.2175 17.9702 16.0392 17.7428 15.9129L17.7333 15.9076L17.7236 15.9028C16.7925 15.4372 15.8493 15.0863 14.8942 14.8519C13.939 14.6174 12.974 14.5 12 14.5C11.026 14.5 10.061 14.6174 9.10581 14.8519C8.15072 15.0863 7.20748 15.4372 6.27639 15.9028L6.26668 15.9076L6.25718 15.9129C6.0298 16.0392 5.84639 16.2175 5.71086 16.4393C5.56911 16.6712 5.5 16.9288 5.5 17.2V18ZM12 11.5C11.0337 11.5 10.2189 11.1618 9.52855 10.4714C8.83824 9.78113 8.5 8.96634 8.5 8C8.5 7.03366 8.83824 6.21887 9.52855 5.52855C10.2189 4.83824 11.0337 4.5 12 4.5C12.9663 4.5 13.7811 4.83824 14.4714 5.52855C15.1618 6.21887 15.5 7.03366 15.5 8C15.5 8.96634 15.1618 9.78113 14.4714 10.4714C13.7811 11.1618 12.9663 11.5 12 11.5ZM4.5 19.5V17.2C4.5 16.7241 4.62109 16.2941 4.86359 15.8991C5.10825 15.5007 5.42772 15.2027 5.82681 14.9956C6.82714 14.4957 7.84065 14.1222 8.86769 13.8735C9.89573 13.6245 10.9396 13.5 12 13.5C13.0604 13.5 14.1043 13.6245 15.1323 13.8735C16.1594 14.1222 17.1729 14.4957 18.1732 14.9956C18.5723 15.2027 18.8918 15.5007 19.1364 15.8991C19.3789 16.2941 19.5 16.7241 19.5 17.2V19.5H4.5ZM12 10.5C12.6837 10.5 13.2814 10.2507 13.7661 9.76605C14.2507 9.28137 14.5 8.68366 14.5 8C14.5 7.31634 14.2507 6.71863 13.7661 6.23395C13.2814 5.74926 12.6837 5.5 12 5.5C11.3163 5.5 10.7186 5.74926 10.2339 6.23395C9.74926 6.71863 9.5 7.31634 9.5 8C9.5 8.68366 9.74926 9.28137 10.2339 9.76605C10.7186 10.2507 11.3163 10.5 12 10.5Z"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);


export const PurchasesIcon = ({ size = 24, color = '#535763' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M8.00003 8V4.5C8.00003 3 9.00003 2 10.5 2H13.5C15 2 16 3 16 4.5V8M20.41 17.03H8.00003M8.40002 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.51003C4.00003 22 3.24002 19.99 3.54002 17.53L4.44003 10.03C4.66003 8.09 5.00002 6.5 8.40002 6.5Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const PaymentMethodIcon = ({ size = 24, color = '#535763' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M19 7V6.87788L19.6668 7.11355C20.1721 7.29215 20.5833 7.66776 20.8096 8.14723C20.4895 7.46917 19.7995 7 19 7ZM4.33325 6.88645L3 6.41522V5C3 6.10457 3.89543 7 5 7C4.76446 7 4.54048 6.9597 4.33325 6.88645Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const ReferofriendIcon = ({ size = 24, color = '#535763' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M17.7646 7.60999C17.7646 8.53378 17.0159 9.28265 16.0924 9.28265C15.1688 9.28265 14.4202 8.53378 14.4202 7.60999C14.4202 6.68621 15.1688 5.93734 16.0924 5.93734C17.0159 5.93734 17.7646 6.68621 17.7646 7.60999Z"
            
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const SupportIcon = ({ size = 24, color = '#535763' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M8.72781 6.70267L7.22017 4.64681C6.96106 4.29346 6.47139 4.20341 6.10352 4.44145C3.97744 5.81715 3.26098 8.03487 4.21386 9.76547C5.10106 11.3768 6.46384 13.3426 8.54585 15.4246C10.6279 17.5066 12.5937 18.8694 14.205 19.7566C15.9356 20.7095 18.1533 19.993 19.529 17.8669C19.767 17.4991 19.677 17.0094 19.3236 16.7503L17.2678 15.2426C16.8143 14.9101 16.2129 14.8591 15.7099 15.1106L14.8905 15.5203C14.3067 15.8122 13.5218 15.9071 12.786 15.5286C12.225 15.24 11.3357 14.6789 10.3136 13.6568C9.29151 12.6347 8.73046 11.7454 8.44188 11.1845C8.06334 10.4487 8.15822 9.66377 8.45011 9.07999L8.85984 8.26054C9.11133 7.75755 9.06036 7.15615 8.72781 6.70267ZM3.33787 10.2478C2.04541 7.90045 3.16178 5.15384 5.56027 3.60188C6.37277 3.07614 7.45428 3.27503 8.02658 4.05544L9.53421 6.11131C10.0885 6.86711 10.1734 7.86944 9.75427 8.70775L9.34454 9.5272C9.16846 9.87936 9.12379 10.324 9.33111 10.727C9.57466 11.2004 10.0755 12.0045 11.0207 12.9497C11.966 13.895 12.77 14.3958 13.2434 14.6393C13.6464 14.8467 14.0911 14.802 14.4432 14.6259L15.2627 14.2162C16.101 13.797 17.1033 13.882 17.8591 14.4362L19.915 15.9439C20.6954 16.5162 20.8943 17.5977 20.3686 18.4102C18.8166 20.8087 16.07 21.925 13.7227 20.6326C12.0322 19.7018 9.99006 18.283 7.83874 16.1317C5.68743 13.9804 4.26862 11.9382 3.33787 10.2478Z"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);