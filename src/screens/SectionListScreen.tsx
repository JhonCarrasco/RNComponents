import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'
import { _styles } from '../theme/appTheme'


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman",]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", ]
    }
]

export const SectionListScreen = () => {
    return (
        <View style={[_styles.globalMargin, { flex: 1 }]}>
            <SectionList 
                sections={casas}
                ListHeaderComponent={() => <HeaderTitle title='Section List' />}
                ListFooterComponent={() => <HeaderTitle title={'Total de casas ' + casas.length} />}
                renderItem={({item}) => <Text>{ item }</Text>}
                keyExtractor={(item, index) => item + index}
                stickySectionHeadersEnabled
                renderSectionHeader={({section: { casa }}) => (
                    <View style={{backgroundColor: 'white'}}>
                        <HeaderTitle title={casa} />
                    </View>
                )}
                renderSectionFooter={({section}) => (
                    <HeaderTitle title={'Total: ' + section.data.length } />
                )}
                SectionSeparatorComponent={() => <ItemSeparator />}
                // ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
                onEndReached={() => console.log('End Reached!')}
            />
        </View>
    )
}
