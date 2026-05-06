import React from 'react'
import Service from '../../utils/http.js'
import { useState } from 'react';
import { useEffect } from 'react';
import { Center, Table } from '@mantine/core';
export const MyURLS = () => {
    const service = new Service();
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const arr = await service.get("s/fetchAllURLS")
        console.log(arr);
        setData(arr);
    }
    useEffect(() => {
        fetchData();
    }, []);
    const rows = data.map((element) => (
        <Table.Tr key={element?.originalUrl}>
            <Table.Td><a href={element?.originalUrl} target="_blank" rel="noreferrer">{element?.originalUrl}</a></Table.Td>
            <Table.Td><a href={`http://localhost:3000/api/s/${element?.shortCode}`} target="_blank" rel="noreferrer">{element?.shortCode}</a></Table.Td>
            <Table.Td>{new Date(element?.createdAt).toLocaleDateString()}</Table.Td>
            <Table.Td>{element?.expiresAt ? new Date(element?.expiresAt).toLocaleDateString() : 'Never'}</Table.Td>
        </Table.Tr>
    ));
    return (
        <div>
            <h2 style={{ marginLeft: "4rem", marginTop: "2rem" }}>Link Management</h2>
            <Center ml={200} mr={200} mt={50}>
                <Table striped highlightOnHover withTableBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Original URL</Table.Th>
                            <Table.Th>Short Link</Table.Th>
                            <Table.Th>Created At</Table.Th>
                            <Table.Th>Expires At</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Center>
        </div>
    )
}
