import React, { useState, useEffect } from 'react'
import Service from '../../utils/http.js'
import { Avatar, Button, Center, Stack, Text } from '@mantine/core';

export const ProfilePage = () => {
    const service = new Service();
    const [userData, setUserData] = useState(null);
    const getUserProfileData = async () => {
        try {
            const data = await service.get('user/me');
            console.log(data);
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserProfileData();
        console.log(userData);
    }, []);
    return (
        <div className='ProfilePage'>
            <Stack
                h={500}
                bg="var(--mantine-color-body)"
                align="center"
                justify="flex-start"
                mt={50}
                gap="md"
            >
                <Avatar size={125} src={userData?.avatar} alt="it's me" />
                <h1>{userData?.name}</h1>
                <Text c="dimmed">{userData?.email}</Text>
                <p><b>User ID: </b>{userData?._id}</p>
                <p><b>Account Created: </b>{userData?.createdAt}</p>
            </Stack>
        </div>
    );
};

export default ProfilePage;