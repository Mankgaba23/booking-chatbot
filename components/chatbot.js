import styled from 'styled-components'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-simple-chatbot';

const Chatbot = () => {
    return (
        <ChatBot
            steps={[
                {
                    id: '0',
                    message: 'Hi welcome to Biso',
                    trigger: '1',

                },
                {
                    id: '1',
                    message: 'What is your name?',
                    trigger: 'name',
                },
                {
                    id: 'name',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: 'Hi {previousValue}! table for?',
                    trigger: '2',
                },


                {
                    id: '2',

                    options: [
                        { value: 'table for 2', label: 'Two', trigger: '7' },
                        { value: 'table for 4', label: 'Four', trigger: '7' },
                        { value: 'table for 6', label: 'Sixs', trigger: '7' },
                    ]
                },
                {
                    id: '7',
                    message: 'what will you like to eat',
                    trigger: '8',
                },
                {
                    id: '8',
                    options: [
                        { value: 'table for 2', label: 'chicken', trigger: '5' },
                        { value: 'table for 4', label: 'burger', trigger: '20' },
                        { value: 'table for 6', label: 'beef', trigger: '21' },
                    ],
                },
                {
                    id: '21',
                    options: [
                        { value: 'table for 2', label: 'stew beef', trigger: '10' },              
                        { value: 'table for 6', label: 'steak', trigger: '10' },
                    ],
                },

                {
                    id: '5',
                    message: 'will you like',
                    trigger: '9',
                },
                {
                    id: '9',
                    options: [
                        { value: 'table for 2', label: 'grilled', trigger: '10' },
                        { value: 'table for 4', label: 'roasted', trigger: '10' },
                        { value: 'table for 6', label: 'fryed', trigger: '10' },
                    ],
                },
                {
                    id: '20',
                    options: [
                        { value: 'table for 2', label: 'chicken', trigger: '12' },
                        { value: 'table for 4', label: 'beef', trigger: '12' },
                        
                    ],
                },
                {
                    id: '10',
                    options: [
                        { value: 'table for 2', label: 'pap', trigger: '11' },
                        { value: 'table for 4', label: 'stamp', trigger: '11' },
                        { value: 'table for 6', label: 'rice', trigger: '11' },
                    ],
                },
                {
                    id: '11',
                    options: [
                        { value: 'table for 2', label: 'salad', trigger: '12' },
                        { value: 'table for 4', label: 'veg', trigger: '12' },
                        { value: 'table for 6', label: 'soup', trigger: '12' },
                    ],
                },
                {
                    id: '12',
                    message: 'Payment',
                    trigger: '13',
                },

                {
                    id: '13',
                    options: [
                        { value: 'table for 2', label: 'cash', trigger: '14' },
                        { value: 'table for 4', label: 'credit card', trigger: '14' },
                       
                    ],
                },
                {
                    id: '14',
                    message: 'Thank you for your order,your table will be ready',
                    //trigger:'13',
                },


                {
                    id: '6',
                    user: true
                }
            ]}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Chatbot;