import React, { useState } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addItem } from '../store/slices/itemSlice';
import { Button, Input, Box, Text, Image, HStack, VStack } from '@chakra-ui/react';

const ItemList: React.FC = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const items = useAppSelector(state => state.item.items);
  const dispatch = useAppDispatch();

  const handleAddItem = () => {
    if (image.trim() !== '' && title.trim() !== '' && description.trim() !== '') {
      const newItem = {
        id: new Date().getTime(),
        image,
        title,
        description,
      };
      dispatch(addItem(newItem));
      setImage('');
      setTitle('');
      setDescription('');
    }
  };
  console.log("items",items)

  return (
    <Box p={4} maxWidth="600px" borderWidth="1px" borderRadius="lg">
      <VStack spacing={4} mb={4}>
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter image base64 URL"
        />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <Button colorScheme="teal" onClick={handleAddItem}>Add Item</Button>
      </VStack>
      <VStack spacing={4}>
        {items.map((item) => (
          <Box key={item.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Image src={item.image} alt={item.title} boxSize="150px" objectFit="cover" />
            <Text fontSize="lg" fontWeight="bold">{item.title}</Text>
            <Text>{item.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ItemList;
