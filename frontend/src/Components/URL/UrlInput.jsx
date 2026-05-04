import { Button, Center, Stack, Text, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react';
import React, { useState } from 'react'
import dayjs from 'dayjs';
import Service from '../../utils/http';
export const UrlInput = (props) => {
    // console.log(props);
    const service = new Service();
    const [input, setInput] = useState({});
    const getShortenedURL = async () => {
        try {
            const data = await service.post("s", input);
            // console.log(data);
            props.setResponse(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Center>
                <Text
                    mt={100}
                    size="2rem"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'gray', to: 'cyan', deg: 62 }}
                >
                    Shorten Your URL Here
                </Text>

            </Center>
            <Stack
                mt={20}
                bg="var(--mantine-color-body)"
                align="center"
                justify="flex-start"
                gap="md"
            >
                <TextInput
                    required
                    w={400}
                    label="Title"
                    placeholder="Title of URL"
                    styles={{
                        label: { fontWeight: 7900 }
                    }}
                    onChange={(e) => {
                        setInput({ ...input, title: e.target.value });
                        console.log(input)
                    }}
                />
                <TextInput
                    required
                    w={400}
                    label="Original URL"
                    placeholder="Paste the original URL"
                    styles={{
                        label: { fontWeight: 700 }
                    }}
                    onChange={(e) => {
                        setInput({ ...input, originalUrl: e.target.value });
                        console.log(input);
                    }}
                />
                <DateInput
                    clearable
                    styles={{
                        label: { fontWeight: 700 }
                    }}
                    w={400}
                    defaultValue={dayjs().toString()}
                    rightSection={<IconCalendar size={16} />}
                    label="Expiry Date"
                    placeholder="Date input"
                    onChange={(date) => {
                        setInput({ ...input, expiresAt: date });
                    }}
                />
                <Button disabled={input?.title && input?.originalUrl ? false : true}
                    variant="outline"
                    onClick={() => {
                        getShortenedURL();
                    }}
                >
                    Generate and Shorten URL
                </Button>
            </Stack>
        </div>
    )
}

export default UrlInput;