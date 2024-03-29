import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button} from 'native-base';
import { RadioButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import defaultStyles from '../styles/DefaultStyles';

export default class PersonalDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            gender: null,
            marital: null,
            identification: null,
            nextAge: 0
        }
    }
    // Get the next birthday of client
    setNextBirthDay = (dob) => {
        var nextDate = new Date();
        if (nextDate.getMonth() > dob.getMonth()){
            nextDate.setMonth(dob.getMonth());
            nextDate.setDate(dob.getDate());

            nextDate.setFullYear(nextDate.getFullYear() + 1)
        }else if (nextDate.getMonth() == dob.getMonth() && nextDate.getDate() > dob.getDate()){
            nextDate.setDate(dob.getDate());

            nextDate.setFullYear(nextDate.getFullYear() + 1)
        }else if (nextDate.getMonth() == dob.getMonth() && nextDate.getDate() == dob.getDate()){
            nextDate.setFullYear(nextDate.getFullYear() + 1)
        }
        var nextAge = nextDate.getFullYear() - dob.getFullYear();
        this.setState({
            nextAge: nextAge.toString()
        })
    }
    // Select Region from picker
    selectRegion(value){
        this.setState({
            region: value
        })
    }
    render(){
        return (
            <Card style={defaultStyles.fullScreen}>
                <KeyboardAvoidingView
                    behavior='height'
                    keyboardVerticalOffset={5}
                    >
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                            
                            <Form>
                                <View style={defaultStyles.redBar}>
                                    <Text style={defaultStyles.title}>1.</Text>
                                    <Text style={defaultStyles.title}>PERSONAL DETAILS</Text>
                                </View>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>Surname</Label>
                                        <Input
                                            // style={defaultStyles.inputContainer}
                                        />
                                    </Item>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>First Name</Label>
                                        <Input
                                            // style={defaultStyles.inputContainer}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Text>D.O.B:</Text>
                                    <ListItem>
                                        <DatePicker 
                                            defaultDate={new Date()}
                                            minimumDate={new Date(1990, 1, 1)}
                                            maximumDate={new Date()}
                                            locale={'en'}
                                            modalTransparent={false}
                                            androidMode='calendar'
                                            placeHolderText='Select Date'
                                            placeHolderTextStyle={{color: '#999'}}
                                            onDateChange={this.setNextBirthDay}
                                        />
                                    </ListItem>
                                    <Input
                                        label='Age Next B.D.:'
                                        value={`Next Age: ${this.state.nextAge}`}
                                        editable={false}
                                        style={defaultStyles.inputContainer}
                                    />
                                </CardItem>
                                {/* <CardItem style={defaultStyles.wrap}>
                                    
                                </CardItem> */}
                                <CardItem header>
                                    <Text>Gender: </Text>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <ListItem >
                                        <RadioButton
                                            value='Male'
                                            status={this.state.gender === 1 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({gender: 1})}}
                                        />
                                        <Text note>Male</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Female'
                                            status={this.state.gender === 2 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({gender: 2})}}
                                        />
                                        <Text note>Female</Text>
                                    </ListItem>
                                </CardItem>
                                
                                <CardItem >
                                    <Text>Marital Status</Text>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <ListItem >
                                        <RadioButton
                                            value='Single'
                                            status={this.state.marital === 0 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({marital: 0})}}
                                        />
                                        <Text note>Single</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Married'
                                            status={this.state.marital === 1 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({marital: 1})}}
                                        />
                                        <Text note>Married</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Divorced'
                                            status={this.state.marital === 2 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({marital: 2})}}
                                        />
                                        <Text note>Divorced</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Widowed'
                                            status={this.state.marital === 3 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({marital: 3})}}
                                        />
                                        <Text note>Widowed</Text>
                                    </ListItem>
                                </CardItem>
                                <CardItem >
                                    <Text>Identification</Text>
                                </CardItem>
                                
                                <CardItem style={defaultStyles.wrap}>
                                    <ListItem>
                                        <RadioButton
                                            value='Voters'
                                            status={this.state.identification === 1 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({identification: 1})}}
                                        />
                                        <Text note>Voter's ID</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='Driver'
                                            status={this.state.identification === 2 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({identification: 2})}}
                                        />
                                        <Text note>Driver's Licence</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='Passport'
                                            status={this.state.identification === 3 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({identification: 3})}}
                                        />
                                        <Text note>Passport</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='National'
                                            status={this.state.identification === 4 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({identification: 4})}}
                                        />
                                        <Text note>National ID</Text>
                                    </ListItem>
                                    <Item floatingLabel>
                                        <Label>ID Number</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Nationality</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>TIN</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem header style={{marginTop: 25}}>
                                    <Text style={defaultStyles.title2}>Contact Details</Text>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Mobile Nos.</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Email</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Postal Address</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Digital Address</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Street</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Suburb</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Town</Label>
                                        <Input />
                                    </Item>
                                    <Item picker>
                                        <Picker
                                            placeholder='Region'
                                            iosIcon={<Icon name='arrow-down' />}
                                            selectedValue={this.state.region}
                                            onValueChange={this.selectRegion.bind(this)}>
                                            <Picker.Item label='Eastern' value='eastern'/>
                                            <Picker.Item label='Western' value='western'/>
                                            <Picker.Item label='Greater Accra' value='accra'/>
                                        </Picker>
                                        
                                    </Item>
                                </CardItem>
                                <CardItem>
                                    <Button>
                                        <Text>Next >></Text>
                                    </Button>
                                </CardItem>
                            </Form>
                        
                    </ScrollView>
                </KeyboardAvoidingView>
            </Card>

        )
    }
}