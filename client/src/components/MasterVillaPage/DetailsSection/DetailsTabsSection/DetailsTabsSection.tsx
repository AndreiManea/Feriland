import { useState } from 'react';
import {
  Box,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import TabItem from './TabItem';
import DescriptionContent from './DescriptionContent';
import RulesContent from './RulesContent';

const DetailsTabsSection = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Box width="100%" maxWidth="none" mx="auto" mt="0" pt="0">
      <Tabs
        index={currentTab}
        onChange={index => setCurrentTab(index)}
        variant="unstyled"
        mt={4}
        position="relative"
      >
        <TabList
          role="tablist"
          backgroundColor="#eae5df"
          borderRadius="full"
          display="flex"
          alignItems="center"
          p="1rem 2rem"
        >
          <TabItem label="Description" isSelected={currentTab === 0} />
          <TabItem label="Rules" isSelected={currentTab === 1} />
        </TabList>
        <TabPanels mt="1rem" px="1rem">
          <TabPanel p={0}>
            <DescriptionContent />
          </TabPanel>
          <TabPanel>
            <RulesContent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DetailsTabsSection;
