import React from "react";
import { 
    View,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";

import {Text, Title, Subheading, Paragraph, Headline, Caption} from "react-native-paper"

import AppBar from "../components/appBar"

const Working = (props) => (
    <>
    <AppBar />
    <ScrollView>
    <View style={styles.container}>

    <Headline style={{fontWeight: 'bold'}}>Working</Headline>

    <Title style={{marginTop: 10}}>Introduction</Title>
    <Paragraph>
    Car Motion Calculator (CMC) was an idea first originated during the Season 3 National Finals. We believe that this application has the potential of redefining virtual testing for both new and experienced F1 in schools teams.
    </Paragraph>

    <Title style={{marginTop: 10}}>Aim</Title>
    <Paragraph>
    We aimed to fulfill the following through the development of our application:
    {'\n'}{'\u2022'} Calculate an accurate race time 
    {'\n'}{'\u2022'} Calculate the acceleration and velocity over time
    {'\n'}{'\u2022'} Provide detailed analysis and graphs for teams
    </Paragraph>

    <Title style={{marginTop: 10}}>Steps</Title>
    <Paragraph>
    We aimed to fulfill the following through the development of our application:
    {'\n'}{'\u2022'} Calculate net force
    {'\n'}{'\u2022'} Calculate net acceleration
    {'\n'}{'\u2022'} Calculate velocity
    {'\n'}{'\u2022'} Calculate race time
    </Paragraph>

    <Title style={{marginTop: 10}}>Calculating Net Force</Title>
    <Paragraph>
    Calculating the net force is essential for accurately calculating the acceleration of the vehicle against time. 
    </Paragraph>

    <Subheading style={{fontWeight: "bold"}}>Thrust</Subheading>
    <Paragraph>
    However, through our research, we realised the thrust achieved from the CO2 canister is a depreciating value. To overcome this problem, we conducted an experiment using a force sensor and plotted the values of the thrust against time. The unique thrust value at every point in time was then substituted into our formulae.
    </Paragraph>

    <Subheading style={{fontWeight: "bold"}}>Drag Force</Subheading>
    <Paragraph>
    Drag force is directly proportional to the squared velocity of the car. The constant 'k' is the half the product of the car’s drag coefficient and frontal area and the desnity of air.
    </Paragraph>
    <Image source={require('../assets/dragEquation.png')} style={{marginVertical: 10}}/>

    <Subheading style={{fontWeight: "bold"}}>Net Force</Subheading>
    <Paragraph>
    To calculate net force, we could not just subtract Drag from the Thrust, considering the thrust and the velocity were changing at any given point in time. Therefore, the formula of drag was then substituted to look like:
    </Paragraph>
    <Image source={require('../assets/netForceEquation.png')} style={{marginVertical: 10}}/>

    <Title style={{marginTop: 10}}>Calculating Net Acceleration</Title>
    <Paragraph>Calculating the net acceleration ensures that the resistance due to drag is taken into consideration.</Paragraph>

    <Subheading style={{fontWeight: "bold"}}>Newton's Second Law</Subheading>
    <Paragraph>
    Newton’s second law states that force is the product of acceleration and mass. Therefore, to find acceleration, net force can be divided by the mass of the car to get net acceleration at any given point in time.
    </Paragraph>
    <Image source={require('../assets/newton2Law.png')} style={{marginVertical: 10}}/>

    <Title style={{marginTop: 10}}>Calculating Velocity</Title>
    <Paragraph>
    Calculating the velocity was tricky; it had two variable factors which changed with time: Thrust and Time. To calculate the velocity, we had to create a data structure where the vale of the thrust was taken from the data respective of the time.
    </Paragraph>

    <Subheading style={{fontWeight: "bold"}}>The Origin of the Equation</Subheading>
    <Paragraph>
    Through our prior knowledge and additional research, the team derived with a formulae that would be able to accurately measure the velocity against time. Firstly, we know that:
    </Paragraph>
    <Image source={require('../assets/oe1.png')} style={{marginVertical: 10}}/>

    <Paragraph>
    Because the car is initially at rest, u = 0, therefore:    
    </Paragraph>
    <Image source={require('../assets/oe2.png')} style={{marginVertical: 10}}/>

    <Paragraph>
    Then, we can substitute the value of a in this formula and get:
    </Paragraph>
    <Image source={require('../assets/oe3.png')} style={{marginVertical: 10}}/>

    <Paragraph>
    By rearranging the equation we get a new formula which we will use later to calculate the value of the velocity at the value of the time: 
    </Paragraph>
    <Image source={require('../assets/oe4.png')} style={{marginVertical: 10}}/>

    <Paragraph>
    To then calculate the velocity of the car we can use the quadratic formula where v is equal to:
    </Paragraph>
    <Image source={require('../assets/oe5.png')} style={{marginVertical: 10}}/>

    <Paragraph>
    When this formula is used, we get data that can be plotted as a graph. This parabolic nature of the graph suggests that every car has a maximum potential of velocity. Furthermore, through this formula we also learnt that an any car takes and average of 0.xx seconds to reach its maximum potential.
    </Paragraph>
    <Image source={require('../assets/oe6.png')} style={{marginVertical: 10}}/>

    <Title style={{marginTop: 10}}>Calculating Race Time</Title>
    <Paragraph>
    Calculating the race time from the velocity and time data is easy. We simply have to integrate the function v(t) where the definite integral will be equal to 25 (the distance of the track). This integrated formula can then be equated with 25 to calculate the value of t. This calculated t is the race time of the car.
    </Paragraph>

    </View>
    </ScrollView>
    </>
    )
export default Working;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginTop: 20
    }
});