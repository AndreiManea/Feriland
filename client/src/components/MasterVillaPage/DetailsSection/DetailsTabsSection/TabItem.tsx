import { Tab, Text } from '@chakra-ui/react';

interface TabItemProps {
  label: string;
  isSelected: boolean;
}

const TabItem = ({ label, isSelected }: TabItemProps) => {
  return (
    <Tab
      flex="1"
      textAlign="center"
      justifyContent="center"
      borderRadius="full"
      padding="0.3rem 1.1rem"
      transition="all 0.3s"
      _selected={{
        backgroundColor: '#fff',
        fontWeight: '500',
        boxShadow: '0rem 0.7rem 0.5rem rgba(0, 0, 0, 0.15)',
      }}
    >
      <Text fontSize="1rem" mb="0px" fontWeight={isSelected ? 'bold' : 'normal'}>
        {label}
      </Text>
    </Tab>
  );
};

export default TabItem;
