import styled from "styled-components";

export const Container = styled("div")`
  .app {
    text-align: center;

    .app__header {
      background-color: #dbdbdb;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
      background-image: linear-gradient(
        to top,
        #f8f8f8,
        #cbcbcb,
        #9f9f9f,
        #767676,
        #4f4f4f
      );

      h1 {
        color: #2df1f1;
      }
    }

    .stars {
      position: absolute;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      box-shadow: 799px 704px #fff, 1770px 1566px #fff, 1715px 924px #fff,
        1810px 183px #fff, 1865px 1608px #fff, 339px 905px #fff,
        291px 1099px #fff, 1768px 818px #fff, 111px 1524px #fff,
        697px 778px #fff, 1062px 1329px #fff, 412px 476px #fff,
        1769px 1150px #fff, 1575px 336px #fff, 526px 637px #fff, 53px 756px #fff,
        255px 530px #fff, 1777px 1544px #fff, 1253px 1552px #fff,
        1299px 430px #fff, 682px 1984px #fff, 609px 593px #fff,
        962px 1686px #fff, 594px 297px #fff, 934px 1482px #fff, 143px 409px #fff,
        982px 554px #fff, 78px 1394px #fff, 1643px 620px #fff, 30px 1944px #fff,
        171px 632px #fff, 266px 429px #fff, 1288px 1854px #fff,
        773px 1998px #fff, 1069px 1018px #fff, 1315px 597px #fff,
        1915px 404px #fff, 1330px 1959px #fff, 456px 1914px #fff,
        1813px 824px #fff, 972px 1416px #fff, 1044px 1697px #fff,
        1426px 382px #fff, 945px 1574px #fff, 643px 607px #fff,
        1056px 1009px #fff, 861px 622px #fff, 1830px 1335px #fff,
        1358px 916px #fff, 1848px 345px #fff, 168px 614px #fff,
        1749px 1098px #fff, 449px 17px #fff, 1865px 367px #fff,
        1267px 1167px #fff, 299px 310px #fff, 14px 1073px #fff,
        1603px 1009px #fff, 1494px 1586px #fff, 1177px 1283px #fff,
        1217px 1705px #fff, 359px 1510px #fff, 1512px 912px #fff,
        694px 105px #fff, 732px 1740px #fff, 1721px 141px #fff,
        1098px 1730px #fff, 1237px 861px #fff, 27px 438px #fff,
        1834px 1276px #fff, 40px 1823px #fff, 1708px 958px #fff,
        1977px 17px #fff, 691px 199px #fff, 1826px 679px #fff, 445px 27px #fff,
        1617px 1122px #fff, 1615px 112px #fff, 1064px 525px #fff,
        307px 1102px #fff, 1880px 672px #fff, 785px 1715px #fff,
        374px 1092px #fff, 196px 866px #fff, 1982px 133px #fff, 125px 372px #fff,
        140px 1785px #fff, 1504px 702px #fff, 9px 902px #fff, 1652px 1626px #fff,
        673px 899px #fff, 645px 1462px #fff, 1461px 26px #fff, 919px 1756px #fff,
        211px 1836px #fff, 945px 1256px #fff, 116px 313px #fff,
        1104px 995px #fff, 903px 1130px #fff, 24px 1443px #fff, 1104px 20px #fff,
        1482px 1330px #fff, 632px 1267px #fff, 411px 1977px #fff,
        884px 1523px #fff, 397px 1276px #fff, 1787px 990px #fff,
        1941px 1119px #fff, 1463px 1136px #fff, 1690px 1617px #fff,
        429px 1252px #fff, 1142px 376px #fff, 1962px 1219px #fff,
        1799px 673px #fff, 572px 381px #fff, 1541px 99px #fff, 539px 1003px #fff,
        1690px 489px #fff, 1781px 695px #fff, 79px 30px #fff, 45px 1336px #fff,
        231px 1030px #fff, 64px 1375px #fff, 239px 973px #fff, 998px 878px #fff,
        1892px 683px #fff, 1600px 1134px #fff, 1392px 1689px #fff,
        1410px 74px #fff, 927px 1995px #fff, 31px 1815px #fff, 895px 755px #fff,
        1440px 1000px #fff, 230px 1322px #fff, 932px 188px #fff,
        1023px 526px #fff, 1238px 696px #fff, 1733px 630px #fff,
        941px 1147px #fff, 1364px 209px #fff, 808px 955px #fff,
        1903px 1265px #fff, 1173px 1501px #fff, 248px 954px #fff,
        892px 73px #fff, 1550px 1261px #fff, 1294px 1392px #fff,
        600px 1699px #fff, 613px 1590px #fff, 267px 1423px #fff,
        1397px 398px #fff, 679px 1153px #fff, 893px 23px #fff,
        1067px 1517px #fff, 15px 1251px #fff, 1644px 391px #fff,
        677px 1275px #fff, 1102px 597px #fff, 1039px 354px #fff,
        1545px 1597px #fff, 1511px 775px #fff, 237px 977px #fff,
        908px 1384px #fff, 1545px 369px #fff, 524px 209px #fff, 784px 454px #fff,
        473px 893px #fff, 565px 66px #fff, 1163px 1278px #fff, 1589px 833px #fff,
        1614px 1283px #fff, 569px 935px #fff, 914px 715px #fff,
        284px 1573px #fff, 938px 1759px #fff, 1863px 1077px #fff,
        1867px 1513px #fff, 1031px 729px #fff, 1903px 1470px #fff,
        1670px 428px #fff, 731px 572px #fff, 1089px 748px #fff,
        1134px 1700px #fff, 1327px 1396px #fff, 1907px 1794px #fff,
        125px 520px #fff, 1746px 646px #fff, 324px 1392px #fff,
        402px 1010px #fff, 354px 1239px #fff, 946px 1810px #fff,
        906px 1618px #fff, 1109px 66px #fff, 1885px 193px #fff, 829px 685px #fff,
        1204px 1506px #fff, 743px 843px #fff, 503px 1536px #fff, 934px 40px #fff,
        1870px 766px #fff, 1021px 734px #fff, 839px 1710px #fff, 664px 85px #fff,
        1747px 613px #fff, 919px 1914px #fff, 191px 189px #fff,
        1877px 1285px #fff, 333px 1790px #fff, 1246px 1473px #fff,
        268px 681px #fff, 392px 358px #fff, 1139px 667px #fff, 539px 263px #fff,
        336px 1171px #fff, 1657px 1477px #fff, 1320px 1840px #fff,
        510px 30px #fff, 575px 621px #fff, 688px 98px #fff, 1744px 736px #fff,
        484px 67px #fff, 1909px 1126px #fff, 592px 1877px #fff,
        1788px 1558px #fff, 1903px 1707px #fff, 1739px 260px #fff,
        1468px 1082px #fff, 1902px 1153px #fff, 545px 923px #fff,
        1437px 411px #fff, 1723px 1933px #fff, 324px 209px #fff,
        1827px 1001px #fff, 1980px 1280px #fff, 869px 1658px #fff,
        903px 376px #fff, 434px 531px #fff, 1196px 1395px #fff, 1323px 13px #fff,
        845px 1778px #fff, 596px 1162px #fff, 144px 170px #fff,
        1117px 287px #fff, 1354px 1528px #fff, 1681px 1989px #fff,
        1927px 631px #fff, 1855px 1312px #fff, 1642px 1569px #fff,
        429px 300px #fff, 1399px 758px #fff, 688px 1160px #fff,
        1525px 632px #fff, 472px 873px #fff, 851px 1921px #fff,
        300px 1922px #fff, 973px 1317px #fff, 1918px 189px #fff,
        1870px 643px #fff, 1476px 174px #fff, 123px 810px #fff,
        1912px 1989px #fff, 94px 1244px #fff, 734px 871px #fff,
        339px 1375px #fff, 552px 1890px #fff, 1677px 1704px #fff,
        988px 312px #fff, 1415px 100px #fff, 491px 1459px #fff,
        1556px 193px #fff, 991px 1397px #fff, 148px 1689px #fff,
        806px 693px #fff, 746px 1243px #fff, 1026px 177px #fff,
        389px 1514px #fff, 1000px 663px #fff, 1540px 1880px #fff,
        966px 1206px #fff, 716px 1712px #fff, 1474px 1695px #fff,
        44px 343px #fff, 821px 1787px #fff, 1659px 1483px #fff,
        1194px 1551px #fff, 428px 1487px #fff, 1839px 581px #fff,
        366px 1400px #fff, 1332px 1215px #fff, 1556px 1826px #fff,
        848px 394px #fff, 542px 1016px #fff, 1619px 1330px #fff,
        266px 944px #fff, 921px 546px #fff, 790px 196px #fff, 1855px 1227px #fff,
        876px 151px #fff, 1815px 157px #fff, 1824px 325px #fff,
        1487px 1838px #fff, 876px 1220px #fff, 372px 767px #fff,
        507px 1683px #fff, 1801px 566px #fff, 1872px 1187px #fff,
        862px 450px #fff, 1517px 1359px #fff, 1922px 1518px #fff,
        1622px 1423px #fff, 618px 1473px #fff, 1885px 1940px #fff,
        1525px 694px #fff, 181px 778px #fff, 389px 1645px #fff,
        1596px 741px #fff, 1048px 1524px #fff, 924px 1912px #fff,
        1058px 1833px #fff, 455px 47px #fff, 748px 1261px #fff,
        1052px 454px #fff, 816px 1147px #fff, 1767px 1320px #fff,
        82px 1545px #fff, 1944px 1788px #fff, 880px 1554px #fff,
        1649px 1360px #fff, 780px 187px #fff, 171px 438px #fff,
        1417px 176px #fff, 1937px 1611px #fff, 389px 1821px #fff,
        1830px 81px #fff, 418px 121px #fff, 1045px 404px #fff, 683px 213px #fff,
        88px 1322px #fff, 1806px 908px #fff, 92px 1842px #fff,
        1134px 1221px #fff, 1347px 186px #fff, 925px 1972px #fff,
        449px 988px #fff, 705px 1310px #fff, 1037px 76px #fff,
        1152px 1388px #fff, 1268px 1840px #fff, 1083px 377px #fff,
        1257px 339px #fff, 1259px 9px #fff, 1680px 1465px #fff,
        1333px 1074px #fff, 57px 1793px #fff, 429px 807px #fff, 66px 376px #fff,
        202px 1406px #fff, 1672px 1856px #fff, 1773px 314px #fff,
        817px 645px #fff, 474px 645px #fff, 877px 1811px #fff, 1591px 537px #fff,
        362px 320px #fff, 1009px 484px #fff, 618px 1831px #fff,
        1600px 297px #fff, 287px 1703px #fff, 1762px 1614px #fff,
        410px 156px #fff, 216px 1564px #fff, 697px 1296px #fff,
        1814px 1668px #fff, 358px 981px #fff, 829px 1617px #fff,
        1278px 119px #fff, 181px 1289px #fff, 1066px 1425px #fff,
        216px 16px #fff, 754px 1543px #fff, 536px 1301px #fff, 1315px 513px #fff,
        46px 302px #fff, 801px 1057px #fff, 526px 1738px #fff, 344px 571px #fff,
        1952px 1047px #fff, 1483px 488px #fff, 1512px 764px #fff,
        711px 1809px #fff, 1687px 940px #fff, 984px 180px #fff,
        1300px 860px #fff, 55px 1074px #fff, 798px 467px #fff,
        1994px 1339px #fff, 1613px 772px #fff, 1567px 1265px #fff,
        1303px 1202px #fff, 1745px 1948px #fff, 422px 878px #fff,
        304px 503px #fff, 258px 596px #fff, 885px 928px #fff, 527px 1708px #fff,
        63px 278px #fff, 488px 1922px #fff, 193px 97px #fff, 159px 338px #fff,
        572px 378px #fff, 759px 593px #fff, 1266px 1516px #fff, 564px 316px #fff,
        1734px 1083px #fff, 40px 1249px #fff, 1480px 856px #fff,
        1133px 663px #fff, 1542px 295px #fff, 1025px 198px #fff,
        129px 1341px #fff, 1246px 391px #fff, 1317px 850px #fff, 84px 78px #fff,
        1360px 365px #fff, 123px 1866px #fff, 1564px 512px #fff,
        1877px 294px #fff, 1027px 1256px #fff, 1601px 1168px #fff,
        544px 504px #fff, 1952px 1231px #fff, 240px 1235px #fff,
        196px 1386px #fff, 512px 710px #fff, 1191px 322px #fff,
        417px 1275px #fff, 892px 858px #fff, 174px 925px #fff, 1336px 319px #fff,
        1036px 1659px #fff, 473px 1979px #fff, 1203px 456px #fff,
        784px 583px #fff, 1789px 494px #fff, 1088px 1280px #fff,
        1387px 617px #fff, 1144px 378px #fff, 1117px 191px #fff,
        1301px 1475px #fff, 1381px 1249px #fff, 1013px 687px #fff,
        250px 751px #fff, 1511px 579px #fff, 1017px 1610px #fff,
        815px 1009px #fff, 892px 740px #fff, 1858px 238px #fff,
        1479px 1278px #fff, 1375px 648px #fff, 608px 76px #fff,
        1576px 396px #fff, 1350px 905px #fff, 412px 411px #fff,
        1120px 1316px #fff, 54px 1435px #fff, 1719px 1883px #fff,
        573px 1643px #fff, 242px 421px #fff, 1332px 1003px #fff,
        1649px 673px #fff, 1046px 1813px #fff, 701px 1039px #fff,
        1630px 1231px #fff, 1935px 1611px #fff, 1181px 1996px #fff,
        1968px 1682px #fff, 1381px 558px #fff, 176px 1984px #fff,
        1884px 515px #fff, 64px 673px #fff, 1366px 786px #fff,
        1677px 1918px #fff, 873px 97px #fff, 1106px 626px #fff,
        1027px 1345px #fff, 75px 1334px #fff, 159px 1614px #fff,
        1427px 1514px #fff, 389px 42px #fff, 1312px 1835px #fff,
        704px 1012px #fff, 961px 1188px #fff, 270px 263px #fff,
        112px 1525px #fff, 1588px 1721px #fff, 162px 439px #fff,
        1646px 1116px #fff, 1070px 746px #fff, 970px 1742px #fff,
        781px 1177px #fff, 1320px 1866px #fff, 808px 1935px #fff,
        517px 1275px #fff, 38px 340px #fff, 933px 1586px #fff, 88px 1030px #fff,
        302px 9px #fff, 1369px 1958px #fff, 1429px 750px #fff, 372px 269px #fff,
        1804px 124px #fff, 1062px 560px #fff, 1155px 93px #fff,
        1415px 764px #fff, 1171px 1616px #fff, 982px 1653px #fff,
        1222px 247px #fff, 323px 1075px #fff, 1566px 707px #fff,
        1545px 226px #fff, 1337px 1349px #fff, 929px 1244px #fff,
        1603px 231px #fff, 1651px 699px #fff, 885px 1467px #fff,
        1276px 59px #fff, 185px 1560px #fff, 1419px 1179px #fff,
        166px 1148px #fff, 1465px 893px #fff, 309px 1819px #fff,
        1244px 63px #fff, 1443px 131px #fff, 184px 386px #fff, 246px 38px #fff,
        1695px 1851px #fff, 973px 1770px #fff, 212px 1559px #fff,
        1049px 913px #fff, 103px 1380px #fff, 1279px 7px #fff,
        1865px 1015px #fff, 1858px 1022px #fff, 1806px 1026px #fff,
        508px 4px #fff, 361px 451px #fff, 42px 1424px #fff, 570px 272px #fff,
        339px 1380px #fff, 1111px 88px #fff, 1712px 251px #fff,
        1730px 677px #fff, 27px 1825px #fff, 1680px 1131px #fff,
        548px 637px #fff, 226px 368px #fff, 986px 1145px #fff,
        1908px 1299px #fff, 1631px 282px #fff, 1406px 1488px #fff,
        1516px 235px #fff, 1498px 125px #fff, 1773px 282px #fff,
        1876px 1828px #fff, 1177px 1312px #fff, 558px 798px #fff,
        1588px 1268px #fff, 1588px 1022px #fff, 978px 668px #fff,
        1101px 1086px #fff, 571px 1100px #fff, 1697px 524px #fff,
        769px 1867px #fff, 1565px 1370px #fff, 523px 805px #fff,
        428px 1067px #fff, 783px 533px #fff, 1440px 278px #fff, 529px 352px #fff,
        197px 606px #fff, 1349px 1091px #fff, 625px 643px #fff,
        1702px 1473px #fff, 228px 1000px #fff, 1541px 296px #fff,
        142px 897px #fff, 86px 483px #fff, 1558px 677px #fff, 1138px 403px #fff,
        1961px 227px #fff, 1487px 804px #fff, 1198px 868px #fff,
        1719px 120px #fff, 146px 1725px #fff, 789px 1967px #fff,
        1806px 1388px #fff, 1022px 284px #fff, 373px 396px #fff,
        1915px 225px #fff, 1705px 1671px #fff, 1674px 1812px #fff,
        1434px 5px #fff, 1487px 1580px #fff, 279px 102px #fff, 1104px 519px #fff,
        1576px 47px #fff, 366px 800px #fff, 1133px 215px #fff,
        1217px 1624px #fff, 1183px 705px #fff, 202px 1859px #fff,
        570px 38px #fff, 1911px 1910px #fff, 468px 1630px #fff, 79px 800px #fff,
        1771px 289px #fff, 892px 1131px #fff, 1594px 1471px #fff,
        961px 1270px #fff, 1668px 1000px #fff, 454px 736px #fff,
        1010px 17px #fff, 1269px 1523px #fff, 1527px 387px #fff,
        1126px 1542px #fff, 1321px 1980px #fff, 284px 1835px #fff,
        719px 49px #fff, 1464px 1493px #fff, 419px 211px #fff, 432px 232px #fff,
        1127px 1869px #fff, 800px 1577px #fff, 1978px 371px #fff,
        1124px 1399px #fff, 178px 1919px #fff, 787px 1233px #fff,
        644px 637px #fff, 46px 617px #fff, 1420px 1291px #fff, 1446px 831px #fff,
        1998px 644px #fff, 1616px 1253px #fff, 29px 1819px #fff,
        832px 1463px #fff, 626px 1418px #fff, 1965px 522px #fff,
        670px 1457px #fff, 1888px 1652px #fff, 1502px 965px #fff,
        1516px 1713px #fff, 20px 670px #fff, 959px 254px #fff,
        1750px 1009px #fff, 1010px 1489px #fff, 1045px 1466px #fff,
        1508px 1567px #fff, 1942px 629px #fff, 27px 1863px #fff,
        1151px 1819px #fff, 246px 299px #fff, 674px 1664px #fff, 705px 58px #fff,
        1212px 1503px #fff, 1502px 1001px #fff, 196px 2px #fff, 928px 931px #fff,
        1649px 1477px #fff, 1361px 1148px #fff, 1160px 654px #fff,
        299px 526px #fff, 1857px 1956px #fff, 444px 915px #fff,
        1902px 581px #fff, 1242px 1789px #fff, 1327px 1277px #fff,
        474px 5px #fff, 481px 1275px #fff, 746px 1305px #fff, 677px 299px #fff,
        1491px 988px #fff, 504px 745px #fff, 524px 1443px #fff, 992px 293px #fff,
        677px 1306px #fff, 1153px 5px #fff, 1263px 314px #fff, 1391px 120px #fff,
        331px 1573px #fff, 698px 132px #fff, 43px 1767px #fff, 144px 1060px #fff,
        1338px 1640px #fff, 1451px 1512px #fff, 1363px 1075px #fff,
        1534px 1365px #fff, 1849px 1130px #fff, 1096px 394px #fff,
        91px 986px #fff, 1173px 1761px #fff;
      animation: anim-stars 10s linear infinite;
    }

    .stars::after {
      content: " ";
      position: absolute;
      top: 150px;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      box-shadow: 50px 30px white, 100px 80px white, 80px 120px white,
        300px 20px white, 250px 130px white, 200px 50px white, 150px 100px white,
        320px 100px white;
    }

    .stars2 {
      position: absolute;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: 1101px 993px #fff, 67px 1614px #fff, 1008px 1127px #fff,
        29px 1256px #fff, 566px 1570px #fff, 991px 1937px #fff,
        244px 1959px #fff, 11px 440px #fff, 828px 1847px #fff, 1573px 349px #fff,
        278px 1348px #fff, 720px 309px #fff, 1560px 1112px #fff,
        1933px 168px #fff, 825px 1593px #fff, 172px 1421px #fff,
        1357px 216px #fff, 1662px 507px #fff, 189px 1411px #fff,
        212px 1742px #fff, 183px 1531px #fff, 456px 443px #fff, 461px 578px #fff,
        1496px 1701px #fff, 431px 944px #fff, 1098px 346px #fff,
        1207px 1794px #fff, 1679px 170px #fff, 474px 1939px #fff,
        1220px 450px #fff, 432px 1530px #fff, 729px 689px #fff,
        1301px 733px #fff, 1173px 533px #fff, 382px 212px #fff,
        128px 1819px #fff, 1060px 254px #fff, 470px 501px #fff,
        1163px 1031px #fff, 1772px 132px #fff, 899px 981px #fff,
        132px 345px #fff, 825px 1658px #fff, 390px 234px #fff, 477px 1145px #fff,
        1613px 78px #fff, 1508px 745px #fff, 1382px 334px #fff,
        1041px 1824px #fff, 1552px 1720px #fff, 1589px 307px #fff,
        422px 699px #fff, 1081px 1578px #fff, 1226px 1794px #fff,
        143px 118px #fff, 230px 95px #fff, 868px 1938px #fff, 1856px 1688px #fff,
        857px 94px #fff, 1787px 1974px #fff, 1658px 265px #fff,
        1561px 1857px #fff, 271px 1077px #fff, 513px 1220px #fff,
        1368px 1963px #fff, 284px 1482px #fff, 589px 1365px #fff,
        184px 441px #fff, 628px 1173px #fff, 894px 1384px #fff,
        189px 1449px #fff, 388px 1952px #fff, 1041px 271px #fff,
        476px 194px #fff, 1400px 315px #fff, 587px 510px #fff,
        1170px 1711px #fff, 372px 723px #fff, 527px 1422px #fff,
        1734px 385px #fff, 1966px 1107px #fff, 1616px 1536px #fff,
        1351px 1705px #fff, 1285px 1351px #fff, 189px 1525px #fff,
        1168px 1546px #fff, 1435px 631px #fff, 205px 458px #fff,
        825px 485px #fff, 1564px 452px #fff, 1885px 109px #fff,
        1361px 609px #fff, 1955px 34px #fff, 1052px 911px #fff,
        844px 1987px #fff, 100px 838px #fff, 1189px 1402px #fff,
        952px 130px #fff, 390px 1092px #fff, 963px 1229px #fff,
        1090px 124px #fff, 1558px 142px #fff, 1180px 1294px #fff,
        394px 483px #fff, 280px 1601px #fff, 1384px 1722px #fff,
        920px 253px #fff, 764px 1363px #fff, 8px 858px #fff, 957px 1969px #fff,
        399px 1749px #fff, 629px 117px #fff, 965px 1935px #fff,
        1378px 1311px #fff, 1755px 52px #fff, 303px 1056px #fff,
        630px 1039px #fff, 84px 1479px #fff, 999px 1648px #fff, 824px 314px #fff,
        1195px 1104px #fff, 384px 107px #fff, 406px 1889px #fff,
        1015px 641px #fff, 1652px 1308px #fff, 1684px 411px #fff,
        942px 416px #fff, 1039px 1958px #fff, 667px 40px #fff,
        1374px 1263px #fff, 1841px 119px #fff, 106px 526px #fff,
        639px 1450px #fff, 153px 497px #fff, 283px 1818px #fff, 698px 366px #fff,
        700px 1477px #fff, 440px 171px #fff, 138px 580px #fff, 1231px 156px #fff,
        52px 88px #fff, 1042px 743px #fff, 1375px 15px #fff, 1066px 283px #fff,
        1518px 1959px #fff, 1048px 1933px #fff, 1797px 1728px #fff,
        1756px 1713px #fff, 366px 1638px #fff, 65px 423px #fff,
        760px 1597px #fff, 1214px 177px #fff, 617px 1132px #fff,
        917px 1408px #fff, 1373px 1799px #fff, 602px 170px #fff,
        34px 1031px #fff, 592px 1841px #fff, 1948px 1483px #fff,
        1693px 1416px #fff, 101px 928px #fff, 1844px 139px #fff,
        1264px 1003px #fff, 748px 540px #fff, 1904px 1178px #fff,
        1471px 286px #fff, 1628px 475px #fff, 595px 708px #fff, 600px 767px #fff,
        713px 1895px #fff, 1115px 1611px #fff, 691px 171px #fff,
        735px 1087px #fff, 1455px 499px #fff, 820px 220px #fff, 254px 434px #fff,
        1965px 1670px #fff, 788px 130px #fff, 1660px 530px #fff,
        1496px 1677px #fff, 1441px 1678px #fff, 1600px 367px #fff,
        265px 782px #fff, 409px 249px #fff, 1211px 1156px #fff,
        1476px 160px #fff, 698px 47px #fff, 624px 459px #fff, 1525px 338px #fff,
        1339px 973px #fff, 1277px 1037px #fff, 1986px 1032px #fff,
        565px 1960px #fff, 35px 925px #fff, 1112px 1285px #fff, 1px 616px #fff,
        1903px 884px #fff, 1510px 1886px #fff, 1352px 1354px #fff,
        740px 1232px #fff;
      animation: anim-stars 20s linear infinite;
    }

    .stars2::after {
      content: " ";
      position: absolute;
      top: 150px;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: 15px 15px white, 125px 35px white, 50px 80px white,
        10px 120px white, 275px 90px white, 230px 10px white, 120px 130px white,
        300px 130px white, 220px 115px white;
    }

    @keyframes anim-stars {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-150px);
      }
    }
  }
`;
