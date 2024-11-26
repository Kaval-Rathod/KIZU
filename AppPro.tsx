import React from 'react'
import FlatCards from './component/FlatCards';
import Scrall from './component/Scrall';
import FancyCard from './component/FancyCard';
import Arr from './component/Arr';
import{
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
    ScrollView
} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.v}>
            <ScrollView>            
                <Text>
                    {/* Hello i am kaval */}
                </Text>
                <FlatCards/>
                <Scrall/>
                <FancyCard/>
                <Arr/>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    v:{
        margin:5
    }
})

export default AppPro;