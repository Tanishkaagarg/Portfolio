import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import Chip from '@material-ui/core/Chip';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
   
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#e91e63">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          textColor="secondary"
          
        >
          <LinkTab label="About Me" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Qualifications" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Internships" href="/spam" {...a11yProps(2)} />
          <LinkTab label="Projects" href="/trash" {...a11yProps(3)} />
          <LinkTab label="Certifications" href="/spam" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Box component="span" m={1} className="content">
        
      <b>BONJOUR ..</b><br/> I am doing my Masters in Computer Applications from JIMS, I have done my graduation in Computer Application from JIMS itself.
      I have recently participated in Smart India Hackathon 2020, and got my hands on Mean Stack technology. Me and my team worked on the problem statement provided my the government only.
      <br/><br/>
      I was also interning in a company for a month as there Web developer, I worked in two of their projects in Django framework.
      And right now, I am interning with a company called 'JAMSFY', as their Software Engineer. I have got my hands in JavaScript and React over here.
      <br/> <br/>
      I have also developed some of my personal projects for my academics in Python, Java, Mean Stack, React, PHP .

      </Box>
      <br/>
      <br/>
      <br/>
      
        <Typography className="name"> <b>skills set</b></Typography>
      
      <div className="chip">
      <Chip label="JAVA" color="secondary"/> {"  "}
      <Chip label="Python" color="secondary"/> {"  "}
      <Chip label="C" color="secondary"/>{"  "}
      <Chip label="C++" color="secondary"/>{"  "}
      <Chip label="Data Structure" color="secondary"/>{"  "}
      <Chip label="React" color="secondary"/>{"  "}
      <Chip label="JavaScript" color="secondary"/>{"  "}
      <Chip label="HTML" color="secondary"/>{"  "}
      <Chip label="CSS" color="secondary"/>{"  "}
      <br/>
      <br/>
      <Chip label="Bootstrap" color="secondary"/>{"  "}
      <Chip label="DBMS" color="secondary"/>{"  "}
      <Chip label="R" color="secondary"/>{"  "}
      <Chip label="Git" color="secondary"/>{"  "}
      <Chip label="PostgreSQL" color="secondary"/>{"  "}
      <Chip label=".NET" color="secondary"/>{"  "}
      </div>
      <br/>
      <br/>


      </TabPanel>

      <TabPanel value={value} index={1}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="X" secondary="Tyagi Public School (77.9%)" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="XII" secondary="Tyagi Public School (77%)" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bachelors in Computer Applications" secondary="JIMS (80%)" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Masters in Computer Applications" secondary="JIMS (82%)" />
      </ListItem>
    </List>

    
      </TabPanel>
      <TabPanel value={value} index={2}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Jamsfy ( 15 September 2020 - Present )" secondary="Software Engineer - Working on JavaScript, React and one of their company's software modules." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="DigiFluent ( 1 August 2020 - 1 September 2020 )" secondary="Web Developer - Worked on their two projects in the guidance of one of their developer in Python(django) and even did some designing in Bootstrap,HTML5,CSS." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ArtOfTesting ( 3 August 2019 - 2 September 2019 )" secondary=" SEO & SEM Intern - Worked on their official website in making on-page and off-page seo links." />
      </ListItem>
     
    </List>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Chatting Application( SWING, SOCKETS )" secondary="It is bascialy a two person chatting app i.e Client and the Server. " />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Catering Management System ( Mean Stack )" secondary="Web portal to book catering service and even they can customize their own menu from our portal." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="IT Quiz Portal ( Python - Django )" secondary="Website for students to prepare themselves for interviews by giving our quizes and checking their report card." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="MentorUp ( Mean Stack )" secondary="Portal for mentorship of startups, where mentors can guide startups with markets trends and help startups to reach to mentors in required domain.." />
      </ListItem>
     
    </List>
    <Typography className="name"> <b>Publications</b></Typography>

<List className={classes.root}>
<ListItem>
  <ListItemAvatar>
    <Avatar>
      <SchoolIcon />
    </Avatar>
  </ListItemAvatar>
  <ListItemText primary="Big Data (27/05/2020)" secondary="International Journal of Advance Research and Innovative Ideas in Education" />
</ListItem>
<Divider variant="inset" component="li" />
<ListItem>
  <ListItemAvatar>
    <Avatar>
    <SchoolIcon />
    </Avatar>
  </ListItemAvatar>
  <ListItemText primary="How Cognitive Technology is better than AI (02/12/2019)" secondary="International Journal of Advanced Trends in Computer Applications" />
</ListItem>
</List>

      </TabPanel>
      <TabPanel value={value} index={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="C and C++ Programming" secondary="TATA ( 27/01/2017 - 28/03/2017 )" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Python Programming" secondary="DUCAT ( 02/06/2017 - 15/07/2017 )" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="MEANSTACK" secondary="ISSAC IT LAB SOLUTIONS LLP ( 01/07/2019 - 20/08/2109 )" />
      </ListItem>
    </List>
      </TabPanel>
    </div>
  );
}
