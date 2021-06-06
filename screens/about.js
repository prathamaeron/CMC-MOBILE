import React from "react";
import { 
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

import {Text, Title, Subheading, Paragraph, Headline, Caption, Card} from "react-native-paper"


import AppBar from "../components/appBar"

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const About = ({navigation, route}) => (
    <>
    <AppBar />
        <SafeAreaView style={{justifyContent: "center", alignItems: "center"}}>
            <ScrollView style={{marginTop: 10, marginHorizontal: 10, height: height - 220}}>
                <Card style={styles.card}>
                <Card.Cover source={require('../assets/gdrLogo.png')} resizeMode="contain"/>
                <Card.Content>
                    <Paragraph style={{marginTop: 20}}>
                   Grand Dash Racing is a team consisting of 3 talented individuals who worked tirelessly to the develop this innovative application. They are from The British School, New Delhi India and participate in the F1 in Schools World Finals 2020(21). This app was meticulously created through intensive collaboration in order to have an inventive and unique selling point for the team. In addition, this revolutionary app has the potential to aid multiple teams in virtual testing and can possibly impact the whole competition as we know it.
                    </Paragraph>
                </Card.Content>
                </Card>

                <Card style={styles.card}>
                <Card.Cover source={require('../assets/tosLogo.png')} resizeMode="contain" style={{height: 50}}/>
                <Card.Content>
                    <Paragraph style={{marginTop: 20}}>
                    Time of Sports, one of our Educational Partners, andruns Sports, Fitness & STEM Clubs In Schools.
                    Sports & Fitness Club is an amalgamation of integrated online platforms and robust on-ground support services. Here we Record Fitness Paraments, Reports Fitness Grades, and Recommends Sports & Fitness regimes for students aged 5-18.
                    </Paragraph>
                </Card.Content>
                </Card>

                <Card style={styles.card}>
                <Card.Cover source={require('../assets/sciLogo.png')} resizeMode="contain" style={{height: 150}}/>
                <Card.Content>
                    <Paragraph style={{marginTop: 20}}>
                    STEM Club India comes with a series of experiential STEM learning programs designed by global educators and corporate firms spread across various industries like Automobile Designing, Project Management, Artificial Intelligence, Gaming, Coding, Machine learning, 3D designing, Robotics, and Entrepreneurship.
                    </Paragraph>
                </Card.Content>
                </Card>


                <Card style={styles.card}>
                <Card.Cover source={require('../assets/ppplLogo.png')} resizeMode="contain" style={{height: 150}}/>
                <Card.Content>
                    <Paragraph style={{marginTop: 20}}>
                    Purshotam Profiles is a solar structures manufacturer in India, working on some of the biggest solar plants pan India. They funded the whole development of the Car Motion Calculator application as they truly believe the importance of STEM, Furthermore, they are providing us with their professional support and guidance.
                    </Paragraph>
                </Card.Content>
                </Card>

                <Card style={styles.card}>
                <Card.Cover source={require('../assets/fisLogo.png')} resizeMode="contain" style={{height: 150}}/>
                <Card.Content>
                    <Paragraph style={{marginTop: 20}}>
                    F1 in Schools is an international STEM competition for school children, in which groups of 3–6 students have to design and manufacture a miniature car out of the official F1 Model Block using CAD/CAM design tools. The cars are powered by CO₂ cartridges and are attached to a track by a nylon wire.
                    </Paragraph>
                </Card.Content>
                </Card>


            </ScrollView>
        </SafeAreaView>
    </>
    )
export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 10,
    },
    card: {
        height: 'auto',
        width: width - 30,
        marginBottom: 30,
    }
});