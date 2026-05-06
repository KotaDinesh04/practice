import { Center, Text, Textarea } from '@mantine/core';
import React from 'react'

export const UrlOutput = (props) => {
    return (
        <>
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
                <Text>
                </Text>

            </Center>
            <Center>
                <h3>Generated short URL</h3>
            </Center>
            <Center>
                <Textarea
                    placeholder=""
                    label=""
                    minRows={1}
                    maxRows={1}
                    w={350}
                    value={`http://localhost:3000/api/s/${props?.response?.shortCode}`}
                    readOnly
                    style={{ whiteSpace: 'nowrap', overflow: 'auto' }}
                />
            </Center>
            {console.log(props.response)}
        </>
    )
}

export default UrlOutput;