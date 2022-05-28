import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PeopleList from '../../components/PeopleList'
import Comments from '../../components/Comments'
import { dataCardsVerific } from '../../core/utils'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ labels, comments, critics,setComment }) {
  
    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {labels && labels.map((data, key) => {
            return  <Tab label={data} {...a11yProps(key)} />
          })}
        </Tabs>
          </Box>
            <TabPanel value={value} index={0} >
                <Box style={{overflow: 'auto', height: 400}}>
                  {!dataCardsVerific(comments) ? <> Sin comentarios </> : comments.map((comment) => <PeopleList name={comment.usuario} description={comment.mensaje} id={comment.id} loading={loading}/>)}
                </Box>
              <Comments  setLoading={setLoading} />
        </TabPanel>
        <TabPanel value={value} index={1} style={{overflow: 'auto', height: 400}}>
                {!dataCardsVerific(critics) ? <> Sin Criticas </> : critics.map((critic) => <PeopleList name={critic.usuario} description={critic.mensaje} />) }
      </TabPanel>
    </Box>
  );
}